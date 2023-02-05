  'use strict';

var isbot = false;
document.querySelector("#game-over").remove();
window.isbot = isbot;
const logo = document.createElement("img");
const node = document.createElement("p");
//var numBots = checkBots();
const textnode = document.createTextNode("Shazam's snay.io script.   ");
const menuTitle = document.querySelector("#title");
menuTitle.src = "https://i.imgur.com/6pJtFAS.png";
menuTitle.style.position = "absolute";
menuTitle.style.height = "50%";
menuTitle.style.width = "50%";
menuTitle.style.top = "-5%";

var press4Btn = document.createElement("button");
press4Btn.setAttribute("id", "press4Btn");
press4Btn.setAttribute("class", "off");
document.querySelector("#modmenu").append(press4Btn);
var press4On;
var press4Output = document.createElement("output");
press4Output.setAttribute("id", "press4OutputValue");
press4Btn.append(press4Output);
var press4ValueOn = document.createTextNode("4 key respawn: On");
var press4ValueOff = document.createTextNode("4 key respawn: Off");
press4Output.append(press4ValueOff);
press4Output.style.color = "white";
press4Btn.style.background = "gray";
press4Btn.style.borderRadius = "25px";
press4Btn.style.padding = "10px";
press4Btn.style.transition = "all 1s ease";
press4Output.style.transition = "all 2s ease";


var emojiBindingsButton = document.createElement("button");
emojiBindingsButton.setAttribute("id", "emojiBindings");
emojiBindingsButton.setAttribute("class", "on");
document.querySelector("#modmenu").append(emojiBindingsButton);
var emojiBindsOn;
var emojiBindingsOutput = document.createElement("output");
emojiBindingsOutput.setAttribute("id", "press4BtnValue");
emojiBindingsButton.append(emojiBindingsOutput);
var emojiValueOn = document.createTextNode("Emoji Keybinds: On");
var emojiValueOff = document.createTextNode("Emoji Keybinds: Off");
emojiBindingsOutput.append(emojiValueOn);
emojiBindingsButton.style.background = "#32CD32";
emojiBindingsButton.style.borderRadius = "25px";
emojiBindingsButton.style.padding = "10px";
emojiBindingsButton.style.transition = "all 1s ease";
emojiBindingsOutput.style.transition = "all 2s ease";

var respawnButton = document.createElement("button");
respawnButton.setAttribute("id", "respawnButton");
respawnButton.setAttribute("class", "on");
document.querySelector("#modmenu").append(respawnButton);
var respawnButtonOutput = document.createElement("output");
respawnButtonOutput.setAttribute("id", "respawnToggleValue");
respawnButton.append(respawnButtonOutput);
var respawnValueOn = document.createTextNode("Automatic Respawn: On");
var respawnValueOff = document.createTextNode("Automatic Respawn: Off");
respawnButton.append(respawnValueOn);
respawnButton.style.background = "#32CD32";
respawnButton.style.borderRadius = "25px";
respawnButton.style.padding = "10px";
respawnButton.style.transition = "all 1s ease";
respawnButton.style.transition = "all 2s ease";

setInterval(function(){if (document.querySelector("button#press4Btn.off")){document.querySelector("button#press4Btn.off").onclick = function(){press4Output.style.color = "black"; press4Btn.style.background = "#32CD32"; press4Btn.removeAttribute("class"); press4Btn.setAttribute("class", "on"); press4Output.firstChild.remove(); press4Output.append(press4ValueOn);};}}, 1000);
setInterval(function(){if (document.querySelector("button#press4Btn.on")){document.querySelector("button#press4Btn.on").onclick = function(){press4Btn.style.background = "gray"; press4Output.style.color = "white"; press4Btn.removeAttribute("class"); press4Btn.setAttribute("class", "off"); press4Output.firstChild.remove(); press4Output.append(press4ValueOff);};}}, 1000);


setInterval(function(){ if (document.querySelector("button#emojiBindings.on")){document.querySelector("button#emojiBindings.on").onclick = function(){emojiBindingsOutput.firstChild.remove(); emojiBindingsOutput.append(emojiValueOff); emojiBindingsButton.style.background = "gray"; emojiBindingsButton.removeAttribute("class"); emojiBindingsOutput.style.color = "white"; emojiBindingsButton.setAttribute("class", "off"); };}}, 1000);

