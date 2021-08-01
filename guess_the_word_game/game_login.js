function login(){
    player1name = document.getElementById("player1name").value;
    player2name = document.getElementById("player2name").value;

    localStorage.setItem("player1name", player1name);
    localStorage.setItem("player2name", player2name);
    window.location="game_page.html";
}