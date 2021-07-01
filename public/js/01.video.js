var options = {
	videoURL: 'EGGe07oYRkU',						//동영상 id
	containment: '.video-wrapper2',
	autoPlay: true,
	mute: true,
	startAt: 0,													//영상 시작지점 (-초)
	opacity: .7,
	loop: true,
	ratio: '4/3',
	addRaster: true,
	showControls: false,								//하단 컨트롤바
	showYTLogo: false,
	onReady: function() {
		
	},
	onError: function() {
		alert('동영상을 가져오는데 에러가 발생하였습니다.')
	}
}
$('#youtubeBg').YTPlayer(options);

/* var $video = $('.video-wrapper video')
$(window).resize(onResize)
function onResize () {
	var windowWidth = $(this).innerWidth()
	var videoWidth = $('.video-wrapper video').innerWidth
	if(windowWidth < videoWidth) {
//		$video.removeClass('height-max').addClass('width-max')
		$video.css({'width': '100%', 'height': 'auto'})
	}
	else {
		$video.css({'width': 'auto', 'height': '100%'})
	}
} */