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

let warriorPhoto= new Image();
warriorPhoto.src = 'images/warrior.png'
let magePhoto = new Image();
magePhoto.src = 'images/mage.png'
let archerPhoto= new Image();
archerPhoto.src = 'images/archer.png'

let characterSelected;

class Player{
    constructor(name, photo, points){
        this.name = name;
        this.photo = photo ;
        this.points = points;
        this.x = 50;
        this.y = 150;
        this.height = 30;
        this.width = 35
    } 
}

let warrior = new Player("Warrior", warriorPhoto, 0);
let mage = new Player("Mage", magePhoto, 0);
let archer = new Player("Archer", archerPhoto, 0);

players.push(warrior,mage,archer);

function startGame(){
    
    showMap.style.display = "none"
    
    buttonLetsStart.addEventListener('click',selectCharacter)   
    buttonExit.addEventListener('click',exit) ;

}

function selectCharacter(){
    
    isSelected = false;
    
    if (inputWarrior.checked) {
        alert('You select the warrior');
        characterSelected = warrior;
        isSelected = true;
    } else if (inputMage.checked) {
        alert('You select the mage');
        characterSelected = mage;
        isSelected = true;
    } else if (inputArcher.checked) {
        alert('You select the archer');
        characterSelected = archer;
        isSelected = true;
    } else {
        alert('You should select a hero');
    }
        
    if(isSelected){
        sectionSelectCharacter.style.display="none"
        sectionWelcomeContainer.style.display="none"
        showMap.style.display = "flex"
        startMap();
    }
    console.log(characterSelected);
    
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
    ctx.drawImage(
       characterSelected.photo,
        characterSelected.x,
        characterSelected.y,
        characterSelected.height,
        characterSelected.width
    );
}

function startMap(){
    mapcanvas.height = window.innerHeight;
    mapcanvas.width = window.innerWidth;
    interval = setInterval(drawMap,10);
    window.addEventListener("keydown",move);
}

function moveRight(){
    characterSelected.x += 5;
}
function moveLeft(){
    characterSelected.x -= 5;
}
function moveUp(){
    characterSelected.y -= 5;
}
function moveDown(){
    characterSelected.y += 5;
}

function move(event){
    switch(event.key){
        case 'ArrowUp': moveUp()
            break
        case 'ArrowDown':moveDown()
            break
        case 'ArrowLeft':moveLeft()
            break
        case 'ArrowRight':moveRight()
            break
        default:
            break
    }
}


window.addEventListener('load', startGame);