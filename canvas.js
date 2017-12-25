 var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(innerHeight);

if (canvas.getContext)   
{  
var ctx = canvas.getContext("2d");         
var gradient = ctx.createLinearGradient(0, 0, innerWidth, innerHeight);
gradient.addColorStop(0, 'teal');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, innerWidth, innerHeight);           
}

