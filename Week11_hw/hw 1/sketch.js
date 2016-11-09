var x = 0;
var speed = 3;

var x, y;
var w = 300;
var h = 600;
var r;
var g;
var b;


function setup() {
  createCanvas(800, 800);
	background(250);
	
	x= width/2;
  y= height/2;
}

function draw() {
   r = random(255); 
   g = random(255);
   b = random(255);
   
   rectMode(CENTER);
   
   noStroke();
   
   rect(x, y, w, h);

   if(mouseX > x-w/2 && mouseX < x +w/2 && mouseY > y- h/2 && mouseY < y +h/2){ //mouseY < X x=can be exact number{// 
     //example
     //mouseX > 342
     //mouseX < 432
     //mouseY > 432
     //mouseY < 342
     //
     button = true;
    }else {
      button = false;
    }
    
    if(button === true){
      //background(250);
      fill (r,g,b);
      rect(x , y, 300, 600, 5, 5, 5, 5);
      fill(255, 204, 0);
      rect(x, 385, 270, 465, 5, 5, 5, 5);
      
      
  }else{
      //background(250);
      fill(70);
      rect(x , y, 300, 600, 5, 5, 5, 5);
      fill(225);
      rect(x, 385, 270, 465, 5, 5, 5, 5);
      
    }
    fill(50);
    ellipse(width/2, 126, 25, 25); 
    ellipse(width/2, 655, 50 , 50);
    ellipse(mouseX,mouseY,20,20);
}