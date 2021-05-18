class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255
  
      World.add(world, this.body);
   
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      console.log(this.body.speed)
      if (this.body.speed<3){
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop (); 
    }
    else {
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5
      tint (255,this.visibility)
      rect(0, 0, this.width, this.height);
      pop()
    }
  }
  score(){
    if (this.visiblity<0&&this.visiblity>-105){
      score=score+1
    }
  }
}