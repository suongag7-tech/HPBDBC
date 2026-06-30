/* =====================================
   Scene Manager
===================================== */

class SceneManager {

    constructor() {

        this.currentScene = null;

        this.container = document.getElementById("app");

    }

    change(scene) {

        this.container.innerHTML = "";

        this.currentScene = scene;

        scene.render(this.container);

    }

}

const sceneManager = new SceneManager();