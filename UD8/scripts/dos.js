const formStatus = {
  email: false,
  pass: false
}

function main(){
  const formulario = document.getElementById('formulario');
  formulario.lastElementChild.disabled = true;
  formulario.email.addEventListener('blur', () => validaEmail(formulario.email));
  formulario.pass.addEventListener('blur', () => validaPass(formulario.pass));
}

function toggleEnviar(formulario){
  const btn = formulario.lastElementChild;
  if(formStatus.email && formStatus.pass){
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

function validaEmail(email){
  let atSlices = email.value.split('@');
  if (atSlices.length > 1 && atSlices[1].length > 0){
    let dotSlices = atSlices[1].split('.');
    if (dotSlices.length > 1 && dotSlices[1].length > 0){
      formStatus.email = true;
    } else {
      formStatus.email = false;
      alert("El email debe tener el formato correcto: usuario@dominio.raiz");
    }
  } else {
    formStatus.email = false;
    alert("El email debe tener el formato correcto: usuario@dominio.raiz");
  }

  toggleEnviar(formulario);
}

function validaPass(pass){
  if (pass.value.length > 7 && pass.value.length < 11){
    formStatus.pass = true;
  } else {
    formStatus.pass = false;
    alert("La contraseña debe tener entre 8 y 10 caracteres.");
  }
  toggleEnviar(formulario);
}

document.addEventListener('DOMContentLoaded', main);
