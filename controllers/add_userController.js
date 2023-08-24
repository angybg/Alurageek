import {userServicios} from "../servicios/user-service.js";

function delayer()
{
    window.location.href = '../screens/usuarios.html';
}

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;
    let done = false;
    userServicios.crearUsuario(name, email, password).then(respuesta => {
        console.log(respuesta)
        done = true;

        if (done = true)
        {
            Swal.fire({
                position: 'center',
                icon:'success', 
                title:'El usuario fue creado con exito', 
                showConfirmButton: false,
                timer: 2000
            })
        }
        setTimeout(delayer(), 2500);
        // alert("el usuario fue creado con exito")   
    })
         .catch((err) => {
             console.log(err)
        })
})
