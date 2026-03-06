const modal = document.getElementById("quoteModal");
const openBtn1 = document.getElementById("openFormBtn1");
const openBtn2 = document.getElementById("openFormBtn2");
const closeBtn = document.querySelector(".close");

openBtn1?.addEventListener("click", e => {
  e.preventDefault();
  modal.classList.add("show");
});

openBtn2?.addEventListener("click", e => {
  e.preventDefault();
  modal.classList.add("show");
});

closeBtn?.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});


const tabButtons = document.querySelectorAll(".tab-btn");
const galleryContents = document.querySelectorAll(".gallery-content");

tabButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    galleryContents.forEach(content => content.classList.remove("active"));

    document.querySelector("." + btn.dataset.type + "s").classList.add("active");

  });

});



const projectCards = document.querySelectorAll('.project-card');

const projectModal = document.createElement('div');
projectModal.classList.add('project-modal');

projectModal.innerHTML = `<div class="modal-media"></div>`;

document.body.appendChild(projectModal);

const modalMedia = projectModal.querySelector('.modal-media');

projectCards.forEach(card => {

  card.addEventListener('click', () => {

    modalMedia.innerHTML = "";

    const img = card.querySelector("img");
    const video = card.querySelector("video");

    if (img) {
      modalMedia.innerHTML = `<img src="${img.src}">`;
    }

    if (video) {
      modalMedia.innerHTML = `<video src="${video.src}" controls autoplay></video>`;
    }

    projectModal.classList.add("show");

  });

});

projectModal.addEventListener("click", e => {

  if (e.target === projectModal) {

    projectModal.classList.remove("show");
    modalMedia.innerHTML = "";

  }

});

// ==================== HAMBURGER MENU ====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  // Відкриття/закриття гамбургера при кліку на іконку
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // Автоматичне закриття меню при кліку на будь-який пункт
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
}

document.getElementById("quoteForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const form = e.target;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(() => {
      alert("Thank you! Your request has been sent.");
      form.reset();
    })
    .catch(() => alert("Oops! Something went wrong."));
});