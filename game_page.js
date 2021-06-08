player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML="question turn- "+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn- "+ player2_name;


function send(){
word1=document.getElementById("word").value;
word=word1.toLowerCase();
char1=word.charAt(1);

length2=Math.floor(word.length/2);
char2=word.charAt(length2);
length_1=word.length-1;


char3=word.charAt(length_1);

remove1=word.replace(char1,"_");
console.log(remove1);
remove2=remove1.replace(char2,"_");
console.log(remove2);
remove3=remove2.replace(char3,"_");
console.log(remove3);
question1="<h4 id='word_display'> Q. "+remove3+"</h4>";
answer1="<br>Answer : <input type='text' id='input_check_box'>";
checkbtn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question1+answer1+checkbtn;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
if(answer==word){
    if(answer_turn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn - " + player2_name ;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn - " + player1_name ;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name ;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name ;
    }
    document.getElementById("output").innerHTML="";
}
