console.log('Hello')

$(document).ready(function() {



    $('.js-example-basic-single').select2({minimumResultsForSearch: Infinity});

    $('.js-example-basic-single').on('select2:open', function(e) {
        $(this).parent().find('.select2-selection__arrow::before').css('transform', 'translateY(-50%) rotate(180deg)');
    });

    $('.js-example-basic-single').on('select2:close', function(e) {
        $(this).parent().find('.select2-selection__arrow::before').css('transform', 'translateY(-50%)');
    });

    $('#slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        // arrows: true,
    });





});