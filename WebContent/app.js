/* key :  AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs  */
/* channel Id :  UCOmHUn--16B90oW2L6FRR3A 	*/
/* uploads : 	UUOmHUn--16B90oW2L6FRR3A 	*/

/*var p_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCOmHUn--16B90oW2L6FRR3A&key=AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs&maxResults=50'*/

var p_url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUOmHUn--16B90oW2L6FRR3A&maxResults=50&key=AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs'

var videoTitle = [];
var videoId = [];
var nowPlaying = ""

function jsonParser() {
	$.getJSON(p_url, function(datas) {
		$.each(datas.items, function(index, data) {
			videoTitle[index] = data.snippet.title;
			videoId[index] = data.snippet.resourceId.videoId;
		
		});
		console.log('-- jsonParser() --')
		render(videoId);
		nowPlaying = videoId[0]
	
	});
	
}

function initPlayList(event) {
	console.log("------ initPlayList ------")
	player.loadPlaylist(videoId, 0, 0);
}

function play(indexnum) {
	console.log('-- play() --')
	player.loadPlaylist(videoId, indexnum, 0);
}

var render = function( videoId ){
	$.each(videoTitle, function(index, title) {
		console.log('-- render() --')
		$("#list").append(
				"<a href= 'javascript:play(\"" + index + "\")'>" + "[TITLE] " + title + " " + "[videoId] "
				+ videoId[index] + "</a></br>");
		
	});
}


$(document).ready(function() {
	jsonParser();
	
});



var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	
	console.log("-- onYoutubeIframeAPIRead() --")
	player = new YT.Player('player', {
		height : '360',
		width : '640',
		videoId : nowPlaying,
		events : {
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	console.log("------ onPlayerReady ------")
	console.log('onPlayerReady');
	event.target.playVideo();
}


var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}
