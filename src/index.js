
function generatePoem(event){


  event.preventDefault();


    alert("hello skies!");
}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);