console.log("I am inside Week 3 JS!!!");
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.font = "30px Arial";
c.fillText("Welcome to My Game", 10, 50);