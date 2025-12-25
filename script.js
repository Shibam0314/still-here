const music = document.getElementById("bgMusic");
const landing = document.querySelector(".landing");
const lettersSection = document.getElementById("lettersSection");
const letters = document.querySelectorAll(".letter");
const ending = document.getElementById("ending");

function startExperience() {
  music.play();
  landing.style.display = "none";
  lettersSection.classList.remove("hidden");
}

window.addEventListener("scroll", () => {
  letters.forEach(letter => {
    const rect = letter.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      letter.style.opacity = 1;
      letter.style.transform = "translateY(0)";
      spawnButterfly();
    }
  });
});

function spawnButterfly() {
  const b = document.createElement("div");
  b.innerText = "🦋";
  b.style.position = "fixed";
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.bottom = "-20px";
  b.style.fontSize = "24px";
  b.style.opacity = "0.8";
  b.style.transition = "all 6s ease";

  document.body.appendChild(b);

  setTimeout(() => {
    b.style.bottom = "110%";
    b.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    b.remove();
  }, 7000);
}

function showEnding() {
  lettersSection.style.display = "none";
  ending.classList.remove("hidden");
}