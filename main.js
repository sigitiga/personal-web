import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#element', {
  strings: ["Product Designer🎨", "Web Developer💻", "Indie Maker🎯"],
  typeSpeed: 70,
  loop: true,
});

const giftBtn = document.getElementById("gift");
giftBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
    // any other options from the global
    // confetti function
  });
})

