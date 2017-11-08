var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var graph = new Graph(context, -4, 4, -10, 10, 275, 210, 450, 350);
graph.drawgrid(1, 0.2, 5, 1);
graph.drawaxes('x', 'y');

var xA = [];
var yA = [];

for (var i = 0; i <= 100; i++) {
    xA[i] = (i - 50) * 0.08;
    yA[i] = f(xA[i]);
}

graph.plot(xA, yA, '#ff0000', false, true)

function f(x) {
    //var y = 2 * x + 1;
    //var y = x * x; // y=x2 (parabolic curve)
    //var y = Math.exp(-x * x);
    //var y = -0.5 * Math.pow(x, 5) + 3 * Math.pow(x, 3) + x*x - 2*x -3; // polynomial curve
    //var y = Math.exp(-x*x);
    var y = Math.exp(x*x);

    return y;
}