var symbolSize = 45;
var chain;

function setup() {
    createCanvas(
    
        window.innerWidth,
        window.innerHeight

    );
    background(0);
    chain = new SymbolChain();
    chain.generateSymbols();
    textSize(symbolSize);
}

function draw() {
    background(0);
    chain.render();
}

function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.switchSpeed = 5;
    this.value;
    
    this.setToRandomSymbol = function () {
        if (frameCount % this.switchSpeed == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96)) //random Katakana symbol unicode
            );
        }
    }
    this.fall = function () {
        if (this.y >= innerHeight) {
            this.y = 0;
        }
        
        this.y += this.speed;
    }
}
function SymbolChain() {
    this.symbols = [];
    this.totalSymbols = 5;
    this.speed = 5;
    this.generateSymbols = function () {
        var y = 0;
        var x = width / 2;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
        }

    }
    this.render = function () {
        this.symbols.forEach(function (symbol) {
            fill(0, 255, 70);
            text(symbol.value, symbol.x, symbol.y);
            symbol.fall();
            symbol.setToRandomSymbol();
        });
    }
}