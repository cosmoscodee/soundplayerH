<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="./jquery/jquery-1.9.0.js"></script>
<script type="text/javascript" src="./app.js"></script>
<!-- <script type="text/javascript" src="https://apis.google.com/js/client.js"></script> -->


<title>Sound Player</title>
<style>
	*{ margin:0; padding:0; }
	body { font-family: 'Times New Roman', serif; }
	li { list-style: none; }
	a { text-decoration: none; }
	img { border: 0; }
</style>

<!-- CSS -->
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
	#test {
		width: 960px; margin: 0 auto;
		height: 640px;
		border: 2px solid black;
		position: relative;
		background-color: #fff123
		
	}

	#player {
		width: 960px; margin: 0 auto;
		height: 640px;
		position: relative;
		background-color: #fff
		
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
	<div id = "test">
		<div id="player"> 
		
		</div>
	</div>
	
	<div id="controller">
		<p>Controller Section</p>
	</div>

	<div id="list">
		<!-- PlayList가 뜰 곳 -->
	</div>
	
	
</body>
</html>