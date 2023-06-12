
let listElements = document.querySelectorAll('.list__button--click');
let loginElements = document.querySelectorAll('.login-usuario');

listElements.forEach(listElements => {
    listElements.addEventListener('click', ()=>{


        listElements.classList.toggle('arrow');
        let height = 0;
        let menu = listElements.nextElementSibling;

        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;

        }


        menu.style.height = `${height}px`;
    })

})

loginElements.forEach(loginElements =>{
    loginElements.addEventListener('click', ()=>{
        let height = 0;

        let menu = loginElements.nextElementSibling;

        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
})

