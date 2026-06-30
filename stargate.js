/* ============================================
   PROJECT ASTERIA
   Star Gate Scene
============================================ */

class StarGateScene {

    render(container){

        container.innerHTML = `

        <section class="stargate">

            <div class="portal-ring"></div>

            <div class="portal-core"></div>

            <div class="lumi">
                ✦
            </div>

            <div class="dialog-box">

                <p id="gate-text"></p>

            </div>

        </section>

        `;

        this.play();

    }

    async play(){

        const text = document.getElementById("gate-text");

        await typeWriter(text,"Em muốn đưa chị đến một nơi đặc biệt...",40);

        await sleep(2000);

        await typeWriter(text,"Nơi cất giữ những điều em muốn nói.",40);

        await sleep(2200);

        await typeWriter(text,"Đi cùng Lumi nhé ✨",40);

        await sleep(2500);

        // Chapter tiếp theo
        // sceneManager.change(new WishForestScene());

        alert("Wish Forest sẽ được xây ở Sprint tiếp theo.");

    }

}