window.addEventListener("load",function(){
    let form = document.querySelector(".form");
    //form.name.focus();
    form.addEventListener("submit",function(e){
        let errors = [];
        let name = document.querySelector('#name');
        let last_name = document.querySelector('#country');
        let password = document.querySelector('#password');
        let email = document.querySelector('#email');

        //VALIDATION NAME
        if (name.value.length < 2){
            errors.push('No puede contener menos de 2 caracteres');
            name.classList.add('is-valid');
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-valid');
        }
        //VALIDATION SURNAME
        if(country.value.length < 2){
            errors.push('El campo debe contener mas de 2 caracteres');
            country.classList.add('is-valid');
        }
        else{
            name.classList.add('is-valid');
            name.classList.remove('is-valid');
        }
        //VALIDATION EMAIL
        if(!regexEmail.test(email.value)){
            errors.push('El mail no se ha podido registrar por su dominio');
            email.classList.add('is-valid');
        }else{
            email.classList.add('is-valid');
            email.classList.remove('is-valid');
        }
        //VALIDATION PASSWORD
    })
})