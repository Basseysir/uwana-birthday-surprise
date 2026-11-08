// FINAL SURPRISE

const revealButton = document.getElementById("revealSurprise");

const hiddenMessage = document.getElementById("hiddenMessage");

revealButton.addEventListener("click", function() {

    hiddenMessage.style.display = "block";

    revealButton.style.display = "none";

    startConfetti();

    hiddenMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// CONFETTI ANIMATION

const canvas = document.getElementById("confetti");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function createConfetti() {

    pieces = [];

    for (let i = 0; i < 150; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 7 + 3,

            speed: Math.random() * 4 + 2,

            rotation: Math.random() * 360,

            color: ["#d6b978", "#f0dba5", "#ffffff"][Math.floor(Math.random() * 3)]

        });

    }

}

function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(piece => {

        ctx.save();

        ctx.translate(piece.x, piece.y);

        ctx.rotate(piece.rotation * Math.PI / 180);

        ctx.fillStyle = piece.color;

        ctx.fillRect(
            -piece.size / 2,
            -piece.size / 2,
            piece.size,
            piece.size
        );

        ctx.restore();

        piece.y += piece.speed;

        piece.rotation += 3;

        if (piece.y > canvas.height) {

            piece.y = -10;

            piece.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(drawConfetti);

}

function startConfetti() {

    createConfetti();

    drawConfetti();

}


// RESPONSIVE CANVAS

window.addEventListener("resize", function() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});