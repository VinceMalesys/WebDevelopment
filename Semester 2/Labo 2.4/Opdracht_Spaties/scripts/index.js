const setup = () => {
  let button = document.getElementById("button")
button.addEventListener('click', omvormer)
  button.addEventListener('click', function (){
    let text = document.getElementById("text").value
    let res = omvormerMetFunctie(text);
    console.log(res);
  })

}

const omvormer = () => {
  let zonder = document.getElementById("text").value
  let met ="";
  for (let i = 0; i < zonder.length; i++) {
    if(zonder.charAt(i) === " "){
      met += zonder.charAt(i);
    }
    else {
      met += zonder.charAt(i) + " ";
    }
  }
  console.log(met);



}

const omvormerMetFunctie = (inputText) => {
  let result ="";
  for (let i = 0; i < inputText.length; i++) {
    if(inputText.charAt(i) === " "){
      result += inputText.charAt(i);
    }
    else {
      result += inputText.charAt(i) + " ";
    }
  }
  document.getElementById("output").innerHTML = result;
  return result;

}

window.addEventListener('load', setup);