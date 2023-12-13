const canvas = document.getElementById("Smiley");
 const ctx = canvas.getContext("2d");

 ctx.beginPath();
 ctx.arc(150, 70, 70 ,70, 70 * Math.PI)
 ctx.fillStyle = "#FFE4C4";
 ctx.strokeStyle="#FFE4C4";
 ctx.fill();
 ctx.stroke();

 ctx.beginPath();
 ctx.arc(120, 50, 10 ,10, 10 * Math.PI)
 ctx.fillStyle = "black";
 ctx.strokeStyle="black";
 ctx.fill();
 ctx.stroke();

 ctx.beginPath();
 ctx.arc(180, 50, 10 ,10, 10 * Math.PI)
 ctx.fillStyle = "black";
 ctx.strokeStyle="black";
 ctx.fill();
 ctx.stroke();

 ctx.beginPath();
 ctx.fillStyle = "black";
 ctx.strokeStyle="black";
 ctx.fillRect(110, 90, 80, 20);
 ctx.fill();
 ctx.stroke();

 console.log(ctx);
