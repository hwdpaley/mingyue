<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div>
	<title>Nivo Slider Demo</title>
	<link rel="stylesheet" href="nivo_slider/themes/default/default.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="nivo_slider/themes/light/light.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="nivo_slider/themes/dark/dark.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="nivo_slider/themes/bar/bar.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="nivo_slider/nivo-slider.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="nivo_slider/demo/style.css" type="text/css" media="screen" />


	<div id="wrapper" align="center">
		<!-- <a href="http://dev7studios.com" id="dev7link" title="Go to dev7studios">dev7studios</a>
 -->
		<div class="slider-wrapper theme-default">
			<div id="slider" class="nivoSlider">
				<img src="nivo_slider/demo/images/toystory.jpg" data-thumb="nivo_slider/demo/images/toystory.jpg" alt="" />
				<%--<a href="http://dev7studios.com"><img src="nivo_slider/demo/images/up.jpg" data-thumb="nivo_slider/demo/images/up.jpg" alt="" title="This is an example of a caption" /></a>
                --%>
				<img src="nivo_slider/demo/images/walle.jpg" data-thumb="nivo_slider/demo/images/walle.jpg" alt="" data-transition="slideInLeft" /> 
				<img src="nivo_slider/demo/images/nemo.jpg" data-thumb="nivo_slider/demo/images/nemo.jpg" alt="" title="#htmlcaption" /> 
				<img src="nivo_slider/demo/images/up.jpg" data-thumb="nivo_slider/demo/images/up.jpg" alt="" title="This is an example of a caption" /> 
				<img src="nivo_slider/demo/images/nemo.jpg" data-thumb="nivo_slider/demo/images/nemo.jpg" alt="" title="#html111" data-transition="slideInLeft" />
			</div>
			<div id="htmlcaption" class="nivo-html-caption">
				<strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>.
			</div>
			<div id="html111" class="nivo-html-caption">
				<strong>This</strong> a <em>HTML</em> with <a href="#">a link</a>.
			</div>
		</div>

	</div>
	<!-- <script type="text/javascript" src="nivo_slider/demo/scripts/jquery-1.8.0.min.js"></script> -->
	<script type="text/javascript" src="nivo_slider/jquery.nivo.slider.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#slider').nivoSlider();
		});
	</script>
</div>