setInterval(function(){if(document.querySelector("button#emojiBindings.off")){document.querySelector("button#emojiBindings.off").onclick = function(){emojiBindingsOutput.firstChild.remove();
        emojiBindingsOutput.append(emojiValueOn);
        emojiBindingsButton.style.background = "#32CD32";
        emojiBindingsButton.removeAttribute("class");
        emojiBindingsOutput.style.color = "black";
emojiBindingsButton.setAttribute("class", "on");};}}, 1000);



setInterval(function(){ if (document.querySelector("button#respawnButton.on")){document.querySelector("button#respawnButton.on").onclick = function(){document.querySelector("button#respawnButton.on").style.background = "gray"; respawnValueOn.remove(); document.querySelector("button#respawnButton.on").append(respawnValueOff); document.querySelector("button#respawnButton.on").removeAttribute("class"); document.querySelector("button#respawnButton").style.color = "white"; document.querySelector("button#respawnButton").setAttribute("class", "off");} }}, 1000);

setInterval(function(){ if (document.querySelector("button#respawnButton.off")){document.querySelector("button#respawnButton.off").onclick = function(){document.querySelector("button#respawnButton.off").style.background = "#32CD32"; document.querySelector("button#respawnButton.off").style.color = "black"; respawnValueOff.remove(); document.querySelector("button#respawnButton.off").append(respawnValueOn); document.querySelector("button#respawnButton.off").removeAttribute("class"); document.querySelector("button#respawnButton").setAttribute("class", "on");} }}, 1000);






