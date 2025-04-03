const imgs = document.querySelectorAll(".maps-carousel img");
const bannerImg = document.querySelector(".banner-image");

console.log(imgs);

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    bannerImg.src = img.src;
  });
});
