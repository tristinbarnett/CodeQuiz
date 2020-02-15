$(document).ready(function () {
    var allQuestions = [
        {
            question: 'example question??',
            answers: ['efs', 'sdfg'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['new', 'okay yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the third? questions??',
            answers: ['hello?', 'why tho'],
            correctAnswer: 1,
        },
        {
            question: 'this is the sdf questions??',
            answers: ['new', 'okay yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the fiveeeeee????ond questions??',
            answers: ['new', 'okaysdf yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['newwhyyyyyys', 'okaysdfsdfsdgs yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['newwhyyyyyys', 'okaysdfsdfsdgs yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['newwhyyyyyys', 'okaysdfsdfsdgs yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['newwhyyyyyys', 'okaysdfsdfsdgs yea'],
            correctAnswer: 1,
        },
        {
            question: 'this is the second questions??',
            answers: ['newwhyyyyyys', 'okaysdfsdfsdgs yea'],
            correctAnswer: 1,
        },
    ];
    var currentQuestion = 0;
    var timeleft = 60;
    var timer;

    $("#questionBox").hide();
    $("#inputName").hide();

    $("#startButton").on("click", function () {
        $("#instructions").hide();
        $("#questionBox").show();
        $("#questionText").html(allQuestions[currentQuestion].question);
        $("#button-1").html(allQuestions[currentQuestion].answers[0]);
        $("#button-2").html(allQuestions[currentQuestion].answers[1]);

        timer = setInterval(function () {
            document.getElementById("timer").innerHTML = timeleft;
            timeleft -= 1;
            if (timeleft < 0) {
                clearInterval(timer);
                $("#questionBox").hide();
                $("#inputName").show();
            }
        }, 1000);
    });

    function checkAnswer(event){
        if (parseInt(event.target.value) === allQuestions[currentQuestion].correctAnswer){
            $("#rightWrong").html("<hl />"+"Right!");
        }
        else {
            $("#rightWrong").html("<hl />"+"Wrong!");
            timeleft -= 10;
        }//fix so that time can only go to 0
        
        currentQuestion++;
        if (currentQuestion === 11){
            $("#questionBox").hide();
            $("#inputName").show();
            clearInterval(timer);
            $("#score").html(timeleft);
            return;
        }
        console.log(currentQuestion);
        $("#questionText").html(allQuestions[currentQuestion].question);
        $("#button-1").html(allQuestions[currentQuestion].answers[0]);
        $("#button-2").html(allQuestions[currentQuestion].answers[1]);
    }
        $(".yourAnswer").on("click", (event)=>checkAnswer(event));


    

});