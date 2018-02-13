'use strict';


// Class Puppy
class Puppy {
    // Constructor: takes in an img url, and a sound
    constructor(img="http://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-puppies/german-shepherd-puppy-10.jpg", sound="bark") {
        this.img = img;
        this.sound = sound;
    }

    bark() {
        responsiveVoice.speak(this.sound);
    }
    // Method for "speaking" using responsiveVoice
    render() {
        let puppyCard = $('<div>');
        puppyCard.css('background-image', `url(${this.img})`);
        puppyCard.attr('class', 'puppyCard col-sm-4');
        return puppyCard;
    }
    // Render a Div that you can click on to bark

}

let myPuppy = new Puppy('http://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-puppies/german-shepherd-puppy-10.jpg', 'woof');
$('body').append(myPuppy.render());
// letmy myOtherPuppy = new Puppy('', 'yip yip');
// myPuppy.bark();
// myOtherPuppy.bark();

// Class Form
class PuppyForm {
    // Contructor: takes in a callback function you can do
    constructor(callback) {
        this.callback = callback;
    }

    // Render: build the form with submit event
    render() {
        // Build form and input elements
        let form = $('<form>');
        let urlInput = $('<input class="url">');
        urlInput.attr({
            type: "text",
            placeholder: "Puppy URL...",
            class: "form-control"
        });
        let soundInput = $('<input class="sound">');
        soundInput.attr({
            type: "text",
            placeholder: "Sound to make...",
            class: "form-control"
        });
        form.append(urlInput);
        form.append(soundInput);
        form.append($('<button class="btn btn-primary mb-3" type="submit">Add a puppy!</button>'));

        // On submit, do the callback function
        form.on('submit', (event) => {
            event.preventDefault();
            this.callback(urlInput.val(), soundInput.val());
            return false;
        });
        return form;
    }
}

// Class for the app
class PuppyApp {
    // Constructor: takes in a parent element and list of puppies

    // Add puppy: pushes new data into list of puppies and re-renders the app


    // Render;
    render() {
        // Empty parent element


        // Create and render a new form

        // Append puppy list element to parent (in a wrapper div)

    }
}

// Create a new app with a single puppy


// Render the app
