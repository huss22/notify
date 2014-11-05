	document.addEventListener('deviceready', function () {
		var now                  = new Date().getTime(),
	    _30_seconds_from_now = new Date(now + 30*1000);

	window.plugin.notification.local.add({
	    id:      1,
	    title:   'Reminder',
	    message: 'Dont forget to make a million.',
	    repeat:  'weekly',
	    date:    _30_seconds_from_now
	});

	window.plugin.notification.local.getScheduledIds(function (scheduledIds) {
    alert('Scheduled IDs: ' + scheduledIds.join(' ,'));
	}, scope);
	
	window.plugin.notification.local.add({ message: 'Great app!' });

	}, false);
	
window.plugin.notification.local.add({ message: 'Great app Mate!' });


