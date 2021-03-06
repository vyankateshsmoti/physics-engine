const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint; 

var engine,world;
var Block,Block1,Block2,Block3,Block4,Block5;
var cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12,cube13,cube14,cube15,cube16,cube17;
var Square,Square1,Square2,Square3;
var small_Square,small_Square1;
var V,Y,A,N,K,A2,T,E,S,H;
var Ground;
var Ball;
var SlingShot;
var Candle;


var Log,Log1,Log3;

function setup() {
  createCanvas(1400,500);

  engine = Engine.create();
  world = engine.world;
  


  Block = new block(605,312,80,80);
  Block2 = new block(680,300,80,80);
  Block4 = new block(760,200,80,80);

  Block1 = new block(1145,419,80,80);
  Block3 = new block(1065,300,80,80);
  Block5 = new block(985,200,80,80);

  Square = new square(760,300,60,60);
  Square2 = new square(840,200,60,60);

  Square1 = new square(985,300,60,60);
  Square3 = new square(920,200,60,60)

  small_Square = new square2(820,300,40,40);

  small_Square1 = new square2(925,300,40,40);
  
 Candle = new candle(860,100,150,150);


  cube1 = new cube(755,450,30,30);
  cube2 = new cube(785,450,30,30);
  cube3 = new cube(815,450,30,30);
  cube4 = new cube(845,450,30,30);
  cube5 = new cube(875,450,30,30);
  cube6 = new cube(905,450,30,30);
  cube7 = new cube(935,450,30,30);
  cube8 = new cube(965,450,30,30);
  cube9 = new cube(995,450,30,30);
  cube10 = new cube(1025,450,30,30);
  cube11 = new cube(1055,450,30,30);
  cube12 = new cube(1085,450,30,30);
  cube13 = new cube(725,450,30,30);
  cube14 = new cube(695,450,30,30);
  cube15 = new cube(665,450,30,30);
  //cube16 = new cube(635,450,30,30);
  //cube17 = new cube(605,450,30,30);


   V = new v(680,400,40,40);
   Y= new y(710,400,40,40);
   A= new a(740,400,40,40);
   N= new n(780,400,40,40);
   K= new k(820,400,40,40);
   A2= new a(860,400,40,40);
   T= new t(900,400,40,40);
   E= new e(940,400,40,40);
   S= new s(980,400,40,40);
   H= new h(1020,400,40,40);

 
 
   Ball = new ball(200,200);

   SlingShot = new slingshot(Ball.body,{x:200,y:200});

  Ground = new ground(700,485,1500,20);

  Log = new log(930,300,800,20);
  Log1 = new log(880,250,550,20);
  Log2 = new log(870,150,350,20);
}

function draw() {
 
  background("black");
  //text(mouseX,200,200);
  //text(mouseY,300,200);
  
  Engine.update(engine);
  drawSprites();
  Block.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();

  cube1.display();
  cube2.display();
  cube3.display();
  cube4.display();
  cube5.display();
  cube6.display();
  cube7.display();
  cube8.display();
  cube9.display();
  cube10.display();
  cube11.display();
  cube12.display();
  cube13.display();
  cube14.display();
  cube15.display();
  //cube16.display()
  //cube17.display()
 // cube12.display()

  V.display();
  Y.display();
  A.display();
  N.display();
  K.display();
  A2.display();
  T.display();
  E.display();
  S.display();
  H.display();

  Ball.display();

  Candle.display();

  SlingShot.display();

Square.display();
Square2.display();

Square1.display();
Square3.display();

small_Square.display();

small_Square1.display();
   
  Ground.display();
  Log.display();
  Log1.display();
  Log2.display();
}
function mouseDragged(){
  Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  SlingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    SlingShot.attach(Ball.body);
    Matter.Body.setPosition(Ball.body,{x:100,y:100});
  }
}