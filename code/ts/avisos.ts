let container = document.getElementById("container");
function avisoMostrar(text:string,tipoIcon:string){
  let bodyAviso = document.createElement("div");
  let mensaje = document.createElement("div");
  let icon = document.createElement("div");
  let iconType = document.createElement("i");
  let span = document.createElement("span");
  let spanText = document.createTextNode(text);
  let button = document.createElement("button");
  let btnText = document.createTextNode("ACEPTAR");

  if(tipoIcon == "error"){
      iconType.className = "fa-regular fa-circle-xmark";
  }else if(tipoIcon == "success"){
      iconType.className = "fa-regular fa-circle-check";
  }else{
      iconType.className = "fa-solid fa-circle-exclamation";
  }

  icon.appendChild(iconType);

  bodyAviso.className = "body-aviso";
  mensaje.className = "mensaje";

  span.appendChild(spanText);
  button.appendChild(btnText);

  button.onclick=function(){
      if(text == "Usuario no conectado"){
          bodyAviso.style.display="none";
          //window.open(urlDomain,"_parent");
      }else{
          bodyAviso.style.display="none";
      }
  }

  mensaje.appendChild(icon);
  mensaje.appendChild(span);
  mensaje.appendChild(button);

  bodyAviso.appendChild(mensaje);

  container.appendChild(bodyAviso);
  return false;
}
