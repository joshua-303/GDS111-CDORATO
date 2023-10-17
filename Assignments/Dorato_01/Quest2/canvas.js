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

c.beginPath();
c.arc(100, 75, 5, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(80, 60, 5, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(60, 90, 5, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.moveTo(70, 12);
c.lineTo(75, 12);
c.lineTo(80, 5);
c.lineTo(85, 12);
c.lineTo(90, 12);
c.lineTo(85, 17);
c.lineTo(88, 23);
c.lineTo(80, 20);
c.lineTo(72, 23);
c.lineTo(75, 17);
c.lineTo(70, 12);
c.stroke();
c.fillStyle = "yellow";
c.fill();