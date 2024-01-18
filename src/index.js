
function displayPoem(response){

console.log("poem generated ");

const typewriter = new Typewriter("#poem", {
  strings: response.data.answer,
   autoStart: true,

  cursor: "",
});


}




function generatePoem(event){


let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "06a4f404921b3294b64d64f35o0f753t";


let context = "you are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions  ";

let prompt = `user instructions: Generate a French poem about ${instructionsInput.value}`;

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  event.preventDefault();

console.log("generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);







}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);