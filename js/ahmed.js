<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI)
ctx.fillStyle= "black";
ctx.strokeStyle="black";
ctx.fill();
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(92.5, 50, 15, 0, 2 * Math.PI)
ctx.fillStyle= "white";
ctx.strokeStyle="white";
ctx.fill();
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "15px Arial";
ctx.strokeStyle = "black";
ctx.strokeText("8", 88, 55);
</script> 
