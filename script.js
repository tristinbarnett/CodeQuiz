$(document).ready(function () {
    var allQuestions = [
        {
            question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            answers: ['1.JavaScript', '2.terminal/bash', '3.for loops', '4.console.log'],
            correctAnswer: 3,
        },
        {
            question: 'Common used data types do NOT include:',
            answers: ['1.strings', '2.booleans', '3.alerts', '4.numbers'],
            correctAnswer: 2,
        },
        {
            question: 'String values must be enclosed within _________ when being assigned to variables.',
            answers: ['1.commas', '2.curly brackets', '3.quotes', '4.parenthesis'],
            correctAnswer: 3,
        },
        {
            question: 'Arrays in JavaScript can be used to store ________.',
            answers: ['1.numbers and strings', '2.other arrays', '3.booleans', '4.all of the above'],
            correctAnswer: 3,
        },
        {
            question: 'The condition of an if / else statement is enclosed within ________.',
            answers: ['1.quotes', '2.curly brackets', '3.parenthesis', '4.square brackets'],
            correctAnswer: 2,
        },
        {
            question: 'To create a for loop you need to have:',
            answers: ['1.iterator', '2.loop condition', '3.iteration', '4.all of the above'],
            correctAnswer: 3,
        },
        {
            question: 'Which of the following rounds a number down to the nearest whole number?',
            answers: ['1.Math.floor', '2.Math.random', '3.math.floor', '4.Math.pow'],
            correctAnswer: 0,
        },
        {
            question: 'The event type that reacts to you typing on the keyboard is __________.',
            answers: ['1.click', '2.key down', '3.key', '4.change'],
            correctAnswer: 1,
        },
        {
            question: 'what does .stopPropagation() do?',
            answers: ['1.prevents event bubbling', '2.returns', '3.clears default', '4.none of the above'],
            correctAnswer: 0,
        },
        {
            question: 'What does DOM stand for?',
            answers: ['1.document order module', '2.dominant value', '3.document object method', '4.document order method'],
            correctAnswer: 2,
        },
    ];
    var currentQuestion = 0;
    var timeleft = 60;
    var timer;
    var highScores = [];


    $("#questionBox").hide();
    $("#inputName").hide();

    $("#startButton").on("click", function () {
        $("#instructions").hide();
        $("#questionBox").show();
        $("#questionText").html(allQuestions[currentQuestion].question);
        $("#button-1").html(allQuestions[currentQuestion].answers[0]);
        $("#button-2").html(allQuestions[currentQuestion].answers[1]);
        $("#button-3").html(allQuestions[currentQuestion].answers[2]);
        $("#button-4").html(allQuestions[currentQuestion].answers[3]);
        document.getElementById("timer").innerHTML = timeleft;

        timer = setInterval(function () {
            timeleft -= 1;
            document.getElementById("timer").innerHTML = timeleft;
            if (timeleft === 0) {
                endGame();
                return;
            }
        }, 1000);
    });

    function checkAnswer(event) {
        if (parseInt(event.target.value) === allQuestions[currentQuestion].correctAnswer) {
            $("#rightWrong").html("<hl />" + "Right!");
        }
        else {
            $("#rightWrong").html("<hl />" + "Wrong!");
            if (timeleft > 10) {
                timeleft -= 10;
            }
            else {
                timeleft = 0;
                document.getElementById("timer").innerHTML = timeleft;
                endGame();
                return;
            }
        }

        currentQuestion++;
        if (currentQuestion === 10) {
            endGame();
            return;
        }
        console.log(currentQuestion);
        $("#questionText").html(allQuestions[currentQuestion].question);
        $("#button-1").html(allQuestions[currentQuestion].answers[0]);
        $("#button-2").html(allQuestions[currentQuestion].answers[1]);
    }
    $(".yourAnswer").on("click", (event) => checkAnswer(event));

    function endGame() {
        $("#questionBox").hide();
        $("#inputName").show();
        clearInterval(timer);
        $("#score").html(timeleft);
    }

    init();

    function renderScores() {
        $("#scoresList").html = "";

        for (var i = 0; i < highScores.length; i++) {
            var score = highScores[i];

            var li = document.createElement("li");

            li.innerHTML = "<span class='setScore'>" + score.name + " - " + score.score + "</span>";
            $("#scoresList").append(li);
        }
    }
    function init() {
        var storedScores = JSON.parse(localStorage.getItem("scores"));

        if (storedScores !== null) {
            highScores = storedScores;
        }

        renderScores();
    }
    function storeScores() {
        localStorage.setItem("scores", JSON.stringify(highScores));
    };

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var initialsText = $("#initials").val().trim();

        if (initialsText === "") {
            return;
        }

        highScores.push({
            name: initialsText,
            score: timeleft
        });

        $("#initials").val("");

        storeScores();
        renderScores();

        window.location.href = "highscores.html";

    });

    $("#clearScores").on("click", function () {
        $("#scoresList").empty();
        localStorage.clear();
    })

});