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
    studentScore = sessionStorage.getItem('studentScore');

    if ($('#answer1 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer2 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer3 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer4 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer5 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer6 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer7 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }
    if ($('#answer8 > p').html().replace('&lt','<').localeCompare('<')) {
        studentScore += 2;
    }

    //if( studentScore >= 10){
    window.location = 'question3.html'
    //}
});

$('#check-button').click(function () {
    alert($('#answer1 > p').html());
});

sessionStorage.setItem('studentScore', JSON.stringify(studentScore));

$(document).ready(function(){
    $('#back-button').click(function(){
        parent.history.back();
        return false;
    });
});

function isPlaying(audelem) {
    return !audelem.paused;
}