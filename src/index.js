
function generatePoem(event){


    event.preventDefualt()


    alert("hello skies!")
}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);