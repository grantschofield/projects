let x = 0
let a = 100
let A = 100
let t = 0
let w = 3
let R = 255
let G = 40
let B = 160
let w2 = 3

function setup() {
  createCanvas(400, 400);
background(220);
for (let i = 0; i < 1000; i=i+0.1){

R -= 0.03
G += 0.06
B -= 0.08
//x = A*tan((radians(w)*i))+200
stroke(R,G,B)
strokeWeight(6)
point(i,x)
y = a*sin((radians(w2)*i))+200
point(i,y)
print(y)


}
}
