
function generatePoem(event){


  event.preventDefault();


   let poemElement = document.querySelector("#poem");
   poemElement.innerHTML = ("hello skies")
}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);