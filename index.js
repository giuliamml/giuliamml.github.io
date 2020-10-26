//home button navigation
let webBtn = document.querySelector("button#web");
console.log(webBtn);
webBtn.addEventListener("click", (e) => {
  window.location.replace("./projects.html");
});




//canvas animation
var canvas = document.getElementById("canvas_1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

$(function() {
  var text = $(".text");
  $(window).scroll(function() {
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

  this.draw = function() {
    c.fillStyle = "black";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.strokeStyle = color;
    c.stroke();
    c.fillStyle = color;
    c.fill();
  };
  this.update = function() {
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
var colorArray = [
  // "#090909",
  // "#ED07B5",
  //  "#F9DBBD",
  // "#F9D6D6",
  // "#CEC2FF"
  "#e9e2fb",
  "#fbf5e2",
  "#f5e2fb",
];

var circleArray = [];
for (var i = 0; i < 100; i++) {
  var radius = Math.random() * 65;
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

// //home button navigation
// let btn = document.querySelector("button#web");
// btn.addEventListener("click", (e) => {
//   window.location.replace("/projects.html");
// });

