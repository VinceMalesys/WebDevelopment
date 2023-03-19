const setup = () => {
let button = document.getElementById("knop");
button.addEventListener("click", trigrams);
}
const trigrams = () =>{
    let text = document.getElementById("tekst").value;
    text = text.replaceAll(" ", "");
    let trigram = "";
    for (let i = 0; i < text.length -2 ; i++) {
        trigram += text.substring(i, i +3) + "\n";
    }

    console.log(trigram);
    trigram = trigram.replaceAll("\n", "<br>");
    let output = document.getElementById("output");
    output.innerHTML = trigram;

}

window.addEventListener('load', setup);