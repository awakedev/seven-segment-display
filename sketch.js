function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(220);
    sevenSegment();
}

function sevenSegment(){
    push();
    stroke(0);
    noFill();
    // A
    rect(60, 20, 78, 18);
    // B
    rect(140, 40, 18, 98);
    // C
    rect(140, 160, 18, 98);
    // D
    rect(60, 260, 78, 18);
    // E
    rect(40, 160, 20, 100);
    // F
    rect(40, 40, 20, 100);
    // G
    rect(60, 140, 80, 20);
    pop();
    
}