/*!
 * Author: Mashiro
 * Site: https://2heng.xin
 * License: MIT
 */
"use strict";

var Arknights = {
	F_NORMALIZE: function () {
		this.F_SCREEN_ROTATE_ALERT();
		this.F_WINDOW_ONLOAD_EVENT();
		this.F_SHOW_TIME();
	},
	F_WINDOW_ONLOAD_EVENT: function () {
		$(window).on('load', function () {
			Arknights.F_SCREEN_ADAPTER();
			Arknights.F_BG_PARRALAX_INI();
			$('#loader-layer').css('display', 'none');
		});
	},
	F_BG_PARRALAX_INI: function () {
		var cover = {};
		cover.t = $('#bg-img');
		cover.w = cover.t[0].naturalWidth;
		cover.h = cover.t[0].naturalHeight;

		(cover.o = function () {
			$('#mark').height($(window).height());
		})();

		(cover.f = function () {

			var _w = $('#mark').width(),
				_h = $('#mark').height(),
				x, y, i, e;

			e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;

			if (_w >= _h) {
				i = _w / e * 50;
				y = i;
				x = i * _w / _h;
			} else {
				i = _h / e * 50;
				x = i;
				y = i * _h / _w;
			}

			$('#bg-layer').css({
				'width': _w + x,
				'height': _h + y,
				'marginLeft': -0.5 * x,
				'marginTop': -0.5 * y
			})

			$('#bg-img').css({
				'width': _w + x,
				'height': _h + y,
			})

			if (!cover.w) {
				cover.w = cover.t.width();
				cover.h = cover.t.height();
			}

			(function () {
				var id = $('#bg-img')[0],
					w = cover.w,
					h = cover.h,
					_height = $(id).parent().height(),
					_width = $(id).parent().width(),
					ratio = h / w;

				if (_height / _width > ratio) {
					id.style.height = _height + 'px';
					id.style.width = _height / ratio + 'px';
				} else {
					id.style.width = _width + 'px';
					id.style.height = _width * ratio + 'px';
				}

				id.style.left = (_width - parseInt(id.style.width)) / 2 + 'px';
				id.style.top = (_height - parseInt(id.style.height)) / 2 + 'px';
			})();

		})();
		var scene = document.getElementById('mark');
		var parallaxInstance = new Parallax(scene);

	},
	F_SCREEN_ADAPTER: function () {
		var sw = Math.max(window.innerHeight, window.innerWidth),
			sh = Math.min(window.innerHeight, window.innerWidth),
			tsw = 1366,
			tsh = 653,
			trw = 783,
			trh = 640,
			_w, _h,
			r = 7 / 4;
		_w = sw / tsw;
		_h = sh / tsh;

		if (sw / sh < r) {
			$('.char.perspective.box').css({
				'width': window.innerWidth * 0.6,
				'transform': 'translateY(calc((80vh - 460px * ' + _w + ') * 0.5))'
			});
			$('#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter').css('transform', 'scale(' + _w + ')');
			$('.right.menu.box').css('margin-right', -80 * _w);
			$('.left.menu.box').css('transform', 'perspective(30em) rotateY(10deg) scale(0.9) translateY(calc((-80vh + 460px * ' + _w + ') * 0.5))');
			$('.right.menu.box').css('transform', 'perspective(30em) rotateY(-10deg) scale(0.9) translateY(calc((-80vh + 460px * ' + _w + ') * 0.5))');
		} else {
			$('.char.perspective.box').css('width', window.innerHeight / 0.8);
			$('#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter').css('transform', 'scale(' + _h + ')');
			$('.right.menu.box').css('margin-right', -80 * _h);
		}
	},
	F_SCREEN_ROTATE_ALERT: function () {
		if (GYST) {
			GYST.landScape({
				mode: 'landscape',
			});
		}
	},
	F_SHOW_TIME: function () {
		setInterval(function () {
			var now = new Date(),
				year = now.getFullYear(),
				month = now.getMonth() + 1,
				day = now.getDate(),
				hour = now.getHours(),
				minute = now.getMinutes(),
				checkTime = function (i) { // add a zero in front of numbers<10
					if (i < 10) {
						i = "0" + i;
					}
					return i;
				};
			month = checkTime(month);
			day = checkTime(day);
			hour = checkTime(hour);
			minute = checkTime(minute);
			var str = year + "/" + month + "/" + day + " " + hour + ":" + minute;
			$('#time').text(str);
		}, 500);
	}
};

(function () {
	Arknights.F_NORMALIZE();
})();
