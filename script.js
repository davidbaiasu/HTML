let zar1 = document.getElementById("zar1");
let zar2 = document.getElementById("zar2");
let score_value = document.getElementById("score_value");

function roll_dice(img){
	
	let value = Math.floor(Math.random() * 6) + 1;
	
	img.src = `dice${value}.jpg`;
	
	return value;
}

function update_score(){
	
	let new_score = roll_dice(zar1) + roll_dice(zar2);
	score_value.textContent = new_score;
	
}

zar1.onclick = update_score;
zar2.onclick = update_score;