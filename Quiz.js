contestant = new Contestant();
var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
  contestantCount = contestantCountRef.val();
  contestant.getCount();
}
question = new Question()
question.display();



//write code here to hide question elements

//write code to change the background color here

//write code to show a heading for showing the result of Qui


