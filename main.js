function preload(){
}

function take_snapshot(){
    save('Downloaded_img.png');
}

function setup(){
    canvas = createCanvas( 500, 500);
    canvas.position(150,250);
    video= createCapture(VIDEO);
    video.hide();
    tint1= "";
}

function apply(){
    tint = document.getElementById("147").value;
}

function draw(){
    image(video , 150 , 250 , 500 , 500 );
    tint(tint1);
}