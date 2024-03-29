var streams = [];
var fadeInterval = 0.5;
var symbolFont = "Consolas";
var symbolSize = 22;

// SET STREAM SPEED
var MIN_STREAM_SPEED = 5;
var MAX_STREAM_SPEED = 10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 0);
  textFont(symbolFont);
  textSize(symbolSize);

  var x = 0;

  function Symbol(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.first = first;
    this.opacity = opacity;

    this.switchInterval = round(random(2, 25));

    this.setToRandomSymbol = function() {
      var charType = round(random(0, 5));

      if (frameCount % this.switchInterval == 0) {
        if (charType === 1) {
          // set it to Katakana
          this.value = String.fromCharCode(0x30a0 + round(random(0, 96)));
        } else if (charType === 2 || charType === 3) {
          // set it to letters
          this.value = String.fromCharCode(0xfeff00 + round(random(41, 59)));
        } else if (charType === 4) {
          // set it to symbols
          this.value = String.fromCharCode(0xfeff00 + round(random(23, 26)));
        } else {
          // set it to numeric
          this.value = round(random(0, 9));
        }
      }
    };

    this.rain = function() {
      this.y = this.y >= height ? 0 : (this.y += this.speed);
    };
  }

  function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5, 35));
    this.speed = random(MIN_STREAM_SPEED, MAX_STREAM_SPEED);

    this.generateSymbols = function(x, y) {
      var opacity = 255;
      var first = round(random(0, 4)) == 1;
      for (var i = 0; i <= this.totalSymbols; i++) {
        symbol = new Symbol(x, y, this.speed, first, opacity);
        symbol.setToRandomSymbol();
        this.symbols.push(symbol);
        opacity -= 255 / this.totalSymbols / fadeInterval;
        y -= symbolSize;
        first = false;
      }
    };

    this.render = function() {
      this.symbols.forEach(function(symbol) {
        if (symbol.first) {
          fill(109, 79, 97, symbol.opacity);
        } else {
          fill(138, 115, 137, symbol.opacity);
        }
        text(symbol.value, symbol.x, symbol.y);
        symbol.rain();
        symbol.setToRandomSymbol();
      });
    };
  }

  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream) {
    stream.render();
  });
}
