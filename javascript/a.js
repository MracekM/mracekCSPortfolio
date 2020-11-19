

var x=250;
var y=550;
var x1=220;
var y1= 600;
var count=0;

function setup() {
	var canvas=createCanvas(700, 700);
	fill(255, 0, 0);
}


function draw() {
	background(220);
  backGround(); 
  scoreBoard();
  ballMove();

	

	
	
	}
	
	function scoreBoard(){
    fill(150);
	rect(150,50,400,150);
  textFont('Georgia');
	textSize(32);
	fill(40);
	text("SCORE",300,90);
	fill(0);
rect(170,120,60,5);

	if(count<=9){
	fill(90);
	rect(325,100,65,90);
	fill(255,0,0);
	textSize(72);
	text(count,339,170);
		
	}
	if(count>99){
		fill(90);
	rect(310,100,90,90);
	fill(248,24,148);
	textSize(66);
	text("eR",315,170);
		fill(255,144,0);
		stroke(0);
		ellipse(x,y,60,60);
	if(x!=200)
	{
		y-=.5;
		x-=2;
	}
		else{
	x=200;
		y=90;
			fill(0);
			text("Press to Restart",120,370);
				if(mouseIsPressed=true){
				count=0;
				x=250;
				y=550;
			}
		}
}	
	if(count>9&&count<=99){
		fill(90);
	rect(310,100,90,90);
	fill(255,0,0);
	textSize(72);
	text(count,315,170);
	}
	if(x==590&&y<500)
			count++;
  }
	
function backGround(){
fill(0,0,255);
	stroke(0,0,255);
	rect(0,300,700,200);
	fill(210, 180, 140);
	rect(0,500,700,200)
		stroke(230, 190, 140);
	fill(230, 190, 140);
	rect(0,525,700,1);
	rect(0,550,700,1);
	rect(0,580,700,1);
	rect(0,615,700,1);
	rect(0,650,700,1);
	rect(0,687,700,1);
	rect(233,501,1,25);
	rect(466,501,1,25);
	rect(233,551,1,30);
	rect(466,551,1,30);
	rect(233,616,1,35);
	rect(466,616,1,35);
	rect(233,688,1,35);
	rect(466,688,1,35);
	rect(175,526,1,25);
	rect(350,526,1,25);
	rect(525,526,1,25);
	rect(175,581,1,35);
	rect(350,581,1,35);
	rect(525,581,1,35);
	rect(175,651,1,35);
	rect(350,651,1,35);
	rect(525,651,1,35);
	fill(50,0,255);
	stroke(50,50,255);
	rect(140,301,2,199);
	rect(280,301,2,199)
		rect(420,301,2,199)
		rect(560,301,2,199)
		fill(150);
	stroke(255);
	rect(630,160,40, 440);
	fill(233,87,4);
	stroke(233,87,4);
	rect(560,230,69, 5);
	stroke(245);
	line(560,235,570,300);
	line(630,235,620,300);
line(580,235,570,300);
	line(610,235,620,300);
	line(560,235,620,300);
	line(630,235,570,300);
	line(580,235,595,300);
	line(610,235,595,300);
	fill(0);
	stroke(200);
	rect(x1,y1,80,10);
	stroke(0);
	quad(630,560,625,560,560,600,555,600);
	
}
function ballMove(){
  if(x>=250 &&x<=593&&y<=550&&count<100)
	{
		y1=600;
		if(x>=200 && x<=270){
		fill(0);
	stroke(200);
	rect(x1,y1,80,10);
		y1-=50;
		
		}
		var sp=(460-x)/5
			fill(255,144,0);
		stroke(0);
		ellipse(x,y,60,60);
		x+=5;
		y=(sp*sp)*.3;
	fill(233,87,4);
	stroke(233,87,4);
	rect(560,230,69, 5);
	stroke(245);

	}
	else if(x>593&&y<550&&count<100){
		fill(255,144,0);
		stroke(0);
		ellipse(x,y,60,60);
		y+=10;
		fill(233,87,4);
	stroke(233,87,4);
	rect(560,230,69, 5);
	stroke(245);

	}
	else if(count<100){
		
		
		fill(255,144,0);
		stroke(0);
		ellipse(x,y,60,60);
		x-=5;
	if(x<=590&&x>=525)
		y+=2;
		if(x==245){
			y=550;
		x=250;
		}
}
}

