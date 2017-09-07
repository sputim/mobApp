var slideBar = $('.slide-bar');
$('.hamburger').on('click', function() {
    document.getElementById('slick-slider').style.visibility = "hidden";
    $('.slick-dots').css("opacity",0);
    $('.dots-names').css("opacity",0);
    var pageTitle = $('.sub-page__header');
    var modal = $('.modal-f');
    var logoshow = $('#logoshow');
    var logoImg = $('.logoImg');
    $("#app").addClass('main-menu--active');
    $('.hero').toggleClass('hero--active');
    $(this).toggleClass('hamburger--active');
    $('#menuOpen').toggle();
    if($('.hamburger').hasClass('hamburger--active')) {
        pageTitle.show();
        logoImg.show();
        modal.hide();
        logoshow.hide();
        slideBar.hide();
    } else {
        document.getElementById('slick-slider').style.visibility = "visible";
        $('.slick-dots').css("opacity",1);
        $('.dots-names').css("opacity",1);
        pageTitle.hide();
        logoImg.hide();
        modal.show();
        logoshow.show();
        slideBar.show();
        $("#app, #touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
    }
});

$(window).resize(function(){
    var windowWdth = $(window).width();
    
    if(windowWdth < 768) {
        slideBar.hide();
    }
})
