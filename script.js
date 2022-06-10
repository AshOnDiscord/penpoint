document.querySelector(".release>button").addEventListener("click", () => {
  document.querySelector(".release").classList.toggle("releaseShow");
  document.querySelector(".release").classList.toggle("bg-slate-100");
  document.querySelector(".release").classList.toggle("shadow-md");
  document.querySelector(".release ul").classList.toggle("hidden");
});

/*
Latest Releases
Schools News
Around the Area
Current Events
Morning Announcements
Service
Peer Leader Spotlight
Gallery
Food, Arts & Culture
Opinions
*/

document
  .querySelector(".release button.latestReleases")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Latest Releases <span></span>";
  });

document
  .querySelector(".release button.schoolNews")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Schools News <span></span>";
  });

document
  .querySelector(".release button.aroundTheArea")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Around the Area <span></span>";
  });

document
  .querySelector(".release button.currentEvents")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Current Events <span></span>";
  });

document
  .querySelector(".release button.morningAnnouncements")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Morning Announcements <span></span>";
  });

document
  .querySelector(".release button.service")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML = "Service <span></span>";
  });

document
  .querySelector(".release button.peerLeaderSpotlight")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Peer Leader Spotlight <span></span>";
  });

document
  .querySelector(".release button.gallery")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML = "Gallery <span></span>";
  });

document
  .querySelector(".release button.foodArtsCulture")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML =
      "Food, Arts & Culture <span></span>";
  });

document
  .querySelector(".release button.opinions")
  .addEventListener("click", () => {
    document.querySelector(".release h1").innerHTML = "Opinions <span></span>";
  });
