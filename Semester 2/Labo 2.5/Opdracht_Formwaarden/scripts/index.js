const setup = () => {
let button = document.getElementById("resultaat")
button.addEventListener("click", printResult);


}

const printResult = () =>{
    let resultaat ="";
    let roker = document.getElementById("roker").valueOf();
    //let nederlands = document.getElementById("nederlands");
    //let frans = document.getElementById("frans");
    //let engels = document.getElementById("engels");
    let taal = document.getElementsByName("moedertaal");
    let buurland = document.getElementById("buurland").value;
    let bestelling = document.getElementById("bestelling");
    if(roker.checked){
        resultaat += "is een " + roker.value;

    }
    else{
        resultaat += "is geen roker";
    }
    resultaat += "\n";
    for (let i = 0; i < taal.length; i++) {
        if (taal[i].checked){
            resultaat += "moedertaal is " + taal[i].value;
        }
    }

    resultaat += "\n";
    resultaat += "favoriete buurland is " + buurland;
    resultaat += "\n";
    resultaat += "bestelling bestaat uit ";
    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected)
        resultaat += bestelling.options[i].value + " ";
    }
    console.log(resultaat);
}
window.addEventListener('load', setup);