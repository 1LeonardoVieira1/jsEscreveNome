

function setup() {
    createCanvas(800, 800);
    background("blue")
  }
  
  function draw() {
    stroke("grey");
    fill("white ");
  
    
   if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  