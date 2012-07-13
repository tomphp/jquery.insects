(function ($) {
	
}(jQuery));

function I(x, y) {
	function V2D(x, y) {
		this.x = x;
		this.y = y;

		this.add = function (vec2d) {
			this.x += vec2d.x;
			this.y += vec2d.y;
		}
	}

	this.create = function() {
		this.$element = $('<div class="jq-insect"></div>').css({
			position: 'absolute',
			top: this.position.y + 'px',
			left: this.position.x + 'px'
		});

		$('body').append(this.$element);
	}

	this.kill = function () {
		this.alive = false;
		this.$element.remove();
	}

	this.isOffscreen = function (width, height) {
		if (this.position.x < 0 || this.position.y < 0
		|| this.position.x > width || this.position.y > height) {
			this.kill();
		}
	}

	this.update = function(delta) {
		if (!this.alive) {
			return false;
		}

		if (this.isOffscreen(window.width, window.height)) {
			this.kill();
		}

		this.position.add(this.direction);

		this.$element.css({
			top: this.position.y + 'px',
			left: this.position.x + 'px'
		});
	}

	this.isAlive = function() {
		return this.alive;
	}

	this.position = new V2D(x, y);
	this.direction = new V2D(0, 1);
	this.alive = true;
	this.create();
}

$(document).ready(function () {
i = new I(300, 200);

setInterval(function () { i.update(1); }, 100);
});
