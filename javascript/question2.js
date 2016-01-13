$('.drag-number').on('draginit', function (ev, drag) {
    drag.ghost();
});

$('.drop-number').on({
    'dropover': function () {
        $(this).addClass('highlight');
    },
    'dropout': function () {
        $(this).removeClass('highlight');
    },
    'dropon': function (ev, drop, drag) {
        $(this).html(drag.element.html());
        $(this).removeClass('highlight');
    }
});

var studentScore;

$('#proceed-button').click(function () {
    studentScore = localStorage.getItem('studentScore');

    addPoints(1, 5);
    addPoints(2, 3);
    addPoints(3, 5);
    addPoints(4, 4);
    addPoints(5, 5);
    addPoints(6, 3);
    addPoints(7, 5);
    addPoints(8, 4);
    addPoints(9, 5);
    addPoints(10, 3);
    addPoints(11, 3);
    addPoints(12, 4);

    //if( studentScore >= 10){
    window.location = 'question3.html';
    //}
});

$('#check-button').click(function () {
    
    if(isWrong(1, 5)) {
        playNotfication();
    }

    else if(isWrong(2, 3)) {
        playNotfication();
    }

    else if(isWrong(3, 5)) {
        playNotfication();
    }

    else if(isWrong(4, 4)) {
        playNotfication();
    }
    else if(isWrong(5, 1)) {
        playNotfication()
    }

    else if(isWrong(6, 1)) {
        playNotfication();
    }

    else if(isWrong(7, 2)) {
        playNotfication();
    }

    else if(isWrong(8, 1)) {
        playNotfication();
    }
    else if(isWrong(9, 5)) {
        playNotfication();
    }

    else if(isWrong(10, 5)) {
        playNotfication();
    }

    else if(isWrong(11, 4)) {
        playNotfication();
    }

    else if(isWrong(12, 4)) {
        playNotfication();
    }
    else if(isWrong(13, 1)) {
        playNotfication();
    }
    else if(isWrong(14, 3)) {
        playNotfication();
    }
    else if(isWrong(15, 3)) {
        playNotfication();
    }
    else if(isWrong(16, 1)) {
        playNotfication();
    }
});

localStorage.setItem('studentScore', JSON.stringify(studentScore));

$(document).ready(function(){
    $('#back-button').click(function(){
        parent.history.back();
        return false;
    });
});

function isPlaying(audelem) {
    return !audelem.paused;
}

function addPoints(questionNumber, answerNumber)
{
    if ($('#answer'+questionNumber+' > p').html() == answerNumber) {
        studentScore += 2;
    }
}

function playNotfication()
{
    humane.log("Грешен отговор!");
}

function isWrong(questionNumber, answerNumber)
{
    if($('#answer-' + questionNumber + ' > p').html() != answerNumber)
    {
        return true;
    }
}