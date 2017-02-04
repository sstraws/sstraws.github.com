$(document).ready(function() {
	$('p#example').bumpyText({
		bounceHeight: '1.3em', //弹起高度
		bounceUpDuration: 300, //弹起时间
		bounceDownDuration:300 // 下落时间
	});
	$('p.shake').bumpyText();
});