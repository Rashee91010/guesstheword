player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML = "Question Turn = " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer Turn = " + player2name;

function send() {
    get_qn = document.getElementById("word").value;
    qn = get_qn.toLowerCase();
    firstchar = qn.charAt(1);
    console.log(firstchar);

    length = Math.floor(qn.length / 2);
    secondchar = qn.charAt(length);
    console.log(secondchar);

    lengthminus1 = qn.length - 1;
    thirdchar = qn.charAt(lengthminus1);
    console.log(thirdchar);

    removefirstchar = qn.replace(firstchar, "_");
    console.log(removefirstchar);

    removesecondchar = removefirstchar.replace(secondchar, "_");
    console.log(removesecondchar);

    removethirdchar = removesecondchar.replace(thirdchar, "_");
    console.log(removethirdchar);

    question = "<h4 id='word_display'> Q. " + removethirdchar + "</h4>";
    inputbox = "<br>Answer: <input type=text id='input_check_box'>";
    checkbutton = "<br><br><button class='btn-info' onclick='check()'>Check</button>";
    row = question + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

questionturn = "player1";
answerturn = "player2";

function check() {
    getanswer = document.getElementById("input_check_box").value;
    finalanswer = getanswer.toLowerCase();

    if (finalanswer == qn) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question Turn = " + player2name;
    }
    else {
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question Turn = " + player1name;
    }

    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer Turn = " + player2name;
    }
    else {
        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer Turn = " + player1name;
    }
    document.getElementById("output").innerHTML = "";
}
