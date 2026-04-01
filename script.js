const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

if (!isMobile) {
    document.querySelector(".container").style.display = "none";
    document.getElementById("desktopBlock").style.display = "flex";
}
const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const overlay = document.getElementById("overlay");
const replayBtn = document.getElementById("replayBtn");

/* PLAY (hanggal) */
playBtn.addEventListener("click", () => {
    video.muted = false;
    video.volume = 1;

    video.play();

    /* overlay fade out */
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
});

/* vége */
video.addEventListener("ended", () => {
    replayBtn.style.display = "flex";
});

/* replay */
replayBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    replayBtn.style.display = "none";
});

/* tiltások */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => e.preventDefault());
