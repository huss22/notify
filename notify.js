document.addEventListener('deviceready', function () {
    alert("now available");
}, false);

function notifyme(){
    
    var now                  = new Date().getTime(),
    _60_seconds_from_now = new Date(now + 60*1000);

    window.plugin.notification.local.add({
        id:      1,
        title:   'Reminder',
        message: 'Dont forget to be super smart and rich yo!',
        repeat:  'weekly',
        date:    _60_seconds_from_now
    });
}
