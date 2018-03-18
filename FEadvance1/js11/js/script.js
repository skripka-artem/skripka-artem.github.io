
let root  = document.querySelector("#root");
let name = document.querySelector(".name");
let push = document.querySelector(".push");
let results = document.querySelector(".results");
let deleteID = document.querySelector(".delete");
let buttonDell = document.querySelector(".buttonDell");

push.addEventListener("click", function(e){
    fetch(`http://fecore.net.ua/rest/?action=1&name=${name.value}`)
        .then(res => res.json())
        .then(res => {
            console.log();
        });
    location.reload();

});


buttonDell.addEventListener("click", function(e){
    fetch(`http://fecore.net.ua/rest/?action=3&id=${deleteID.value}`)
        .then(res => res.json())
        .then(res => {
            console.log();
        });
    location.reload();

});

results.addEventListener("click", function(e){
    fetch(`http://fecore.net.ua/rest/`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            for(let i = 0; i < res.length; i++){
                root.innerHTML += `<p>ID: ${res[i].id}</p>`;
                root.innerHTML += `<p>Name: ${res[i].name}<p>`;
            }
        });
});