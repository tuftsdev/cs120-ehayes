function updateHandler() 
{
	var currentVideoTime = video.currentTime;
	customCaptions(currentVideoTime);
}

let video = document.getElementById("butwehavethepower");
let lyrics = document.getElementById("lyrics");

// timeupdate will be called continuously as the video keeps playing.
video.addEventListener('timeupdate', updateHandler);

// here we're just going to set up captions based on current video time.
function customCaptions(currentTime) {
	if (currentTime >= 6 && currentTime < 9) lyrics.innerHTML = "Come gather round, children";
	else if (currentTime >= 9 && currentTime < 11) lyrics.innerHTML = "It's high time ye learned";
	else if (currentTime >= 11 && currentTime < 13) lyrics.innerHTML = "'Bout a hero named Homer";
	else if (currentTime >= 13 && currentTime < 16) lyrics.innerHTML = "And a devil named Burns.";
	else if (currentTime >= 17 && currentTime < 19) lyrics.innerHTML = "We'll march 'till we drop ";
	else if (currentTime >= 19 && currentTime < 21) lyrics.innerHTML = "The girls and the fellas.";
	else if (currentTime >= 21 && currentTime < 24) lyrics.innerHTML = "We'll fight 'till the death ";
	else if (currentTime >= 24 && currentTime < 27) lyrics.innerHTML = "Or else fold like umbrellas.";
	else if (currentTime >= 31 && currentTime < 36) lyrics.innerHTML = "<em>(Burns being silly)</em>";
	else if (currentTime >= 38 && currentTime < 40) lyrics.innerHTML = "So we'll march day and night";
	else if (currentTime >= 40 && currentTime < 43) lyrics.innerHTML = "By the big cooling tower.";
	else if (currentTime >= 43 && currentTime < 45) lyrics.innerHTML = "They have the plant";
	else if (currentTime >= 45 && currentTime < 48) lyrics.innerHTML = "But we have the power.";
	else if (currentTime >= 53 && currentTime < 55) lyrics.innerHTML = "Lenny: Now do \"Classical Gas!\"";
	else if (currentTime >= 73 && currentTime < 75) lyrics.innerHTML = "So we'll march day and night";
	else if (currentTime >= 75 && currentTime < 78) lyrics.innerHTML = "By the big cooling tower.";
	else if (currentTime >= 78 && currentTime < 80) lyrics.innerHTML = "They have the plant";
	else if (currentTime >= 80 && currentTime < 83) lyrics.innerHTML = "But we have the power.";
	else if (currentTime >= 83 && currentTime < 92) lyrics.innerHTML = "<em>(Chorus refrains)</em>"
	else if (currentTime >= 92 && currentTime < 109) lyrics.innerHTML = "<em>(Burns being menacing)</em>";
	else lyrics.innerHTML = "";
}
