const setup = () => {
    let gemeente = "";
    while (!gemeente.includes("stop")){
        gemeente += window.prompt("Gemeente").valueOf();
        gemeente += "\n"
    }
    gemeente = gemeente.replace("\nstop\n", "");
    console.log(gemeente);
    let gemeentesVoorOutput = gemeente.split("\n");
    let opties = document.getElementById("gemeentes");
    for (let i = 0; i < gemeentesVoorOutput.length; i++) {
        opties.innerHTML += "<option value=\"" + gemeentesVoorOutput[i] + "\">" + gemeentesVoorOutput[i] + "</option>";
    }
}

window.addEventListener('load', setup);