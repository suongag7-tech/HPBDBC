function createStars(container, amount = 250){

    container.innerHTML="";

    for(let i=0;i<amount;i++){

        const star=document.createElement("div");

        star.className="bg-star";

        const size=Math.random()*3+1;

        star.style.width=size+"px";

        star.style.height=size+"px";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*5+"s";

        container.appendChild(star);

    }

}