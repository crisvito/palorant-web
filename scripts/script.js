const mapsCarousel = document.querySelector(".maps-carousel");
const arrowBtns = document.querySelectorAll(".maps-caraousel-control span");
const firstImgWidth = mapsCarousel.querySelector("img").offsetWidth;
let isDragging = false,
  startX,
  startScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let maxScrollLeft = mapsCarousel.scrollWidth - mapsCarousel.clientWidth;
    if (btn.id === "left") mapsCarousel.scrollLeft -= firstImgWidth;
    else {
      mapsCarousel.scrollLeft += firstImgWidth;
      if (mapsCarousel.scrollLeft >= maxScrollLeft) mapsCarousel.scrollLeft = 0;
    }
  });
});

mapsCarousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = mapsCarousel.scrollLeft;
});

mapsCarousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  let maxScrollLeft = mapsCarousel.scrollWidth - mapsCarousel.clientWidth;
  mapsCarousel.scrollLeft = startScrollLeft - (e.pageX - startX) * 2.5;
  // Jika geser manual sampai ujung kanan, balik ke kiri
  if (mapsCarousel.scrollLeft >= maxScrollLeft) mapsCarousel.scrollLeft = 0;
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});

mapsCarousel.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
});

mapsCarousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = mapsCarousel.scrollLeft;
});

mapsCarousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  let maxScrollLeft = mapsCarousel.scrollWidth - mapsCarousel.clientWidth;
  mapsCarousel.scrollLeft = startScrollLeft - (e.pageX - startX) * 2.5;
  // Jika geser manual sampai ujung kanan, balik ke kiri
  if (mapsCarousel.scrollLeft >= maxScrollLeft) mapsCarousel.scrollLeft = 0;
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});

// 📱 Tambahkan event listener untuk layar sentuh (HP)
mapsCarousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX; // Ambil titik sentuh pertama
  startScrollLeft = mapsCarousel.scrollLeft;
});

mapsCarousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  let maxScrollLeft = mapsCarousel.scrollWidth - mapsCarousel.clientWidth;
  mapsCarousel.scrollLeft =
    startScrollLeft - (e.touches[0].pageX - startX) * 2.5;
  if (mapsCarousel.scrollLeft >= maxScrollLeft) mapsCarousel.scrollLeft = 0;
});

mapsCarousel.addEventListener("touchend", () => {
  isDragging = false;
});
