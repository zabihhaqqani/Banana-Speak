// selectors
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");
let textOutput = document.querySelector("#output");

// mock api for translating
let serverURL = "https://api.funtranslations.com/translate/minion.json";

//
function getTranslationURL(input) {
  return serverURL + input;
}

// for displaying error if it occurs
function errorHandler(error) {
  console.log("error occurred", error);
  alert("Server Error, try again after some time");
}

// click handling
function clickHandler() {
  let inputText = textInput.value; // taking input
  textOutput.innerText = "Translation in progress......................";
  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      textOutput.innerText = translatedText; // giving output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
