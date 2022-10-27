// ==UserScript==
// @name         Shazam's Snay.io script
// @namespace    https://www.snay.io/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.snay.io/
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// @updateURL    https://github.com/ShazamHax/Snay-bots/blob/main/snay%20Bots%20userscript.js
// @downloadURL  https://github.com/ShazamHax/Snay-bots/blob/main/snay%20Bots%20userscript.js
// ==/UserScript==


(function() {
    'use strict';
    // Warning! if player = false, the window will reload continuously.
   
var isbot = false;
window.isbot = isbot;
const logo = document.createElement("img");
const node = document.createElement("p");
//var numBots = checkBots();
const textnode = document.createTextNode("Shazam's snay.io script.   ");
const menuTitle = document.querySelector("#title");
menuTitle.src = "https://i.imgur.com/6pJtFAS.png";

menuTitle.style.position = "absolute";
menuTitle.style.top = "-5%";

setTimeout(function() {
    const meny = document.querySelector("#overlays.fade-in");
    var bleb = document.createElement("img");
    bleb.style.height = "100%";
    bleb.src = "https://wallpapercave.com/wp/wp5756494.jpg";
    bleb.zIndex = "3";
    meny.appendChild(bleb);
    bleb.style.position = "absolute";
    document.querySelector("#title").style.zIndex = "2";
    document.querySelector("#signin-btn.btn.side-btn").style.backgroundImage = "url('http://www.clker.com/cliparts/d/u/w/y/F/1/thin-gray-signin-button-md.png')";
    document.querySelector("#signin-btn.btn.side-btn").style.border = "3px solid white";
    document.querySelector("#support-btn").style.opacity = "0%";
    document.querySelector("#support-btn").style.position = "absolute";
    document.querySelector("#support-btn").style.top = "1000px";
    document.querySelector("#news-btn").style.backgroundImage = "url('https://media.istockphoto.com/vectors/news-button-news-rounded-white-sign-news-vector-id1177875616?b=1&k=20&m=1177875616&s=612x612&w=0&h=5dftha7pf6zJuLr7OOMZ40ufurRZKohUuAyfsXHy0lU=')";
    document.querySelector("#news-btn").style.border = "3px solid white";
    document.querySelector("#news-btn").style.margin = "2px";
    document.querySelector("#news-btn").style.opacity = "70%";
    document.querySelector("#shop-btn").style.border = "3px solid white";
    document.querySelector("#shop-btn").style.backgroundImage = "url('https://www.cakefromtheheart.com.au/uploads/6/2/5/1/62510495/shop-grey-button_orig.png')";
    document.querySelector("#play-btn").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/800px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png')";
    document.querySelector("#spectate-btn").style.backgroundImage = "url('https://www.freeiconspng.com/uploads/eye-icon--icon-search-engine-17.png')";
    document.querySelector("#spectate-btn").style.border = "3px solid white";
    document.querySelector("#spectate-btn").style.backgroundColor = "gray";
    document.querySelector("#settings-btn").style.backgroundImage = "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')"
"url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/90db49863f26a04.png')";
    document.querySelector("#settings-btn").style.backgroundColor = "gray";



}, 3000);

  var bot1 = document.createElement("iframe");


bot1.style.position = "absolute";
bot1.style.top = "950px";
bot1.style.opacity = "0%";
bot1.setAttribute('class', 'bot1');



var bot2 = document.createElement("iframe");


bot2.style.position = "absolute";
bot2.style.stop = "950px";
bot2.style.opacity = "0%";
bot2.setAttribute('class', 'bot2');






var botForm = document.createElement("form");
botForm.setAttribute("class", "botForm");
var botNameInput = document.createElement("input");
botNameInput.setAttribute("class", "botNameInput");
var botNameSubmit = document.createElement("input");
botNameSubmit.setAttribute("class", "botNameSubmit");
botNameSubmit.setAttribute("type", "submit");
botNameInput.setAttribute("type", "text");
document.querySelector("#main-menu").appendChild(botForm);
botForm.appendChild(botNameInput);
botForm.appendChild(botNameSubmit);
document.querySelector(".botForm").style.position = "absolute";
document.querySelector(".botForm").style.top = "90%";
botNameInput.style.borderRadius = "25px";
botNameSubmit.style.borderRadius = "25px";
botNameInput.setAttribute("placeholder", "Bot's Nickname");
botNameSubmit.onclick = function() {botNameChange();};


function handleForm(event) { event.preventDefault(); }
botForm.addEventListener('submit', handleForm);
var bbotz = document.createTextNode("");

node.appendChild(textnode);
node.appendChild(bbotz);
//node.style.backgroundColor = "#6495ED";
node.style.backgroundImage = "linear-gradient(to right, blue, #4169E1, blue)";
node.style.position = "absolute";
node.style.left = "25%";
node.style.top = "5%";
node.style.color = "white";
node.style.padding = "8px";
node.style.borderRadius = "25px";
node.style.opacity = "70%";
node.style.border = "1.5px solid blue";


logo.style.backgroundColor = "#6495ED";
logo.style.position = "absolute";
logo.style.left = "20%";
logo.style.top = "5%";
logo.style.borderRadius = "50%";
logo.style.opacity = "70%";
logo.src = "https://yt3.ggpht.com/TNVorEJ9iTsESmUbcZXizwaZgy5jB-Ihx3z9qxfuuatrFRDhJHotz5x_X7mGIu38VBsr5bvlkg=s176-c-k-c0x00ffffff-no-rj";
logo.style.height = "10%";
logo.style.width = "6%";
logo.style.border = "2px solid blue";

function logoClicker(){

    logo.onclick = function(){botControls.style.transition = "transform 2s ease, opacity .5s ease"; node.style.transition = "transform 2s ease, opacity .5s ease"; node.style.opacity = "0%"; node.style.transform = "translate(-1000px)"; botControls.style.opacity = "0%"; botControls.style.transform = "translate(-1000px)"; logo.onclick = function(){botControls.style.transition = "transform 2s ease, opacity 3s ease"; node.style.transition = "transform 2s ease, opacity 3s ease"; node.style.opacity = "70%"; node.style.transform = "translate(0px)"; botControls.style.opacity = "70%"; botControls.style.transform = "translate(0px)";};};


}
setInterval(function(){logoClicker();}, 5000);


var botControls = document.createElement("div");
botControls.style.padding = "4px";
botControls.style.paddingRight = "6px";
botControls.style.position = "absolute";
botControls.style.top = "90px";
botControls.style.left = "500px";
//botControls.style.backgroundColor = "#6495ED";
botControls.style.backgroundImage = "linear-gradient(to bottom right, #0F52BA, #4169E1, #0F52BA, #4169E1, #0F52BA)";

botControls.style.borderRadius = "25px";
botControls.setAttribute("class", "botControls");
botControls.style.opacity = "60%";
botControls.style.border = "1.5px solid blue";



var expBot = document.createElement("button");
expBot.setAttribute('content', 'test content');
expBot.setAttribute('class', 'expBot');
expBot.textContent = 'Experimental bots';
expBot.style.height = "30px";
expBot.style.color = "black";
expBot.style.margin = "10px";
expBot.style.position = "absolute";
expBot.style.left = "600px";
expBot.style.top = "20px";

var botBtn = document.createElement("button");
botBtn.setAttribute('content', 'test content');
botBtn.setAttribute('class', 'btn');
botBtn.textContent = 'Start bots';
botBtn.style.height = "30px";
botBtn.classList.add("BotBtn");
botBtn.style.color = "black";
botBtn.style.margin = "10px";
botBtn.style.border = "1.5px solid blue";



var stopbotBtn = document.createElement("button");
stopbotBtn.setAttribute('content', 'test content');
stopbotBtn.setAttribute('class', 'btn');
stopbotBtn.textContent = 'Stop bots';
stopbotBtn.style.height = "30px";
stopbotBtn.classList.add("stopbotBtn");
stopbotBtn.style.color = "black";
stopbotBtn.style.border = "1.5px solid blue";

var transBot = document.createElement("button");
transBot.style.height = "1px";
transBot.classList.add("transBot");
transBot.style.position = "absolute";
transBot.style.top = "80px";
transBot.style.left = "70px";
transBot.style.opacity = "0%";



document.querySelector("#deco1").style.opacity = "0%";
document.querySelector("#deco2").style.opacity = "0%";
document.querySelector("#deco3").style.opacity = "0%";
document.querySelector("#deco4").style.opacity = "0%";

document.querySelector("#signin-btn").src = "http://www.clker.com/cliparts/d/u/w/y/F/1/thin-gray-signin-button-hi.png";
var botsStarted = false;
botBtn.onclick = function(){botBtn.style.transition = "all 1.5s ease"; node.style.transition = "all 1.5s ease"; document.querySelector("#HUD").style.transition = "all 1.5s ease"; botBtn.style.backgroundColor = "#32CD32"; botBtn.textContent = 'Bots Started'; activateBot(); setTimeout(function(){document.querySelector(".bot1").contentWindow.settings.nick = "Shazam's Bot"; document.querySelector(".bot2").contentWindow.settings.nick = "Shazam's bot"; document.querySelector(".bot1").contentWindow.isbot = true; document.querySelector(".bot2").contentWindow}, 2000); setInterval(function(){bbotz.nodeValue = ""+checkBots()+"/2 bots active. ";});};
transBot.onclick = function(){window.isbot = true; botsStuff(); };
stopbotBtn.onclick = function(){bbotz.nodeValue = ""; botBtn.style.backgroundColor = ""; botBtn.textContent = 'Start bots'; document.querySelector(".bot1").remove(); document.querySelector(".bot2").remove();};

//document.querySelector("#HUD").appendChild(expBot);
document.querySelector("#HUD").appendChild(logo);
document.querySelector("#HUD").appendChild(node);
document.querySelector("#HUD").appendChild(transBot);
document.querySelector("#HUD").appendChild(botControls);


node.classList.add("NewHud");
botControls.appendChild(botBtn);
botControls.appendChild(stopbotBtn);
//document.createElement("input", "checkbox")
function botFeed() {

}

function botSplit() {
    document.querySelector(".bot1").contentWindow.SplitStart();
    document.querySelector(".bot2").contentWindow.SplitStart();
}

function checkBots() {
    var botsNo = 0;
    var bbot1 = parseInt(document.querySelector(".bot1").contentWindow.stats.cells);
    var bbot2 = parseInt(document.querySelector(".bot2").contentWindow.stats.cells);
    if (bbot1 > 0) {
        botsNo ++;
   //     botsNo = 2;
    }
    if (bbot2 > 0) {
        botsNo ++;
    }
    if (botsNo > 2) {
        botsNo = 2;
    }
    //else {
     //   if (bbot2 > 0 && bbot1 == 0) {
      //  botsNo = 1;
   // } else {
     //   if (bbot1 > 0 && bbot2 == 0) {
      //      botsNo = 1;
       // } else {
        //    botsNo = 0;
       // }

    //}

    return botsNo;
}

function botNameChange() {
    var botName = document.querySelector(".botNameInput").value;
    document.querySelector(".bot1").contentWindow.settings.nick = botName;
    document.querySelector(".bot2").contentWindow.settings.nick = botName;
}

function startDual() {
if (!document.querySelector(".bot1")){
      bot1.src = "https://www.snay.io";
bot1.style.height = "0%";
bot1.style.width = "0%";
bot1.style.left = "0px";
bot1.style.top = "0px";

bot1.style.opacity = "0%";
    document.querySelector("#HUD").appendChild(bot1);
    console.log("yeet");

    setTimeout(function(){setInterval(function(){document.querySelector(".bot1").contentDocument.querySelector("#play-btn").click(); document.querySelector(".bot1").contentWindow.moveBot(document.querySelector(".bot1").contentWindow.goX, document.querySelector(".bot1").contentWindow.goY)}, 400)}, 1500);


}
}


function activateBot() {

bot1.src = "https://www.snay.io";
bot1.style.top = "950px";
document.querySelector("#HUD").appendChild(bot1);

setTimeout(function() {bot1.contentDocument.querySelector(".transBot").click();}, 2000);


bot2.src = "https://www.snay.io";
bot2.style.top = "950px";
document.querySelector("#HUD").appendChild(bot2);

setTimeout(function() {bot2.contentDocument.querySelector(".transBot").click();}, 2000);





}


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveBottt(which){

    if (which == 0){
    bot1.style.height = "100%";
    bot1.style.width = "100%";
    bot1.style.left = "";

    setTimeout(function(){bot1.style.left = "-1000px";}, 900);
    }
    if (which == 1){
        bot2.style.height = "100%";
        bot2.style.width = "100%";
        bot2.style.left = "";
    setTimeout(function(){bot2.style.left = "-1000px";}, 900);
    }
}

function moveBot(x, y) {

    var e = $.Event('mousemove');



// set coordinates

    e.pageX = 300;
    e.pageY = 300;

// trigger event - must trigger on document
    $("#root").trigger(e);



}


function resetSpawn(){

         document.getElementById("leaveBtn").click();
           document.querySelector(".swal-button--confirm").click();
          document.querySelector("#play-btn").click();
         }

 function botsStuff() {


     setInterval(function(){
         signOut();
         SplitStart();
     }, 300);
    setInterval(function () {

          //settings.nick = "ur stinky";
          SkinChange();

          play();
        document.querySelector("#play-btn").click();


          //SplitStart();
          //SplitEnd();
          //SplitEnd();
          DualStart();
          DualEnd();





        }, 1000);
        //window.cells.byId ---> and open the options and it will say the coordinates of the player
        // cells.list[0] ---> a big list of all the cells. Do a for loop and do cells.list[i].player
                // and if it is a player, then put it somewhere to check which one is me.

    

  setInterval(function () {
//     if (parseInt(document.querySelector(".minimap-node").cx.animVal.value) > parseInt(localStorage.getItem("mainX"))+90 || parseInt(document.querySelector(".minimap-node").cx.animVal.value) < parseInt(localStorage.getItem("mainX"))-90 || parseInt(document.querySelector(".minimap-node").cy.animVal.value) > parseInt(localStorage.getItem("mainY"))+90 || parseInt(document.querySelector(".minimap-node").cy.animVal.value) < parseInt(localStorage.getItem("mainY"))-90 ){
//                 resetSpawn();
//
//     } else {

                 connect(window.settings.server);
//     }



   }, 1500);
  }




function SkinChange() {
  var rndInt = randomIntFromInterval(2, 235);
  changeSkin("(" + rndInt + ")");
}



function placeEmojis(ex, wy) {

      document.getElementsByClassName("react-horizontal-scrolling-menu--scroll-container")[0].style.position = "absolute";
      document.getElementsByClassName("react-horizontal-scrolling-menu--scroll-container")[0].style.transform = "scale(50%)";
     document.getElementsByClassName("react-horizontal-scrolling-menu--scroll-container")[0].style.opacity = "50%";
      onmousemove = function(e){


         document.getElementsByClassName("react-horizontal-scrolling-menu--scroll-container")[0].style.top = e.clientY-ex + "px";
         document.getElementsByClassName("react-horizontal-scrolling-menu--scroll-container")[0].style.left = e.clientX-wy + "px";

        }



}

//function placeBots(){
//    setInterval(function() {
//         document.querySelector(".bot1").contentWindow.posX = parseInt(document.querySelector(".bot1").contentDocument.querySelector(".minimap-node").cx.animVal.value);
//         document.querySelector(".bot2").contentWindow.posX = parseInt(document.querySelector(".bot2").contentDocument.querySelector(".minimap-node").cx.animVal.value);
//         document.querySelector(".bot1").contentWindow.posY = parseInt(document.querySelector(".bot1").contentDocument.querySelector(".minimap-node").cy.animVal.value);
//         document.querySelector(".bot2").contentWindow.posY = parseInt(document.querySelector(".bot2").contentDocument.querySelector(".minimap-node").cy.animVal.value);
//
     //if (document.querySelector(".bot1").contentWindow.posX > parseInt(document.querySelector(".minimap-node").cx.animVal.value) || document.querySelector(".bot1").contentWindow.posX < parseInt(document.querySelector(".minimap-node").cx.animVal.value) || document.querySelector(".bot1").contentWindow.posY > parseInt(document.querySelector(".minimap-node").cy.animVal.value) || document.querySelector(".bot1").contentWindow.posY < parseInt(document.querySelector(".minimap-node").cy.animVal.value)){
//           document.querySelector(".bot1").contentDocument.getElementById("leaveBtn").click();
//           document.querySelector(".bot1").contentDocument.querySelector(".swal-button--confirm").click();
//           document.querySelector(".bot1").contentDocument.querySelector(".swal-modal").style.display = "none";
//           document.querySelector(".bot1").contentDocument.getElementsByClassName("swal-overlay")[0].style.display = "none";
//          document.querySelector(".bot1").contentDocument.querySelector("#play-btn").click();
        // }
         //if (document.querySelector(".bot2").contentWindow.posX > parseInt(document.querySelector(".minimap-node").cx.animVal.value) || document.querySelector(".bot2").contentWindow.posX < parseInt(document.querySelector(".minimap-node").cx.animVal.value) || document.querySelector(".bot2").contentWindow.posY > parseInt(document.querySelector(".minimap-node").cy.animVal.value) || document.querySelector(".bot2").contentWindow.posY < parseInt(document.querySelector(".minimap-node").cy.animVal.value)){
//           document.querySelector(".bot2").contentDocument.getElementById("leaveBtn").click();
//           document.querySelector(".bot2").contentDocument.querySelector(".swal-button--confirm").click();
//           document.querySelector(".bot2").contentDocument.querySelector(".swal-modal").style.display = "none";
//           document.querySelector(".bot2").contentDocument.getElementsByClassName("swal-overlay")[0].style.display = "none";
//          document.querySelector(".bot2").contentDocument.querySelector("#play-btn").click();
         //}

//     }, 1200);
//}

function respawn() {
    if (window.settings.gamemode == "Dual[NoLogin]"){

    } else {
                play();
    }
   
   // take this away after done with editing script
}


    function loading(){



        document.addEventListener("keypress",function(event){
         if (event.keyCode == 52) {
           document.getElementById("leaveBtn").click();
           document.querySelector(".swal-button--confirm").click();
           document.querySelector(".swal-modal").style.display = "none";
           document.getElementsByClassName("swal-overlay")[0].style.display = "none";
          document.querySelector("#play-btn").click();

            }
            if (event.keyCode == 116) {
                //startDual();
            }
            if (event.keyCode == 103) { // 'g'
              botSplit();

            }


             if (event.keyCode == 49) { // number 1
                placeEmojis(80, 495);
                document.getElementById("emojiBtn").click();


            }
            if (event.keyCode == 50) { // number 2
                placeEmojis(80, 600);
                document.getElementById("emojiBtn").click();
            }
            if (event.keyCode == 99) { // letter c
                placeEmojis(80, 665);
                document.getElementById("emojiBtn").click();
            }
            if (event.keyCode == 118) { // letter v
              placeEmojis(80, 745);
                document.getElementById("emojiBtn").click();
            }

        });






    }


setInterval(function () {

  
  respawn();
    

  }, 400);
        //window.cells.byId ---> and open the options and it will say the coordinates of the player
        // cells.list[0] ---> a big list of all the cells. Do a for loop and do cells.list[i].player
                // and if it is a player, then put it somewhere to check which one is me.

  //loading();

//   placeBots();




})();
