class Particle{
    constructor(x,y,radius) {

        var options = {
            restitution:0.4
        }
        this.radius = radius;

        this.body = Bodies.circle(x,y,this.radius,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display() {
        var angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
};
