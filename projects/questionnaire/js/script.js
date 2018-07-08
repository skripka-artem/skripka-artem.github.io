let form = document.getElementById('form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let pass = document.getElementById('pass')
let submit = document.getElementById('submit')


 function validateEmail(em) {
    let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(em);
};
function validateName(n) {
    let nr = /.[A-zА-яЁё]+$/;
    return nr.test(n);
};

function validatePass(pass) {
  let nr = /.[0-9]+$/;
  return nr.test(pass);
};


  name.onblur = function () {
    if( !validateName(name.value) || name.value.length==0 ) {
      name.style.border = '1px solid red'
      name.placeholder = "Введите свое имя"
      name.value = ""
     
    }
    else {
      name.style.border = '1px solid transparent'
      submit.style.background = '#1da7c0'
      submit.style.color = '#fff'
      
    }
  }
  
  email.onblur = function () {
    if( !validateEmail(email.value) || email.value.length==0 ) {
      email.style.border = '1px solid red'
      email.placeholder = "Неверный формат email"
      email.value = ""
    }
    else {
      email.style.border = '1px solid transparent'
    }
  }
  
  pass.onblur = function  () {
    if( !validatePass(pass.value) || pass.value.length>=12 ) {
     pass.style.border = '1px solid red'
     pass.placeholder = "Придумайте новый пароль"
     pass.value = ""
    }
    else {
     pass.style.border = '1px solid transparent'
    }
   }










