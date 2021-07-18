// Exercise 9
const form = document.getElementById('formulari');
const submitButton = document.getElementById('btn');

let timeout = null
let errorsFormulari = {
    nom: true,
    email: true,
    direccio: true,
    cognom: true,
    password: true,
    telefon: true,
}

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;


const nomformatRegex = /^[a-zA-Z\s]+$/;

const passwordformatRegex = /^(?=.*\d)(?=.*[a-záéíóúüñA-ZÁÉÍÓÚÜÑ])/


document.querySelectorAll('.form-box').forEach((box) => {
    const boxInput = box.querySelector('input');

    boxInput.addEventListener('click', (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`Input ${boxInput.name} value: `, boxInput.value);

            validate(box, boxInput)

        }, 300);
    });
});

function validate(box, boxInput) {
    
    if(boxInput.value == '') {
        mostraError(true, box, boxInput);
    }else{
        mostraError(false, box, boxInput);
    } 

    if(boxInput.value.length < 3) {
        mostraError(true, box, boxInput);
    }else{
        mostraError(false, box, boxInput);
    } 

    if(boxInput.name == 'nom') {
        if(!boxInput.value.match(nomformatRegex)) {
            mostraError(true, box, boxInput);
        }else{
            mostraError(false, box, boxInput);
        }
    }

    if(boxInput.name == 'cognom') {
        if(!boxInput.value.match(nomformatRegex)) {
            mostraError(true, box, boxInput);
        }else{
            mostraError(false, box, boxInput);
        }
    }

    if(boxInput.name == 'telefon') {
        if(isNaN(boxInput.value)) {
            mostraError(true, box, boxInput);
        }else{
            mostraError(false, box, boxInput);
        }
    }

    if(boxInput.name == 'email') {

        if(!boxInput.value.match(mailformatRegex)) {
            mostraError(true, box, boxInput);
        }else{
            mostraError(false, box, boxInput);
        }

    }

    if(boxInput.name == 'password') {
        if(!boxInput.value.match(passwordformatRegex)) {
            mostraError(true, box, boxInput);
        }else{
            mostraError(false, box, boxInput);
        }
    }

    submitControlador();
}

function mostraError(check, box, boxInput) {
    if(check) {
        box.classList.remove('form-success');
        box.classList.add('form-error');
        errorsFormulari[boxInput.name] = true;
    }else{
        box.classList.remove('form-error');
        box.classList.add('form-success')
        errorsFormulari[boxInput.name] = false;
    }
}

function submitControlador() {
    console.log(errorsFormulari);
    if(errorsFormulari.nom || errorsFormulari.email || errorsFormulari.cognom || errorsFormulari.password || errorsFormulari.direccio || errorsFormulari.telefon    ) {
        submitButton.toggleAttribute('disabled',true);
    }else{
        submitButton.toggleAttribute('disabled',false);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataFormulari = new FormData(event.target);
    console.log([...dataFormulari])
    for(let [key,value] of dataFormulari.entries()){
        console.log(`${key}: ${value}`);
    }
})

