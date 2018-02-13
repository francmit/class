// Drawing circles in an svg with JavaSciprt 
'use strict';

// Constants / global variables
const height = 255;
const width = 255;
const fill = '#d3d3d3';
const namespace = 'http://www.w3.org/2000/svg';

// State of our application
let state = {
    circles: []
};

// Create a `p` element DOM
let newP = document.createElement('p');

// Set the inner HTML of the paragraph to be some bold text
newP.innerHTML = '<strong>Some bold text</strong>';

// Select the element with class `container`, and append the paragraph to it
let container = document.querySelector('.container').appendChild(newP);

// Select `svg` element from the DOM
let svg = document.querySelector('svg');

// Set the width and height attributes using `setAttribute`
svg.setAttribute('width', width);
svg.setAttribute('height', height);

// Add a `rect` with the same width and height, and set the fill to `fill`
// Note, you'll have to use `createElementNS` with our namespace
// Also, set the pointerEvents to 'none'. Then, append this `rect` to the svg
let rect = document.createElementNS(namespace, 'rect');
rect.setAttribute('width', width);
rect.setAttribute('height', height);
rect.setAttribute('fill', fill); // rect.style.fill = fill;
rect.setAttribute('pointerEvents', 'none'); //rect.style.pointerEvents = 'none';
svg.appendChild(rect);

// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`
let button = document.createElement('button');
button.className = 'btn center-align';
document.querySelector('.container').insertBefore(button, document.querySelector('.svg-wrapper'));
button.textContent = 'Go away';

// Function to render a circle in a parent element
function renderCircle(coord, parent) {
    // Create the circle
    let circle = document.createElementNS(namespace, 'circle');

    // Define styles
    circle.setAttribute('cx', coord.x);
    circle.setAttribute('cy', coord.y);
    circle.setAttribute('r', 10);
    circle.style.opacity = 0.3;
    circle.style.pointerEvents = 'none';
    circle.style.fill = `rgb(0, ${coord.x}, ${coord.y}`;
    // Append
    parent.appendChild(circle);
}

// Function to draw all circles in a parent
function drawCircles(data, parent) {
    data.forEach(function(d) {
        renderCircle(d, parent);
    });
}

// Function to clear circles from a parent
function clearCircles(parent) {
    let elems = parent.querySelectorAll('circle');
    elems.forEach(function(d) {
        parent.removeChild(d);
    });
}

// Assign event listener - on click:
// - push a new data element into the state
// - call the `update` function
svg.addEventListener('mousemove', function(event) {
    state.circles.push({x:event.offsetX, y:event.offsetY});
    update();
});

// Update function: call `clearCircles`, `drawCircles`, and `updateText`
function update() {
    // Clear container
    clearCircles(svg);
    // Update container contents
    drawCircles(state.circles, svg);
}

// Text function: change paragraph text to display the number of circles, and avg. color.
// Avg. color (in rgb) is the avg. x position (green) and avg. y position (blue)
// Set the text to be that color
function updateText(data) {
    let p = document.querySelector('p');
    // Compute average in x direction (green)
    let green = data.reduce(function(a, b) {
        return a + b.x;
    }, 0);
    let avgGreen = Math.floor(green / data.length);
    // Compute average in x y direction (blue)
    let blue = data.reduce(function(a, b) {
        return a + b.y;
    }, 0);
    let avgBlue = Math.floor(blue / data.length);

    // Set values to 0 if there is no data
    green = data.length === 0 ? 0 : avgGreen;
    blue = data.length === 0 ? 0 : avgBlue;

    // Set text string and the color of the element
    newP.innerHTML = `There are ${data.length} circles and teh avg color is rgb(0, ${avgGreen}, ${avgBlue})`;
    newP.style.color = `rgb(0, ${avgGreen}, ${avgBlue})`;
}

// Assign an event listener for the `clear` button
document.querySelector('button').addEventListener('click', function() {
    state.circles = [];
    update();
});

// Reset state.circles to an empty array and then `update`
