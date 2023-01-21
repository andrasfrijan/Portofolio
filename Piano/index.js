
var numbersOfButtons = document.querySelectorAll(".key").length;

for (var i = 0; i<numbersOfButtons; i++) {

	document.querySelectorAll(".key")[i].addEventListener("click", function (){

		var buttonInnerHtml = this.innerHTML;
		startMusic(buttonInnerHtml);
		
	});
}

document.addEventListener("keypress", function(event){
	startMusic(event.key);
})



function startMusic(key){
	switch(key){
		case "w" : 
			var piano1 = new Audio("sounds/sound1.mp3");
			piano1.play();
			break;

		case "a" : 
			var piano2 = new Audio ('sounds/sound2.mp3');
			piano2.play();
		break;

		case "s" :
			var piano3 = new Audio('sounds/sound3.mp3');
			piano3.play();
		break;

		case "d":
			var piano4 = new Audio('sounds/sound4.mp3')
			piano4.play();
		break;

		case "f":
			var piano5 = new Audio('sounds/sound5.mp3')
			piano5.play();
		break;

		case "g":
			var piano6 = new Audio('sounds/sound6.mp3');
			piano6.play();
		break;

		case "h":
			var piano7 = new Audio('sounds/sound7.mp3');
			piano7.play();
		break;
		case "j":
			var piano8 = new Audio('sounds/sound8.mp3');
			piano8.play();
		break;
		case "i":
			var piano9 = new Audio('sounds/sound9.mp3');
			piano9.play();
		break;
		case "k":
			var piano10 = new Audio('sounds/sound10.mp3');
			piano10.play();
		break;
		case "l":
			var piano11 = new Audio('sounds/sound11.mp3');
			piano11.play();
		break;
		case "z":
			var piano12 = new Audio('sounds/sound12.mp3');
			piano12.play();
		break;
		case "x":
			var piano13 = new Audio('sounds/sound13.mp3');
			piano13.play();
		break;
		case "c":
			var piano14 = new Audio('sounds/sound14.mp3');
			piano14.play();
		break;
		case "v":
			var piano15 = new Audio('sounds/sound15.mp3');
			piano15.play();
		break;
		case "b":
			var piano16 = new Audio('sounds/sound16.mp3');
			piano16.play();
		break;
		case "n":
			var piano17 = new Audio('sounds/sound17.mp3');
			piano17.play();
		break;

		default: console.log(buttonInnerHtml);
	}
}








