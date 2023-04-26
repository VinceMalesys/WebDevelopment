let global = {
	saved :[]
}
const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let clear = document.getElementById("clear");
	let button = document.getElementById("save");
	button.addEventListener("click", save);
	clear.addEventListener("click", empty)

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	if (localStorage.length !== 0){
		resetItems();
	}else{
		update();
	}

}

const empty = () => {
  localStorage.clear();
}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let paragrafen = document.getElementsByTagName("p");
	let valueRood = sliders[0].value;
	let valueGroen = sliders[1].value;
	let valueBlauw = sliders[2].value;
	paragrafen[0].innerHTML = "Red " + valueRood;
	paragrafen[1].innerHTML = "Green " + valueGroen;
	paragrafen[2].innerHTML = "Blue " + valueBlauw;


	let string = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;
	colorDemos[0].style.backgroundColor = string;
	global.saved[0] = string;
	storeItems();
}

const save = () =>{
	let div = document.querySelector("#saves");
	let newDiv = document.createElement("div");
	let valueGroen = document.getElementById("sliderGroen").value;
	let valueRood = document.getElementById("sliderRood").value;
	let valueBlauw = document.getElementById("sliderBlauw").value;
	let string = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;
	newDiv.style.backgroundColor = string;
	newDiv.style.border = "solid 2px black";
	newDiv.style.height = "75px";
	newDiv.style.width ="100px";
	div.appendChild(newDiv);
	let rmvButton = document.createElement("button");
	let node = document.createTextNode("X");
	rmvButton.appendChild(node);
	newDiv.appendChild(rmvButton);
	rmvButton.addEventListener("click",  function (event){
		verwijder(rmvButton);
		event.stopPropagation();
	});
	newDiv.addEventListener("click", function (event){
		reselectColor(newDiv);
	})
	global.saved.push(string);
	storeItems();
}

const storeItems = () => {
	localStorage.setItem("stored", JSON.stringify(global.saved));
}

const verwijder =(element)=>{
	let parent = element.parentElement;

	for (let i = 1; i < global.saved.length; i++) {
		if (parent.style.backgroundColor === global.saved[i]){
			global.saved.splice(i,1);
		}
	}
	storeItems();
	element.remove();
	parent.remove();
}

const reselectColor = (element) =>{
	let color = element.style.backgroundColor.toString();
	let colorDemos = document.getElementsByClassName("colorDemo");
	let paragrafen = document.getElementsByTagName("p");
	let strings = color.split(",");
	let red = strings[0].substring(strings[0].indexOf("(")+1);
	let green = strings[1].substring(1);
	let blue = strings[2].substring(1, strings[2].length-1)
	document.getElementById("sliderGroen").value = green;
	document.getElementById("sliderRood").value = red;
	document.getElementById("sliderBlauw").value = blue;
	paragrafen[0].innerHTML = "Red " + red;
	paragrafen[1].innerHTML = "Green " + green;
	paragrafen[2].innerHTML = "Blue " + blue;
	colorDemos[0].style.backgroundColor = color;
}

const resetItems = () => {
	let svd = JSON.parse(localStorage.getItem("stored"));
	global.saved = svd;
	for (let i = 0; i < svd.length; i++) {
		if(i === 0){
			let colorDemos = document.getElementsByClassName("colorDemo");
			let paragrafen = document.getElementsByTagName("p");
			let strings = svd[i].split(",");
			let red = strings[0].substring(strings[0].indexOf("(")+1);
			let green = strings[1].substring(1);
			let blue = strings[2].substring(1, strings[2].length-1)
			document.getElementById("sliderGroen").value = green;
			document.getElementById("sliderRood").value = red;
			document.getElementById("sliderBlauw").value = blue;
			paragrafen[0].innerHTML = "Red " + red;
			paragrafen[1].innerHTML = "Green " + green;
			paragrafen[2].innerHTML = "Blue " + blue;

			colorDemos[0].style.backgroundColor = svd[i];
		}
		else {
			let div = document.querySelector("#saves");
			let newDiv = document.createElement("div");
			newDiv.style.backgroundColor = svd[i];
			newDiv.style.border = "solid 2px black";
			newDiv.style.height = "75px";
			newDiv.style.width ="100px";
			div.appendChild(newDiv);
			let rmvButton = document.createElement("button");
			let node = document.createTextNode("X");
			rmvButton.appendChild(node);
			newDiv.appendChild(rmvButton);
			rmvButton.addEventListener("click",  function (event){
				verwijder(rmvButton);
				event.stopPropagation();
			});
			newDiv.addEventListener("click", function (event){
				reselectColor(newDiv);
			})
		}
	}

}

window.addEventListener('load', setup);