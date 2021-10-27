let num1, num2;
let n1, n2;
let b1, b2, b3, b4;
function setup() {
  createCanvas(800, 800);

  num1 = createInput()
  num1.position(20, 60)

  num2 = createInput()
  num2.position(200, 60)

  b1 = createButton("ADD")
  b1.position(10, 200)
  b1.mousePressed(add)

  b2 = createButton("Multiply")
  b2.position(100, 200)
  b2.mousePressed(mul)

  b3 = createButton("Subract")
  b3.position(200, 200)
  b3.mousePressed(sub)

  b4 = createButton("Divide")
  b4.position(300, 200)
  b4.mousePressed(division)

  textAlign(CENTER)
  textSize(15)
}

function draw() {
  background(200, 10, 200);

  text("Number 1", 30, 30)
  text("Number 2", 230, 30)

  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())

}

function add(){
  console.log(n1+n2)
}

function sub(){
  console.log(n1-n2)

}

function mul(){
  console.log(n1*n2)
}

function  division(){
  console.log(n1/n2)
}




