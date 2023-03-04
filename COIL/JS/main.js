const showMap = document.getElementById('showMap');
const mapcanvas = document.getElementById('mapcanvas');

let ctx = mapcanvas.getContext('2d');

class Player{
    constructor(name, photo, points){
        this.name = name;
        this.photo = photo ;
        this.points = points;
    } 
}

let warrior = new Player("Warrior", "/workspaces/COIL/COIL/images/warrior.png)", 0);


function startGame(){
    showMap.style.display = "none"
    let buttonLetsStart = document.getElementById("character-button");
    buttonLetsStart.addEventListener('click',selectCharacter)    
}

function selectCharacter(){
    let sectionSelectCharacter = document.getElementById("select-character");
    let sectionWelcomeContainer = document.getElementById("welcome-container");
 
    let inputWarrior = document.getElementById("warrior");
    let inputMage = document.getElementById("mage");
    let inputArcher = document.getElementById("archer");

    if (inputWarrior.checked) {
        alert('You select the warrior');
    } else if (inputMage.checked) {
        alert('You select the mage');
    } else if (inputArcher.checked) {
        alert('You select the archer');
    } else {
        alert('Selecciona una mascota');
    }
    
    sectionSelectCharacter.style.display="none"
    sectionWelcomeContainer.style.display="none"
    showMap.style.display = "flex"
   
    
}

window.addEventListener('load', startGame);