setTimeout(function() {
    const meny = document.querySelector("#overlays.fade-in");
    var bleb = document.createElement("img");
    bleb.style.height = "100%";
  bleb.style.width = "100%";
    //bleb.src = "https://wallpapercave.com/wp/wp5756494.jpg";
     bleb.src = "https://www.chromethemer.com/download/hd-wallpapers/blue-technology-3840x2160.jpg"

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


//var serverThing = document.querySelector(".main-form-bg");

//serverThing.setAttribute("style", "position: absolute; left: -1px; top: 29px; transition: none 0s ease 0s; cursor: move;");


//botNameSubmit.style.position = "relative";
//botNameSubmit.style.left = "58px";
//botNameSubmit.style.top = "-180px";
//botNameSubmit.style.willChange = "top, left";

//botNameInput.style.position = "relative";
//botNameInput.style.left = "95px";
//botNameInput.style.top = "-179px";


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
botBtn.onclick = function(){botBtn.style.transition = "all 1.5s ease"; node.style.transition = "all 1.5s ease"; document.querySelector("#HUD").style.transition = "all 1.5s ease"; botBtn.style.backgroundColor = "#32CD32"; botBtn.textContent = 'Bots Started'; activateBot(); setTimeout(function(){document.querySelector(".bot1").contentWindow.settings.nick = "Shazam's Bot"; document.querySelector(".bot2").contentWindow.settings.nick = "Shazam's bot"; document.querySelector(".bot1").contentWindow.isbot = true; document.querySelector(".bot2").contentWindow.isbot = true}, 2000); setInterval(function(){if(document.querySelector(".bot1")){setTimeout(function(){if (checkBots() == 0){setTimeout(function(){if(checkBots() == 0){bbotz.nodeValue = "Please close all tabs & windows of browser to restart the bots.";}}, 2500);} else {bbotz.nodeValue = ""+checkBots()+"/2 bots active. ";}}, 4000)}});};
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
function moveBot() {

    var e = $.Event('mousemove');
    var a = $.Event('playing');
    var f = $.Event('pointermove');


// set coordinates
    f.clientX = Math.random();
    f.clientY = Math.random();
    f.bubbles = true;
    e.bubbles = true;
    e.pageX = document.querySelector(".minimap-node").cx.animVal.value;
    e.pageY = document.querySelector(".minimap-node").cy.animVal.value;

// trigger event - must trigger on document
    $("#root").trigger(e);
    $("#root").trigger(a);
    $("#root").trigger(f);

}
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

setTimeout(function() {bot1.contentDocument.querySelector(".transBot").click();}, 4000);


bot2.src = "https://www.snay.io";
bot2.style.top = "950px";
document.querySelector("#HUD").appendChild(bot2);

setTimeout(function() {bot2.contentDocument.querySelector(".transBot").click();}, 4000);





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

function updateSkins(){

    var freeTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

var halloweenTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

var ytbersTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
var flagSkins = []; var freeSkins = []; var halloweenSkins = []; var ytberSkins = []; openSkinsList(); document.querySelector("#gallery-body").style.transform = "scale(0.02)"; document.querySelector("#gallery-body").style.height = "100%"; freeTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

halloweenTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

ytbersTitle = document.querySelector("label").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; setTimeout(function(){flagSkins = document.querySelectorAll("img.circular"); freeTitle.click()}, 1000); setTimeout(function(){freeSkins = document.querySelectorAll("img.circular"); halloweenTitle.click()}, 2000); setTimeout(function(){halloweenSkins = document.querySelectorAll("img.circular"); ytbersTitle.click()}, 3000);/*yeet = document.querySelectorAll("img.circular");*/setTimeout(function(){ytberSkins = document.querySelectorAll("img.circular"); document.querySelector("#gallery-body").style.transform = "scale(1)"; document.querySelector("#gallery-body").style.height = ""; document.querySelector(".windowclosebtn").click()}, 4500);
}


function SkinChange() {
//  var rndInt = randomIntFromInterval(2, 235);
    var allSkinList = ["yt", "za", "zm", "zw", "(10)", "(100)", "(103)", "(104)", "(105)", "(106)", "(107)", "(108)", "(109)", "(11)", "(110)", "(111)", "(112)", "(113)", "(114)", "(115)", "(116)", "(117)", "(118)", "(119)", "(12)", "(120)", "(121)", "(122)", "(123)", "(124)", "(125)", "(126)", "(127)", "(128)", "(129)", "(13)", "(130)", "(131)", "(132)", "(133)", "(134)", "(135)", "(136)", "(137)", "(138)", "(139)", "(14)", "(140)", "(141)", "(142)", "(143)", "(144)", "(145)", "(146)", "(147)", "(148)", "(149)", "(15)", "(150)", "(151)", "(152)", "(153)", "(154)", "(155)", "(156)", "(157)", "(158)", "(159)", "(16)", "(160)", "(161)", "(162)", "(163)", "(164)", "(165)", "(166)", "(167)", "(168)", "(169)", "(17)", "(170)", "(171)", "(172)", "(173)", "(174)", "(175)", "(176)", "(177)", "(178)", "(179)", "(18)", "(180)", "(181)", "(183)", "(184)", "(185)", "(186)", "(187)", "(188)", "(189)", "(19)", "(190)", "(191)", "(192)", "(193)", "(194)", "(195)", "(196)", "(197)", "(198)", "(199)", "(2)", "(20)", "(200)", "(201)", "(202)", "(203)", "(204)", "(205)", "(206)", "(207)", "(208)", "(209)", "(21)", "(210)", "(211)", "(212)", "(214)", "(215)", "(216)", "(217)", "(218)", "(219)", "(22)", "(220)", "(221)", "(222)", "(223)", "(224)", "(225)", "(226)", "(227)", "(228)", "(229)", "(23)", "(230)", "(231)", "(232)", "(233)", "(234)", "(235)", "(24)", "(25)", "(26)", "(27)", "(28)", "(29)", "(3)", "(30)", "(31)", "(32)", "(33)", "(34)", "(35)", "(36)", "(37)", "(38)", "(39)", "(40)", "(41)", "(42)", "(43)", "(44)", "(45)", "(46)", "(47)", "(48)", "(49)", "(5)", "(50)", "(51)", "(52)", "(53)", "(54)", "(55)", "(56)", "(57)", "(58)", "(59)", "(6)", "(60)", "(61)", "(62)", "(63)", "(64)", "(65)", "(66)", "(67)", "(68)", "(69)", "(7)", "(70)", "(71)", "(72)", "(73)", "(74)", "(75)", "(76)", "(77)", "(78)", "(79)", "(8)", "(80)", "(81)", "(82)", "(83)", "(84)", "(85)", "(86)", "(87)", "(88)", "(89)", "(9)", "(90)", "(92)", "(93)", "(94)", "(95)", "(96)", "(97)", "(98)", "(99)", "anime (1)", "anime (10)", "anime (11)", "anime (12)", "anime (13)", "anime (14)", "anime (15)", "anime (16)", "anime (17)", "anime (18)", "anime (19)", "anime (2)", "anime (20)", "anime (21)", "anime (22)", "anime (23)", "anime (24)", "anime (25)", "anime (26)", "anime (27)", "anime (28)", "anime (29)", "anime (3)", "anime (30)", "anime (31)", "anime (32)", "anime (33)", "anime (34)", "anime (35)", "anime (36)", "anime (37)", "anime (38)", "anime (39)", "anime (4)", "anime (40)", "anime (41)", "anime (42)", "anime (43)", "anime (44)", "anime (45)", "anime (46)", "anime (47)", "anime (48)", "anime (49)", "anime (5)", "anime (50)", "anime (51)", "anime (52)", "anime (53)", "anime (54)", "anime (55)", "anime (56)", "anime (57)", "anime (58)", "anime (59)", "anime (6)", "anime (60)", "anime (61)", "anime (7)", "anime (8)", "anime (9)", "hwk(1)", "hwk(10)", "hwk(11)", "hwk(12)", "hwk(13)", "hwk(14)", "hwk(15)", "hwk(16)", "hwk(17)", "hwk(18)", "hwk(19)", "hwk(2)", "hwk(20)", "hwk(21)", "hwk(22)", "hwk(23)", "hwk(24)", "hwk(25)", "hwk(26)", "hwk(3)", "hwk(4)", "hwk(5)", "hwk(6)", "hwk(7)", "hwk(8)", "hwk(9)", "1667083115975", "1667083133355", "1667083151115", "1667083177297", "1667083219340", "1667083258153", "1667083283026", "1667083312011", "1667083362728", "1667083380895", "1667083438058", "1667083459417", "1667083490052", "63467523455676", "YT(1)", "YT(10)", "YT(11)", "YT(12)", "YT(13)", "YT(14)", "YT(15)", "YT(16)", "YT(17)", "YT(18)", "YT(19)", "YT(2)", "YT(20)", "YT(21)", "YT(22)", "YT(23)", "YT(24)", "YT(25)", "YT(26)", "YT(27)", "YT(28)", "YT(29)", "YT(3)", "YT(30)", "YT(31)", "YT(32)", "YT(33)", "YT(34)", "YT(35)", "YT(36)", "YT(37)", "YT(38)", "YT(39)", "YT(4)", "YT(40)", "YT(41)", "YT(42)", "YT(43)", "YT(44)", "YT(45)", "YT(46)", "YT(47)", "YT(48)", "YT(49)", "YT(5)", "YT(50)", "YT(51)", "YT(52)", "YT(53)", "YT(54)", "YT(55)", "YT(56)", "YT(57)", "YT(58)", "YT(59)", "YT(6)", "YT(60)", "YT(7)", "YT(8)", "YT(9)"]
    var newSkinlist = ["1667083115975", "1667083133355", "1667083151115", "1667083177297", "1667083219340", "1667083258153", "1667083283026", "1667083312011", "1667083362728", "1667083380895", "1667083438058", "1667083459417", "1667083490052"]
      var rndInt = randomIntFromInterval(0, allSkinList.length-1);
  //changeSkin("(" + rndInt + ")");
    changeSkin(allSkinList[rndInt]);
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
function gibble(event){
     if (event){
         document.getElementById("emojiBtn").click();
         document.removeEventListener('click', gibble);
                     }
}
function bruhbruh(){
    document.addEventListener('click', gibble);

}

function respawn() {
    if (window.settings.gamemode == "Dual[NoLogin]"){

    } else {
                play();
    }

   // take this away after done with editing script
}


  function loading(){



        document.addEventListener("keypress",function(event){
        if (document.querySelector("button#press4Btn.on")) {
         if (event.keyCode == 52) {
                          document.querySelector("#overlays").style.display = "none";
           document.getElementById("leaveBtn").click();
           document.querySelector(".swal-button--confirm").click();
           document.querySelector(".swal-modal").style.display = "none";
           document.getElementsByClassName("swal-overlay")[0].style.display = "none";

         document.querySelector("#play-btn").click();
             setTimeout(function(){document.querySelector("#overlays").style.display = "";}, 1000);


            }
        }

            if (event.keyCode == 103) { // 'g'
              botSplit();

            }


                if (document.querySelector("button#emojiBindings.on")){
                    if (event.keyCode == 49) { // number 1
                 document.querySelectorAll(".card")[0].firstChild.click();
               // placeEmojis(80, 495);
                //document.getElementById("emojiBtn").click();
                 //emotes[0].firstChild.click();
                 //document.getElementById("emojiBtn").click();

                               //  bruhbruh();


            }
            if (event.keyCode == 50) { // number 2
                                 document.querySelectorAll(".card")[1].firstChild.click();
                //placeEmojis(80, 600);
                //document.getElementById("emojiBtn").click();
                              //  bruhbruh();
            }
            if (event.keyCode == 99) { // letter c
               // placeEmojis(80, 665);
                //document.getElementById("emojiBtn").click();
                  //              bruhbruh();
                                 document.querySelectorAll(".card")[2].firstChild.click();
            }
            if (event.keyCode == 118) { // letter v
              //placeEmojis(80, 745);
                //document.getElementById("emojiBtn").click();
               // bruhbruh();
                                 document.querySelectorAll(".card")[3].firstChild.click();
            }
            if (event.keyCode == 97) { // letter a
                document.querySelectorAll(".card")[4].firstChild.click();
            }
            if (event.keyCode == 115) { // letter s
                document.querySelectorAll(".card")[5].firstChild.click();
            }
            if (event.keyCode == 100){ // letter d
                    document.querySelectorAll(".card")[6].firstChild.click();
            }


            if(event.keyCode == 122) { // letter z
                    document.querySelectorAll(".card")[9].firstChild.click();
            }
            if(event.keyCode == 120) { // letter x
                    document.querySelectorAll(".card")[7].firstChild.click();
            }
            if (event.keyCode == 33) { // shift + 1 (!)
                document.querySelectorAll(".card")[8].firstChild.click();

             }
             if (event.keyCode == 64) { // shift + 2 (@)
                document.querySelectorAll(".card")[10].firstChild.click();

             }
             if (event.keyCode == 65) { // shift + a (A)
                document.querySelectorAll(".card")[11].firstChild.click();

             }
             if (event.keyCode == 83) { // shift + s (S)
                document.querySelectorAll(".card")[12].firstChild.click();

             }
             if (event.keyCode == 68) { // shift + d (D)
                document.querySelectorAll(".card")[13].firstChild.click();

             }
            if (event.keyCode == 90) { // shift + z (Z)
                document.querySelectorAll(".card")[14].firstChild.click();

             }
            if (event.keyCode == 88) { // shift + x (X)
                document.querySelectorAll(".card")[15].firstChild.click();

             }
            if (event.keyCode == 67) { // shift + c (C)
                document.querySelectorAll(".card")[16].firstChild.click();

             }
            if (event.keyCode == 86) { // shift + v (V)
                document.querySelectorAll(".card")[17].firstChild.click();

             }

                }





        });






    }




setInterval(function () {
    if (window.isbot == true) {
        signOut();
    } else {
        if (window.isbot == false){
            window.focus();
        }
    }

  if (document.querySelector("button#respawnButton.on")){
    if (stats.mycells == 0) {
        respawn();
}

}


  }, 400);
        //window.cells.byId ---> and open the options and it will say the coordinates of the player
        // cells.list[0] ---> a big list of all the cells. Do a for loop and do cells.list[i].player
                // and if it is a player, then put it somewhere to check which one is me.
  settings.directionOnTouch = true;
  loading();

//   placeBots();

