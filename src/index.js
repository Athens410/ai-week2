
function generatePoem(event){


  event.preventDefault();


  



   new Typewriter("#poem", {
  strings: 'hello skies and cats',
  autoStart: true,
});
}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);