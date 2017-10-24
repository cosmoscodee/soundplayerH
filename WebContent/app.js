
/* key :  AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs  */
/* channel Id :  UCOmHUn--16B90oW2L6FRR3A 	*/
/* uploads : 	UUOmHUn--16B90oW2L6FRR3A 	*/

/*var p_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCOmHUn--16B90oW2L6FRR3A&key=AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs&maxResults=50'*/
var p_url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUOmHUn--16B90oW2L6FRR3A&maxResults=50&key=AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs'


	
function jsonParser(){
	$.getJSON(p_url, function(data){
			
			for (var i = 0; i < 30; i++) {
				
				var videoTitle = data.items[i].snippet.title;
				var videoId = data.items[i].snippet.resourceId.videoId;
				
				$("#list").append("<a href= 'javascript:onLoad()'>"+ "[TITLE] " + videoTitle +" "+"[videoId] " + videoId + "</a></br>" );
			}
			
			loadPlayer();
			function loadPlayer(){
				if(typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
					
					var tag = document.createElement('script');
					tag.src = "https://www.youtube.com/iframe_api";   // 요게 api 스크립트
					var firstScriptTag = document.getElementsByTagName('script')[0];
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
					    
					window.onYouTubePlayerAPIReady = function() {
					    onYouTubePlayer();
					};
				} else {
					onYoutubePlayer();
				}
			}
			
			function onYouTubePlayer(){
				
				
				console.log("------onYouTubePlayer------")
				player = new YT.Player('player', {
				height: '240',
				width: '480',
				videoId: videoId
			});
		}
			
	});
	
}

function onLoad() {
	console.log("test")
}



$(document).ready(function() {
	jsonParser();
});

