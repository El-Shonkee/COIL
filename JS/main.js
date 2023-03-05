/* html sections */
const sectionWelcomeContainer = document.getElementById("welcome-container");
const sectionSelectCharacter = document.getElementById("select-character");

const buttonLetsStart = document.getElementById("character-button");
const buttonExit = document.getElementById("exit-button");
const sectionExit =document.getElementById("exit");

const showMap = document.getElementById('showMap');
const mapcanvas = document.getElementById('mapcanvas');

/* Inputs characters */
const inputWarrior = document.getElementById("warrior");
const inputMage = document.getElementById("mage");
const inputArcher = document.getElementById("archer");

let players = [];
let ctx = mapcanvas.getContext('2d');
let interval;
let mapBackground = new Image();
mapBackground.src = '/images/mapPlaying.png';

class Player{
    constructor(name, photo, points){
        this.name = name;
        this.photo = photo ;
        this.points = points;
    } 
}

let warrior = new Player("Warrior", "/workspaces/COIL/COIL/images/warrior.png", 0);
let mage = new Player("Mage", "/workspaces/COIL/COIL/images/mage.png", 0);
let archer = new Player("Archer", "/workspaces/COIL/COIL/images/archer.png", 0);

players.push(warrior,mage,archer);

function startGame(){
    
    showMap.style.display = "none"
    
    buttonLetsStart.addEventListener('click',selectCharacter)   
    buttonExit.addEventListener('click',exit) ;

}

function selectCharacter(){
 
    if (inputWarrior.checked) {
        alert('You select the warrior');
    } else if (inputMage.checked) {
        alert('You select the mage');
    } else if (inputArcher.checked) {
        alert('You select the archer');
    } else {
        alert('You should select a hero');
    }
    
    sectionSelectCharacter.style.display="none"
    sectionWelcomeContainer.style.display="none"
    showMap.style.display = "flex"
    startMap();
}

function exit() {
    location.reload();
}

function drawMap(){
    ctx.clearRect(0,0,  mapcanvas.Width, mapcanvas.Width);
    ctx.drawImage(
            mapBackground,
            0,
            0,
            mapcanvas.width,
            mapcanvas.height);
}

function startMap(){
    mapcanvas.height = 600;
    mapcanvas.width = 800;
   interval = setInterval(drawMap,10);
}

window.addEventListener('load', startGame);