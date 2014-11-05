document.addEventListener('deviceready', function () {
    notifyme();
    alert('Device now avails cux');
}, false);

function notifyme(){

	var now                  = new Date().getTime(),
	    _30_seconds_from_now = new Date(now + 30*1000);

	window.plugin.notification.local.add({
	    id:      1,
	    title:   'Reminder',
	    message: 'Dont forget to make a million.',
	    repeat:  'minutely',
	    date:    _30_seconds_from_now
	});

	window.plugin.notification.local.getScheduledIds(function (scheduledIds) {
    alert('Scheduled IDs: ' + scheduledIds.join(' ,'));
	}, scope);
	
	window.plugin.notification.local.add({ message: 'Great app!' });
	
	window.plugin.notification.local.add({ message: 'Great app Mate!' });

}


