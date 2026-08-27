const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseBox =
    document.getElementById("surpriseBox");


surpriseBtn.addEventListener(
    "click",
    function () {

        surpriseBox.classList.add("show");

        surpriseBtn.style.display = "none";

        createCelebration();

        surpriseBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* ============================
   CELEBRATION EFFECT
============================ */

function createCelebration() {

    const items = [
        "🌸",
        "✨",
        "❤️",
        "🎉",
        "🪷",
        "💖",
        "🌺"
    ];


    for (let i = 0; i < 100; i++) {

        const item =
            document.createElement("div");


        item.textContent =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.top =
            "-50px";


        item.style.fontSize =
            (15 + Math.random() * 25) + "px";


        item.style.zIndex =
            "9999";


        item.style.pointerEvents =
            "none";


        const rotate =
            Math.random() * 720;


        item.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${rotate}deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    3000 + Math.random() * 3000,

                delay:
                    Math.random() * 1000,

                easing:
                    "ease-out"
            }

        );


        document.body.appendChild(item);


        setTimeout(
            function () {

                item.remove();

            },
            7000
        );

    }

}