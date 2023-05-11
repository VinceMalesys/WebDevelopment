const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", controle);

}

const execute = () => {
    let input = document.getElementById("input");

}

const controle = () => {
    let input = document.getElementById("input");
    let text = input.value;
    let txt = text.split(" ");
    let prefix = txt[0];
    if (prefix.charAt(0) === "/"){
        let letter = prefix.charAt(1).toLowerCase()
        if (letter === "g" ){
            let url = "https://www.google.com/search?q="
            for (let i = 1; i < txt.length; i++) {
                if (i === 1){
                    url += txt[i];
                }
                else{
                    url += "+" + txt[i];
                }
            }
            window.open(url);
        }
        else if (letter === "y"){
            let url = "https://www.youtube.com/results?search_query="
            for (let i = 1; i < txt.length; i++) {
                if (i === 1){
                    url += txt[i];
                }
                else{
                    url += "+" + txt[i];
                }
            }
            window.open(url);
        }
        else if(letter === "t"){
            let url = "https://twitter.com/" + txt[1];
            window.open(url);
        }
        else if (letter === "i"){
            let url = "http://www.instagram.com/explore/tags/" + txt[1] + "/";
            window.open(url);
        }
        else{
            alert("Unkown command prefix");
        }
    }
    else{
        alert("Invalid command")
    }


}

window.addEventListener('load', setup);