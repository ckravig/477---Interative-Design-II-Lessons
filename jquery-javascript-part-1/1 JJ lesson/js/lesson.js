$(document).ready(function() {

    $(".green").delay(2000).fadeOut("slow").delay(500).fadeIn("fast").fadeOut("slow");


    $(".red").fadeIn("slow");
    $(".red").mouseenter(function() {
        $(".red").fadeTo("fast", 0.5);
    });

    $(".red").mouseleave(function() {
        $(".red").fadeTo("fast", 1);
    });

    $(".red").click(function() {
        $(this).html("YEAH!");
    });

    $(".green").click(function()  {
        $(".red").html("NO!");
    });

    $("p").click(function() {
        $(this).toggleClass("switch");
    });

    $(".red").click(function() {
        $("p").addClass("new");
    });

    $(".red").dblclick(function() {
        $("p").removeClass("new");
    });

    $(".blue").animate({width: "200px", height: "200px"}, 2000);
    $(".blue").click(function() {
        $(".blue").animate({left: "+=200px"}, 500);
    });

    $(document).keydown(function(e) {

        switch(e.which) {
            case 37:
             $(".black").animate({left: "-=200px"}, 500);
            break;
            
            case 38:
             $(".black").animate({top: "-=200px"}, 500);
            break;
            
            case 39:
             $(".black").animate({left: "+=200px"}, 500);
            break; 
            
            case 40:
             $(".black").animate({top: "+=200px"}, 500);
            break;
            default: return;
        }

        e.preventDefault();
    
    });

    

});

