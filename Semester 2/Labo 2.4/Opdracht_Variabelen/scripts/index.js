const setup = () => {

    window.addEventListener('click', test);


}
const test = () => {

    let text = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
    console.log(text.toLowerCase())
    let index = 0;
    let atl = 0;
    while (text.indexOf("an",index) !== -1) {

        index = text.indexOf("an", index) + 2;
        atl++;

    }

    console.log(atl);
}

window.addEventListener('load', setup);