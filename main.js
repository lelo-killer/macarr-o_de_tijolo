var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
function start(){
    Textbox.innerHTML= "" ;
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content =="macarrão de tijolo")
    {
        console.log("tirando selfie ---");
        speak();
    }
}
camera = document.getElementById("camera");
Webcam.set({
    width:520,
    height:460,
    image_format : 'jpeg',
    jpeg_quality:90

});

function speak(){
    var synth = window.speechSynthesis ;
    speakData = "boing boing BOING"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 3000
    );
}
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
}