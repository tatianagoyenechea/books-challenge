const { SHOWTABLES } = require("sequelize/types/query-types");

window.addEventListener("load",function(){
    let form = document.querySelector(".form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        let errors = [];
        let password = document.querySelector('#password');
        let email = document.querySelector('#email');

       

        //VALIDATION EMAIL 
        if(!regexEmail.test(email.value)){
            errors.push('El mail no se ha podido registrar por su dominio');
            email.classList.add('is-valid');
        }
        else{
            email.classList.add('is-valid');
            email.classList.remove('is-valid');
        }


        //VALIDATION PASSWORD
        if (password.value.length > 10){
        errors.push('El password debe contener al menos 10 caracteres!');
        password.classList.add('is-invalid');
        }
        else{
            password.classList('is-valid');
            password.classList.remove('is-valid');
        }
        if(errors.length > 0){
            e.preventDefault();
            Swal.fire({
                icon: 'ERROR',
                text: 'REVISA LA PASSWORD REY',
            })
            let ulErrors =  document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML= ''
            
            for(let i=0; i< errors.length; i++){
                ulErrors.innerHTML+= `<li> ${errors[i]}</li>`;
            
            }
            
        }else{
            form.submit()
        }
    })
})