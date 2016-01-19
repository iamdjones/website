/// references audio.js

$(function () {
    cheatMode = false;
    megaCheatMode = false;
    lawnMower = false;

    $root = $(window);
    $canvas = $('<div id="panel">')
            .attr('class', 'level');
    $canvas.width($root.width() + 100);
    $canvas.height($root.height() + 100);

    $(document.body).append($canvas);

    $limit = 31;


    $size = Math.ceil($canvas.width() / $limit);

    $colors = {0: 'green', 1: 'red', 2: 'white'};
    for (n = 0; n < $limit * 100; n++) {
        $barf = $("<div class='circle sprite color" + n % 4 + "'>").width($size).height($size).appendTo($canvas);
        if(n===231){
            $barf.addClass('lawn-mower');

        }
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






    $root = $('body');

    $styles = $('#styles');
    $canvas = $('<div>')
            .attr('id', 'whoa')
            .attr('class', 'level')
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

        $box = $('<div id="' + $id + '" class="box sprite"></div>')
                .width($boxSize)
                .height($boxSize)
                .css($boxStyles)
                .appendTo($canvas);



//        $box.animate({'transform':'rotate(360deg)'}, {duration:1000});
    }
//
//    $(document.body).click(function (e) {
//        console.log('doc clicked');
//        return true;
//    });
    $(document.body).on('click', '.box', function () {
        $(this).css({'background': 'transparent'});
        $(this).stop();
        $(this).attr('class', 'box click');
        $(this).addClass('click');
        console.log('box click');
    });

    $(document.body).on('click', '.circle', function () {
        $(this).addClass('clicked');
        if($(this).hasClass('lawn-mower')){
            $('.sprite').on('mouseout', function(){
                $(this).click();
            });
        }
    });

    if (cheatMode) {
        $(document.body).on('mouseover', '.sprite', function () {
            $(this).addClass('moused');
        });

        $(document.body).on('mouseout', '.sprite', function () {
            if (!megaCheatMode) {
                $(this).removeClass('moused');

            }
        });
    }



    var levels = $('.level');
    currentLevel = 0;

    function modulooso() {
        currentLevel++;
        currentLevel = currentLevel % 2;
        console.log(currentLevel);
    }
    
    

    $(document).keyup(function (e) {
        switch (e.keyCode) {
            case 70:
                modulooso();
                levels.css({display: 'none'});
                levels.eq(currentLevel).css({display: 'block'});
            case 71:
                
        }

    });




});