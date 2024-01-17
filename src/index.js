
function generatePoem(event){


  event.preventDefault();


  


const typewriter = new Typewriter("#poem", {
  strings: 'La tombe dit a la rose',
   autoStart: true,

  cursor: "",
});




}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);