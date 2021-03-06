class ball{
    constructor(x,y){
        var options ={
            friction:1.0,
            density:1.0,
           restitution:1.0
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("yellow")
        ellipse(0,0,this.radius);
        pop();
    }
}