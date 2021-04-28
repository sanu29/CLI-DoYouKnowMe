var readlineSync = require('readline-sync');
var name = readlineSync.question("Your name Please    : ");

console.log("")
console.log("Welcome "+name+" to DoYouKnowMe? Game")
console.log("")
console.log("********************************************************")
console.log("")
var score = 0;


arr = [
  questionOne = {
  question : "Am I a shy person? ",
  answer : "yes"
}
,
questionTwo = {
  question : "What do I love? Tea / Coffee ? ",
  answer : "Tea",
}
,
questionThree = {
  question : "My Favorite colour is? ",
  answer: "Yellow",
},
questionFour = {
  question : "If I have a pet It will be - cat or dog? ",
  answer : "Cat"
}
,
questionFive = {
  question : "What will I preffer? Python/Javascript :  ",
  answer : "Javascript",
}
,
questionSix = {
  question : "What is my Surename? ",
  answer: "Shaikh",
}
,
questionSeven = {
  question : "Number of sibiling I have? ",
  answer: "Two",
},
questionEight = {
  question : "Will I visit Ladakh or Kerela ",
  answer : "Ladakh"
}
,
questionNine = {
  question : "What do i preffer Fish or Chicken?   ",
  answer : "Fish",
}
,
questionTen = {
  question : "My Birth Month? ",
  answer: "December",
}



];

var topScore =  {
      name : 'Ridda',
      score: 8};

function checkAnswer(question,answer)
{
    
      var userans = readlineSync.question(question);
      
      if(userans.toUpperCase() === answer.toUpperCase())
      {
        console.log("You are right!!");
        score = score+1;
      }
      else
      {
        console.log("you are wrong");
      }

      console.log("Your Score is "+score);

}


for(var i=0;i<arr.length;i++)
{
  // console.log(arr[i].question,arr[i].answer);
  checkAnswer(arr[i].question,arr[i].answer);
  console.log('_____________________________________________________');
  console.log('');
}
console.clear();
console.log()
if(score>=8)
{
  console.log("Hurray!!!!")
  console.log()
  console.log(" Total Score is "+score);
}
else if(score<8 && score>=5)
{
  console.log("Yeah!!! Well Done!")
  console.log()
   console.log(" Total Score is "+score);
}
else{
  console.log("You can know me Better!! Sorry")
  console.log("")
  console.log(" Total Score is "+score);

}

console.log("*****HighScore*********")
console.log("-------------------------------")
console.log(" Name                 Score " );
console.log("-------------------------------")
console.log(""+topScore.name+"                 ",topScore.score);
console.log("-------------------------------");
console.log("")
console.log("If you have Scored more then "+topScore.name+" send me the screenshot will add your name in the list");