"use strict";
document.addEventListener("DOMContentLoaded", function () {
	(function () {
		let grid = document.getElementById('grid');

		imagesLoaded(grid, function () {
			let msnry = new Masonry(grid, {
				// options
				itemSelector: '.grid-item',
				columnWidth: 200,
				gutter: 2,
				isFitWidth: true,
				// singleMode: false, // true - если у вас все блоки одинаковой ширины
				// resizeable: true, // перестраивает блоки при изменении размеров окна
				// isAnimated: !Modernizr.csstransitions // анимируем перестроение блоков при помощи css transitions и Modernizr
			});
		});


	})();

});
