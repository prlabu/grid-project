$(document).ready(function () {
	
	var wndheight = window.innerHeight;
	var wndwidth = window.innerWidth;

	var div1 = document.createElement('div');
	div1.style.height = '50px';
	div1.style.width = '50px';
	div1.style.background = 'red';
	document.body.appendChild(div1);
	

	for (var i = 16; i > 0; i--) {
		var griddiv[i] = document.createElement('div');
		griddiv[i].style.height = wndheight/16;
		griddiv[i].style.width = wndwidth/16;
		griddiv[i].style.display = 'block';
		griddiv[i].style.background = 'red';
	};



});