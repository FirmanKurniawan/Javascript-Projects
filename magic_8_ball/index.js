$(document).ready(function() {

    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    $("#answer").hide();

    magic8Ball.askQuestion = function(question) {
        $("#8ball").effect("shake");

        $("#8ball").attr("src", "./img/magic8ballQuestion.png");

        $("#answer").fadeIn(4000);

        var randomNumber = Math.random();

        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

        var randomIndex = Math.floor(randomNumberForListOfAnswers);

        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text(answer);

        console.log(question);
        console.log(answer);
    };

    var onClick = function() {

        $("#answer").hide();

        $("#8ball").attr("src", "./img/magic8ballAnswer.png");


        setTimeout(function() {
            var question = prompt("ASK A YES/NO QUESTION!");
            magic8Ball.askQuestion(question);
        }, 500);


    };

    $("#questionButton").click(onClick);

});