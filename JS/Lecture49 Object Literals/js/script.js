var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            // this.radius = 20; // it becomes global object instead of on our literalCircle object
            self.radius = 20;
        };


        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());