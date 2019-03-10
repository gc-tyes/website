var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var holes = [];
var intervals = [20,20,20,20,20,20,20,20,20];
var index = 0;
var counter = 0;
var stopped = true;
var once = false;
var numPegs = 9;
createHoles();

function draw() {
    if (!stopped) {
        drawHoles();
    counter++;
    if (index < intervals.length && counter == intervals[index] - 10 && !once) {
            numPegs--;
    } else if (index < intervals.length && counter == intervals[index]) {
        numPegs++;
        counter = 0;
    }

    if (index < intervals.length && counter == intervals[index] - 5) {
        holes[index].changeColor();
        index++;
        if (!once) {
            counter = 0;
        }
    } else if (index >= intervals.length && !once) {
        index = 0;
        counter = 0;
        once = true;
    } else if (index >= intervals.length) {
        stopped = true;
        numPegs++;
        drawHoles();
    }
    console.log(counter);
    }
}
setInterval(draw, 45);

function begin() {
    stopped = false;
}


function drawHoles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // DRAW OUTLINE
    ctx.fillStyle = "black";
    ctx.rect(5,5,500,500);
    ctx.stroke();
    // DRAW WELL AND NUMBER
    ctx.beginPath();
    ctx.arc(250, 400, 75, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "28px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(numPegs + "", 245, 410)
    ctx.closePath();
    // DRAW HOLES
    holes.forEach(element => {
        ctx.beginPath();
        ctx.fillStyle = element.color;
        ctx.arc(element.x, element.y, 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    });
}

function createHoles() {
    var x = 100;
    var y = 50;
    for (var i = 0; i < 3; i++) {
        x = 100;
        for (var j = 0; j < 3; j++) {
            holes.push({x: x, y: y, color: "red", changeColor: function() {
                if (this.color == "red") {
                    this.color = "green";
                } else {
                    this.color = "red";
                }
            }
        });
        x += 150;
        }
        y += 100;
    }
    drawHoles();
}