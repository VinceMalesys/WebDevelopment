const setup = () => {
let listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("listitem");
    }
    let style = document.createElement("style")
    let node = document.createTextNode(".listitem {color : red}");
    document.head.appendChild(style);
    style.appendChild(node);
    let img = document.createElement("img");
    document.body.appendChild(img);
    img.setAttribute("src", "images/Vince.png");
}

window.addEventListener('load', setup);