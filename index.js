let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let car = document.querySelector('.car');
let cloud = document.querySelector('.cloud');
let gamestarter = document.querySelector('.game-starter');
let myaudio = document.getElementById('myaudio');
let seconds = document.getElementById('counter').textContent;
let women = document.querySelector('.women');
let men = document.querySelector('.men');
let men1 = document.querySelector('.men1');

let coundown = setInterval(function(){
    seconds--;
    document.getElementById('counter').textContent = seconds;
    if(seconds <=0){
        clearInterval(coundown);
        gamestarter.remove();
        cloud.classList.add('cloudanimation');
        women.classList.add('womenanimation');
        men.classList.add('menanimation');
        men1.classList.add('men1animation');


    }
},1000)

setInterval(function(){
    cityouter.classList.toggle('daytonight');
},8000);

document.addEventListener('keypress',keycontrol);

let light = false;
let mycararr = ['images/lights-off.png','images/lights-on.png'];
let music = false;
function keycontrol(e){
    if(e.keyCode == 32){
        cityinner.classList.toggle('cityanimation');
        car.classList.toggle('caranimation');
    }
    if(e.keyCode == 119)
    {
        car.classList.toggle('left');
    }
    if(e.keyCode == 115 )
    {
        car.classList.toggle('right');
    }
    if(e.keyCode == 108){
        if(light){
            car.setAttribute('src',mycararr[0]);
            light = false;
        }
        else{
            car.setAttribute('src',mycararr[1]);
            light = true;
        }
    }
    if(e.keyCode == 109){
        if(music){
            pausemusic();
            music = false;
        }
        else{
            playmusic();
            music = true;
        }
        
    }
    
    console.log(e.keyCode);
}

function pausemusic(){
    myaudio.pause();
}
function playmusic(){
    myaudio.play();
}
