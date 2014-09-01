simpleParallax
==============

Simple parallax jQuery plugin http://simpleparallax.responsive.su/

Usage
=====

1. Include jQuery:
```
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```
2. Add CSS style in head section:
```
<link rel="stylesheet" href="path/path/simpleparallax.css">	
```
3. Include plugin's code:
```
<script src="js/jquery.simpleparallax.js"></script>
```
4. Create markup:
```
<div class="parallax" data-speed="0.5" style="background-image: url(http://lorempixel.com/1920/1600/nature/2);">
...			
</div>
```
5. Call the plugin:
```
$(function(){				
	$(".parallax").simpleParallax();
})
```

Options
=======

```
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