leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
    
}

function modelLoaded()
{
    console.log("PoseNet has been inisalized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference = " + difference);
    }
}
    
function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill(FFE787);
    text("Harish", 50, 100);
}

function draw()
{
    background('#969297');
    
}