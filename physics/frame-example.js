var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var ball;
var gravity = 0.1;

window.onload = function () {
    ball = new Ball(20, '#0000ff');
    ball.x = 50;
    ball.y = 50;
    ball.vx = 2;
    ball.draw(context);
    animFrame();
};

function animFrame() {
    requestAnimationFrame(animFrame, canvas);
    onEachStep();
}

function onEachStep() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    simulateGravityFall(ball, context);
}

function simulateGravityFall(ball, context) {
    ball.vy += gravity;
    ball.x += ball.vx;
    ball.y += ball.vy;

    var bottomHitY = canvas.height - ball.radius;
    if (ball.y > bottomHitY) {
        ball.y = bottomHitY;
        ball.vy *= -0.8; // reverse and reduce vertical speed.
    }

    var beyondCanvasX = canvas.width + ball.radius;
    if (ball.x > beyondCanvasX) {
        ball.x = -ball.radius; // wrap it around
    }

    ball.draw(context);
}
