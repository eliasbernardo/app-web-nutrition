function login(){
  let usuario = document.getElementById("usuario").value;
  let passwrord = document.getElementById("clave").value;
  if(usuario !='' && passwrord != ''){
    console.log("no esta vacio");
    let loader =  document.getElementById("loader");
    loader.classList.add("loader");
    let clave = document.getElementById('clave').value;
    let clave64 = window.btoa(clave);
    let decodClave64 = window.atob(clave64);
    console.log(clave64);
    console.log(decodClave64);
    avisoMostrar("Validando Datos","success");
  }else{
    avisoMostrar("Completa los campos","warning");
  }
}
