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

`
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.insects.js"></script>
`


Call $.insectify() on the element you want to apply insects to:

`$('#popup').insectify()`

A typical use for this plugin would be to have insects hiding under a popup,
this can be done like so:

`
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
`

The above code would work on some HTML similar to this:

`<a href="#" id="activate'>Hover over me</a>
	<div id="popup" style="display: hidden;">Popup contents</div>`

Options can be passed to the $.insectify() method like so:

`
	$('#popup').insectify({
		'max-insects': 5,
		'chance': 0.8
	});
`

Options
-------

* max-insects (Integer): The maximum number of insects that could be hiding
under the element.
* chance (Float 0-1): The chance that there will be insects hiding. A value of 1
means there will always be insects hiding.

Links
-----

[Tom Oram's Development Blog](http://devblog.x2k.co.uk/ "Tom Oram's Development Blog")
