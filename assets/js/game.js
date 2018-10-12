$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();
})
$(document).on('click','.answer-button',function(e){
    game.clicked(e);
})
$(document).on('click', '#reset', function(){
    game.reset();
})

var questions = [{
    question:"What is the English translation for the name of the German automaker Volkswagen?",
    answers: ["People's car","World wide","Voltz","German Engineering"],
    correctAnswer:"People's car",
    image:"assets/images/"
}, {
    question:"What car does paul walker use in most of all Fast & The Furious movies?",
    answers: ["Toyota Supra","Misubitchi Evo","Mazda RX7","Nissan Skyline"],
    correctAnswer:"Nissan Skyline",
    image:"assets/images/"
}, {
    question:"Porsche is a brand of car that originated in what country?",
    answers: ["Germany","Italy","Britain","Austrialia"],
    correctAnswer:"Germany",
    image:"assets/images/"
}, {
    question:"What is generally considered to be the first 'pony car'?",
    answers: ["Porsche","Jaguar","Pontiac G3","Ford Mustang"],
    correctAnswer:"Ford Mustan",
    image:"assets/images/"
},{
    question:"How much horse power did the first Porsche 911 have?",
    answers: ["130 HP","90 Hp","150 HP","75 HP"],
    correctAnswer:"130 HP",
    image:"assets/images/"
}, {
    question:"What year was the Corvette first introduced?",
    answers: ["1970","1956","1953","1963"],
    correctAnswer:"1953",
    image:"assets/images/"
}, {
    question:"What car sold more than one million units in 1965, setting a record that still stands today?",
    answers: ["Pontiac GTO","Chevy Impala","Ford Explorer","Buick Wildcat"],
    correctAnswer:"Chevy Impala",
    image:"assets/images/"
}, {
    question:"What was the first Japanese car to be produced in the United States?",
    answers: ["Nissan Altima","Honda Accord","Toyota Corola","Mazda Miata"],
    correctAnswer:"Honda Accord",
    image:"assets/images/"
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $('#counter').html('<h2>YOU HAVE '+game.counter+' SECOUNDS LEFT!</h2>');
        if(game.counter<=0){
            console.log("Time up!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        game.counter = 30;
        timer = setInterval(game.countdown,1000);
        $('#counter').html('<h2>YOU HAVE '+game.counter+' SECOUNDS LEFT!</h2>');
        $('#subwrapper').html('<h3 class="answer">'+questions[game.currentQuestion].
            question+'</h3>');
        for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<div class="answer-button"id="button-'+i+'" data-name="'+questions[game.
                currentQuestion].answers[i]+'">'+questions[game.
                currentQuestion].answers[i]+'</div>');
        }
    },
    nextQuestion: function(){
        $('#counter').show();
        game.counter = 30;
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>out of time!</h2>');
        $('#subwrapper').append('<h3>The correct answer was'+questions[game.
            currentQuestion].correctAnswer+"</h3>");
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results,3*1000);
            } else {
                setTimeout(game.nextQuestion,3*1000);
            }
    },
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html('<h2>all finished</h2>');
        $('#subwrapper').append("<h2>correct: "+game.correct+"</h2>");
        $('#subwrapper').append("<h2>inccorect: "+game.incorrect+"</h2>");
        $('#subwrapper').append("<h3>unanswered: "+game.unanswered+"</h3>");
        $('#subwrapper').append("<button id='reset'?>RESET</button>");
    },
    clicked: function(e){
        $('#counter').hide();
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].
        correctAnswer){
            game.answerCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answerCorrectly: function(){
        $('#counter').hide();
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2>YOU ANSWERED CORRECTLY!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    answeredIncorrectly(){
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>YOU ANSWERED INCORRECTLY!</h2>');
        $('#subwrapper').append('<h2>The correct answer was '+questions[game.
            currentQuestion].correctAnswer+"</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    reset: function(){
        game.currentQuestion = 0;
        game.correct = 0;
        game.counter = 30;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    },

}