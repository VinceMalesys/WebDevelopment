let global = {
    history : []
}

const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", controle);
    let testHistory = localStorage.getItem("history")
    if (testHistory !== null){
        resetItems();
    }
}



const controle = () => {
    let input = document.getElementById("input");
    let text = input.value;
    let txt = text.split(" ");
    let prefix = txt[0];
    if (prefix.charAt(0) === "/"){
        let letters = prefix.toLowerCase()
        let search = {
            title : "",
            text : "",
            url : ""
        }
        if (letters === "/g" || letters === "/y"){
            if (letters === "/g"){
                search.url = "https://www.google.com/search?q=";
                search.title = "Google";
            }
            else{
                search.url = "https://www.youtube.com/results?search_query=";
                search.title = "Youtube";
            }
            for (let i = 1; i < txt.length; i++) {
                if (i === 1){
                    search.url += txt[i];
                    search.text = txt[i];
                }
                else{
                    search.url += "+" + txt[i];
                    search.text += " " + txt[i]
                }
            }
            global.history.push(search);
            localStorage.setItem("history", JSON.stringify(global.history));
            uitvoeren();
        }
        else if(letters === "/t" || letters === "/i"){
            if (letters === "/t"){
                search.url = "https://twitter.com/";
                search.title = "Twitter";
            }
            else {
                search.url = "http://www.instagram.com/explore/tags/";
                search.title = "Instagram";
            }
            search.url += txt[1];
            search.text = txt[1];
            global.history.push(search);
            localStorage.setItem("history", JSON.stringify(global.history));
            uitvoeren();
        }else if(text.toLowerCase() === "/clear"){
            localStorage.removeItem("history");
        }
        else{
            alert("Unkown command prefix");
        }
    }
    else{
        alert("Invalid command")
    }


}

const uitvoeren = () => {
    let currentIndex =   global.history.length -1;
    let search = global.history[currentIndex];
    let url =  search.url;

    window.open(url);

    let main = document.getElementById("history");
    let rows = document.getElementsByClassName("row");
    let row = null;
    let lastRow = rows[rows.length -1];
    let atlKinderen = lastRow.children.length;

    if (rows.length > 1 && atlKinderen < 3){
        row = lastRow;
    }
    else{
        row = document.createElement("div");
        row.classList.add("row");
        main.appendChild(row);
    }

    let column = document.createElement("section");
    row.appendChild(column);
    let header = document.createElement("h3");
    let p = document.createElement("p");
    let button = document.createElement("button");
    let txtHeader = document.createTextNode(search.title);

    let klasse = search.title.toLowerCase();
    let klasseBtn = "";
    if (search.title === "Google" || search.title === "Instagram") {
        klasseBtn = "btnType1";
    }
    else {
        klasseBtn = "btnType2";
    }

    column.classList.add(klasse, "col", "me-3", "mt-2");
    column.appendChild(header);
    column.appendChild(p);
    column.appendChild(button);

    header.appendChild(txtHeader);

    button.classList.add(klasseBtn);
    button.value = search.url;
    let txtBtn = document.createTextNode("Go!");
    button.appendChild(txtBtn);
    button.addEventListener("click", reopen);

    let txt = document.createTextNode(search.text);
    p.appendChild(txt);

}

const reopen = (event) => {
    let button = event.target;
    let url = button.value;
    window.open(url);
}

const resetItems = () => {
    if (localStorage.length > 0){
        global.history = JSON.parse(localStorage.getItem("history"));
        for (let i = 0; i < global.history.length; i++) {
            let search = global.history[i];
            let main = document.getElementById("history");
            let rows = document.getElementsByClassName("row");
            let row = null;
            let lastRow = rows[rows.length -1];
            let atlKinderen = lastRow.children.length;

            if (rows.length > 1 && atlKinderen < 3){
                row = lastRow;
            }
            else{
                row = document.createElement("div");
                row.classList.add("row");
                main.appendChild(row);
            }

            let column = document.createElement("section");
            row.appendChild(column);
            let header = document.createElement("h3");
            let p = document.createElement("p");
            let button = document.createElement("button");
            let txtHeader = document.createTextNode(search.title);

            let klasse = search.title.toLowerCase();
            let klasseBtn = "";
            if (search.title === "Google" || search.title === "Instagram") {
                klasseBtn = "btnType1";
            }
            else {
                klasseBtn = "btnType2";
            }

            column.classList.add(klasse, "col", "me-3", "mt-2");
            column.appendChild(header);
            column.appendChild(p);
            column.appendChild(button);

            header.appendChild(txtHeader);

            button.classList.add(klasseBtn);
            button.value = search.url;
            let txtBtn = document.createTextNode("Go!");
            button.appendChild(txtBtn);
            button.addEventListener("click", reopen);

            let txt = document.createTextNode(search.text);
            p.appendChild(txt);
        }
    }

}

window.addEventListener('load', setup);