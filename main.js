
  const output = document.getElementById("output");
  const startBtn = document.getElementById("start");
  const dis = document.querySelector("#mainDiv")
  const spydiv = document.querySelector(".spydiv")

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "hi-IN"; 
  recognition.continuous = false;
  recognition.interimResults = false;

  startBtn.onclick = () => {
    output.innerText = ""
    recognition.start();
  };

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    // output.innerText = text;
    if(text == "कृष का गाना सुनेगा"){
        // console.log("donee")
        setTimeout(() => {
            dis.style.display = "flex"
            spydiv.style.display = "none"
        },2000)
        // dis.style.display = "flex"
        // spydiv.style.display = "none"
        output.innerText = "correct code you Entered!"
        output.style.color = "green"
    }
    else{
        output.innerText = "incorrect code try again!"
        output.style.color = "red"
    }
  };

  recognition.onerror = (event) => {
    console.error("Error:", event.error);
    output.innerText = event.error
    output.style.color = "red"
  };



