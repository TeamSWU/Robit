$('.drag-sign').on('draginit', function (ev, drag) {
    drag.ghost();
});

$('.drop-sign').on({
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

$("#back-button").click(function() {
    sessionStorage.setItem('studentScore', JSON.stringify(studentScore));

    sessionStorage.setItem('answer3-1', JSON.stringify(getBoxNum("answer-1")));
    sessionStorage.setItem('answer3-2', JSON.stringify(getBoxNum("answer-2")));
    sessionStorage.setItem('answer3-3', JSON.stringify(getBoxNum("answer-3")));
    sessionStorage.setItem('answer3-4', JSON.stringify(getBoxNum("answer-4")));
    sessionStorage.setItem('answer3-5', JSON.stringify(getBoxNum("answer-5")));
    sessionStorage.setItem('answer3-6', JSON.stringify(getBoxNum("answer-6")));
    sessionStorage.setItem('answer3-7', JSON.stringify(getBoxNum("answer-7")));
    sessionStorage.setItem('answer3-8', JSON.stringify(getBoxNum("answer-8")));
});

$('#proceed-button').click(function () {
    studentScore = Number(sessionStorage.getItem('studentScore'));

    addPoints(1, '>');
    addPoints(2, '<');
    addPoints(3, '<');
    addPoints(4, '>');
    addPoints(5, '<');
    addPoints(6, '>');
    addPoints(7, '=');
    addPoints(8, '<');

    //if( studentScore >= 10){
    //window.location = 'question3.html';
    //}
    sessionStorage.setItem('studentScore', JSON.stringify(studentScore));

    sessionStorage.setItem('answer3-1', JSON.stringify(getBoxNum("answer-1")));
    sessionStorage.setItem('answer3-2', JSON.stringify(getBoxNum("answer-2")));
    sessionStorage.setItem('answer3-3', JSON.stringify(getBoxNum("answer-3")));
    sessionStorage.setItem('answer3-4', JSON.stringify(getBoxNum("answer-4")));
    sessionStorage.setItem('answer3-5', JSON.stringify(getBoxNum("answer-5")));
    sessionStorage.setItem('answer3-6', JSON.stringify(getBoxNum("answer-6")));
    sessionStorage.setItem('answer3-7', JSON.stringify(getBoxNum("answer-7")));
    sessionStorage.setItem('answer3-8', JSON.stringify(getBoxNum("answer-8")));
});

function getBoxNum(element) {
    return $("#" + element).html();
}

$('#check-button').click(function () {

    if(isWrong(1, '>')) {
        playNotification();
    }

    else if(isWrong(2, '<')) {
        playNotification();
    }

    else if(isWrong(3, '<')) {
        playNotification();
    }

    else if(isWrong(4, '>')) {
        playNotification();
    }
    else if(isWrong(5, '<')) {
        playNotification()
    }

    else if(isWrong(6, '>')) {
        playNotification();
    }

    else if(isWrong(7, '=')) {
        playNotification();
    }

    else if(isWrong(8, '<')) {
        playNotification();
    }

});

$(document).ready(function(){
    $('#back-button').click(function(){
        parent.history.back();
        return false;
    });
});

function isPlaying(audelem) {
    return !audelem.paused;
}

function addPoints(questionNumber, sign)
{
    var encodedSign = sign;

    if(sign == '<')
    {
        encodedSign = '&lt;';
    }

    if(sign == '>')
    {
        encodedSign = '&gt;';
    }

    if($('#answer-' + questionNumber + ' > p').html().localeCompare(encodedSign) == 0)
    {
        studentScore += 2;
    }
}

function isWrong(questionNumber, sign)
{
    var encodedSign = sign;

    if(sign == '<')
    {
        encodedSign = '&lt;';
    }

    if(sign == '>')
    {
        encodedSign = '&gt;';
    }

    if($('#answer-' + questionNumber + ' > p').html().localeCompare(encodedSign) != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function playNotification()
{
    humane.log("Грешен отговор!");
}

(function ()
    {
        var patt = new RegExp("<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>");

        var answer;
        answer = sessionStorage.getItem("answer3-1");
        $("#answer-1").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-2");
        $("#answer-2").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-3");
        $("#answer-3").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-4");
        $("#answer-4").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-5");
        $("#answer-5").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-6");
        $("#answer-6").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-7");
        $("#answer-7").html(patt.exec(answer));

        answer = sessionStorage.getItem("answer3-8");
        $("#answer-8").html(patt.exec(answer));

        document.getElementById('points').innerHTML = $.parseJSON(sessionStorage.getItem('studentScore'));
    }
)();