class Boat{
    constructor(x,y,width,height,boatPos){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.boatPosition=boatPos;
        this.image=loadImage("assets/boat.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop();
    }
}