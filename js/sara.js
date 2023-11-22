var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle= "rgba(92, 195, 246, 1";
ctx.fillRect(0, 0, 120, 120);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "rgba(240, 130, 150, 1";
ctx.fillRect(20, 0, 10, 120);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "rgba(255, 80, 60, 1";
ctx.fillRect(70, 20, 20, 100);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "rgba(9, 149, 30, 1";
ctx.fillRect(0, 15, 120, 15);
ctx.stroke();

ctx.beginPath();
ctx.arc(80, 30, 20, 0, 2 * Math.PI)
ctx.fillStyle= "rgba(249, 249, 0, 1";
ctx.strokeStyle="rgba(249, 249, 0, 1";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 90);
ctx.lineTo(50, 90);
ctx.lineTo(30, 50);
ctx.lineTo(10, 90);
ctx.fillStyle="rgba(246, 200, 50, 1";
ctx.strokeStyle="rgba(246, 200, 50, 1";
ctx.fill();
ctx.stroke();

console.log(ctx)
