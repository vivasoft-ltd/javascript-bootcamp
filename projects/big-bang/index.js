const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const x = canvas.width / 2;
const y = canvas.height / 2;

let modalEL = document.getElementById("modalEl");
let finalScore = document.getElementById("finalScore");
let scoreId = document.getElementById("scoreId");
let interval;
let score = 0;
let animationId;
const projectiles = [];
const enemies = [];

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
}

class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

class Enemy {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

let player = new Player(x, y, 10, "white");

function drawPlayer() {
  player = new Player(x, y, 10, "white");
  player.draw();
}

function spawnEnemy() {
  if (!interval) {
    interval = setInterval(() => {
      const radius = Math.random() * (30 - 4) + 4;
      let x, y;
      if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
      } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
      }

      const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

      const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
      const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle),
      };
      enemies.push(new Enemy(x, y, radius, color, velocity));
    }, 1000);
  }
}

function animate() {
  animationId = requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0,0.1)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();

  projectiles.forEach((projectile, index) => {
    projectile.update();
    if (
      projectile.x + projectile.radius < 0 ||
      projectile.x - projectile.radius > canvas.width ||
      projectile.y + projectile.radius < 0 ||
      projectile.y - projectile.radius > canvas.height
    ) {
      projectiles.splice(index, 1);
    }
  });

  enemies.forEach((enemy, index) => {
    enemy.update();
    // End Game
    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
    if (dist - player.radius - enemy.radius < 1) {
      cancelAnimationFrame(animationId);
      modalEL.style.display = "block";
      projectiles.splice(0, projectiles.length);
      enemies.splice(0, enemies.length);

      document.getElementById("scoreId").innerHTML = score;
      document.getElementById("finalScore").innerHTML = score;
      score = 0;
      clearInterval(interval);
      interval = null;
    }

    projectiles.forEach((projectile, projectileIndex) => {
      // Detect contact between projectile and enemy
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);

      if (dist - projectile.radius - enemy.radius < 1) {
        if (enemy.radius - 10 > 10) {
          enemy.radius -= 10;
          score += 5;
          document.getElementById("scoreId").innerHTML = score;
          setTimeout(() => {
            projectiles.splice(projectileIndex, 1);
          }, 0);
        } else {
          setTimeout(() => {
            enemies.splice(index, 1);
            projectiles.splice(projectileIndex, 1);

            score += 10;
            document.getElementById("scoreId").innerHTML = score;
          }, 0);
        }
      }
    });
  });
}

window.addEventListener("click", (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );
  const velocity = {
    x: Math.cos(angle) * 5,
    y: Math.sin(angle) * 5,
  };
  projectiles.push(
    new Projectile(canvas.width / 2, canvas.height / 2, 5, "white", velocity)
  );
});

function startGame() {
  modalEL.style.display = "none";
  document.getElementById("scoreId").innerHTML = score;
  animate();
  spawnEnemy();
}
