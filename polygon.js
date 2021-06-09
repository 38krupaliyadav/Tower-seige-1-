class Polygon{
 constructor(){
     var options(){
      'density':4,
      'friction': 1.0,
      'restitution':0.5
     }
     };
     display(){
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    pop();
  };
