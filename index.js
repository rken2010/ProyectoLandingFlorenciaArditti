let formulario = document.getElementById("form")
formulario.addEventListener("submit", validacion)

function validacion(e){
    e.preventDefault()
    console.log("formulario enviado")
    swal("Consulta enviada!", "En breve me contactare con vos!", "success");
    document.getElementById("form").submit();
    document.getElementById('form').reset(); 
}