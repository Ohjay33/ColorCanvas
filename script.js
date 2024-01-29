const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight - 170;
canvas.width = window.innerWidth - 100;
// canvas.backgroundColor = window.backgroundColor - white

let x = null,
    y = null;
context.lineWidth = 4;


let draw = false;
context.strokeStyle = "#010600";

window.addEventListener('mousedown', (e) => (draw = true));
window.addEventListener('mouseup', (e) => (draw = false));


window.addEventListener('mousemove', (e) => {
    if (x == null || y == null || !draw) {
        x = e.clientX;
        y = e.clientY;
        return;
    }
    let currentX = e.clientX,
        currentY = e.clientY;

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(currentX, currentY);
    context.stroke();

    x = currentX;
    y = currentY;

});

    // The function to clear the canvas
    document.getElementById('clear').onclick = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.body.style.backgroundColor = "white";
    
    };

    // function to pick the color and paint
    document.querySelectorAll(".colorChange").forEach((el) => {
        el.onclick = function () {
            context.strokeStyle = el.style.backgroundColor;
        };
    });



    // Selection of id's and classes from html document 
const bgclr = document.getElementById("clr"); 
const headingg = document.querySelector(".head"); 

// Here we are adding event listener which 
// is used to detect the mouse movement 
bgclr.addEventListener("input", () => { 
// This updates the background color which is 
// picked by the user from the picker 
document.body.style.backgroundColor = bgclr.value; 

// This is the conditional statement that is used 
// to change the text color from BLACK to WHITE 
// when the background color changes to dark! 
if ( 
	bgclr.value.includes("00") || 
	bgclr.value.includes("0a") || 
	bgclr.value.includes("0b") || 
	bgclr.value.includes("0c") || 
	bgclr.value.includes("0d") || 
	bgclr.value.includes("0e") || 
	bgclr.value.includes("0f") 
) { 
	headingg.style.color = "#fff"; 
} else { 
	headingg.style.color = "#000"; 
} 
}); 

