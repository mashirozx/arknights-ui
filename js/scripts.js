var Arknights = {
	F_NORMALIZE: function () {
		this.F_BG_PARRALAX_INI();
	},
	F_BG_PARRALAX_INI: function () {
		$(window).on('load', function () {
			var cover = {};Arknights
			cover.t = $('#cover');
			cover.w = cover.t[0].naturalWidth;
			cover.h = cover.t[0].naturalHeight;

			(cover.o = function () {
				$('#mark').height($(window).height());
				$('#vibrant').height($(window).height());
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

				$('#layer').css({
					'width': _w + x,
					'height': _h + y,
					'marginLeft': -0.5 * x,
					'marginTop': -0.5 * y
				})

				$('#cover').css({
					'width': _w + x,
					'height': _h + y,
				})

				if (!cover.w) {
					cover.w = cover.t.width();
					cover.h = cover.t.height();
				}

				(function () {
					var id = $('#cover')[0],
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
		});
	},
};

(function(){
	Arknights.F_NORMALIZE();
})();