const setup = () => {
let button = document.getElementById("knop");
button.addEventListener("click", omvormen)

}
const omvormen = () => {
    let tekst = document.getElementById("tekst").value;
    let delen = tekst.split(" ");
    for (let i = 0; i < delen.length; i++) {
        if( delen[i] === "de"){
            delen[i] = "het";
        }
        else if (delen[i] === "het"){
            delen[i] = "de";
        }
    }
    let omgevormdeTekst =""
    for (let i = 0; i < delen.length; i++) {
        if(i < delen.length - 1){
            omgevormdeTekst += delen[i] + " ";
        }
        else{
            omgevormdeTekst += delen[i];
        }
    }
    console.log(omgevormdeTekst);
    let output = document.getElementById("output");
    output.innerHTML = omgevormdeTekst;

}

window.addEventListener('load', setup);