function tickTock() {
    let time = new Date().getHours();
if (time < 12) {
    window.alert("Buenos dias!");
} else {
    window.alert("Buenas tardes!");
}

}

function howManyCups() {
    let cuppaJoe = prompt("How many cups do you drink a day? (0-5)");
    console.log('type',typeof cuppaJoe)
    let cuppaJoeParsed = parseInt(cuppaJoe)
   console.log('type',typeof cuppaJoeParsed)
    if (cuppaJoeParsed === 0) {
            window.alert("Not cool bro!");
        } 
        for (let i = 1; i <= cuppaJoeParsed; i++) {
            console.log(i)
            document.write('<h2><img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"></img></h2>');
        }
    //     else {
    //         while (cuppaJoe >= 1 || cuppaJoe <= 5) {
    //             prompt('Please enter a number 1-5');

    //             // for (let i = cuppaJoe; 
    //         }
    // }
    
        

    }

// function numberGuessingGame() {
// 	let correctAnswer = Math.floor(Math.random() * 100) + 1;
// 	console.log(correctAnswer);
// 	let correctAnswer = 82;
// 	let guesses = 8;
	
// 	for (let i = 0; i < guesses; i++) {

// 		while(userAnswer < 0 || userAnswer > 100) {
// 	    let userAnswer = prompt('Please enter a number 1-100');

// 	    if (userAnswer == correctAnswer) {
// 		alert('ding ding ding! You got it right!');
// 		break;
