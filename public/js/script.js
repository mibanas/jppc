
listChoices = ['Rock', 'Paper', 'Scissors']

icons = {
    'Paper' : '<i class="fa-solid fa-hand" style="width: 200px; height: 200px; font-size: 180px ; display: flex; align-items: center;justify-content: center; color: #f9225a"></i>',
    'Rock' : '<i class="fa-solid fa-hand-fist" style="width: 200px; height: 200px; font-size: 180px ; display: flex; align-items: center;justify-content: center; color: #f9225a"></i>',
    'Scissors' : '<i class="fa-solid fa-hand-scissors" style="width: 200px; height: 200px; font-size: 180px ; display: flex; align-items: center;justify-content: center; color: #f9225a"></i>'
}

playerStatus = {
    'Rock' : 'La pierre écrase les ciseaux ! Vous avez sculpté votre chemin vers la victoire comme un maître sculpteur de montagnes',
    'Paper' : 'Le papier emprisonne la pierre ! Vous êtes un maître du pliage, un origamiste de la victoire!',
    'Scissors' : 'Les ciseaux coupent le papier ! Vous avez taillé votre chemin vers la gloire comme un coiffeur intrépide!'
}

computerStatus = {
    'Rock' : 'La pierre est enveloppée par le papier. L ordinateur a déployé son rouleau compresseur de stratégie!',
    'Paper' : 'Le papier est coupé par les ciseaux. L ordinateur est un maître de la découpe!',
    'Scissors' : 'Les ciseaux sont écrasés par la feuille de papier. L ordinateur est le roi de la ruse!'
}

var scorePalyer = 0
var scoreComputer = 0

var playerScore = document.getElementById('player-score')
var computerScore = document.getElementById('computer-score')

var changerIconPlayer = document.getElementById('changerIconPlayer')
var changerIconComputer = document.getElementById('changerIconComputer')

var messagePlayer = document.getElementById('messagePlayer')
var messageComputer = document.getElementById('messageComputer')

function playerChoic(choice) {
    console.log(choice);
    if (!listChoices.includes(listChoices[choice])) {
        return 
    }
    const index = Math.floor(Math.random() * listChoices.length)
    var randamChoic = listChoices[index]
    
    if (choice === randamChoic) {
        
        messagePlayer.textContent = "On dirait que nous avons un match nul !"
        messageComputer.textContent = "On dirait que nous avons un match nul !"
        changerIconPlayer.innerHTML = icons[choice]
        changerIconComputer.innerHTML = icons[randamChoic]

    } else if ((choice === 'Rock' && randamChoic === 'Scissors') || (choice === 'Paper' && randamChoic === 'Rock') || (choice === 'Scissors' && randamChoic === 'Paper')) {
        
        scorePalyer += 1;
        messagePlayer.textContent = playerStatus[choice]
        messageComputer.textContent = ""
        changerIconPlayer.innerHTML = icons[choice]
        changerIconComputer.innerHTML = icons[randamChoic]
        playerScore.textContent = scorePalyer;

    } else {

        scoreComputer += 1;
        messagePlayer.textContent = ""
        messageComputer.textContent = computerStatus[choice]
        changerIconPlayer.innerHTML = icons[choice]
        changerIconComputer.innerHTML = icons[randamChoic]
        computerScore.textContent = scoreComputer;

    }
}

function changerNom() {
    var nouveauNom = prompt("Entrez le nouveau nom pour Player 1:");

    if (nouveauNom !== null && nouveauNom !== "") {
        var player1Div = document.getElementById('playerName');
        player1Div.textContent = nouveauNom;
    }
}