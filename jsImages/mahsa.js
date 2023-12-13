var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");


ctx.beginPath();
ctx.fillstyle = "black";
ctx.fillRect(350, 40, 0, 0.3);
ctx.stroke();

ctx.beginPath();
ctx.arc(75,75,50,0,2*Math.PI);
ctx.fillStyle= "turquoise";
ctx.strokeStyle= "turquoise";
ctx.stroke();
ctx.fill()

ctx.beginPath();
ctx.arc(150,75,50,0,2*Math.PI);
ctx.fillStyle= "pink";
ctx.strokeStyle= "pink";
ctx.fill();
ctx.stroke();
