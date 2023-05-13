const setup = () => {
let button = document.getElementById("button");
button.addEventListener("click", bereken)

}

const bereken = () => {
    let input = document.getElementById("txtInput");
    let tafels = document.getElementById("main");

    let number = parseInt(input.value);
    let div = document.createElement("div");
    let header = document.createElement("h2");
    let tijd = new Date();
    let stringHeader = `Tafen van ${number} gemaakt op: ${tijd.getHours()}:${tijd.getMinutes()}:${tijd.getSeconds()}`;
    let textHeader = document.createTextNode(stringHeader);
    header.appendChild(textHeader);
    div.appendChild(header);
    div.classList.add("tabel")

    for (let i = 1; i < 11; i++) {
        let p = document.createElement("p");
        let string = `${number}x${i}=${number * i}`;
        let text = document.createTextNode(string);
        p.appendChild(text);
        div.appendChild(p);
    }
    tafels.appendChild(div);
}

window.addEventListener('load', setup);