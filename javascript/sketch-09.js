let detailY;
function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(25, 135, 98);
  detailY = createSlider(10, 16, 1);
  detailY.position(1, height * 5);
  detailY.style('width', '80px');
}

function draw() {
    push();
    translate(-303, -663);
    noFill();
    stroke(0);
    strokeWeight(5);
    rect(32, 303, 55, 760);
    pop();

    push();
    rotate(45);
    rotateY(millis() / 1000);
    cylinder(400, 65, 6, detailY.value());
    pop();

    push();
    translate(180, -708);
    fill(0, 82, 54);
    noStroke();
    rect(32, 303, 55, 760);
    pop();
}


function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-09", "png");
    }
}