class Mango{
    constructor (x,y,width,height)
{
    var options={
        'restitution':0,
        'friction':1,
        'isStatic': true
    }
    this.image=loadImage("Sprites/mango.png")
   
   
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
}
display()
{
    var pos=this.body.position;
    push()
    strokeWeight(3);
    fill(255,0,255)
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
  }
}