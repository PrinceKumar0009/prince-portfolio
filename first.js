// small glow pulse effect
const card = document.querySelector(".card");

setInterval(() => {
  card.style.boxShadow = "0 0 60px rgba(0,255,255,0.6)";
  setTimeout(() => {
    card.style.boxShadow = "0 0 40px rgba(0,255,255,0.25)";
  }, 600);
}, 2000);
