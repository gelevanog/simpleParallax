// v 1.0
// SimpleParallax jQuery Plugin 
// author: https://github.com/gelevanog
// MIT License

"use strict";
(function($, window, document, undefined) {
	var pluginName = "simpleParallax",
		wHeight = $(window).height(),
		defaults = {
			speed: 0.25,
			overlay: {
				bgColor: "rgba(0, 0, 0, 0)",
				opacity: 0.5,
				overlayClass: false
			}
		};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this.init();
	}
	
	Plugin.prototype = {
		init: function() {
			var self = this,
				element = self.element,
				metaData = {
					speed: $(element).data("speed") || self.options.speed,
					overlay: {
						bgColor: $(element).data("bg-color") || self.options.overlay.bgColor,
						opacity: $(element).data("overlay-opacity") || self.options.overlay.opacity,
						overlayClass: $(element).data("overlay-class") || self.options.overlay.overlayClass
					}
				},
				options = $.extend(self.options, metaData);
			$(document).on({
				scroll: function() {
					self.setYposition(element, options);
				}
			});
			self.setYposition(element, options);
			self.overlayColor(element, options);
			if (options.overlay.overlayClass) {
				self.overlayStyleClass(element, options);
			}
		},
		setYposition: function(element, options) {
			var scrollTop = $(window).scrollTop(),
				offsetTop = $(element).offset().top,
				elementHeight = $(element).outerHeight(),
				yPosition = Math.round((offsetTop - scrollTop) * options.speed);
			if (offsetTop + elementHeight <= scrollTop || offsetTop >= scrollTop + wHeight) return;
			$(element).css({
				"background-attachment": "fixed",
				"background-repeat": "no-repeat",
				"position": "relative",
				"background-position": "center " + yPosition + "px"
			});
		},
		overlayColor: function(element, options) {
			var overlayOprions = {
				backgroundColor: options.overlay.bgColor,
				opacity: options.overlay.opacity
			}
			$("<div class='parallax-overlay' />").css(overlayOprions).prependTo(element);
		},
		overlayStyleClass: function(element, options) {
			$(element).find(".parallax-overlay").addClass(options.overlay.overlayClass);
		}
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			$.data(this, new Plugin(this, options));
		});
	};
})(jQuery, window, document);