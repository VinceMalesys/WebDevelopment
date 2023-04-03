let global = {
    IMAGE_PREFIX: `url(\"./images/`,
    IMAGE_SUFFIX: `.jpeg\")`,
    eerste_kaart: true,
    tweede_kaart: false,
    fotos: [],
    huidigeFoto: null,
    aatalGoeieParen: 0,
    running: false

};
const setup = () => {
    initialisatie();
}

const initialisatie = () => {
    let fotoLinks = [];
    for (let i = 1; i < 13; i++) {
        if (i > 6){
            let j = i - 6;
            fotoLinks.push(global.IMAGE_PREFIX + j + global.IMAGE_SUFFIX)
        }
        else {
            fotoLinks.push(global.IMAGE_PREFIX + i + global.IMAGE_SUFFIX)
        }
    }
    global.fotos = randomizen(fotoLinks);
    let elementen = document.getElementsByClassName("card");
    for (let i = 0; i < elementen.length; i++) {
        elementen[i].addEventListener("click", toonFoto)
    }
}



const toonFoto = (e) => {
    if (!global.running){
    let element = e.target;
    let index = element.getAttribute("id") -1;
    let foto = global.fotos[index];
    if (global.eerste_kaart){
        element.removeEventListener("click", toonFoto);
        element.style.backgroundImage = foto;
        global.huidigeFoto = element;
        global.eerste_kaart = false;
    }
    else if (!global.eerste_kaart){
        element.style.backgroundImage = foto;
        element.removeEventListener("click", toonFoto);
        if(global.huidigeFoto.style.backgroundImage !== foto){
            global.running = true;
            setTimeout(verbergFotos, 800, element);
        }
        else{
            global.eerste_kaart = true;
            global.aatalGoeieParen++;
            if (global.aatalGoeieParen === 6){
                setTimeout(einde, 500);
            }
        }
    }
}

}


const verbergFotos = (element) => {
    element.style.backgroundImage = "";
    element.addEventListener("click", toonFoto);
    global.huidigeFoto.style.backgroundImage = "";
    global.huidigeFoto.addEventListener("click", toonFoto);
    global.eerste_kaart = true;
    global.running = false;
}

const randomizen = (array) => {
    let i = array.length;
    while (i > 0) {
        let index = Math.floor(Math.random() * i);
        i--;

        let tussenstap = array[i];
        array[i] = array[index];
        array[index] = tussenstap;
    }
    return array;
}

const einde = () => {
    let eindmelding = confirm("Successful Message!");
    if (eindmelding === true){
        window.location.reload();
    }

}

window.addEventListener('load', setup);