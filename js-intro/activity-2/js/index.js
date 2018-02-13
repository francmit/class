// Functions to draw lines
// An attempt to replicate http://vallandingham.me/sentence_drawings/
'use strict';

// Constants / global variables
const height = 500;
const width = 500;

// Get canvas, set width/height/strokeStyle
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

// Set event listener (onkeydown)
let input = document.getElementById('textInput');
input.onkeydown = drawLines;

ctx.moveTo(250,250);
let x = 250;
let y = 250;

// Function to draw lines
function drawLines() {
    let words = input.value.split(' ');
    let wordLens = words.map(function (d) {
        return d.length;
    });
    console.log(wordLens.length - 1);
    if (wordLens.length % 4 === 0) {
        x = x + 5;
    } else if (wordLens.length% 4 === 1) {
        y = y + 5;
    } else if (wordLens.length % 4 === 2) {
        x = x - 5;
    } else {
        y = y - 5;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}


