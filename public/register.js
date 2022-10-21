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
        if (password.value.length < 8 ) {
            errors.push('El campo pasword debe tener al menos 8 caracteres!');
            password.classList.add('is-invalid');
        }
        else{
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        if (errors.length > 0) {
            
           Swal.fire({
               icon: 'error',  
               text: 'Revise los errores!',
           })
                       let ulErrors = document.querySelector('.errores');
             ulErrors.classList.add('alert-warning')
             ulErrors.innerHTML = ''
            
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        }
        else{
            Swal.fire({
                icon: 'success',
                text: 'Cambios realizados!',
            })
            .then( ()=> {
                form.submit()
            })
        }
        
    }
)})


