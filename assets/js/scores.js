var listScores =  document.getElementById("highscores");

function printHighscores() {
    var highScores = localStorage.getItem("game");
    console.log(highScores)
    listScores.append(highScores);
}

function clearHighscores() {
  localStorage.removeItem("game");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;
printHighscores();