
function generatePoem(event){



let apiKey = "06a4f404921b3294b64d64f35o0f753t";




  event.preventDefault();


  


const typewriter = new Typewriter("#poem", {
  strings: 'La tombe dit a la rose',
   autoStart: true,

  cursor: "",
});




}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);