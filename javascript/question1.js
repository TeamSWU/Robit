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
    studentScore = 0;

    if ($('#circle > p').html() == 4) {
        studentScore += 2;
    }

    if( $('#square > p').html() == 4) {
       studentScore += 2;
    }

    if( $('#rectangle > p').html() == 4) {
       studentScore += 2;
    }
    if( $('#triangle > p').html() == 3) {
        studentScore += 2;
    }

    if($('#circle > p').html() != 4) {
        humane.log("Аз съм кръг");
    }

    if($('#square > p').html() != 4) {
        humane.log("Аз съм квадрат, имам 4 равни страни и 4 ъгъла.");
    }

    if($('#rectangle > p').html() != 4) {
        humane.log("Аз съм правоъгълник, имам 4 страни и 4 ъгъла.");
    }

    if($('#triangle > p').html() != 3) {
        humane.log("Аз съм триъгълник, имам 3 страни и 3 ъгъла.");
    }

    localStorage.setItem('studentScore', JSON.stringify(studentScore));

    if(studentScore >= 4) {
        //window.location.href = 'question2.html';
        // default: false
    }

});

