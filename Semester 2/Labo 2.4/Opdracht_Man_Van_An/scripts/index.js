const setup = () => {
    let button = document.getElementById("button");

    button.addEventListener('click', berekenen)
    button.addEventListener('click', berekenenMetLast)
}

const berekenen = () =>{

    console.log("Via indexOf");
    console.log(document.getElementById("text").value);
    let text = document.getElementById("text").value.toLowerCase();

    let index = 0;
    let atl = 0;
    while (text.indexOf("an",index) !== -1) {

        index = text.indexOf("an", index) + 2;
        atl++;

    }

    console.log(" bevat " + atl + " keer an");
    document.getElementById("input").innerHTML = document.getElementById("text").value;
    document.getElementById("output").innerHTML = atl;
}
const berekenenMetLast = () =>{

    console.log("Via lastIndexOf");
    console.log(document.getElementById("text").value);
    let text = document.getElementById("text").value.toLowerCase();

    let atl = 0;
    while (text.lastIndexOf("an") !== -1) {
        text = text.substring(0, text.lastIndexOf("an"));
        atl++;

    }

    console.log(" bevat " + atl + " keer an");
    document.getElementById("inputLast").innerHTML = document.getElementById("text").value;
    document.getElementById("outputLast").innerHTML = atl;
}
window.addEventListener('load', setup);