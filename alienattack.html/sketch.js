function setup() {
  createCanvas(720, 720);
  stroke(150, 50, 120);
  noLoop();
  // background(20, 80, 80);
}


function draw() {
  makeAlien(width / 2, 280, 6);
  arc(359, 489, 50, 50, 0, PI, CHORD);
  ellipse(219.7, 358, 40, 40);
  ellipse(500, 358, 40, 40);
}

function makeAlien(x, radius, level) {
  const thing = (126 * level) / 4.0;
  fill(thing);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 0.5) {
    level = level - 1;
    makeAlien(x - radius / 2, radius / 2, level);
    makeAlien(x + radius / 2, radius / 2, level);
  }
}