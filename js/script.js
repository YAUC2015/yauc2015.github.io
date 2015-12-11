/* script.js */
if (typeof(window.console) == "undefined") {
    console = {};
    console.log = console.warn = console.error = function(a) {};
}

$(function() {
    var $topBtn = $('#page-top');
    var $links  = $('a[href^=#]');
    
    /* トップページへボタンを表示・非表示にする */
    $topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $topBtn.fadeIn();
        } else {
            $topBtn.fadeOut();
        }
    });
    
    /* ページ内リンクジャンプをスムーズにする */
    $links.click(function() {
        var $href = $(this).attr("href");
        var $target = $( ($href == "#" || $href == "") ? 'html' : $href);
        var position = $target.offset().top;
        $('body, html').animate({
            scrollTop:position
        }, 600, 'swing');
        return false;
    });
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });
});
