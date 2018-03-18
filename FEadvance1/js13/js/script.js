
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");


    let result = {
        firstname: '',
        lastname: '',
        tel : ''

    };


submitBtn.addEventListener("click", showResults);
function showResults(results) {
    if(firstname.checkValidity()){
        result.firstname = firstname.value;
    }
    if(lastname.checkValidity()){
        result.lastname = lastname.value;
    }
    if(tel.checkValidity()){
        result.tel = tel.value;
    }

    resultsList.innerHTML = "";
    let lisFirst = document.createElement("li");
    if(firstname.checkValidity()){
        lisFirst.textContent = result.firstname;
        lisFirst.classList.add("success")
    } else {
        lisFirst.textContent = "Error";
        lisFirst.classList.add("error")
    }
    resultsList.appendChild(lisFirst);

    let lisLast = document.createElement("li");
    if(lastname.checkValidity()){
        lisLast.textContent = result.lastname;
        lisLast.classList.add("success")
    } else {
        lisLast.textContent = "Error";
        lisLast.classList.add("error")
    }
    resultsList.appendChild(lisLast);

    let lisTel = document.createElement("li");
    if(tel.checkValidity()){
        lisTel.textContent = result.tel;
        lisTel.classList.add("success")
    } else {
        lisTel.textContent = "Error";
        lisTel.classList.add("error")
    }
    resultsList.appendChild(lisTel);
}