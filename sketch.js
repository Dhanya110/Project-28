var ground1,treeObject,world,stone1,boy1,connector;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var mango9,mango10,mango11,mango12,mango13,mango14,mango15;
var mango16,mango17,mango18,mango19,mango20,mango21;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  
  boyImage=loadImage("Sprites/boy.png");
 
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
	ground1=new Ground(600,690,1200,30)
	treeObject= new Tree(1100,500,20,100)

	stone1=new Stone(240,565,10,10)
	connector=new Connection(stone1.body,{x:220,y:550})
	mango1=new Mango(950,250,40,40);
	mango2=new Mango(750,340,40,40);
	mango3=new Mango(760,220,40,40);
	mango4=new Mango(800,280,40,40);
	mango5=new Mango(840,180,40,40);
	mango6=new Mango(840,350,40,40);
	mango7=new Mango(880,250,40,40);
	mango8=new Mango(930,330,40,40);
	mango9=new Mango(920,160,40,40);
	mango10=new Mango(1010,310,40,40);
	mango11=new Mango(880,100,40,40);
	mango12=new Mango(960,100,40,40);
	mango13=new Mango(980,190,40,40);
	mango14=new Mango(1030,240,40,40);
	mango15=new Mango(1020,130,40,40);
	mango16=new Mango(1020,70,40,40);
	mango17=new Mango(1070,180,40,40);
	mango18=new Mango(1090,290,40,40);
	mango19=new Mango(1120,220,40,40);
	mango20=new Mango(1150,280,40,40);
	mango21=new Mango(1130,340,40,40);
  mango22=new Mango(870,300,40,40);
  
 

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(51,153,255);
  ground1.display();
  treeObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();

 
  connector.display();

 

  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango6)
  detectCollision(stone1,mango7)
  detectCollision(stone1,mango8)
  detectCollision(stone1,mango9)
  detectCollision(stone1,mango10)
  detectCollision(stone1,mango11)
  detectCollision(stone1,mango12)
  detectCollision(stone1,mango13)
  detectCollision(stone1,mango14)
  detectCollision(stone1,mango15)
  detectCollision(stone1,mango16)
  detectCollision(stone1,mango17)
  detectCollision(stone1,mango18)
  detectCollision(stone1,mango19)
  detectCollision(stone1,mango20)
  detectCollision(stone1,mango21)
  detectCollision(stone1,mango22)

stone1.display();

image(boyImage,180,460,230,300)

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    connector.fly();
}


function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=mango.width+stone1.r){
	Matter.Body.setStatic(mango.body,false)
}
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:240,y:565})
		connector.attach(stone1.body);
	}
}