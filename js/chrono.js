var Chrono = function() {
    this.timezones = [
        {
            id : 'myTime',
            name : {
                ru : 'Мое Время ',
                en : 'My Time'
            },
            tz   : ''
        },
        {
            id : 'NYC',
            name : {
                ru : 'NYC',
                en : 'NYC'
            },
            tz   : 'America/New_York'
        },
        {
            id : 'UTC',
            name : {
                ru : 'UTC',
                en : 'UTC'
            },
            tz   : 'UTC'
        },
        {
            id : 'kiev',
            name : {
                ru : 'Киев',
                en : 'Kiev'
            },
            tz   : 'Europe/Kiev'
        },
        {
            id : 'MSK',
            name : {
                ru : 'MSK',
                en : 'MSK'
            },
            tz   : 'Europe/Moscow'
        }];
    this.activeTimezone = '';
    this.formats = {
        time : 'HH:mm:ss',
        timezone : 'Z'
    };
};
Chrono.prototype = {
    setTimezone : function(timezone) {
        this.activeTimezone = timezone;
        this.setCookieTimezone();
        return this;
    },
    getTimezone : function() {
        return this.activeTimezone;
    },
    setCookieTimezone : function() {
        var currentTimezone = this.activeTimezone
        Cookies.set('timezone', currentTimezone, { expires: 7, path: '/' });
    },
    getCookieTimezone : function() {
        return Cookies.get('timezone');
    },
    buildHTML : function () {
        var zones = this.timezones,
            timezones = '',
            current = '',
            now = this.getCurrentMoment(),
            nowZoned;
        for (var i = 0, len = zones.length; i < len; i++) {
            var zone = zones[i];
            if (zone.tz) {
                nowZoned = now.clone().tz( zone.tz );
            } else {
                nowZoned = this.getNow();
            }
            timezones += '<li><span id="time'+ zone.id +'" class="timezone" data-timezone="' + zone.tz + '">' +
                '<span class="timezone-label">' + zone.name[curLang] + '</span> ' + nowZoned.format(this.formats.time);
            '</span></li>';

        }
        current += now.format(this.formats.time);
        return {
            timezones : timezones,
            current : current
        };
    },
    tryTimezoneFromCookie : function() {
        var cookieTimezone = this.getCookieTimezone();
        if (cookieTimezone) {
            this.setTimezone(cookieTimezone);
        }
        return this;
    },
    getCurrentMoment : function () {
        //return this.currentMoment;
        var timezone = this.getTimezone();
        if (timezone) {
            return moment().tz(timezone);
        } else {
            return this.getNow();
        }
    },
    getNow : function() {
      return moment();
    },
    init : function() {
        this.tryTimezoneFromCookie().runClocks();
    },
    runClocks : function () {
        var htmls = this.buildHTML();
        $('#timezones').html( htmls.timezones );
        $('#timeCurrent').html( htmls.current );
        setTimeout( this.runClocks.bind(this), 500 );
    }
};