class AwakeningScene {

    render(container){

        container.innerHTML = `

        <section class="awakening">

            <div class="lumi" id="lumi">
                ✦
            </div>

            <div class="speech">

                <p id="speech-text"></p>

            </div>

        </section>

        `;

        this.start();

    }

    async start(){

        const text=document.getElementById("speech-text");

        await typeWriter(text,"Xin chào...",60);

        await sleep(2000);

        await typeWriter(text,"Đừng sợ nhé.",60);

        await sleep(1800);

        await typeWriter(text,"Tớ tên là Lumi.",60);

        await sleep(1800);

        await typeWriter(text,"Tớ đã chờ ngày này rất lâu.",60);

        await sleep(1800);

        await typeWriter(text,"Đi cùng tớ nhé ✨",60);

        await sleep(2500);

        sceneManager.change(new UniverseScene());

    }

}