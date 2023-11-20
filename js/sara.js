const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle= "rgba(92, 195, 246, 1";
ctx.fillRect(0, 0, 120, 120);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "pink";
ctx.fillRect(20, 0, 10, 120);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "red";
ctx.fillRect(70, 20, 20, 100);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle= "green";
ctx.fillRect(0, 15, 120, 15);
ctx.stroke();

ctx.beginPath();
ctx.arc(80, 30, 20, 0, 2 * Math.PI)
ctx.fillStyle= "yellow";
ctx.strokeStyle="yellow";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 90);
ctx.lineTo(50, 90);
ctx.lineTo(30, 50);
ctx.lineTo(10, 90);
ctx.fillStyle="orange";
ctx.strokeStyle="orange";
ctx.fill();
ctx.stroke();

console.log(ctx)