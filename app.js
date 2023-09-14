const trick = document.querySelector('.truco');
const bot1 = document.querySelector('.boton1');
const bot2 = document.querySelector('.boton2');

const comaTrucos1 = "ollie,fs 180,bs 180,fs pop shove it,bs pop shove it,kickflip,heelflip,fakie ollie,fakie fs 180,fakie bs 180,fakie fs pop shove it,fakie bs pop shove it,fakie kickflip,fakie heelflip,switch ollie,switch fs 180,switch bs 180,switch fs pop shove it,switch bs pop shove it,switch kickflip,switch heelflip,no comply 180,caveman,hippy jump,boneless,boneless 180,fs revert,bs revert,ollie pick up,manual,hippy jump sexchange,powerslide,early grab ollie,strawberry milkshake,nollie,nollie fs 180,nollie bs 180,nollie fs pop shove it,nollie bs pop shove it,nollie kickflip,nollie heelflip,varial flip,varial heel,fakie bisgpin,bigspin,fs bigspin,fakie fs bigspin,shove it fs body varial"
const trucos1 = comaTrucos1.split(',')

const comaTrucos2 ="nollie varial heel,nollie varial flip,fakie varial flip,fakie varial heel,sw varial flip,sw varial heel,hardflip,treflip,full cab,caballerial,fakie tre,fs 180 flip,bs 180 flip,fakie fs 180 flip,fakie bs 180 flip,nollie fs 180 flip,nollie bs 180 flip,sw fs 180 flip,sw bs 180 flip"
const trucos2 = comaTrucos2.split(',')


bot1.addEventListener("click", function()  {
    
    var randomIndex1 = Math.floor(Math.random() * trucos1.length); 
    var facil = trucos1[randomIndex1];

    console.log(facil);

    trick.textContent  = facil;

});

bot2.addEventListener("click", function() {
    var randomIndex2 = Math.floor(Math.random() * trucos2.length); 
    var medio = trucos2[randomIndex2];

    console.log(medio);


    trick.textContent = medio;
});




