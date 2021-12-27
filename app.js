// selectors
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");
let textOutput = document.querySelector("#output");

// mock api for translating
let serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

// for displaying error if it occurs
function errorHandler(error) {
  console.log("error occurred", error);
  alert("something wrong with server ! try again after some time");
}

// click handling
function clickHandler() {
  var inputText = textInput.value; // taking input

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
