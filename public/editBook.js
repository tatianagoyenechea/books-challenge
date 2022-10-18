const { SHOWTABLES } = require("sequelize/types/query-types");

let form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let errors = [];
    let name = document.querySelector('#title');
    let description = document.querySelector('#description');
   

    //validation name 
    if (title.value.length < 2 ) {
        errors.push('No puede contener menos de dos caracteres!');
        name.classList.add('is-invalid');
    }
    else{
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
    }

    //validation description
    if (description.value.length < 20) {
        errors.push('No puede contener menos de dos caracteres!')
        description.classList.add('is-invalid');
    }else{
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
    }
    if (errors.length > 0) {
        Swal.fire({
            icon: 'ERROR',
            text: 'Revisar el/los errores!'
        })
        let ulErrors = document.querySelector('.errores');
        ulErrors.classList.add('alert-warning')
        ulErrors.innerHTML= ''

        for(let i=0; i< errors.length; i++){
            ulErrors.innerHTML+= `<li> ${errors[i]}</li>`
        }
    }   
    else{
        Swal.fire({
            icon: 'sucess',
            text: 'Se realizaron cambios'
        })
        .then( ()=>{
            form.submit()
        })
    }


})
