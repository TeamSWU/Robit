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

$('#proceed-button').click(function(){
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
    if( studentScore >= 4){
        window.location.href = 'question2.html'
    }
});

$('#check-button').click(function () {
 if($('#circle > p').html() != 4) {
        setTimeout(function() {
            humane.log("Аз съм кръг");

            $("#circle-sound").trigger('load');
            $("#circle-sound").trigger('play');
        }, 200);
    }

    else if($('#square > p').html() != 4) {
        setTimeout(function(){
            humane.log("Аз съм квадрат, имам 4 равни страни и 4 ъгъла.");

            $("#square-sound").trigger('load');
            $("#square-sound").trigger('play');
        }, 700);
    }

    else if($('#rectangle > p').html() != 4) {
        setTimeout(function() {
            humane.log("Аз съм правоъгълник, имам 4 страни и 4 ъгъла.");

            $("#rectangle-sound").trigger('load');
            $("#rectangle-sound").trigger('play');
        }, 700)
    }

    else if($('#triangle > p').html() != 3) {
        setTimeout(function() {
            humane.log("Аз съм триъгълник, имам 3 страни и 3 ъгъла.");

            $("#triangle-sound").trigger('load');
            $("#triangle-sound").trigger('play');
        }, 300);
    }

    localStorage.setItem('studentScore', JSON.stringify(studentScore));
});
function isPlaying(audelem) { return !audelem.paused; }