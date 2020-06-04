
let u
let t = 0
let v0 = -10
const a = 9.8/100
let v = 3
let T = 0
let P = 1
let m = 0

var ball = {
x: 0,
y: 0,
diameter:50
};
var ball2 = {
x: 0,
y: 0,
diameter:50
};

function setup() {
createCanvas(600, 480);

x = 0
y = 0

}

function mousePressed() {
v = 10
}
function draw() {
background(61,196,160);
t = t + 1
T = T + 1
x = P*((v *T))+m 
y = height+20+((v0*t)+(0.5*a)*(t*t))
u = v0 +(a*t)

ellipse(ball.x, ball.y, ball.diameter, ball.diameter); 
if (y >= height+20){
v0 = -(u*9/10)
  t = 0

}
ellipse(x, y, 50, 50);
if (x >=width){
  P = P*-1
  m = x
  T = 0
  
  }
  //v0 = -10
if (x <=0){
  P = P*-1
  m = x
  T = 0


}
}
