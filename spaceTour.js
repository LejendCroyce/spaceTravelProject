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
  const heading = document.createElement("div");
  const content = document.createElement("div");
  page.classList.add("hero-section");
  page.classList.add("destination-content");
  content.classList.add("content-div", "flex");
  heading.classList.add("heading");
  heading.textContent = `01 PICK YOUR DESTINATION`;
  page.append(heading, content);
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  imageContainer.classList.add("image-div");
  textContainer.classList.add("text-div");
  content.append(imageContainer, textContainer);
  imageContainer.append(place.destinationImage);
  const destinationNavbar = document.createElement("ul");
  destinationNavbar.classList.add("flex");
  let count = 0;
  while (count <= 3) {
    const navList = document.createElement("li");
    destinationNavbar.append(navList);
    count += 1;
  }
  function nav(a, b, c, d) {
    destinationNavbar.children;
    destinationNavbar.children[0].textContent = a;
    destinationNavbar.children[1].textContent = b;
    destinationNavbar.children[2].textContent = c;
    destinationNavbar.children[3].textContent = d;
    console.log(destinationNavbar.children);
    return destinationNavbar.children;
  }
  nav(
    destination[0].destinationName,
    destination[1].destinationName,
    destination[2].destinationName,
    destination[3].destinationName
  );

  console.log(destinationNavbar);
  const name = document.createElement("p");
  const profile = document.createElement("p");
  const travelDetails = document.createElement("div");
  const timeDiv = document.createElement("div");
  const distanceDiv = document.createElement("div");
  const timeHeading = document.createElement("p");
  const distanceHeading = document.createElement("p");
  const traveltime = document.createElement("p");
  const travelDistance = document.createElement("p");
  timeHeading.textContent = "EST. TRAVEL TIME";
  distanceHeading.textContent = "AVG. DISTANCE";
  traveltime.textContent = place.destinationTime;
  travelDistance.textContent = place.destinationDistance;

  timeDiv.classList.add("time-div");
  timeDiv.append(timeHeading, traveltime);
  distanceDiv.append(distanceHeading, travelDistance);
  distanceDiv.classList.add("distance-div");

  travelDetails.classList.add("flex");
  travelDetails.append(distanceDiv, timeDiv);
  profile.classList.add("text9");
  profile.textContent = place.destinationText;
  name.classList.add("text1");
  name.textContent = place.destinationName;
  textContainer.append(destinationNavbar, name, profile, travelDetails);
  console.log(page);
  contentContainer.replaceWith(page);
  section.classList.remove("home-page");
  section.classList.add("destination");
}
createDestinationPage(destination[3]);
