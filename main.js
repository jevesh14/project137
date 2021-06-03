var status="";
var objects = [];
var text_value = "";
function preload(){
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
image(video,0,0,500,500);
text_value = document.getElementById("provided").value;
if(status != ""){
    objectDetector.detect(video,gotResult);
    document.getElementById("model_h3").innerHTML="Objects Detected";

    for(i=0; i<objects.length; i++){
        if(objects[i].label == text_value){
document.getElementById("status").innerHTML=text_value+" is found";
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance("Object Mentioned Is Found");
synth.speak(utterThis);
synth.stop();
        }
        else{
            document.getElementById("status").innerHTML=text_value+" not found";

        }
    }
}
}

function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("model_h3").innerHTML="Detecting Objects";

}

function modelLoaded(){
    console.log("cocossd is loaded");
status = "true";
}