const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", berekenen);

}

const berekenen = () => {
    clear();
    let bdate = new Date(document.getElementById("bdate").value)
    let today = new Date();
    let bday = new Date("2001-05-04");
    console.log(bday);
    let dagen = Math.floor( (today.getTime() - bdate.getTime() )/ (1000 * 3600 * 24) )
    //Kan ook met MATH.abs()
    if (dagen < 0){
        dagen *= -1;
    }

    console.log(dagen);
    let p = document.createElement("p");
    document.body.appendChild(p);
    let output = document.createTextNode(` ${dagen} dagen.`);
    p.appendChild(output);

}
const clear = () =>{
    let p = document.getElementsByTagName("p");
    for (let pElement of p) {
        pElement.remove();

    }
}

window.addEventListener('load', setup);