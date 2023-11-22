var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");



   ctx.beginPath();
   ctx.fillstyle = "purple";
   ctx.fillRect(350, 40, 0, 0.3);
   ctx.stroke();


   ctx.beginPath();
   ctx.arc(75,75,50,0,2*Math.PI);
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(210,75,50,0,2*Math.PI);
   ctx.fillStyle= "black";
   ctx.strokeStyle= "black";
   ctx.fill();
   ctx.stroke();

console.log();
