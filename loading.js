class LoadingScene {

    render(container){

        container.innerHTML = `

        <section class="scene loading-scene">

            <div class="stars"></div>

            <div class="shooting-star"></div>

            <div class="loading-content">

                <h1 class="logo">
                    PROJECT ASTERIA
                </h1>

                <p class="subtitle">
                    A Journey Written For Only One Person
                </p>

                <div class="loading-box">

                    <div class="loading-bar">

                        <div class="loading-fill"></div>

                    </div>

                    <div class="loading-percent">
                        0%
                    </div>

                </div>

                <p class="loading-text">
                    Preparing the stars...
                </p>

            </div>

        </section>

        `;

        startLoading();

    }

}