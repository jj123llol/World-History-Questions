questions = {
	// Black Death
	"Why Did They Wear Masks For The Black Death?": "They Thought The Smell Made People Sick", // 1
	"Why Wernt Jews Affected By Black Death?": "They Were Clean And Refused To Eat Dirty Foods", // 2
	"What Happened To The Jews During Black Death?" : "Prosecuted", // 3
	"What Were The Jews Accused Of During Black Death?": "Poisoning The Wells", // 4
	"How Was The Black Death Transmitted?": "Fleas On Rats", // 5
	"What Was The Black Death?": "Disease That Spread TO Europe", // 6 
	"How Long Was The Black Death In Europe?": "Four Years", //7
	"Where Did The Black Death Come From?": "Eastern And Centeral Asia", // 8
	"How Did The Rats And Fleas Thrive During Black Death?": "The Dirty Conditions", // 9
	"How Did The Black Death Spread To The Country Side?": "People Moved Out Of The Cities, Bringing It With Them.", // 10

	// feudalism
	"Why and how did feudalism develop in western Europe?": "Needed Protection From Vikings", // 1
	"How did feudalism work?": "Person WOuld Be Appointed Lord Of A Piece Of Land And Had To Protect It.", // 2
	"What social classes existed within the feudal system?": "Monarch, Lords, Knights, Peasents.", // 3
	"How did monarchs justify and maintain their power?": "Claimed That God Gave Them The Right To Rule.", // 4
	"Who was the top leader in the land with the feudal system?": "The King.", // 5
	"What was life like for the majority of the people that lived in the Middle Ages under the feudal system?": "Worked Hard As Peasents", // 6
	"What building, owned by the local lord, was the center of daily life in the feudal system?": "The Manor", // 7
	"Who was the leader of the Catholic Church in a kingdom?": "The Bishop", // 8
	"True or False: The Bishops of the Catholic Church were typically poor and had little power in the kingdom.": "False", // 9
	"Who owned everything in a village, including the crops, town, and peasants?": "The Lords", // 10

	// Crusades
	"Who fought each other in the Crusades?": "Christans And Muslims", // 1
	"The city of Jerusalem is important to what three major religions?": "Christianity, Islam, and Judaism", // 2
	"The First Crusade got started when the Seljuk Turks did what?": "preventing Christians from entering Jerusalem",// 3
	"When Did The First Crusade Start?": "1095", // 4
	"When Did The First Crusade End?": "1099", // 5
	"What Was The Childrens Crusade?": "A Army Of Children Gathered Because A Kid Said God Told Him He Had To", // 6
	"What Happened To The Children Of The Childrens Crusade?": "They Were Sold As Slaves", // 7
	"How Long Did The Second Crusade Last?": "1147-1149", // 8
	"How Long Did The Third Crusade Last?": "1187-1192", // 9
	"how long did the fourth crusade last?": "1202-1204" // 10
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
