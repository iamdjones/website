/// references audio.js

$(function () {

    $root = $(document.body);
    $canvas = $('<div id="panel">');
    $canvas.width($root.width() + 100);
    $canvas.height($root.height() + 100);

    $(document.body).append($canvas);

    $limit = 31;


    $size = Math.ceil($canvas.width() / $limit);

    $colors = {0: 'green', 1: 'red', 2: 'white'};
    for (n = 0; n < $limit * 100; n++) {
        $("<div class='circle color" + n % 4 + "'>").width($size).height($size).appendTo($canvas);

    }

    waitTime = 0;

    $before = {
        'opacity': '0',
        'top': '100px'
    };

    $after = {
        'opacity': '1',
        'top': '0'
    };


    $('#create').hover(
            function () {
                $(this).css('color', 'red');
            },
            function () {
                $(this).css('color', 'white');
            }
    );


    $('#standout,.action-item').css($before);

    $('#standout').animate($after, waitTime, function () {
        $('#hacks').animate($after, waitTime, function () {
            $('#stacks').animate($after, waitTime, function () {
                $('#packs').animate($after, waitTime);
            });
        });
    });







    $styles = $('#styles');
    $canvas = $('<div>')
            .attr('id', 'whoa')
            .appendTo($root);
    $boxSize = $canvas.height() / 3.0;
    $boxMargin = .9 * $boxSize;


$sides = $canvas.width() / ($boxSize - $boxMargin) * $canvas.height() / $boxSize;
     var $delta = 360 / $sides * 100;

    for ($n = 0; $n < $sides; $n++) {

        $id = 'box' + ($n + 1);

        $x1 = 0;
        $x2 = $n * $delta;
        $y1 = 360;
        $y2 = $n * $delta;

        $animation = "#" + $id + "{animation:" + $id + " 300s infinite alternate ease-out;} @keyframes " + $id + "{0%{transform:rotateX(" + $x1 + "deg) rotateY(" + $y1 + "deg);} 100%{transform:rotateX(" + $x2 + "deg) rotateY(" + $y2 + "deg);}}";
        $styles.append($animation);

        $boxStyles = {
            'margin-left': -$boxMargin + 'px'
        };

        $box = $('<div id="' + $id + '" class="box"></div>')
                .width($boxSize)
                .height($boxSize)
                .css($boxStyles)
                .appendTo($canvas);



//        $box.animate({'transform':'rotate(360deg)'}, {duration:1000});
    }


    $(document.body).on('click', '.box', function () {
        $(this).css({'background': 'hsla(135,100%,90%, .1)', 'animation': 'none'});
    });



});