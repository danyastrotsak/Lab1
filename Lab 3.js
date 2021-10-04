var el = document.querySelector( '#block' );
var x1 = 0;
var y1 = 0;
window.addEventListener('click', function( event ){
	
	var x2 = event.clientX;
	var y2 = event.clientY;
	
	if (x2 < x1) el.className = "mirrorX";
	if (x2 > x1) el.className = el.className.replace( "mirrorX", "");
	
	var x = (x1 + x2) / 2;
	var y = (y1 + y2) / 2;
	
	el.style.top = y - el.offsetHeight / 2 + 'px';
	el.style.left = x - el.offsetWidth / 2 + 'px';
	
	x1 = x;
	y1 = y;
	
});