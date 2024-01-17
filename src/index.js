
function generatePoem(event){


  event.preventDefault();


  


const typewriter = new Typewriter("#poem", {
  strings: 'hello skies and cats',
   autoStart: true,

  cursor: "",
});




}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);