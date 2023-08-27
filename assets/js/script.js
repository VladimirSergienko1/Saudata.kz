console.log('Hello')

$(document).ready(function() {



    $('.js-example-basic-single').select2({minimumResultsForSearch: Infinity});

    $('.js-example-basic-single').on('select2:open', function(e) {
        $(this).parent().find('.select2-selection__arrow::before').css('transform', 'translateY(-50%) rotate(180deg)');
    });

    $('.js-example-basic-single').on('select2:close', function(e) {
        $(this).parent().find('.select2-selection__arrow::before').css('transform', 'translateY(-50%)');
    });

    $('#slider').on('init', function(event, slick){
        if (slick.currentSlide === 0) {
            $('.prev-arrow').css('stroke', '#989898');
            $('.slick-prev').css('pointer-events', 'none')

        }
    }).slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    }).on('afterChange', function(event, slick, currentSlide){
        console.log('BLA',currentSlide)
        if (currentSlide === 0) {
            $('.prev-arrow').css('stroke', '#989898');
            $('.slick-prev').css('pointer-events', 'none')

        } else {
            $('.prev-arrow').css('stroke', '#333333');
            $('.slick-prev').css('pointer-events', 'all')
        }
    });



});