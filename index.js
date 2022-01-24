//home button navigation
let webBtn = document.querySelector("button#web");
console.log(webBtn);
webBtn.addEventListener("click", (e) => {
  window.location.replace("./projects.html");
});

//burger-menu-logic
function menuOpen() {
  let burgerMenu = document.querySelector("div#burger-menu-container");
  let burgerMenuItems = document.querySelector("div.burger-menu-items");

  burgerMenu.classList.toggle("change");

  if (burgerMenu.className === "") {
    burgerMenuItems.style.display = "none";
  } else if (burgerMenu.className === "change") {
    burgerMenuItems.style.display = "flex";
    burgerMenuItems.style.flexDirection = "column";
    burgerMenuItems.style.width = "100vw";
    burgerMenuItems.style.height = "100vh";
    burgerMenuItems.style.position = "absolute";
    burgerMenuItems.style.zIndex = "111111111";
    burgerMenuItems.style.background = "#ff4f8e";
    burgerMenuItems.style.boxShadow = "7px 0px 15px 0px #00000036";
    burgerMenuItems.style.borderRight = "1px solid #ffb2d1";
    burgerMenuItems.style.top = "0";
    burgerMenuItems.style.left = "0";
  }
}

//canvas animation
var canvas = document.getElementById("canvas_1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

$(function () {
  var text = $(".text");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

//full circles
function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.fillStyle = "black";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.strokeStyle = color;
    c.stroke();
    c.fillStyle = color;
    c.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor(colorArray) {
  var i = Math.floor(Math.random() * Math.floor(colorArray.length));
  return colorArray[i];
}
var colorArray = [" #ffb2d1", "#ff4f8e"];

var circleArray = [];
for (var i = 0; i < 200; i++) {
  var radius = Math.random() * 100;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;

  circleArray.push(
    new Circle(x, y, dx, dy, radius, getRandomColor(colorArray))
  );
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
draw();

