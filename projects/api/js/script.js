$(document).ready(function() {
'use strict';

var parent = document.getElementById('container');
var sourse = document.getElementById('template').textContent;
var API_KEY = '5723966-7e68f329c0132750f857a39d3';

function getPictures() {

var searchValue = document.getElementsByClassName('input')[0].value;
console.log('searchValue = ', searchValue);
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchValue)+"&per_page=40";

fetch(URL)
  .then(function(response){
    if (response.ok){
      return response.json();
    }
    throw new Error('ERROR fetching data!');
  })
  .then(function(data){
    console.log(data);
    var templateAPI = _.template(sourse);
    parent.innerHTML = templateAPI(data);
  })
  .catch(function(error){
    console.log('Error --- ', error);
  });

}

document.getElementsByClassName('button')[0].addEventListener("click", getPictures);
document.getElementsByClassName('input')[0].addEventListener("keypress", function(e){
  if(e.keyCode === 13){getPictures();}
  }
    );
});
