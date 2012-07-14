jInsects
========

Description
-----------

jInsects is a jQuery plugin which generates bugs under the specified element
which then run off screen.

This concept for this idea came from Lee and the implementation by Tom Oram.

Usage
-----

Include jQuery and jInsect into your HTML page:

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.insects.js"></script>


Call $.insectify() on the element you want to apply insects to:

	`$('#popup').insectify()`

A typical use for this plugin would be to have insects hiding under a popup,
this can be done like so:

	<script type="text/javascript">
	$(document).ready(function () {
		$('#activate').hover(
			function () {
				$('#popup').show();
			},
			function () {
				$('#popup').insectify().hide();
			}
		);
	});
	</script>

**Please note that $.insectify() must be called before $.hide() as it needs the element
to be displayed when it is called so it can get the position.**

The above code would work on some HTML similar to this:

	<a href="#" id="activate'>Hover over me</a>
	<div id="popup" style="display: hidden;">Popup contents</div>

Options can be passed to the $.insectify() method like so:

	$('#popup').insectify({
		'max-insects': 5,
		'chance': 0.8
	});

For a list of all available objects see the next section.

Options
-------

* max-insects: The maximum number of insects that could be hiding under the
element.
	* Type: Integer
	* Default: 3
* chance: The chance that there will be insects hiding. A value of 1 means
there will always be insects hiding.
	* Type: Float
	* Range: 0-1
	* Default: 0.5
* min-speed: The minimum possible speed of an insect.
	* Type: Integer
	* Range: 1-10 recommended
	* Default: 5
* max-speed: The maximum possible speed of an insect.
	* Type: Integer
	* Range: 1-20 recommended
	* Default: 15
* update-freq (Integer): The time between updates of the insect sprites in
milliseconds. Lower is smoother but more CPU intensive.
	* Type: Integer
	* Range: 1-1000
	* Default: 50

Links
-----

[Tom Oram's Development Blog](http://devblog.x2k.co.uk/ "Tom Oram's Development Blog")
