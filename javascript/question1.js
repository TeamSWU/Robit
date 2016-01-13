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

    addPints("circle", 4);
    addPints("square", 4);
    addPints("rectangle", 4);
    addPints("triangle", 3);

    if( studentScore >= 4){
        window.location.href = 'question2.html'
    }
});

$('#check-button').click(function () {
    if(isWrong('circle', 4)) {
        playNotification("circle", "Аз съм кръг", 200);
    }

    else if(isWrong('square', 4)) {
        playNotification("square", "Аз съм квадрат, имам 4 равни страни и 4 ъгъла.",700);
    }

    else if(isWrong('rectangle', 4)) {
        playNotification("rectangle", "Аз съм правоъгълник, имам 4 страни и 4 ъгъла.",700);
    }

    else if(isWrong('triangle', 3)) {
        playNotification("triangle", "Аз съм триъгълник, имам 3 страни и 3 ъгъла.",300);
    }

    localStorage.setItem('studentScore', JSON.stringify(studentScore));
});
function isPlaying(audelem) { return !audelem.paused; }

function addPints(figureName, answerNumber)
{
    if ($('#' + figureName + ' > p').html() == answerNumber) {
        studentScore += 2;
    }
}

function playNotification(figureName, message, duration)
{
        setTimeout(function() {
            humane.log(message);

            $("#" + figureName + "-sound").trigger('load');
            $("#" + figureName + "-sound").trigger('play');
        }, duration);
}

function isWrong(figureName, answerNumber)
{
    if($('#' + figureName + ' > p').html() != answerNumber)
    {
        return true;
    }
}