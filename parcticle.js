class Parcticle{
    constructor(x, y, radius){
        var options = {
            restitution: 0.4,
            friction: 0.0003
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.color = color(random(0, 255), random(0,255), random(0,255));
        this.radius = 15;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        circle(pos.x, pos.y, this.radius);
    }
}