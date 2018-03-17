"use strict";

(function () {
	let grid = document.getElementById('grid');
		function SendGet(str) {
			let strThis=str;
			let API_KEY = '5574618-9f2251e0f5fdbede0f9cb5e69';
			let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q="+encodeURIComponent(strThis);

			let myData = fetch(URL)
						.then(function(response) {
							if (response.ok) {
								return response.json();
							}
							throw new Error('ERROR fetching data!');
						})
						.then(function(data) {
							if(data.hits.length > 0){
								console.log(data.hits);
								for (let key in data.hits){
									let pShow = document.createElement('p');
									let img = document.createElement('img');
									let divWrapP = document.createElement('div');
									let divShow = document.createElement('div');
									let gridItem = document.createElement('a');

									pShow.setAttribute('class','pShow ');
									divWrapP.setAttribute('class','divWrapP ');
									divShow.setAttribute('class','divShow ');
									img.setAttribute('src',data.hits[key].previewURL);
									gridItem.setAttribute('class','grid-item ');
									gridItem.setAttribute('href',data.hits[key].webformatURL);
									pShow.innerHTML =data.hits[key].user;
									divWrapP.appendChild(pShow);
									divShow.appendChild(divWrapP);
									divShow.appendChild(img);
									gridItem.appendChild(divShow);
									grid.appendChild(gridItem);
								}
								return grid;
							}else{
								alert('объект не пришел');
							}
						})
						.catch(function (error) {

						});
}
	SendGet ('n');


let myInput = document.getElementById('textApi');
let butSearch = document.getElementById('butSearch');
butSearch.addEventListener('click',function () {
	//alert('Что то ...');
	let myStr = myInput.value;
	// alert(myStr);
	grid.innerHTML= '';
	SendGet(myStr);
	myInput.value=" ";

});

myInput.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode == 13) {
		butSearch.click();
	}
});
})();