$(document).ready(function(){
    $('.rainbow-text').html(function(i, html) {
        var chars = $.trim(html).split("");
        return '<span>' + chars.join('</span><span>') + '</span>';
    });
  
    $('#hero__next').click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });  
  
    $(window).scroll(function() {
        var $document = $(document),
            $nav = $('#nav'),
            $navLine = $('#nav__line'),
            $hero = $('#hero'),
            $heroTitle = $('#hero__title'),
            $heroNext = $('#hero__next'),
            $about = $('#about'),
            linesPercentage = 200,
            navLinePercentage = 0,
            $lines = $('.diagonal-line');

        if($document.scrollTop() < $about.position().top) {
            linesPercentage = $document.scrollTop() / $about.position().top;
            linesPercentage = Math.round( 200 - ((linesPercentage * 100) * 2));
            $lines.animate({
                width: linesPercentage + '%'
            }, 10);
        }
    
        if($document.scrollTop() > ($heroTitle.position().top - 20)) {
            $nav.addClass('show');
            $heroNext.removeClass('show');
     
            var navLineMax = $about.position().top - $heroTitle.position().top;
            navLinePercentage = ($document.scrollTop() - $heroTitle.position().top) / navLineMax;
            navLinePercentage = Math.round(navLinePercentage * 100);
            $navLine.width(navLinePercentage + '%');
        }
        else {
            $nav.removeClass('show');
            $heroNext.addClass('show');
            $navLine.width(0);
        }
    });
  
    $(window).resize(function(){
        resize();
    });
  
    function resize() {
        var $nav = $('#nav'), 
            $aboutSection = $('#about .section__table');
    
        $aboutSection.height('calc(100% - ' + $nav.height() + 'px)');
        $aboutSection.css('margin-top', $nav.height() + 'px');
    }

    resize();
});