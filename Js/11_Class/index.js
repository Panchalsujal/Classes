const sounds = {
  a: new Audio("key01.mp3"),
  s: new Audio("key02.mp3"),
  d: new Audio("key03.mp3"),
  f: new Audio("key04.mp3"),
};

// Keyboard play
document.addEventListener("keydown", (e) => {
  playSound(e.key);
});

// Mouse click play
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    playSound(key.dataset.key);
  });
});

function playSound(key){
  key = key.toLowerCase();
  if(sounds[key]){
    const audio = sounds[key];
    audio.currentTime = 0;
    audio.play();
  }
}

// Matix animation 

const pre = document.querySelector("h2");
const text = pre.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interval = 0.25;

pre.addEventListener("mouseover", () => {
  setInterval(() => {
    const matrix = text
      .split("")
      .map((char, index) => {
        if (index < interval) {
          return char;
        }
        return characters.split("")[Math.floor(Math.random() * 52)];
      })
      .join("");
    interval += 0.25;

    pre.innerText = matrix;
  }, 30);
});

