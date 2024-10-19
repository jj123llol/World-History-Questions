questions = {
	"Why Did They Wear Masks For The Black Death?": "They Thought The Smell Made People Sick",
	"Why Wernt Jews Affected By Black Death?": "They Were Clean And Refused To Eat Dirty Foods",
	"What Happened To The Jews During Black Death?" : "Prosecuted",
	"What Were The Jews Accused Of During Black Death?": "Poisoning The Wells",
	"How Was The Black Death Transmitted?": "Fleas On Rats"
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
