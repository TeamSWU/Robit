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
});

$('#check-button').click(function () {
    addPoints(1, '>');
    addPoints(2, '<');
    addPoints(3, '<');
    addPoints(4, '>');
    addPoints(5, '<');
    addPoints(6, '>');
    addPoints(7, '=');
    addPoints(8, '<');
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

addPoints(questionNumber, sign)
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

    if($('#answer-' + questionNumber + ' > p').html() == encodedSign);
    {

        studentScore += 2;
    }
    alert(encodedSign);
}

(function ()
    {
        document.getElementById('points').innerHTML = $.parseJSON(sessionStorage.getItem('studentScore'));
    }
)();