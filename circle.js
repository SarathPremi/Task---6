class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
        this.radiusRange = 0;
        this.colorExact = "white";
    }

    get Radius() {
        return this.radiusRange;
    }

    set Radius(radius) {
        if (radius < 0) {
            console.log("Invalid radius");
            this.radiusRange = 0;
        }
        else
            this.radiusRange = radius;
    }

    get Color() {
        return this.colorExact;
    }

    set Color(color) {
        if (color != "red")
        {
            console.log("Default Color:", color);
            this.colorExact = "white";
        } 
        else
        this.colorExact = color;
    }

    get toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    get Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    get Circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle(1.3, "green");
const circle2 = new Circle(-8, "blue");
const circle3 = new Circle(2.1, "orange");
const circle4 = new Circle(2, "red");

console.log(circle2.Radius);
console.log(circle4.Color);
console.log(circle3.toString);
console.log(circle1.Area);
console.log(circle4.Circumference);