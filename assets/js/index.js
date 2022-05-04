//Animation de parti button
   

//le parti hover
console.log("hello")
let btninverse = document.getElementsByClassName("btninverse");
console.log(btninverse);
for(let i =0; i<btninverse.length; i++){
    btninverse[i].addEventListener("mouseover", ()=>{
        btninverse[i].style.backgroundColor='#b11313';
        btninverse[i].style.color ="white";
        btninverse[i].style.fontweigth ="bold";
        btninverse[i].style.boxshadow="5px 5px 25px white";

    });
        btninverse[i].addEventListener("mouseout", ()=>{
        btninverse[i].style.backgroundcolor="#b11313";
        btninverse[i].style.color ="white";
        btninverse[i].style.fontweigth ="bold";
        btninverse[i].style.boxShadow ="none"; 
   });
 }
 //effet hover sur la parti footer
 let footericones = document.getElementsByClassName("footer-icones");
 for ( let i=0; i<footericones.length; i++){
     footericones[i].addEventListener('mouseover', ()=>{
         footericones[i].style.color='white';
     });
        footericones[i].addEventListener("mouseout", ()=>{
        footericones[i].style.backgroundcolor="#b11313";
        footericones[i].style.color ="black";
     });
}

//effet sur ligne toutes les liste des elements
let menu= document.querySelectorAll("li");
menu.forEach(function(li){
    li.addEventListener("mouseover",()=>{
        li.style.textdecoration = "underline";
    });
        li.addEventListener("mouseout",()=>{
            li.style.textdecoration ="none";
        });
});


 //effet deplacement gauche vers droite
$(document).ready(function(){
    $(selectuer).evenement(action)
})
