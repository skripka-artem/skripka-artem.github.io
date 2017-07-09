/**
 * Created by Shishkov on 01.07.2017.
 */
'use strict';
function Model(data) {
	var self = this;
	self.data = data;
	self.addItem = function (item) {
		if (item.length === 0){
			return;
		}
		self.data.push(item);
		return self.data;
	};
	self.removeItem= function (item) {
		var index = self.data.indexOf(item);
		if (index === -1) {
			return;
		}
		self.data.splice(index,1);
		return self.data;
	};
}

function View(model) {
	var self = this;
	function init() {
		var wrapper = _.template($('#wrapper-template').html());
		$('body').append(wrapper);
		self.renderList(model.data);
	}

	self.renderList = function (data) {
		var List = _.template($('#list-template').html());
		var content = List({'data':data});
		$('.item-list').html(content);
	};
	init();
}

function Controller(model,view) {
	$('.item-add').on('click',addItem);
	$('.item-list').on('click','.item-delete',removeItem);
	function addItem() {
		var newItem = $('.item-value').val();
		model.addItem(newItem);
		view.renderList(model.data);
		$('.item-value').val('');
	}
	function removeItem() {
		var item = $(this).attr('data-value');
		model.removeItem(item);
		view.renderList(model.data);
	}
}

$(function () {
	var firstToDoList = ['First'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model,view);


	
});