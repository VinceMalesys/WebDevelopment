const setup = () =>{
    let p = document.querySelector("p");
    let node = p.childNodes[0];
    let text = document.createTextNode("Veranderd in DOM");
    p.replaceChild(text, node);
}

window.addEventListener('load', setup);