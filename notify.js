document.addEventListener('deviceready', function () {
    // window.plugin.notification.local is now available
}, false);

var now                  = new Date().getTime(),
    _60_seconds_from_now = new Date(now + 60*1000);

window.plugin.notification.local.add({
    id:      1,
    title:   'Reminder',
    message: 'Dont forget to make a million.',
    repeat:  'weekly',
    date:    _60_seconds_from_now
});
