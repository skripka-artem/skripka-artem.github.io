"use strict";
// document.addEventListener("DOMContentLoaded", function () {
(function () {

	let	myDataL =[
		{
			id:1,
			src:"img/1.png",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:"img/forSlider_2.png",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:"img/forSlider_3.png",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		},
		{
			id:4,
			src:"img/2.jpg",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:5,
			src:"img/3.jpg",
			title:"Morbi velit risus",
			text:"The latest news, business, sport, comment, lifestyle and culture. Content from the Daily Telegraph and Sunday Telegraph newspapers "
		},
		{
			id:6,
			src:"img/4.jpg",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		}
];
	let	myDataM =[
		{
			id:1,
			src:"img/forSlider_1.png",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:"img/5.jpg",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:"img/forSlider_3.png",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		},
		{
			id:4,
			src:"img/6.jpg",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:5,
			src:"img/7.jpg",
			title:"Morbi velit risus",
			text:"The latest news, business, sport, comment, lifestyle and culture. Content from the Daily Telegraph and Sunday Telegraph newspapers "
		},
		{
			id:6,
			src:"img/8.jpg",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		}
	];
	let	myDataR =[
		{
			id:1,
			src:"img/forSlider_1.png",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:"img/forSlider_2.png",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:"img/9.jpg",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		},
		{
			id:4,
			src:"img/10.jpg",
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:5,
			src:"img/11.jpg",
			title:"Morbi velit risus",
			text:"The latest news, business, sport, comment, lifestyle and culture. Content from the Daily Telegraph and Sunday Telegraph newspapers "
		},
		{
			id:6,
			src:"img/12.jpg",
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		},

	];

	let htmlTableTemplateL = document.getElementById('slide-template-LL').innerHTML;
	let listLL = document.getElementById('listLL');
	let listL = _.template(htmlTableTemplateL);
	let listContentL = listL({'data':myDataL});
	listLL.innerHTML = listContentL;

	let htmlTableTemplateM = document.getElementById('slide-template-MM').innerHTML;
	let listMM = document.getElementById('listMM');
	let listM = _.template(htmlTableTemplateM);
	let listContentM = listM({'data':myDataM});
	listMM.innerHTML = listContentM;

	let htmlTableTemplateR = document.getElementById('slide-template-RR').innerHTML;
	let listRR = document.getElementById('listRR');
	let listR = _.template(htmlTableTemplateR);
	let listContentR = listR({'data':myDataR});
	listRR.innerHTML = listContentR;


	function SlidersGo(controlsd,slidesd,nextd,previousd) {
	let next = nextd;
	let previous = previousd;
	let controls = controlsd;
	let slides = slidesd;
	let currentSlide = 0;
	for(let i= 0; i<controls.length; i++){
		controls[i].style.display = 'inline-block';
	}
	function nextSlide(){
		goToSlide(currentSlide+1);
	}
	function previousSlide(){
		goToSlide(currentSlide-1);
	}
	function goToSlide(n){
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = 'slide showing';
	}
	next.onclick = ()=>{
		nextSlide();
	};
	previous.onclick = ()=>{
		previousSlide();
	};
}
	let controlsL = document.querySelectorAll('.controlsLL');
	let slidesL = document.querySelectorAll('.slideLL');
	let nextL = document.getElementById('nextLL');
	let previousL = document.getElementById('previousLL');

	let controlsM = document.querySelectorAll('.controlsMM');
	let slidesM = document.querySelectorAll('.slideMM');
	let nextM = document.getElementById('nextMM');
	let previousM = document.getElementById('previousMM');

	let controlsR = document.querySelectorAll('.controlsRR');
	let slidesR = document.querySelectorAll('.slideRR');
	let nextR = document.getElementById('nextRR');
	let previousR = document.getElementById('previousRR');

	SlidersGo(controlsL,slidesL,nextL,previousL);
	SlidersGo(controlsM,slidesM,nextM,previousM);
	SlidersGo(controlsR,slidesR,nextR,previousR);




})();

