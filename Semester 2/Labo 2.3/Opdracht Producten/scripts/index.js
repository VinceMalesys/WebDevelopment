const setup = () => {
        let btn = document.getElementById("button")
        let txt = document.getElementsByClassName("output")
        btn.addEventListener('click', berekenen)
        for (let i = 0; i < txt.length; i++) {
                txt[i].innerHTML = "0 eur";
        }


}
const berekenen = () => {
        let aantallen = document.getElementsByTagName("input");
        let prijzen = document.getElementsByClassName("prijs");
        let btw = document.getElementsByClassName("btw");
        let txtOutput = document.getElementsByClassName("output");
        let atl1 = parseFloat(aantallen[0].value);
        let atl2 = parseFloat(aantallen[1].value);
        let atl3 = parseFloat(aantallen[2].value);
        let prz1 = parseFloat(prijzen[0].innerHTML);
        let prz2 = parseFloat(prijzen[1].innerHTML);
        let prz3 = parseFloat(prijzen[2].innerHTML);
        let btw1 = parseInt(btw[0].innerHTML);
        let btw2 = parseInt(btw[1].innerHTML);
        let btw3 = parseInt(btw[2].innerHTML);
        let out1 = atl1 * prz1 * (1 + (btw1/100));
        let out2 = atl2 * prz2 * (1 + (btw2/100));
        let out3 = atl3 * prz3 * (1 + (btw3/100));
        txtOutput[0].innerHTML = out1.toFixed(2) + " Eur";
        txtOutput[1].innerHTML = out2.toFixed(2) + " Eur";
        txtOutput[2].innerHTML = out3.toFixed(2) + " Eur";
        txtOutput[3].innerHTML = (out1 + out2 + out3).toFixed(2) + " Eur"
}
window.addEventListener('load', setup);