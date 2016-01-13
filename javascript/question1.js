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

var studentScore, squareNum, triangleNum, circleNum, rectangleNum;

$('#proceed-button').click(function(){
    studentScore = 0;

    addPoints("circle", 4);
    addPoints("square", 4);
    addPoints("rectangle", 4);
    addPoints("triangle", 3);

    if( studentScore >= 4){
        window.location.href = 'question2.html'
    }

    sessionStorage.setItem('studentScore', JSON.stringify(studentScore));
    sessionStorage.setItem('squareNum', JSON.stringify(getFigureNum("square")));
    sessionStorage.setItem('triangleNum', JSON.stringify(getFigureNum("triangle")));
    sessionStorage.setItem('circleNum', JSON.stringify(getFigureNum("circle")));
    sessionStorage.setItem('rectangleNum', JSON.stringify(getFigureNum("rectangle")));
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

    sessionStorage.setItem('studentScore', JSON.stringify(studentScore));
});
function isPlaying(audelem) { return !audelem.paused; }

function addPoints(figureName, answerNumber)
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

function getFigureNum(figureName) {
    return $("#" + figureName).html();
}

function isWrong(figureName, answerNumber)
{
    if($('#' + figureName + ' > p').html() != answerNumber)
    {
        return true;
    }
}

(function ()
    {
        var patt = new RegExp("<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>");

        squareNum = sessionStorage.getItem("squareNum");
        $("#square").html(patt.exec(squareNum));

        rectangleNum = sessionStorage.getItem("rectangleNum");
        $("#rectangle").html(patt.exec(rectangleNum));

        circleNum = sessionStorage.getItem("circleNum");
        $("#circle").html(patt.exec(circleNum));

        triangleNum = sessionStorage.getItem("triangleNum");
        $("#triangle").html(patt.exec(triangleNum));
    }
)();