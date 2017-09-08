const $form     = $("#formulario");
const $mail     = $("#mail");
const $send     = $("#send");
const $name     = $("#nombre");
const $phone    = $("#tel");
const $msg      = $("#mensaje");
const filter    = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


let cargarPagina = () => {

    $form.submit((e) => e.preventDefault());
    $send.click(validar);

    UIkit.offcanvas(element, options);
    UIkit.icon(element, options);

}

let validar = () => {

    if ($name.val() === "" || $mail.val() === "" || $msg === "") {
        alert("Llenar todos los campos");
        return false;

    } else if ($phone.val() < 10) {

        alert("Ingresar número telefonico en formato de 10 digitos");
        return false;

    } else if(!filter.test($mail.val())){
        alert("Ingresa un email válido");
        return false;
    }
    
    
    else {
        alert("Tu mensaje ha sido enviado");
        return true;
    }


}

$(document).ready(cargarPagina);
