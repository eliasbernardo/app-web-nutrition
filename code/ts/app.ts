export const url = 'http://localhost:8080/dashboard/';
export const urllogin = '';
export let container = document.getElementById("content");
export let XHRPostGeneral = (()=>{
    function XHRPostGeneral(url:string){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.responseType = "text";
        xhr.onreadystatechange = function(){
            if(xhr.status == 200 && xhr.readyState == 4){
                let res = xhr.responseText;
                container.innerHTML = res;
            }
        }
        xhr.send();
    }    
})();

