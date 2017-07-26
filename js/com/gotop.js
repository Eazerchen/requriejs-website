define(['jquery'], function( $ ) {


	function goTop(id) {
		this.id = id || 'gotop';
		this.init();
	}

	goTop.prototype = {
		init: function() {
			var $el = $('#' + this.id);
			if ($el.length === 0) {
				this.$el = $('<div id="' + this.id + '">GO TOP</div>');
				$('body').append(this.$el);
			} else {
				this.$el = $el;
			}

			this.bind();
		},

		bind: function() {
			var me = this;
			me.$el.on('click', function() {
				me.goToTop();
			});

			$(document).on('scroll', function(){
				me.scroll();
			});
		},

		goToTop: function() {
			$(document).scrollTop(0);
		},

		scroll: function() {
			var scrollTop = $(document).scrollTop();
			if (scrollTop > 400) {
				this.$el.show();
			} else {
				this.$el.hide();
			}
		}
	};

	//new goTop();


	return goTop; 
});