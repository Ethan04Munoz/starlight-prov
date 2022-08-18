
let bodyuwu = document.querySelector("body");
let divVacio = document.querySelector("#divVacio");

function get_ip(obj){
    let ip = obj.ip;
    setTimeout(function()
    {
        let hughieImg = `
        <img id="hughieImg" src="img/hughie3.png" alt="">
        `;
        divVacio.innerHTML = hughieImg;
        bodyuwu.style.backgroundImage = 'url("img/starlight3.png")';
        let burbujaDeDialogo = `<p class="triangle-border left">
        Bro, en serio, tienes una obsesión, ve a terapia, última advertencia
        <br>
        IP: ${ip} 
        </p>
        `;
        divVacio.innerHTML = divVacio.innerHTML + burbujaDeDialogo;
    },500);
}


