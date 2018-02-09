

$(document).ready(function() {

    // ==============Owl Carousel=========


    $('#sliderTeam').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:false,
        smartSpeed:1000,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // ===============Animation===========


    $(".logo").hover(
        function() {
            $(this).addClass('flip');
        },
        function() {
            $(this).removeClass('flip');

        });

    $('#phone.animated').hover(
        function() {
            $(this).addClass('tada'); //
        },
        function() {
            $(this).removeClass('tada'); //
        });


    $(".clients-logos_sprite.animated").hover(
        function() {
            $(this).addClass('wobble');
        },
        function() {
            $(this).removeClass('wobble');
        });

    $(".services__content-item-padding.animated").hover(
        function() {
            $(this).addClass('swing');
        },
        function() {
            $(this).removeClass('swing');
        });



    // ================Navigation===========



    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700,
            easing: "swing"
        });
        return false;
    });
})



// ================SOUND for ICON callUs============

    var soundLink = $("#phone-sound")[0];
    $(".help__icon_callUs-bg").click(function() {
        soundLink.play();
    });


