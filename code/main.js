function makeBox() {
	let test = 1;

	let $divArr = new Array();
	for (let i = 0; i < 25; i++) {
		$divArr[i] = $("<div class= 'box' " + `id = 'box${i}'></div>`);
		$('.grid').append($divArr[i]);
	}

	for (let i = 0; i < 25; i++) {
		document.getElementById(`box${i}`).addEventListener('click', (e) => {
			if (test == 1)
				$(`#${e.target.id}`).css('background-image', 'url(./assets/images/ghosthit.png)');

			else
				$(`#${e.target.id}`).css('background-image', 'url(./assets/images/open_coffin.png)');
		});
	}
};


$(window).resize(function () {
	// width값을 가져오기
	let width_size = window.outerWidth;
	let height_size = window.outerHeight;

	// 800 이하인지 if문으로 확인
	if (width_size < 1550 || height_size < 960) {
		width_size = 1550;
		height_size = 960;
		resizeTo(width_size, height_size);
	}
});

function max() {
	if (checkBrowser() === "chromium") {
		document.documentElement.webkitRequestFullscreen();
		document.exitFullscreen();
	} else if (checkBrowser() === "firefox") {
		document.documentElement.mozRequestFullScreen();
		document.exitFullscreen();
	}
}

function checkBrowser() {
	let agent = navigator.userAgent.toLowerCase();
	let browser = "";

	if (agent.indexOf("chrome") != -1 || agent.indexOf("safari") != -1)
		browser = "chromium";

	else if (agent.indexOf("firefox") != -1)
		browser = "firefox";

	else if ((navigator.appName == 'Netscape' || agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) // IE 10 or lower
		window.close();

	return browser;
}


var audio = new Audio();
audio.src = "../assets/background-music.mp3";
audio.loop=true;

function changeSpeaker() {
	let statusImg = new Array();
	statusImg = $('#sound').css("background-image").split("/");
	let test;
	
	test = statusImg[5].substring(0, statusImg.length - 1);

	if (test == "speak"){
		$('#sound').css("background-image", 'url(./assets/images/mute.png)');
		audio.play();
	}
	else{
		$('#sound').css("background-image", 'url(./assets/images/speaker.png)');
		audio.pause();
	}
}


window.onload = function () {
	if (checkBrowser() === "msie") {
		alert('Please Change Your Browser to Chrome or Firefox');
		window.close();
	}

	
	makeBox();
}


