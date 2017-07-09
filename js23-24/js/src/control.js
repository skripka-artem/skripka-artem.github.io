'use strict';

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
