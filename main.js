img = "";
status = "";

function preload(){
  img = loadImage('baby.jpg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}


function draw() {
  image(video, 0, 0, 380, 380);
  fill("#FF0000");
  text("Baby", 320,120);
  noFill();
  stroke("#FF0000");
  rect(300,90,270,320);
}
