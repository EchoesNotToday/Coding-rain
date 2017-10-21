var symbol;
var symbolSize = 45;

function setup() {
    createCanvas(
    window.innerWidth,
    window.innerHeight
    
    );
    background(0);
    symbol = new Symbol(
        width / 2,
        0,
        5
    );
    symbol.setToRandomSymbol();
    textSize(symbolSize);
}

function draw() {
    background(0);
    symbol.render();
}

function Symbol(x, y) {
function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.switchSpeed = 5;
    this.value;
    
    this.setToRandomSymbol = function() {
        this.value =String.fromCharCode(
        0x30A0 + round(random(0, 96)) //random Katakana symbol unicode
        );
    this.setToRandomSymbol = function () {
        if (frameCount % this.switchSpeed == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96)) //random Katakana symbol unicode
            );
        }
    }
    this.render = function() {
        fill(0, 255, 70);
        text(this.value, this.x, this.y);
        this.fall();
    }
    this.fall = function() {
       this.y += this.speed; 
        if (this.y >= innerHeight) {
           this.y =0; 
        }
        
    }
}
