const output = document.getElementById("output");
const startBtn = document.getElementById("start");
const dis = document.querySelector("#mainDiv");
const spydiv = document.querySelector(".spydiv");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "hi-IN";
recognition.continuous = false;
recognition.interimResults = false;

startBtn.onclick = () => {
  output.innerText = "Listening...";
  recognition.start();
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  // console.log(text); // चेक करने के लिए कि क्या सुन रहा है

  // आपने जो नया कोड बताया था: "कृष का सुनेगा गाना"
  if (text == "कृष का सुनेगा गाना") {
    output.innerText = "Correct code! Redirecting...";
    output.style.color = "green";

    // सही कोड होने पर 2 सेकंड बाद गूगल खुलेगा
    setTimeout(() => {
      window.location.href = "https://account.mongodb.com/account/login";
    }, 2000);
    
  } else {
    // गलत कोड होने पर यह चलेगा
    output.innerText = "Incorrect code, try again!";
    output.style.color = "red";
  }
};

recognition.onerror = (event) => {
  console.error("Error:", event.error);
  output.innerText = "Error: " + event.error;
  output.style.color = "red";
};
