function preload(){
Beard = loadImage('Beard.png')

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses )  
}
function modelLoaded(){
    console.log('poseNet is initianlized')
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(Beard, nosex-40, nosey+10, 80, 90 ) 
}
function take_snapshot(){
 save('myImage.png')   
}
nosex = 0
nosey = 0  
function gotPoses(Results){
    if(Results.length > 0 ){
        console.log(Results);
        console.log("nose x = " + Results[0].pose.nose.x);
        nosex = Results[0].pose.nose.x;
        nosey = Results[0].pose.nose.y;
        console.log("nose y = " + Results[0].pose.nose.y);
        
    }
}



