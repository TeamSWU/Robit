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
    studentScore = Number(sessionStorage.getItem('studentScore'));

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

    sessionStorage.setItem('studentScore', JSON.stringify(studentScore));

    sessionStorage.setItem('answer-1', JSON.stringify(getBoxNum("answer-1")));
    sessionStorage.setItem('answer-2', JSON.stringify(getBoxNum("answer-2")));
    sessionStorage.setItem('answer-3', JSON.stringify(getBoxNum("answer-3")));
    sessionStorage.setItem('answer-4', JSON.stringify(getBoxNum("answer-4")));
    sessionStorage.setItem('answer-5', JSON.stringify(getBoxNum("answer-5")));
    sessionStorage.setItem('answer-6', JSON.stringify(getBoxNum("answer-6")));
    sessionStorage.setItem('answer-7', JSON.stringify(getBoxNum("answer-7")));
    sessionStorage.setItem('answer-8', JSON.stringify(getBoxNum("answer-8")));
    sessionStorage.setItem('answer-9', JSON.stringify(getBoxNum("answer-9")));
    sessionStorage.setItem('answer-10', JSON.stringify(getBoxNum("answer-10")));
    sessionStorage.setItem('answer-11', JSON.stringify(getBoxNum("answer-11")));
    sessionStorage.setItem('answer-12', JSON.stringify(getBoxNum("answer-12")));
    sessionStorage.setItem('answer-13', JSON.stringify(getBoxNum("answer-13")));
    sessionStorage.setItem('answer-14', JSON.stringify(getBoxNum("answer-14")));
    sessionStorage.setItem('answer-15', JSON.stringify(getBoxNum("answer-15")));
    sessionStorage.setItem('answer-16', JSON.stringify(getBoxNum("answer-16")));
    //if( studentScore >= 10){
    window.location = 'question3.html';
    //}
});

$('#check-button').click(function () {
    
    if(isWrong(1, 5)) {
        playNotification();
    }

    else if(isWrong(2, 3)) {
        playNotification();
    }

    else if(isWrong(3, 5)) {
        playNotification();
    }

    else if(isWrong(4, 4)) {
        playNotification();
    }
    else if(isWrong(5, 1)) {
        playNotification()
    }

    else if(isWrong(6, 1)) {
        playNotification();
    }

    else if(isWrong(7, 2)) {
        playNotification();
    }

    else if(isWrong(8, 1)) {
        playNotification();
    }
    else if(isWrong(9, 5)) {
        playNotification();
    }

    else if(isWrong(10, 5)) {
        playNotification();
    }

    else if(isWrong(11, 4)) {
        playNotification();
    }

    else if(isWrong(12, 4)) {
        playNotification();
    }
    else if(isWrong(13, 1)) {
        playNotification();
    }

    else if(isWrong(14, 3)) {
        playNotification();
    }

    else if(isWrong(15, 3)) {
        playNotification();
    }

    else if(isWrong(16, 1)) {
        playNotification();
    }
});

//sessionStorage.setItem('studentScore', JSON.stringify(studentScore));

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
    if ($('#answer-' + questionNumber + ' > p').html() == answerNumber) {
        studentScore += 2;
    }
}

function playNotification()
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

function getBoxNum(boxNum) {
    return $("#" + boxNum).html();
}

(function ()
    {
        var patt = new RegExp("<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>");

        var answer;

        answer = sessionStorage.getItem("answer-1");
        $("#answer-1").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-2");
        $("#answer-2").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-3");
        $("#answer-3").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-4");
        $("#answer-4").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-5");
        $("#answer-5").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-6");
        $("#answer-6").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-7");
        $("#answer-7").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-8");
        $("#answer-8").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-9");
        $("#answer-9").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-10");
        $("#answer-10").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-11");
        $("#answer-11").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-12");
        $("#answer-12").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-13");
        $("#answer-13").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-14");
        $("#answer-14").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-15");
        $("#answer-15").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer-16");
        $("#answer-16").html(patt.exec(answer));


    }
)();
