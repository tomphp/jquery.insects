(function ($) {
	
}(jQuery));

function I(x, y) {
	function V2D(x, y) {
		this.x = x;
		this.y = y;
	}

	this.position = new V2D(x, y);
	this.direction = new V2D(0, 1);
	this.alive = true;

	this.create = function() {
		var $insect = $('<div class="jq-insect"></div>').css({
			position: 'absolute',
			top: this.position.x + 'px',
			left: this.position.y + 'px'
		});

		$('body').append($insect);
	}

	this.isOffscreen = function (width, height) {
	}

	this.update = function(delta) {
		if (!this.alive) return false;
	}

	this.isAlive = function() {
		return this.alive;
	}
}
