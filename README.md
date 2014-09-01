simpleParallax
==============

Simple parallax jQuery plugin http://simpleparallax.responsive.su/

Usage
=====

Include jQuery:
```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```
Add CSS style in head section:
```html
<link rel="stylesheet" href="path/path/simpleparallax.css">	
```
Include plugin's code:
```html
<script src="js/jquery.simpleparallax.js"></script>
```
Create markup:
```html
<div class="parallax" data-speed="0.5" style="background-image: url(http://lorempixel.com/1920/1600/nature/2);">
...			
</div>
```
Call the plugin:
```javascript
$(function(){				
	$(".parallax").simpleParallax();
})
```

Install via bower
=================
```
bower install simple-parallax
```

Options
=======

```javascript
{
	// The value can be overwritten via html5 attribute "data-speed"
	speed: 0.25,
	overlay: {
		// The value can be overwritten via html5 attribute "data-bg-color"
		bgColor: "rgba(0, 0, 0, 0)",
		// The value can be overwritten via html5 attribute "data-overlay-opacity"
		opacity: 0.5,
		// The value can be overwritten via html5 attribute "data-overlay-class"
		overlayClass: false
	}
}
```
