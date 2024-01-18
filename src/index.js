
function displayPoem(response){

console.log("poem generating ");

const typewriter = new Typewriter("#poem", {
  strings: response.data.answer,
   autoStart: true,

  cursor: "",
});


}




function generatePoem(event){


let instructionsInput = document.
let apiKey = "06a4f404921b3294b64d64f35o0f753t";
let prompt = "Generate a French poem about flowers";

let context = "";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  event.preventDefault();

console.log("generating poem");
  axios.get(apiUrl).then(displayPoem);







}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);