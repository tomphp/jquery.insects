(function ($, window) {
	"use strict";

	var defaultSettings = {
			'max-insects': 3,
			'chance': 0.5,
			'max-speed': 15,
			'min-speed': 5,
			'update-freq': 50
		};

	function Insect($layer, settings, $window) {
		var lastUpdate = new Date().getTime();

		function Vector2D(x, y) {
			this.x = x;
			this.y = y;

			this.add = function (vec2d) {
				this.x += vec2d.x;
				this.y += vec2d.y;
				return this;
			};

			this.scale = function (scale) {
				this.x *= scale;
				this.y *= scale;
				return this;
			};

			this.getRotated = function (r) {
				var x = (this.x * Math.cos(r) + this.y * -Math.sin(r)),
					y = (this.x * Math.sin(r) + this.y * Math.cos(r));

				return new Vector2D(x, y);
			};
		}

		this.create = function () {
			this.$element = $('<div class="jq-insect"></div>').css({
				position: 'absolute',
				top: this.position.y + 'px',
				left: this.position.x + 'px',
				'z-index': $layer.css('z-index') - 1
			});

			$('body').append(this.$element);

			this.randomRotate();
			this.update();
		};

		this.rotateElement = function () {
			var rotate = 'rotate(' + this.rotation + 'rad)';

			this.$element.css({
				'-webkit-transform': rotate,
				'-moz-transform': rotate,
				'-ms-transform': rotate
			});
		};

		this.randomRotate = function () {
			if (!this.isAlive()) {
				return;
			}

			this.rotation += Math.random() * 1.5 - 0.75;
			this.rotateElement();

			var insect = this;
			setTimeout(function () {
				insect.randomRotate();
			}, Math.random() * 1000);
		};

		this.isAlive = function () {
			return this.alive;
		};

		this.kill = function () {
			this.alive = false;
			this.$element.remove();
		};

		this.isOffscreen = function () {
			var scrollTop = $window.scrollTop();
			if (this.position.x < -50
					|| this.position.y < scrollTop - 50
					|| this.position.x > $window.width()
					|| this.position.y > scrollTop + $window.height()) {
				this.kill();
			}
		};

		this.update = function () {
			if (!this.alive) {
				return false;
			}

			var now = new Date().getTime(),
				delta = now - lastUpdate;

			lastUpdate = now;

			this.position.add(this.direction.getRotated(this.rotation).scale(delta / 50));
			
			if (this.isOffscreen(window.width, window.height)) {
				this.kill();
				return;
			}

			this.$element.css({
				top: this.position.y + 'px',
				left: this.position.x + 'px'
			});

			var insect = this;
			setTimeout(function () {
				insect.update();
			}, settings['update-freq']);
		};

		var offset = $layer.offset(),
			x = offset.left + $layer.width() / 2,
			y = offset.top + $layer.height() / 2,
			speed = Math.random() *
				(settings["max-speed"] - settings["min-speed"]) +
				settings["min-speed"];

		this.position = new Vector2D(x, y);
		this.direction = new Vector2D(0, speed);
		this.rotation = (Math.random() * 2 * Math.PI);
		this.alive = true;
		this.create();
	}
	
	function validateSettings(settings) {
		if (settings['max-insects'] < 1) {
			settings['max-insects'] = 1;
		}
		
		if (settings['chance'] < 0) {
			settings['chance'] = 0;
		}
		if (settings['chance'] > 1) {
			settings['chance'] = 1;
		}

		if (settings['min-speed'] < 1) {
			settings['min-speed'] = 1;
		}
		if (settings['max-speed'] < settings['min-speed']) {
			settings['max-speed'] = settings['min-speed'];
		}

		return settings;
	}

	$.fn.insectify = function (options) {
		var settings = validateSettings($.extend(defaultSettings, options));


		if (Math.random() > settings.chance) {
			return this;
		}

		return this.each(function (index, element) {
			var count = Math.floor(Math.random() * settings['max-insects']),
				insects = [],
				i;

			for (i = 0; i <= count; i += 1) {
				insects.push(new Insect($(element), settings, $(window)));
			}
		});
	};
}(jQuery, window));
