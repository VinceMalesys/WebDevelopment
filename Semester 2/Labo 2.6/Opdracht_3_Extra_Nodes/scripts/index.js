const setup = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", verander)

}

const verander = () =>{
    let p = document.createElement("p");
    let node = document.createTextNode("yeet");
    let div = document.querySelector("#myDIV");
    div.appendChild(p);
    p.appendChild(node);
}
window.addEventListener('load', setup);