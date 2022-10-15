/*
 *  Hi~ This is the source code of the page.
 *  
 *  The timer is inspired by http://lovett.cc/
 *  And I desighed the rest of the page.
 *
 */
window.onload = function() {
	update_time();
};

function update_time() {
	/* Start Time: 2011.06.19 00:00 */
	var start_itme = 936139571;
	var duration = parseInt((Date.now() / 1000 - start_itme ), 10);

	var seconds = duration % 60;
	if(seconds < 10) {
		seconds = "0" + seconds;
	}

	duration = parseInt((duration / 60), 10);
	var minutes = duration % 60;
	if(minutes < 10) {
		minutes = "0" + minutes;
	}

	duration = parseInt((duration / 60), 10);
	var hours = duration % 24;
	if(hours < 10) {
		hours = "0" + hours;
	}

	duration = parseInt((duration / 24), 10);
	var days = duration;

	$('#day').text(days);
	$('#hour').text(hours);
	$('#minute').text(minutes);
	$('#second').text(seconds);

	setTimeout('update_time()', 1000);
}

var Anniversary = function() {
	
};
