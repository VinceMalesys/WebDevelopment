const setup = () => {
let belangrijk = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < belangrijk.length; i++) {
        belangrijk[i].classList.add("opvallend");
    }
}

window.addEventListener('load', setup);