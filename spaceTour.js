const navDiv = document.querySelector(".nav-div");
const contentContainer = document.querySelector(".home-page-content");
const section = document.querySelector(".home-page");

console.log(contentContainer);
let webStore = [];
let destination = [];
let technology = [];
let crew = [];
const moonText = `See our planet as you've never seen it before. A perfect relaxing trip away to help you regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo11 landing sites.`;
const marsText = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and half times the size of Everest!`;
const europaText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling , hockey, or simple relaxation in your snug wintery cabin.`;
const titanText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
function addWebGrp(group) {
  webStore.push(group);
}
addWebGrp(destination);
addWebGrp(crew);
addWebGrp(technology);
function addDestination(
  destinationNo,
  destinationName,
  destinationImage,
  destinationText,
  destinationDistance,
  destinationTime
) {
  destination.push({
    destinationNo,
    destinationName,
    destinationImage,
    destinationText,
    destinationDistance,
    destinationTime,
  });
}
function addCrew(crewNo, crewName, crewImage, work, crewProfile) {
  crew.push({ crewNo, crewName, crewImage, work, crewProfile });
}
function addTechnology(techNo, techName, techImage, techprofile) {
  technology.push({ techNo, techName, techImage, techprofile });
}
function getImage(Isrc, alt) {
  const image = document.createElement("img");
  image.src = Isrc;
  image.alt = alt;
  return image;
}
addDestination(
  1,
  "MOON",
  getImage("images/destination4 main.png", "moon destination"),
  moonText,
  "384,300 KM",
  "3 DAYS"
);
addDestination(
  2,
  "MARS",
  getImage("images/destination1 main.png", "mars destination"),
  marsText,
  "225 MIL. KM",
  "9 MONTHS"
);
addDestination(
  3,
  "EUROPA",
  getImage("images/destination3 main.png", "europa destination"),
  europaText,
  "628 MIL. KM",
  "3 YEARS"
);
addDestination(
  4,
  "TITAN",
  getImage("images/destination2 main.png", "titan destination"),
  titanText,
  "1.6 BIL. KM",
  "7 YEARS"
);
function createDestinationPage(place) {
  const page = document.createElement("div");
  page.classList.add("hero-section");
  page.classList.add("destination-content");

  console.log(page);
}
createDestinationPage();
