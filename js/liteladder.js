$(document).ready(function(){
    $('#sliderWrapper').bxSlider({
        slideSelector : '.slide',
        pager : false,
        auto: ($("#sliderWrapper > .slide").not('.bx-clone').length > 1) ? true: false,
        useCSS: false
    });

    var twitterInit = function() {
        var matchesHeight = $('#matchesContainer:visible').length > 0 ? $('#matchesContainer:visible').outerHeight() + 30 : 0;
        var newsHeight = $('#newsCol').outerHeight() - matchesHeight;
        var twitterWidth = $('#twitterCol').width();
        twttr.ready(
            function (twttr) {
                twttr.widgets.createTimeline(
                    '663533388515688448',
                    document.getElementById('twitterCol'),
                    {
                        width: twitterWidth,
                        height: newsHeight,
                        related: 'twitterdev,twitterapi',
                        chrome : 'transparent, noborders'
                    });

            }
        );
    };
    setTimeout(twitterInit, 100);
    var matchesBlockToShow = $('#matchesSelector > .active').eq(0).attr('href') + 'Matches';
    $(matchesBlockToShow).show().siblings('div').hide();

    var slClocks = new Chrono();
    slClocks.init();

    $('#timeSwitcher').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('body').on( 'click', '.timezone', function() {
        var that = $(this),
            timezone = that.data('timezone');
            slClocks.setTimezone(timezone);
            singlePostedAt();
            matchesDatesProcess();
    } );
    $(document).on('click', function(e) {
        if ( !$(e.target).is('.time') ) {
            $('.time').removeClass('active');
        }
    });

    var postedAgo = function() {
        var postsDates = $('.post-date'),
            len = postsDates.length,
            posted, el;
        if(curLang) {
            moment.locale(curLang);
        }
        for (var i = 0; i < len; i++) {
            el = postsDates.eq(i);
            posted = moment( el.data('posted'), 'X'); // 'X' format stands for Unix timestamp
            el.html( posted.fromNow() );
        }
        setTimeout(postedAgo, 30000);
    };
    var singlePostedAt = function() {
        var single = $('.single-item-posted'),
            posted = moment( single.data('posted'), 'X');
        if ( slClocks.getTimezone() ) {
            single.html(posted.locale(curLang).tz( slClocks.getTimezone() ).calendar());
        } else {
            single.html(posted.locale(curLang).calendar());
        }
    };
    var matchesDatesProcess = function() {
        $('.m-status').each(function() {
            var that = $(this),
                dateString = that.data('date'),
                format = that.data('format');

            if(curLang) {
                moment.locale(curLang);
                if (slClocks.getTimezone()) {
                    that.html(moment(dateString, moment.ISO_8601).tz(slClocks.getTimezone()).format(format));
                } else {
                    that.html(moment(dateString, moment.ISO_8601).locale(curLang).format(format));
                }
            }
        });
    };

    matchesDatesProcess();
    singlePostedAt();
    postedAgo();

    $('.news-image').hover(
    function() {
        $(this).parents('article').addClass('hovered');
    },
    function() {
        $(this).parents('article').removeClass('hovered');
    });

    $('#streamsAccordion').on('hidden.bs.collapse', function () {
        $('iframe').each(function() {
            $(this).attr('src', $(this).attr('src'));
        })
    });

    $('#matchesSelector > a').click(function(e) {
        e.preventDefault()
        var that = $(this);
        var target = $(that.attr('href')+'Matches');
        if (that.hasClass('active')) {
            return;
        } else {
            that.addClass('active').siblings().removeClass('active');
            target.show().siblings('div').hide();
            console.log($('#matchesContainer:visible').outerHeight() + 30);
            $('#twitterCol iframe').css({
                height : $('#newsCol').outerHeight() - ($('#matchesContainer:visible').outerHeight() + 30)
            })
        }
    })


});



/*

 */