// Main.js file
'use strict';

// Data: a group of people
const people = [
    { name: "Mike", interest: "Music" },
    { name: "Rashmi", interest: "Medicine" }
];

// Class for an individual person
class Person extends React.Component {
    render() {
        return (   
            <div>
                <p>Hello, my name is {this.props.name} and I am interested in {this.props.interest}</p>
            </div>
        )
    }
}

// Class to represent a group of people
class People extends React.Component {
    render() {
        return (<div>
                {this.props.group.map((item, i) => <Person key={i} name={item.name} interest={item.interest} />)}
                </div>)
    }
}

// Render your component in the `main` section
ReactDOM.render(
    <People group={people}/>
    ,
    document.querySelector('main')
)
