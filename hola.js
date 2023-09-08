
const boton = document.getElementById("boton");
const url =  "https://jsonplaceholder.typicode.com/users";
boton.addEventListener("click", enviar);

function enviar(){
    const NOMBRE = document.getElementById("nombre").value;
    const APELLIDO = document.getElementById("apellido").value;
    const NACIMIENTO =document.getElementById("nacimiento").value;
    const objeto = {
        nombre:NOMBRE,
        apellido: APELLIDO,
        nacimiento:NACIMIENTO
    }


    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(objeto)
    }

    fetch(url, options)
    .then(response => response.json())
    .then(datos => console.log(objeto))
    .catch((error) => console.error('El error es: ' +  error))

}
