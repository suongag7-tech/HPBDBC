/* ============================================
   PROJECT ASTERIA
   Universe Scene
============================================ */

class UniverseScene {

    render(container) {

        container.innerHTML = `
        <section class="universe">

            <div id="stars-layer"></div>

            <div id="shooting-star"></div>

            <div class="planet planet1"></div>
            <div class="planet planet2"></div>
            <div class="planet planet3"></div>

            <div class="lumi">
                ✦
            </div>

            <div class="dialog-box">
                <p id="story"></p>
            </div>

            <button id="continue-btn">
                Continue →
            </button>

        </section>
        `;

        // Tạo nền sao
        createStars(
            document.getElementById("stars-layer"),
            250
        );

        // Bắt đầu câu chuyện
        this.startStory();

    }

    async startStory() {

        const text = document.getElementById("story");
        const button = document.getElementById("continue-btn");

        // Đảm bảo nút ở trạng thái ban đầu
        button.classList.remove("show");

        // =============================
        // STORY
        // =============================

        await typeWriter(
            text,
            "Chào mừng đến với bầu trời này.",
            40
        );

        await sleep(1800);

        await typeWriter(
            text,
            "Mỗi ngôi sao ở đây đều đại diện cho một điều đặc biệt.",
            40
        );

        await sleep(1800);

        await typeWriter(
            text,
            "Có ngôi sao chứa một lời chúc.",
            40
        );

        await sleep(1800);

        await typeWriter(
            text,
            "Có ngôi sao lưu giữ một bí mật.",
            40
        );

        await sleep(1800);

        await typeWriter(
            text,
            "Và có một ngôi sao được tạo ra dành riêng cho chị.",
            40
        );

        await sleep(2200);

        // Hiện nút Continue
        button.classList.add("show");

        // =============================
        // CONTINUE
        // =============================

        button.onclick = () => {

            const universe = document.querySelector(".universe");

            // Hiệu ứng mờ dần
            universe.classList.add("fade-out");

            // Chờ animation kết thúc
            setTimeout(() => {

                // Chuyển sang Scene tiếp theo

                if (typeof StarGateScene !== "undefined") {

                    sceneManager.change(new StarGateScene());

                } else {

                    alert("Star Gate đang được xây dựng...");

                }

            }, 1000);

        };

    }

}