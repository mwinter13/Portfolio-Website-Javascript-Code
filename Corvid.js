// For full API documentation, including code examples, visit https://wix.to/94BuAAs

import wixAnimations from "wix-animations";

let timeline = wixAnimations.timeline({
	"repeat":5,
	"yoyo":true
});

$w.onReady(function () {
	//TODO: write your page related code here...

	const socialMedia = $w("#socialMedia");

	$w("#imageTransitionPoint").onViewportLeave(() => {
		$w("#zoomOutImage").show();
		$w("#zoomInImage").hide();	
	})
	$w("#imageTransitionPoint").onViewportEnter(() => {
		$w("#zoomOutImage").hide();
		$w("#zoomInImage").show();
	})

	$w("#socialMedia").onViewportEnter(() => {
		timeline.add(socialMedia, {
			"opacity":0,
			"duration":300
			}).play();
	})
});