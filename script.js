function colorchange() {
    var action = document.querySelector("body")
    action.style.backgroundColor = "red"

}


function setBg() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log("Done! You did it!!!");
    // color.innerHTML = "#" + randomColor;
}

function clrpickr() {

    // Selection of id's and classes from html document 
    const bgclr = document.getElementById("inpt");
    const headingg = document.querySelector(".row");

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
}