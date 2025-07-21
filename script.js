const scrollConfigs = [
  { selector: '.uno, .dos, .tres', min: 220, max: 4000 },
  { selector: '.cuatro, .cinco, .seis', min: 350, max: 4000 }
];

window.addEventListener('scroll', () => {
  const y = scrollY;
  scrollConfigs.forEach(({ selector, min, max }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.toggle('scrolled', y > min && y < max);
    });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    gsap.to(".box", {
        rotation:360,
        duration:2,
    });
    gsap.set(".flair", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".flair", "x", {duration: 0.4, ease: "power3"}),
        yTo = gsap.quickTo(".flair", "y", {duration: 0.4, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
});

window.addEventListener('scroll', function () {
    const headers = document.querySelectorAll('.headerright, .headercenter');
    const scrollY = window.scrollY;

    headers.forEach(header => {
        if (scrollY > 420) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".card");
  let stackArea = document.querySelector(".stack-area");

  function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
      if (card.classList.contains("away")) {
        card.style.transform = `translateY(-120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `rotate(${angle}deg)`;
        angle = angle - 10;
        card.style.zIndex = cards.length - index;
      }
    });
  }

  rotateCards();

  window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;
    let topVal = stackArea.getBoundingClientRect().top;

    let index = -1 * (topVal / distance + 1);
    index = Math.floor(index);

    for (let i = 0; i < cards.length; i++) {
      if (i <= index) {
        cards[i].classList.add("away");
      } else {
        cards[i].classList.remove("away");
      }
    }

    rotateCards();
  });
});

window.addEventListener('scroll', function () {
  const container = document.querySelector('.contact > .left > h1');
  if (window.scrollY > 100) {
    container.classList.add('scrolled');
  } else {
    container.classList.remove('scrolled');
  }
});
