
function generatePoem(event){


  event.preventDefault();


  



   new Typewriter("#poem", {
  strings: 'hello skies and cats',
  delay: 1,
  cursor: "",
});
}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);