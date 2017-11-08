var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var ball;
var t;

window.onload = function() {
    ball = new Ball(20, '#0000ff');
    ball.x = 0;
    ball.y = canvas.height - ball.radius;
    ball.vx = 200;
    ball.draw(context);
    t = new Date().getTime();
    animFrame();
};

function animFrame() {
    requestAnimationFrame(animFrame, canvas);
    onEachStep();
}

function onEachStep() {
    var dt = (new Date().getTime() - t) / 1000; // time elapsed in seconds since last call
    t = new Date().getTime(); // reset t
    ball.x += ball.vx * dt;
    if (ball.x > canvas.width + ball.radius) {
        ball.x = -ball.radius;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(context);
}
