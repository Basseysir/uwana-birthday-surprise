// Create the birthday music player
const birthdayMusic = new Audio(
    "assets/music/Edd_Sheeran_-_Perfect_(mp3.pm).mp3"
);

birthdayMusic.loop = true;
birthdayMusic.volume = 0.5;

// Music storage keys
const MUSIC_TIME = "birthdayMusicTime";
const MUSIC_STATE = "birthdayMusicPlaying";

// Create music button
const musicButton = document.createElement("button");

musicButton.textContent = "🎵 Play Music";

document.body.appendChild(musicButton);

// Button styling
Object.assign(musicButton.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    zIndex: "99999",
    padding: "12px 20px",
    borderRadius: "30px",
    border: "none",
    background: "#D4AF37",
    color: "#111",
    cursor: "pointer"
});

// Restore previous music position
const savedTime = sessionStorage.getItem(MUSIC_TIME);
const wasPlaying = sessionStorage.getItem(MUSIC_STATE);

if (savedTime !== null) {
    birthdayMusic.addEventListener("loadedmetadata", () => {
        birthdayMusic.currentTime = parseFloat(savedTime);
    }, { once: true });
}

// Update button text
function updateMusicButton() {
    musicButton.textContent = birthdayMusic.paused
        ? "🎵 Play Music"
        : "⏸ Pause Music";
}

// Automatically start music when the website opens
birthdayMusic.addEventListener("canplay", async () => {

    try {
        await birthdayMusic.play();

        sessionStorage.setItem(MUSIC_STATE, "true");

        updateMusicButton();

    } catch (error) {

        console.log("Autoplay blocked. Waiting for user interaction.");

        updateMusicButton();

    }

}, { once: true });

// Play and pause button
musicButton.addEventListener("click", async () => {

    try {

        if (birthdayMusic.paused) {

            await birthdayMusic.play();

            sessionStorage.setItem(MUSIC_STATE, "true");

        } else {

            birthdayMusic.pause();

            sessionStorage.setItem(MUSIC_STATE, "false");

        }

        updateMusicButton();

    } catch (error) {

        console.error("Playback error:", error);

    }

});

// Save music position continuously
birthdayMusic.addEventListener("timeupdate", () => {

    sessionStorage.setItem(
        MUSIC_TIME,
        birthdayMusic.currentTime
    );

});

// Save position before leaving a page
window.addEventListener("pagehide", () => {

    sessionStorage.setItem(
        MUSIC_TIME,
        birthdayMusic.currentTime
    );

    sessionStorage.setItem(
        MUSIC_STATE,
        birthdayMusic.paused ? "false" : "true"
    );

});