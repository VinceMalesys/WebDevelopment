let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",// map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let start = document.getElementById("startknop");
    start.addEventListener("click", beginnen);
};

const beginnen = (event) => {
    let start = event.target;
    start.remove();
    verplaatsen();
    let image = document.querySelector("img");
    image.addEventListener("click", verplaatsenViaImage);
    global.timeoutId = setInterval(verplaatsenInterval, 1000);
};

const verplaatsenInterval = () => {
  if (isHetEenBom()){
      setTimeout(verplaatsen, global.MOVE_DELAY);
  }
  else{
      verplaatsen();
  }
}

const verplaatsen = () => {

    let image = document.querySelector("img");

    let rfoto = Math.round(Math.random() * (global.IMAGE_COUNT - 1));
    image.src = "" + global.IMAGE_PATH_PREFIX + rfoto + global.IMAGE_PATH_SUFFIX;

    let rtop = Math.round((Math.random() * (600 - 2 * global.IMAGE_SIZE)) + global.IMAGE_SIZE);
    let rleft = Math.round((Math.random() * 550) + 10);
    image.style.top = rtop+"px";
    image.style.left = rleft+"px";


}
const isHetEenBom = () =>{
    let image = document.querySelector("img");
    let string = image.src;
    let split = string.split("images/");
    let substring = split[1].substring(0, 1);
    return substring === "0";
}
const verplaatsenViaImage = () => {
  if (isHetEenBom()){
      clearInterval(global.timeoutId);
      window.alert("GAME OVER");
  }
  else{
      verplaatsen();
      optellen();
      clearInterval(global.timeoutId);
      global.timeoutId = setInterval(verplaatsenInterval, 1000);
  }
}

const optellen = () => {
      global.score++;
      let hits = document.getElementById("hits");
      let node = hits.childNodes[0];
      let newNode = document.createTextNode("aantal hits: " + global.score);
      hits.replaceChild(newNode, node);


}




window.addEventListener("load", setup);


