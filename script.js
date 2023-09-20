let score = 0

function checkAnswers () {
    let score = 0
    let result = 0

    let quiz = document.forms.quiz.elements;

    answer1 = quiz.song.value;
    if (answer1 == "len"){
        score = score + 1;
    }
    if (answer1 == "root"){
        score = score + 2;
    }
    if (answer1 == "pogues"){
        score = score + 3;
    }
    if (answer1 == "careless"){
        score = score + 4;
    }

    answer2 = quiz.book.value;
    if (answer2 == "gatsby"){
        score = score + 1;
    }
    if (answer2 == "wood"){
        score = score + 2;
    }
    if (answer2 == "ulysses"){
        score = score + 3;
    }
    if (answer2 == "morrie"){
        score = score + 4;
    }

    answer3 = quiz.film.value;
    if (answer3 == "whiplash"){
        score = score + 1;
    }
    if (answer3 == "about"){
        score = score + 2;
    }
    if (answer3 == "leap"){
        score = score + 3;
    }
    if (answer3 == "clue"){
        score = score + 4;
    }
    
    answer4 = quiz.colour.value;
    if (answer4 == "yellow"){
        score = score + 1;
    }
    if (answer4 == "pink"){
        score = score + 2;
    }
    if (answer4 == "green"){
        score = score + 3;
    }
    if (answer4 == "blue"){
        score = score + 4;
    }

    if (score <= 4){
        result = "Carrots";
    }
    else if (score <= 8){
        result = "Broccoli";
    }
    else if (score <= 12){
        result = "Potatoes";
    }
    else {
        result = "Asparagus";
    }

    alert ('You are ' + result);
}