noseX= 0 //to indicate noseX and noseY hold numbers
noseY= 0
function preload() { //image uploaded to server has been registered in our files
    clown_nose= loadImage("https://i.postimg.cc/sgzNwb18/455-4557163-icon-clown-nose-circle-hd-png-download-1-removebg-preview.png");

}
function setup() {
    canvas= createCanvas(600,400) //predifined p5 function
    canvas.center() // to keep canvas in centre
    video= createCapture(VIDEO) //to display video
    video.hide()// to hide video
    posenet=ml5.poseNet(video,modelloaded) //initialising posenet model. | poseNet-> Predefined ml5 function.
    posenet.on('pose',gotposes) //pose gives x&y coordinates of 17 points of body | gotposes is a function that is being called.
}
function draw() {
    image(video,10,10,580,380) //p5 predifined function: to place pic/vid (vide,x,y,w,h)
    //fill("#570d11")
   // stroke("#0dd3de")
    //circle(noseX-25,noseY-40,25)
    image(clown_nose,noseX-60,noseY-60,100,40) //makes the image appear on your nose
}
function snapshot() {
    save("filtered-image.PNG"); //to download image
}
function modelloaded() {
    console.log("Model is loaded"); 
}
function gotposes(result){
    if(result.length>0) {
    console.log(result); //to see how result looks
    noseX= result[0].pose.nose.x //to fetch x coordinate
    noseY= result[0].pose.nose.y // to fetch y coordinate
    console.log("X-Coordinate of Nose="+noseX);
    console.log("Y-Coordinate of Nose="+noseY);
    }
}

