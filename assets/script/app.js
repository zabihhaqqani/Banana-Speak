// selectors
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input");
let textOutput = document.querySelector("#output");
const listenBtn = document.getElementById('btn-speak');

// mock api for translating
let serverURL = "https://api.funtranslations.com/translate/minion.json";

/* Current Year */
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// parameters
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

// for displaying error if it occurs
function errorHandler(error) {
  console.log("error occurred", error);
  swal({
    
    text: "Server Error, try again after some time",
    icon: "warning",
  });
  // alert("Server Error, try again after some time");
}


// click handling
var translatedText = "";
function clickHandler() {
  if (textInput.value === "") {
    textOutput.innerText = "Enter something..."
  } else {
    let inputText = textInput.value; // taking input
    textOutput.innerText = "Translation in progress........";
    // calling server for processing
    fetch(getTranslationURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        translatedText = json.contents.translated;
        textOutput.innerText = translatedText; // giving output
      })
      .catch(errorHandler);
  }
}

listenBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const msg = new SpeechSynthesisUtterance(
    translatedText
  );
  window.speechSynthesis.speak(msg);

});


btnTranslate.addEventListener("click", clickHandler);

// select toggle button
let toggle = document.getElementById("mode");

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})