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


// Function to draw lines
function drawLines() {

}


