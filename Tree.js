class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        this.image=loadImage("Sprites/tree.png");
        World.add(world,this.body);
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,950,358,500,670);
        pop()
    }
}