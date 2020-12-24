class Stone
{
constructor (x,y,r)
{
    var options={
        'restitution':0,
        'friction':1.2,
        'density':1,
        'isStatic': false
    }
    this.image=loadImage("Sprites/stone.png")
    this.r=r;
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body);
}
display()
{
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    strokeWeight(3);
    fill(255,0,255)
    imageMode(CENTER)
    image(this.image,0,0,70,70)
    pop()
  }

}