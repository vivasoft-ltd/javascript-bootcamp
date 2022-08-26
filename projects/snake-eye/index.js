const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

let canvasW, canvasH;
canvasW = canvas.width;
canvasH = canvas.height;

let eyes = [],
  delta,
  numberOfEyes = 300;
const ctx = canvas.getContext("2d");

console.log(canvas);

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Eye {
  constructor(eye) {
    this.x = eye.x;
    this.y = eye.y;
    this.radius = eye.radius;
  }
  draw() {
    ///// Eye
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ///// Get Angle between mouse and (Irish and Pupil)
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    delta = Math.atan2(dy, dx);

    //// Irish
    let irish_x = this.x + Math.cos(delta) * (this.radius / 10);
    let irish_y = this.y + Math.sin(delta) * (this.radius / 10);
    let irish_radius = this.radius / 1.2;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(irish_x, irish_y, irish_radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    //// Pupil
    let pupil_x = this.x + Math.cos(delta) * (this.radius / 2);
    let pupil_y = this.y + Math.sin(delta) * (this.radius / 2);
    let pupil_radius = this.radius / 2.5;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(pupil_x, pupil_y, pupil_radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //// pupil reflection
    ctx.beginPath();
    ctx.arc(
      pupil_x - pupil_radius / 3,
      pupil_y - pupil_radius / 3,
      pupil_radius / 2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fill();
    ctx.closePath();

    //// Mouse
    ctx.beginPath();
    ctx.fillStyle = "gold";
    ctx.arc(mouse.x, mouse.y, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}

function init() {
  eyes = [];
  for (let ind = 0; ; ind++) {
    if (eyes.length >= numberOfEyes) break;
    let eye = {
      radius: Math.floor(Math.random() * 100 + 5),
      x: Math.random() * canvasW,
      y: Math.random() * canvasH,
    };
    let flag = 0;
    for (let i = 0; i < eyes.length; i++) {
      let previousEye = eyes[i];
      let dx = previousEye.x - eye.x;
      let dy = previousEye.y - eye.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < previousEye.radius + eye.radius) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) eyes.push(new Eye(eye));
  }
  console.log(eyes);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvasW, canvasH);
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].draw();
  }
}

window.addEventListener("resize", function (e) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

init();
animate();
