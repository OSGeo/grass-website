
if (window.loadphotoswipejs) {
	window.alert("photoswipe.js i sloaded twice...")
} 
var loadphotoswipejs = 1


$( document ).ready(function() {

	var items = []; 

	$('figure').each( function() {
		if ($(this).attr('class') == 'no-photoswipe') return true; 
		var $figure = $(this),
			$a 		= $figure.find('a'),
			$img 	= $figure.find('img'),
			$src	= $a.attr('href'),
			$title  = $img.attr('alt'),
			$msrc	= $img.attr('src');
		if ($a.data('size')) {
			var $size 	= $a.data('size').split('x');
			var item = {
				src		: $src,
				w		: $size[0],
				h 		: $size[1],
				title 	: $title,
				msrc	: $msrc
			};
			console.log("Using pre-defined dimensions for " + $src);
		} else {
			var item = {
				src		: $src,
				w		: 800, 
				h 		: 600, 
				title 	: $title,
				msrc	: $msrc
			};
			console.log("Using default dimensions for " + $src);

			var img = new Image(); 
			img.src = $src;
			var wait = setInterval(function() {
				var w = img.naturalWidth,
					h = img.naturalHeight;
				if (w && h) {
					clearInterval(wait);
					item.w = w;
					item.h = h;
					console.log("Got actual dimensions for " + img.src);
				}
			}, 30);
	   	}

		var index = items.length;
		items.push(item);

		$figure.on('click', function(event) {
			event.preventDefault(); 
		
			var $pswp = $('.pswp')[0];
			var options = {
				index: index, 
				bgOpacity: 0.8,
				showHideOpacity: true
			}
			new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
		});	
	});
});
