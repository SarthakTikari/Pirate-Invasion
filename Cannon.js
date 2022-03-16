class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannonTopImg = loadImage("./assets/canon.png")
    this.cannonBaseImg = loadImage("./assets/cannonBase.png")


    
  }
  display(){
    //code to create cannon top
    push()
    imageMode(CENTER)
    
    translate(this.x,this.y)
    rotate(this.angle)
    image(this.cannonTopImg ,0,0,this.width,this.height)
    pop()
    //code to create cannon base
    noFill()
    image(this.cannonBaseImg,70,20,200,200)
  }
  
}
