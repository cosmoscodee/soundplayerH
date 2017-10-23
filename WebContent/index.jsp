<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="./jquery/jquery-1.9.0.js"></script>
<!-- <script type="text/javascript" src="./app.js"></script> -->

<script type="text/javascript">
var channelName = 'BLACKPINK';

/* $(document).ready(function({
	$.get( 
		"https://www.googleapis.com/youtube/v3/channels", {
			part: 'contentDetails',
			forUsername: channelName,
			key: 'AIzaSyArrLWBKmaJIoZIV774H7d6eOTSBmcKAAs'},
			
			function(data) {
				$.each(data.items, function(i, item) {
					console.log(item);
				});
			}
	);
});
 */

</script>

<title>Sound Player</title>
<style>
	*{ margin:0; padding:0; }
	body { font-family: 'Times New Roman', serif; }
	li { list-style: none; }
	a { text-decoration: none; }
	img { border: 0; }
</style>

<!-- 헤더 -->
<style>
	#main_header {
		width: 960px; margin: 0 auto;
		height: 60px;
		border: 2px solid black;
		position: relative;
	}

</style>

<style>
	#menu {
		width: 960px; margin: 0 auto;
		height: 50px;
		border: 2px solid black;
		position: relative;

	}	
</style>

<style>
	#content {
		width: 960px; margin: 0 auto;
		height: 360px;
		border: 2px solid black;
		position: relative;
		
	}
</style>

<style>
	#controller {
		width: 960px; margin: 0 auto;
		height: 50px;
		border: 2px dotted black;
		position: relative;
		
	}
</style>

<style>
	#list {
		width: 960px; margin: 0 auto;
		height: 240px;
		border: 2px solid black;
		position: relative;
		
	}
</style>


</head>

<body>
	<header id="main_header">
		Title Section - 2017 Hot Video Track
	</header>

	<div id=menu>
		Menu Section
	</div>
	
	<section id="content"> 
		<p>Video Section</p>
	</section>
	
	<div id="controller">
		<p>Controller Section</p>
	</div>
	<div id="list">
		<p>List Section</p>
	</div>
	
	
</body>
</html>