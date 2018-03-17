'use strict';

requirejs.config({
	baseUrl: 'js/src',
	paths:{
		'jquery': 'jquery-3.2.1.min',
		'lodash': 'lodash',
		'data': 'data',
		'view': 'view',
		'control': 'control'
	},
	shim: {
		'jquery': {
			exports: 'jquery',
		},
		'lodash': {
			exports: 'lodash',
		}
	}
});
requirejs([
		"jquery",
		"lodash",
		'data',
		'view',
		'control'
	],
	function(){
		let firstToDoList = ['First'];
		let model = new Model(firstToDoList);
		let view = new View(model);
		let controller = new Controller(model,view);
	});

