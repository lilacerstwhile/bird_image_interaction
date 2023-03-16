let x = 200, y=150;
let canvas, circles;

var c1, c2;

const controls = {
  view: {x: 0, y: 0, zoom: 1},
  viewPos: { prevX: null,  prevY: null,  isDragging: false },
};
let currentImgIndex = 0;
const images = [];

function preload() {
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
  img4 = loadImage('4.png');
  img5 = loadImage('5.png');
  
  img1_c = loadImage('img/macaw_i.png');
  img2_c = loadImage('img/flamingo_i.png');
  img3_c = loadImage('img/yellow_i.png');
  img4_c = loadImage('img/peacock_i.png');
  img5_c = loadImage('img/owl_i.png');
  
  img = loadImage('tap.png');
  
  img1_g = loadImage('flamingo.gif');
  img2_g = loadImage('macaw.gif');
  img3_g = loadImage('colibri.gif');
  img4_g = loadImage('peacock.gif');
  img5_g = loadImage('owl.gif');
}

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
    
    // c1 = color(255,204,0);
    // c2 = color(255);
    // setGradient(c1, c2);
}

function draw() {
    background(0);

  //Draw Imges
  img1_c.resize(120, 120);
  image(img1_c, 140, 100);
  // circle(200,300, 100);
  
  img2_c.resize(120, 120);
  image(img2_c, 290, 100);
  // circle(350,300, 100);
  
  img3_c.resize(120, 120);
  image(img3_c, 440, 100);
  // circle(500,300, 100);
  
  img4_c.resize(120, 120);
  image(img4_c, 590, 100);
  // circle(650,300, 100);
  
  img5_c.resize(120, 120);
  image(img5_c, 740, 100);
  // circle(800,300, 100);
  
  img.resize(50, 50);
  image(img, x, y); // draw the Flamingo.png image at (0, 0)
  
  
  if (x>150 && y>100 && x<250 && y<250){
    image(img1, 140, 100);
    image(img1_g, 300, 300);
    img1.resize(120,120);
    stroke(0);
    fill(255);
    textSize(24);
    text('Flamingo', 150, 70)
  }
  
  if (x>290 && y>100 && x<350 && y<250){
    image(img2, 290, 100);
    image(img2_g, 300, 300);
    img2.resize(120,120);
    stroke(0);
    fill(255);
    textSize(24);
    text('Macaw', 310, 70)
  }
  
    if (x>440 && y>100 && x<520 && y<250){
    image(img3, 440, 100);
    image(img3_g, 300, 300);
    img3.resize(120,120);
    stroke(0);
    fill(255);
    textSize(24);
    text('Colibri', 460, 70)
  }
  
  if (x>590 && y>100 && x<630 && y<250){
    image(img4, 590, 100);
    image(img4_g, 300, 300);
    img4.resize(120,120);
    stroke(0);
    fill(255);
    textSize(24);
    text('Peacock', 600, 70)
  }
  
  if (x>730 && y>100 && x<820 && y<250){
    image(img5, 740, 100);
    image(img5_g, 300, 300);
    img5.resize(120,120);
    stroke(0);
    fill(255);
    textSize(24);
    text('Owl', 750, 70)
  }
  
  console.log(x);
  
}

function keyPressed(){
  if (key === 's'){
    x=x+20;
  }
   else if (key === 'a'){
    x=x-20;
  }
    if (key === 'd'){
    y=y-20;
  }
    if (key === 'w'){
    y=y+20;
  }
}