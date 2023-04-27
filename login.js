let usuario = document.getElementById('usuario').value;


function convertir(){
  let loader =  document.getElementById("loader");
  loader.classList.add("loader");
  let clave = document.getElementById('clave').value;
  let clave64 = window.btoa(clave);
  let decodClave64 = window.atob(clave64);
  console.log(clave64);
  console.log(decodClave64);
}
