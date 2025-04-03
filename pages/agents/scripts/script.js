const abilitiesVideo = document.querySelector(".abilityVideo");
const abilities = document.querySelectorAll(".abilities-img img");
const agent = document.querySelector(".agent-header h2");

abilities.forEach((ability) => {
  ability.addEventListener("click", () => {
    abilitiesVideo.src = `../../../../assets/videos/${agent.textContent.toLowerCase()}/${
      ability.id
    }.mp4`;
  });
});
