console.log('I am inside canvas.js!!!!');
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "#96644e";
c.fill;
c.fillRect(73, 100, 15, 50);

c.beginPath();
c.moveTo(50, 110);
c.lineTo(80, 60);
c.lineTo(110, 110);
c.lineTo(50,110);
c.stroke();
c.fillStyle = "green";
c.fill();

c.beginPath();
c.moveTo(50, 90);
c.lineTo(80, 40);
c.lineTo(110, 90);
c.lineTo(50,90);
c.stroke();
c.fill();

c.beginPath();
c.moveTo(50, 70);
c.lineTo(80, 20);
c.lineTo(110, 70);
c.lineTo(50,70);
c.stroke();
c.fill();

