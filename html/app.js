
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices =['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function converToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${converToWord(user)}${smallUserWord} beats ${converToWord(computer)}${smallCompWord}. You win! 🔥`;
}

function lose(user, computer){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${converToWord(user)}${smallUserWord} loses to ${converToWord(computer)}${smallCompWord}. You lost...`;
}

function draw(user, computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${converToWord(computer)}${smallCompWord} equals ${converToWord(user)}${smallUserWord}. It's a draw. `;
	
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	console.log(converToWord(computerChoice));
	switch (userChoice + computerChoice){
		case "rs":
			win(userChoice, computerChoice)
			break;
		case "pr":
			win(userChoice, computerChoice)
			break;
		case "sp":
			win(userChoice, computerChoice)
			break;
		case "rp":
			lose(userChoice, computerChoice)
			break;
		case "ps":
			lose(userChoice, computerChoice)
			break;
		case "sr":
			lose(userChoice, computerChoice)
			break;
		case "rr":
			draw(userChoice, computerChoice)
			break;
		case "pp":
			draw(userChoice, computerChoice)
			break;
		case "ss":
			draw(userChoice, computerChoice)
			break;
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		console.log("paper")
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})

}








main();