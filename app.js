let user=0, computer=0 ,plays=0;;
let result ="";
const userScore_span= document.getElementById('userScore');
const computerScore_span= document.getElementById('computerScore');
const score_div = document.querySelector(".Score");
const result_div = document.getElementById("result");
const Rock=document.getElementById("rock");
const Paper=document.getElementById("paper");
const Scissor=document.getElementById("scissor");
const userword = "user".fontsize(3).sub();
const compword = "computer".fontsize(3).sub();

main();

function comp(){
	const choices = ['r','p','s'];
	const rand = Math.floor(Math.random()*3);
	return choices[rand];
}
function game(userchoice){
	plays++;
	computerchoice = comp();
	if(userchoice == 'r'){
		if(computerchoice == 'r'){
			result = "It's a Draw"
			result_div.innerHTML = result;
		}
		else if(computerchoice == 'p'){
			computer++;
			computerScore_span.innerHTML=computer;
			result = 'Paper'+compword +' beats Rock'+userword +' . You lose!!';
			result_div.innerHTML = result;
		}
		else{
			user++;userScore_span.innerHTML = user;
			result = "Rock"+userword+" beats Scissor"+compword+". You win!!"
			result_div.innerHTML = result;
		}
	}
	else if(userchoice == 'p'){
		if(computerchoice == 'p'){
			result = "It's a Draw"
			result_div.innerHTML = result;
		}
		else if(computerchoice == 's'){
			computer++;computerScore_span.innerHTML=computer;
			result = "Scissor"+compword+" beats Paper"+userword+". You lose!!"
			result_div.innerHTML = result;
		}
		else{
			user++;userScore_span.innerHTML = user;
			result = "Paper"+userword+" beats Rock"+compword+". You win!!"
			result_div.innerHTML = result;
		}
	}
	else {
		if(computerchoice == 's'){
			result = "It's a Draw"
			result_div.innerHTML = result;
		}
		else if(computerchoice == 'r'){
			computer++;computerScore_span.innerHTML=computer;
			result = "Rock"+compword+" beats Scissor"+userword+". You lose!!"
			result_div.innerHTML = result;
		}
		else{
			user++;userScore_span.innerHTML = user;
			result = "Scissor"+userword+" beats Paper"+compword+". You win!!"
			result_div.innerHTML = result;
		}
	}
}

function main(){
	if(plays==0){
		result="Start Playing!!!";
		result_div.innerHTML = result;
	}
	Rock.addEventListener('click',function(){
		game('r');
	})
	Paper.addEventListener('click',function(){
		game('p');
	})
	Scissor.addEventListener('click',function(){
		game('s');
	})
}
