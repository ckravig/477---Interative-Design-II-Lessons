$(document).ready(function() {

    $(".button").mouseenter(function() {
        $(".button").css('filter', 'brightness(50%)');
    });

    $(".button").mouseleave(function() {
        $(".button").css('filter', 'brightness(100%)');
    });

    $(".buttonLight").click(function() {
        $("p").css('color', 'black');
        $("body").css('background-color', 'white');
        // $(".button").css('background-color', 'white');
        $(this).addClass("buttonDark");
        $(this).removeClass("buttonLight");
    });

    $(".buttonDark").click(function() {
        $("p").css('color', 'white');
        $("body").css('background-color', 'rgb(62, 62, 62)');
        // $(".button").css('background-color', 'white');
        $(this).addClass("buttonLight");
        $(this).removeClass("buttonDark");
    });

    

});