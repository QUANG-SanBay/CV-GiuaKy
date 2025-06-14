// Nút "Lên đầu trang"
const toTopBtn = document.createElement("button");
toTopBtn.textContent = "↑";
toTopBtn.id = "toTopBtn";
document.body.appendChild(toTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Thêm class "visible" cho ảnh avatar khi cuộn
const avatar = document.querySelector(".left img");

window.addEventListener("scroll", () => {
  const rect = avatar.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    avatar.classList.add("visible");
  }
});
