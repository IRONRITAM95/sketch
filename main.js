function preload(){
classifier  = ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas = createCanvas(1000,500);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis ;
}

function clearCanvas(){
    background("white");
}

function classifyCanvas(){
classifier.classify(canvas ,gotresult) ;
}

function gotresult(error , results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("item_guess").innerHTML = results[0].label ;
    document.getElementById("confidence").innerHTML = results[0].confidence.toFixed(2)*100 + '%';
    var utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
}

function draw(){
 strokeWeight(7);

 stroke("black");

 if(mouseIsPressed){
     line(pmouseX, pmouseY , mouseX, mouseY);
 }
}