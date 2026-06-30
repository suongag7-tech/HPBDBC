class OpeningScene {

    render(container) {

        container.innerHTML = `
            <section class="scene opening-scene">

                <div class="star">
                    ✦
                </div>

                <div class="dialog">
                    <p id="typing"></p>
                </div>

                <button class="start-btn">
                    ✨ Begin The Journey ✨
                </button>

            </section>
        `;

        const button = document.querySelector(".start-btn");

        // Ẩn nút
        button.style.display = "none";

        // Hiệu ứng gõ chữ
        typeStory([
            "Xin chào...",
            "Có lẽ chị đang thắc mắc đây là gì.",
            "Thật ra...",
            "Hôm nay là một ngày rất đặc biệt.",
            "Em đã chuẩn bị món quà này dành riêng cho chị.",
            "Hy vọng chị sẽ thích nó ❤️"
        ], button);

        // Khi bấm nút
        button.addEventListener("click", () => {

            const scene = document.querySelector(".opening-scene");

            scene.classList.add("fade-out");

            setTimeout(() => {

                sceneManager.change(new AwakeningScene());

            }, 1800);

        });

    }

}