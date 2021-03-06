/*Script of commandjam.tk
Copyright © 2019 CommandJam - All Rights Reserved*/
var canvas = $("#backcanvas")[0];
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = $("#backcanvas")[0].getContext('2d');
var particles = [];
for (var i = 0; i < window.innerWidth / 10; i++) {
    xr = Math.random() * window.innerWidth;
    yr = Math.random() * window.innerHeight;
    dxr = Math.random() - 0.5;
    dyr = (Math.random() * 2) + 2;
    r = (Math.random() * 2) + 3;
    o = (Math.random() * 0.2);
    particles.push(new Particle(xr, yr, dxr, dyr, r, o));
}

function Particle(x, y, dx, dy, r, o) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.o = 0;
    this.draw = function () {
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2, false);
        c.fillStyle = "rgba(255, 255, 255, " + o + ")"
        c.fill();
    };
    this.count = function () {
        x += Math.sin(y / 100);
        x += dx;
        y += dy;
        if (y > window.innerHeight) {
            y = -10;
            x = Math.random() * window.innerWidth;
        }
    }
}
animate();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < particles.length; i++) {
        particles[i].draw();
    }
    for (var i = 0; i < particles.length; i++) {
        particles[i].count();
    }
}
$(window).resize(function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})
