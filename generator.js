var angle;
var axiom = 'F';
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
    a: 'F',
    b: 'FF+[+F-F-F]-[-F+F+F]'
};

function generate() {
    len *= 0.5;
    var nextSentence = '';
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    createP(sentence); //displays sentence used
    draw();
}

function draw() {
    background(10, 0, 0); //rgb color of drawing background
    translate(width / 2, height);
    stroke(34, 139, 34); //drawing rgb color
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);

        if (current == 'F') {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == '+') {
            rotate(angle);
        } else if (current == '-') {
            rotate(-angle);
        } else if (current == '[') {
            push();
        } else if (current == ']') {
            pop();
        }
    }
}

function setup() {
    createCanvas(400, 400); //create design element
    angle = radians(25);
    background(10, 0, 0); //rgb color of drawing background
    createP(axiom); //displays first sentence used
    draw();
    var button = createButton('GERAR'); //create button
    button.mousePressed(generate); //assigns a function to the button when pressed
}