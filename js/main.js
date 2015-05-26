$(function(){
    smoothScroll.init();

    var toggleOnScroll = function(scrollTop, f1, f2) {
        return function() {
            if ($(this).scrollTop() > scrollTop) {
                f1();
            } else {
                f2();
            }
        };
    };
    var toggleNavBar = toggleOnScroll(
            100,
            function() {
                $('.navbar-default').css('opacity', 1);
            },
            function() {
                $('.navbar-default').css('opacity', 0);
            }
            );
    var toggleVessel = toggleOnScroll(
            0,
            function() {
                $('.tickets-shortcut').addClass('small');
            },
            function() {
                $('.tickets-shortcut').removeClass('small');
            }
            );

    toggleNavBar();
    toggleVessel();
    $(window).on('scroll', toggleNavBar);
    $(window).on('scroll', toggleVessel);

    var normalizeHeights = function($a, $b) {
        if ($a.height() > $b.height()) {
            $b.css('height', $a.css('height'));
        } else {
            $a.css('height', $b.css('height'));
        }
    };
    if (window.innerWidth >= 1200) {
        normalizeHeights($('#tickets .after'), $('#tickets .pricing'));
    }
    $('footer').css('height', window.innerHeight - 50 + 'px');
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-13080092-2', 'auto');
ga('send', 'pageview');

var initMap = function() {
    var myLatlng = new google.maps.LatLng(47.1814,-1.572247);
    var mapOptions = {
        center: myLatlng,
        scrollwheel: false,
        zoom: 12
    };
    var map = new google.maps.Map($('#access .map').get(0), mapOptions);
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP
    });

    // Map styling
    var styles = [
    {
        stylers: [
        { hue: "#7e551f" },
        { saturation: -20 }
        ]
    }
    ];
    map.setOptions({styles: styles});
};
google.maps.event.addDomListener(window, 'load', initMap);
