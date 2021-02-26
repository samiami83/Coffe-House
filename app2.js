function getInfo() {
    let person = prompt("What's your name?");
    let coffee = prompt("What kind of coffe do you prefer?");
    badChoice(person)
    document.write("<p>Hey everyone, " + person + " the " + coffee + " coffee lover is here!!!</p>");

}

function badChoice(x) {
    if (x === 'Sam') {
        window.alert("Welcome sir!");
    } else {
        window.alert("Oh,it's you.");
    }    
    }

