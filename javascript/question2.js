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

    if ($('#answer-1 > p').html() == 5) {
        studentScore += 2;
    }

    if( $('#answer-2 > p').html() == 3) {
        studentScore += 2;
    }

    if( $('#answer-3 > p').html() == 5) {
        studentScore += 2;
    }
    if( $('#answer-4 > p').html() == 4) {
        studentScore += 2;
    }

    if ($('#answer-5 > p').html() == 5) {
        studentScore += 2;
    }

    if( $('#answer-6 > p').html() == 3) {
        studentScore += 2;
    }

    if( $('#answer-7 > p').html() == 5) {
        studentScore += 2;
    }
    if( $('#answer-8 > p').html() == 4) {
        studentScore += 2;
    }

    if ($('#answer-9 > p').html() == 5) {
        studentScore += 2;
    }

    if( $('#answer-10 > p').html() == 3) {
        studentScore += 2;
    }

    if( $('#answer-11 > p').html() == 5) {
        studentScore += 2;
    }
    if( $('#answer-12 > p').html() == 4) {
        studentScore += 2;
    }

    $(function(){
        $('#proceed-button').click(function(){
            if(this.id == 'proceed-button'){
                window.location = 'question2.html'
            }

        });
    });

    if($('#answer-1 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-2 > p').html() != 3) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-3 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-4 > p').html() != 4) {
        humane.log("WRONG ANSWER");
    }
    if($('#answer-5 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-6 > p').html() != 3) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-7 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-8 > p').html() != 4) {
        humane.log("WRONG ANSWER");
    }
    else if($('#answer-9 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-10 > p').html() != 3) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-11 > p').html() != 5) {
        humane.log("WRONG ANSWER");
    }

    else if($('#answer-12 > p').html() != 4) {
        humane.log("WRONG ANSWER");
    }


    localStorage.setItem('studentScore', JSON.stringify(studentScore));

    if(studentScore >= 4) {
        //window.location.href = 'question2.html';
        // default: false
    }

});
function isPlaying(audelem) { return !audelem.paused; }