questions = {
	"Why Did They Wear Masks For The Black Death?": "They Thought The Smell Made People Sick", // 1
	"Why Wernt Jews Affected By Black Death?": "They Were Clean And Refused To Eat Dirty Foods", // 2
	"What Happened To The Jews During Black Death?" : "Prosecuted", // 3
	"What Were The Jews Accused Of During Black Death?": "Poisoning The Wells", // 4
	"How Was The Black Death Transmitted?": "Fleas On Rats", // 5
	"What Was The Black Death?": "Disease That Spread TO Europe", // 6 
	"How Long Was The Black Death In Europe?": "Four Years", //7
	"Where Did The Black Death Come From?": "Eastern And Centeral Asia", // 8
	"How Did The Rats And Fleas Thrive During Black Death?": "The Dirty Conditions", // 9
	"How Did The Black Death Spread To The Country Side?": "People Moved Out Of The Cities, Bringing It With Them." // 10
}

var currentQuestion = 0

var showingAnswer = false

var MainButton = document.getElementById("Reveal")

function GetQuestion(number){
	var question  = Object.keys(questions)
  return question[number]
}

function GetAnswer(Question){
	return questions[Question]
}

MainButton.innerHTML = GetQuestion(currentQuestion)

MainButton.onclick = function(){
	if (showingAnswer){
  	showingAnswer = false
  	MainButton.innerHTML = GetQuestion(currentQuestion)
  }else if (!showingAnswer){
  	showingAnswer = true
  	MainButton.innerHTML = GetAnswer(GetQuestion(currentQuestion))
  }
}

document.getElementById("left").onclick = function(){
	showingAnswer = false
	nextNumber = currentQuestion - 1
  if (nextNumber < 0){
  	nextNumber = Object.keys(questions).length - 1
  }
  currentQuestion = nextNumber
  MainButton.innerHTML = GetQuestion(nextNumber)
}

document.getElementById("right").onclick = function(){
	showingAnswer = false
	nextNumber = currentQuestion + 1
  if (nextNumber > Object.keys(questions).length - 1){
  	nextNumber = 0
  }
  currentQuestion = nextNumber
  MainButton.innerHTML = GetQuestion(currentQuestion)
}
