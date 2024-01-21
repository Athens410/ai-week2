
function displayPoem(response){



const typewriter = new Typewriter("#poem", {
  strings: response.data.answer,
   autoStart: true,
 delay: 1,
  cursor: "",
});


}




function generatePoem(event){


let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "06a4f404921b3294b64d64f35o0f753t";


let context = "You are an AI-powered smart machine specializing in creating topics . Your mission is to generate a maximum of 5 line poem in basic HTML and seperate each line with a <br />.analyze user queries, extract key information, and deliver succinct responses tailored to their interestsThe goal is to provide a seamless and enriching user experience.Do not  include any tittle.Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

let prompt = `user instructions: respond to user inputs by generating concise and informative responses ${instructionsInput.value}`;

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


 let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

poemElement.innerHTML = `<div class="generating"> ⏳Loading a topic about ${instructionsInput.value}  </div>`

  event.preventDefault();


  axios.get(apiUrl).then(displayPoem);







}



let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);
