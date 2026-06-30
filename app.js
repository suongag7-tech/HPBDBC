/* ============================================
   PROJECT ASTERIA
   Main Application
============================================ */

window.addEventListener("DOMContentLoaded", () => {

    console.clear();

    console.log("%cProject Asteria", "font-size:24px;color:#FFD76A;");

    console.log("Version :", CONFIG.project.version);

    console.log("Recipient :", CONFIG.recipient.name);

    initialize();

});


function initialize() {

    console.log("Initializing Project...");

    sceneManager.change(new LoadingScene());

    setTimeout(() => {

        alert("Loading hoàn thành!");

    }, 3000);

}
function startLoading(){

    const fill=document.querySelector(".loading-fill");

    const percent=document.querySelector(".loading-percent");

    const text=document.querySelector(".loading-text");

    let progress=0;

    const messages=[

        "Preparing the stars...",

        "Collecting memories...",

        "Lighting the universe...",

        "Almost ready...",

        "Welcome..."

    ];

    const timer=setInterval(()=>{

        progress++;

        fill.style.width=progress+"%";

        percent.innerHTML=progress+"%";

        if(progress==20) text.innerHTML=messages[1];

        if(progress==45) text.innerHTML=messages[2];

        if(progress==70) text.innerHTML=messages[3];

        if(progress==95) text.innerHTML=messages[4];

        if(progress>=100){

            clearInterval(timer);

            setTimeout(()=>{

                sceneManager.change(new OpeningScene());

            },500);

        }

    },40);

}
function typeStory(messages, button){

    const typing = document.getElementById("typing");

    let messageIndex = 0;

    function nextMessage(){

        if(messageIndex >= messages.length){

            button.style.display = "block";

            return;

        }

        let text = messages[messageIndex];

        let i = 0;

        typing.innerHTML = "";

        const typingEffect = setInterval(()=>{

            typing.innerHTML += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(typingEffect);

                setTimeout(()=>{

                    messageIndex++;

                    nextMessage();

                },1800);

            }

        },50);

    }

    nextMessage();

}
function sleep(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}