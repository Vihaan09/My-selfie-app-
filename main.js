var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();

function start() {

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    path = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = path;
    console.log(path);
    if(path == "take my selfie") {

        speak();
    }
    
}

function speak() {

    var speech = window.speechSynthesis;
    data = "taking your picture in 5 seconds, 4, 3, 2, 1"
    textspeech = new SpeechSynthesisUtterance(data);
    speech.speak(textspeech);
    Webcam.attach("camera");

    setTimeout (function(){

        click();
        save();
    }, 5000);

}

Webcam.set ({

    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

function click() {

    Webcam.snap(function(urI) {

        document.getElementById("result").innerHTML = '<img id="clicked" src="'+ urI +'">';
    });

}

function save() {

    link = document.getElementById("link");
    link.href = document.getElementById("clicked").src;
    link.click();
}