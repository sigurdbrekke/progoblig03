// Canvas-kode for det nederlandske flagget//
var canvas = document.getElementById("dutchFlagCanvas");
var context = canvas.getContext("2d");

// nederlandske flagget på canvas
context.fillStyle = "#e41e26"; // rød
context.fillRect(0, 0, canvas.width, canvas.height / 3);

context.fillStyle = "#ffffff"; // hvit
context.fillRect(0, canvas.height / 3, canvas.width, canvas.height / 3);

context.fillStyle = "#0072c6"; // blå
context.fillRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
