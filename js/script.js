console.log("Welcome to Uwana's Birthday Surprise!");

// LETTER OPENING INTERACTION

const openLetter = document.getElementById("openLetter");

const letterPaper = document.getElementById("letterPaper");

const envelopeWrapper = document.getElementById("envelopeWrapper");

const finalLink = document.getElementById("finalLink");

if (openLetter) {

    openLetter.addEventListener("click", function() {

        letterPaper.style.display = "block";

        envelopeWrapper.style.display = "none";

        finalLink.style.display = "inline-block";

        letterPaper.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}