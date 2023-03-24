
const setup = () => {
	let sliders = document.getElementsByClassName("slider");


	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	update();
}
const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let paragrafen = document.getElementsByTagName("p");
	let value = sliders[0].value;
	let value1 = sliders[1].value;
	let value2 = sliders[2].value;
	paragrafen[0].innerHTML = "Red " + value;
	paragrafen[1].innerHTML = "Green " + value1;
	paragrafen[2].innerHTML = "Blue " + value2;


	colorDemos[0].style.backgroundColor = 'rgb(' + value + ',' + value1 + ',' + value2 + ')';
	//colorDemos[0].style.backgroundColor = 'rgb(${red},${green},${blue})';
	// is iets beter
	let button = document.getElementById("save");
	button.addEventListener("click", save);
}

const save = () =>{
	let div = document.querySelector("#saves");
	let newDiv = document.createElement("div");
	let valueGroen = document.getElementById("sliderGroen").value;
	let valueRood = document.getElementById("sliderRood").value;
	let valueBlauw = document.getElementById("sliderBlauw").value;
	newDiv.style.backgroundColor = `rgb( ${valueRood}, ${valueGroen}, ${valueBlauw})`;
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

const verwijder =(element)=>{
	let parent = element.parentElement;
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

window.addEventListener('load', setup);