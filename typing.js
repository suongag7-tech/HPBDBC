function typeWriter(element, text, speed = 40) {

    return new Promise(resolve => {

        element.innerHTML = "";

        let i = 0;

        const timer = setInterval(() => {

            element.innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(timer);

                resolve();

            }

        }, speed);

    });

}