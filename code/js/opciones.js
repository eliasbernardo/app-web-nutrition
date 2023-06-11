const opcion = document.querySelectorAll('.list__button')
const iframe = document.querySelectorAll('.content__opcion')

let container = document.getElementById("content");
function XHRPOSTGENERAL(nombre){
    //llame la ventana que debe mostrar la opcion1
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET",'http://127.0.0.1:5500/app-web-nutrition/dashboard/menu_lateral/'+nombre+'/');
    xhr.responseText = 'text';
    xhr.onreadystatechange = function(){
        if(xhr.status = 200 && xhr.readyState ==4){
            let res = xhr.responseText;
            container.innerHTML = res;
        }
    }
    xhr.send();
}
function opcion1(){

}
/*opcion.forEach((cadaDiv , i)=>{
    opcion[i].addEventListener('click',()=>{
        opcion.forEach((cadaDiv , i)=>{
            opcion[i].classList.remove('activo');
            iframe[i].classList.remove('activo');

        })

        opcion[i].classList.add('activo');
        iframe[i].classList.add('activo');
    })

})*/