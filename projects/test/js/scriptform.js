(function ($) {
	/*
	 * returns the value of the CActiveForm input field
	 * performs additional checks to get proper values for checkbox / radiobutton / checkBoxList / radioButtonList
	 * @param o object the jQuery object of the input element
	 */
	var getAFValue = function (o) {
		var type,
			c = [];
		if (!o.length) {
			return undefined;
		}
		if (o[0].tagName.toLowerCase() === 'span') {
			o.find(':checked').each(function () {
				c.push(this.value);
			});
			return c.join(',');
		}
		type = o.attr('type');
		if (type === 'checkbox' || type === 'radio') {
			return o.filter(':checked').val();
		} else {
			return o.val();
		}
	};

	/**
	 * yiiactiveform set function.
	 * @param options map settings for the active form plugin. Please see {@link CActiveForm::options} for availablel options.
	 */
	$.fn.yiiactiveform = function (options) {
		return this.each(function () {
			var settings = $.extend({}, $.fn.yiiactiveform.defaults, options || {}),
				$form = $(this);

			if (settings.validationUrl === undefined) {
				settings.validationUrl = $form.attr('action');
			}
			$.each(settings.attributes, function (i) {
				this.value = getAFValue($form.find('#' + this.inputID));
				settings.attributes[i] = $.extend({}, {
					validationDelay: settings.validationDelay,
					validateOnChange: settings.validateOnChange,
					validateOnType: settings.validateOnType,
					hideErrorMessage: settings.hideErrorMessage,
					inputContainer: settings.inputContainer,
					errorCssClass: settings.errorCssClass,
					successCssClass: settings.successCssClass,
					beforeValidateAttribute: settings.beforeValidateAttribute,
					afterValidateAttribute: settings.afterValidateAttribute,
					validatingCssClass: settings.validatingCssClass
				}, this);
			});
			$form.data('settings', settings);

			settings.submitting = false;  // whether it is waiting for ajax submission result
			var validate = function (attribute, forceValidate) {
				if (forceValidate) {
					attribute.status = 2;
				}
				$.each(settings.attributes, function () {
					if (this.value !== getAFValue($form.find('#' + this.inputID))) {
						this.status = 2;
						forceValidate = true;
					}
				});
				if (!forceValidate) {
					return;
				}

				if (settings.timer !== undefined) {
					clearTimeout(settings.timer);
				}
				settings.timer = setTimeout(function () {
					if (settings.submitting || $form.is(':hidden')) {
						return;
					}
					if (attribute.beforeValidateAttribute === undefined || attribute.beforeValidateAttribute($form, attribute)) {
						$.each(settings.attributes, function () {
							if (this.status === 2) {
								this.status = 3;
								$.fn.yiiactiveform.getInputContainer(this, $form).addClass(this.validatingCssClass);
							}
						});
						$.fn.yiiactiveform.validate($form, function (data) {
							var hasError = false;
							$.each(settings.attributes, function () {
								if (this.status === 2 || this.status === 3) {
									hasError = $.fn.yiiactiveform.updateInput(this, data, $form) || hasError;
								}
							});
							if (attribute.afterValidateAttribute !== undefined) {
								attribute.afterValidateAttribute($form, attribute, data, hasError);
							}
						});
					}
				}, attribute.validationDelay);
			};

			$.each(settings.attributes, function (i, attribute) {
				if (this.validateOnChange) {
					$form.find('#' + this.inputID).change(function () {
						validate(attribute, false);
					}).blur(function () {
						if (attribute.status !== 2 && attribute.status !== 3) {
							validate(attribute, !attribute.status);
						}
					});
				}
				if (this.validateOnType) {
					$form.find('#' + this.inputID).keyup(function () {
						if (attribute.value !== getAFValue($(this))) {
							validate(attribute, false);
						}
					});
				}
			});

			if (settings.validateOnSubmit) {
				$form.on('mouseup keyup', ':submit', function () {
					$form.data('submitObject', $(this));
				});
				var validated = false;
				$form.submit(function () {
					if (validated) {
						validated = false;
						return true;
					}
					if (settings.timer !== undefined) {
						clearTimeout(settings.timer);
					}
					settings.submitting = true;
					if (settings.beforeValidate === undefined || settings.beforeValidate($form)) {
						$.fn.yiiactiveform.validate($form, function (data) {
							var hasError = false;
							$.each(settings.attributes, function () {
								hasError = $.fn.yiiactiveform.updateInput(this, data, $form) || hasError;
							});
							$.fn.yiiactiveform.updateSummary($form, data);
							if (settings.afterValidate === undefined || settings.afterValidate($form, data, hasError)) {
								if (!hasError) {
									validated = true;
									var $button = $form.data('submitObject') || $form.find(':submit:first');
									// TODO: if the submission is caused by "change" event, it will not work
									if ($button.length) {
										$button.click();
									} else {  // no submit button in the form
										$form.submit();
									}
									return;
								}
							}
							settings.submitting = false;
						});
					} else {
						settings.submitting = false;
					}
					return false;
				});
			}

			/*
			 * In case of reseting the form we need to reset error messages
			 * NOTE1: $form.reset - does not exist
			 * NOTE2: $form.on('reset', ...) does not work
			 */
			$form.bind('reset', function () {
				/*
				 * because we bind directly to a form reset event, not to a reset button (that could or could not exist),
				 * when this function is executed form elements values have not been reset yet,
				 * because of that we use the setTimeout
				 */
				setTimeout(function () {
					$.each(settings.attributes, function () {
						this.status = 0;
						var $error = $form.find('#' + this.errorID),
							$container = $.fn.yiiactiveform.getInputContainer(this, $form);

						$container.removeClass(
							this.validatingCssClass + ' ' +
							this.errorCssClass + ' ' +
							this.successCssClass
						);

						$error.html('').hide();

						/*
						 * without the setTimeout() we would get here the current entered value before the reset instead of the reseted value
						 */
						this.value = getAFValue($form.find('#' + this.inputID));
					});
					/*
					 * If the form is submited (non ajax) with errors, labels and input gets the class 'error'
					 */
					$form.find('label, :input').each(function () {
						$(this).removeClass(settings.errorCss);
					});
					$('#' + settings.summaryID).hide().find('ul').html('');
					//.. set to initial focus on reset
					if (settings.focus !== undefined && !window.location.hash) {
						$form.find(settings.focus).focus();
					}
				}, 1);
			});

			/*
			 * set to initial focus
			 */
			if (settings.focus !== undefined && !window.location.hash) {
				$form.find(settings.focus).focus();
			}
		});
	};

	/**
	 * Returns the container element of the specified attribute.
	 * @param attribute object the configuration for a particular attribute.
	 * @param form the form jQuery object
	 * @return jQuery the jQuery representation of the container
	 */
	$.fn.yiiactiveform.getInputContainer = function (attribute, form) {
		if (attribute.inputContainer === undefined) {
			return form.find('#' + attribute.inputID).closest('div');
		} else {
			return form.find(attribute.inputContainer).filter(':has("#' + attribute.inputID + '")');
		}
	};

	/**
	 * updates the error message and the input container for a particular attribute.
	 * @param attribute object the configuration for a particular attribute.
	 * @param messages array the json data obtained from the ajax validation request
	 * @param form the form jQuery object
	 * @return boolean whether there is a validation error for the specified attribute
	 */
	$.fn.yiiactiveform.updateInput = function (attribute, messages, form) {
		attribute.status = 1;
		var $error, $container,
			hasError = false,
			$el = form.find('#' + attribute.inputID),
			errorCss = form.data('settings').errorCss;

		if ($el.length) {
			hasError = messages !== null && $.isArray(messages[attribute.id]) && messages[attribute.id].length > 0;
			$error = form.find('#' + attribute.errorID);
			$container = $.fn.yiiactiveform.getInputContainer(attribute, form);

			$container.removeClass(
				attribute.validatingCssClass + ' ' +
				attribute.errorCssClass + ' ' +
				attribute.successCssClass
			);
			$container.find('label, :input').each(function () {
				$(this).removeClass(errorCss);
			});

			if (hasError) {
				$error.html(messages[attribute.id][0]);
				$container.addClass(attribute.errorCssClass);
			} else if (attribute.enableAjaxValidation || attribute.clientValidation) {
				$container.addClass(attribute.successCssClass);
			}
			if (!attribute.hideErrorMessage) {
				$error.toggle(hasError);
			}

			attribute.value = getAFValue($el);
		}
		return hasError;
	};

	/**
	 * updates the error summary, if any.
	 * @param form jquery the jquery representation of the form
	 * @param messages array the json data obtained from the ajax validation request
	 */
	$.fn.yiiactiveform.updateSummary = function (form, messages) {
		var settings = $(form).data('settings'),
			content = '';
		if (settings.summaryID === undefined) {
			return;
		}
		if (messages) {
			var summaryAttributes = [];
			for (var i in settings.attributes) {
				if (settings.attributes[i].summary) {
					summaryAttributes.push(settings.attributes[i].id);
				}
			}
			$.each(settings.attributes, function () {
				if ($.inArray(this.id, summaryAttributes) !== -1 && $.isArray(messages[this.id])) {
					$.each(messages[this.id], function (j, message) {
						content = content + '<li>' + message + '</li>';
					});
				}
			});
		}
		$('#' + settings.summaryID).toggle(content !== '').find('ul').html(content);
	};

	/**
	 * Performs the ajax validation request.
	 * This method is invoked internally to trigger the ajax validation.
	 * @param form jquery the jquery representation of the form
	 * @param successCallback function the function to be invoked if the ajax request succeeds
	 * @param errorCallback function the function to be invoked if the ajax request fails
	 */
	$.fn.yiiactiveform.validate = function (form, successCallback, errorCallback) {
		var $form = $(form),
			settings = $form.data('settings'),
			needAjaxValidation = false,
			messages = {};
		$.each(settings.attributes, function () {
			var value,
				msg = [];
			if (this.clientValidation !== undefined && (settings.submitting || this.status === 2 || this.status === 3)) {
				value = getAFValue($form.find('#' + this.inputID));
				this.clientValidation(value, msg, this);
				if (msg.length) {
					messages[this.id] = msg;
				}
			}
			if (this.enableAjaxValidation && !msg.length && (settings.submitting || this.status === 2 || this.status === 3)) {
				needAjaxValidation = true;
			}
		});

		if (!needAjaxValidation || settings.submitting && !$.isEmptyObject(messages)) {
			if (settings.submitting) {
				// delay callback so that the form can be submitted without problem
				setTimeout(function () {
					successCallback(messages);
				}, 200);
			} else {
				successCallback(messages);
			}
			return;
		}

		var $button = $form.data('submitObject'),
			extData = '&' + settings.ajaxVar + '=' + $form.attr('id');
		if ($button && $button.length) {
			extData += '&' + $button.attr('name') + '=' + $button.attr('value');
		}

		$.ajax({
			url: settings.validationUrl,
			type: $form.attr('method'),
			data: $form.serialize() + extData,
			dataType: 'json',
			success: function (data) {
				if (data !== null && typeof data === 'object') {
					$.each(settings.attributes, function () {
						if (!this.enableAjaxValidation) {
							delete data[this.id];
						}
					});
					successCallback($.extend({}, messages, data));
				} else {
					successCallback(messages);
				}
			},
			error: function () {
				if (errorCallback !== undefined) {
					errorCallback();
				}
			}
		});
	};

	/**
	 * Returns the configuration for the specified form.
	 * The configuration contains all needed information to perform ajax-based validation.
	 * @param form jquery the jquery representation of the form
	 * @return object the configuration for the specified form.
	 */
	$.fn.yiiactiveform.getSettings = function (form) {
		return $(form).data('settings');
	};

	$.fn.yiiactiveform.defaults = {
		ajaxVar: 'ajax',
		validationUrl: undefined,
		validationDelay: 200,
		validateOnSubmit: false,
		validateOnChange: true,
		validateOnType: false,
		hideErrorMessage: false,
		inputContainer: undefined,
		errorCss: 'error',
		errorCssClass: 'error',
		successCssClass: 'success',
		validatingCssClass: 'validating',
		summaryID: undefined,
		timer: undefined,
		beforeValidateAttribute: undefined, // function (form, attribute) | boolean
		afterValidateAttribute: undefined,  // function (form, attribute, data, hasError)
		beforeValidate: undefined, // function (form) | boolean
		afterValidate: undefined,  // function (form, data, hasError) | boolean
		focus: undefined,  // jquery selector that indicates which element to receive input focus initially

		attributes: []
	};
})(lvjq1);
lvjq1(function($) {
lvjq1('#lv-formLanding1').yiiactiveform({'validateOnSubmit':true,'afterValidate':function(form, data, hasError){return window.leadvertex.form.validation(form, data, hasError);},'attributes':[{'id':'FormLanding_fio','inputID':'lv-formLanding1-fio','errorID':'lv-formLanding1-fio_em_','model':'FormLanding','name':'fio','enableAjaxValidation':false,'clientValidation':function(value, messages, attribute) {

if(lvjq1.trim(value)!='') {

if(value.length>255) {
	messages.push("Fio \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 (\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c: 255 \u0441\u0438\u043c\u0432.).");
}

}


if(lvjq1.trim(value)!='' && !value.match(/^.+$/)) {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0424.\u0418.\u041e\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}


if(lvjq1.trim(value)=='') {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0424.\u0418.\u041e\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}

}},{'id':'FormLanding_city','inputID':'lv-formLanding1-city','errorID':'lv-formLanding1-city_em_','model':'FormLanding','name':'city','enableAjaxValidation':false,'clientValidation':function(value, messages, attribute) {

if(lvjq1.trim(value)!='') {

if(value.length>255) {
	messages.push("City \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 (\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c: 255 \u0441\u0438\u043c\u0432.).");
}

}


if(lvjq1.trim(value)!='' && !value.match(/^.+$/)) {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0413\u043e\u0440\u043e\u0434\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}

}},{'id':'FormLanding_comment','inputID':'lv-formLanding1-comment','errorID':'lv-formLanding1-comment_em_','model':'FormLanding','name':'comment','enableAjaxValidation':false,'clientValidation':function(value, messages, attribute) {

if(lvjq1.trim(value)!='') {

if(value.length>5000) {
	messages.push("Comment \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 (\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c: 5000 \u0441\u0438\u043c\u0432.).");
}

}


if(lvjq1.trim(value)!='' && !value.match(/^.+$/)) {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}

}}],'errorCss':'error'});
});
