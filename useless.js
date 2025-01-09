const navDiv = document.querySelector(".nav-div");
const contentContainer = document.querySelector(".home-page-content");
const section = document.querySelector(".home-page");
const navbar = document.querySelector(".nav-bar").children;
console.log(navbar);
const moonText = `See our planet as you've never seen it before. A perfect relaxing trip away to help you regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo11 landing sites.`;
const marsText = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and half times the size of Everest!`;
const europaText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling , hockey, or simple relaxation in your snug wintery cabin.`;
const titanText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
const imageCont = [
  getImage("images/destination4 main.png", "moon destination"),
  getImage("images/destination1 main.png", "mars destination"),
  getImage("images/destination3 main.png", "europa destination"),
  getImage("images/destination2 main.png", "titan destination"),
];
const textCont = [moonText, marsText, europaText, titanText];
const distanceCont = [
  "384,300 KM",
  "225 MIL. KM",
  "628 MIL. KM",
  "1.6 BIL. KM",
];
const timeCont = ["3 DAYS", "9 MONTHS", "3 YEARS", "7 YEARS"];
const nameCont = ["MOON", "MARS", "EUROPA", "TITAN"];
function adder(cont, item) {
  cont.push(item);
}
function getImage(Isrc, alt) {
  const image = document.createElement("img");
  image.src = Isrc;
  image.alt = alt;

  return image;
}
let count = 0;
const destinationNavbar = document.createElement("ul");
destinationNavbar.classList.add("destination-navbar", "flex");

function createNavlist(a) {
  while (count <= 3) {
    const navList = document.createElement("li");
    navList.classList.add("white-font");
    a.append(navList);
    count += 1;
  }
  return a;
}
createNavlist(destinationNavbar);
destinationNavbar.children[0].textContent = "MOON";
destinationNavbar.children[1].textContent = "MARS";
destinationNavbar.children[2].textContent = "EUROPA";
destinationNavbar.children[3].textContent = "TITAN";
function createDestinationPage(
  destinationImage,
  destinationText,
  destinationDistance,
  destinationTime,
  destinationName
) {
  const page = document.createElement("div");
  const heading = document.createElement("div");
  const content = document.createElement("div");
  page.classList.add("hero-section");
  page.classList.add("destination-content");
  content.classList.add("content-div", "flex");
  heading.classList.add("heading", "white-font");
  heading.textContent = `01 PICK YOUR DESTINATION`;
  page.append(heading, content);
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  imageContainer.classList.add("image-div");
  textContainer.classList.add("text-div");
  content.append(imageContainer, textContainer);
  imageContainer.append(destinationImage);

  // createNavlist(destinationNavbar);

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
  timeHeading.classList.add("white-font");
  distanceHeading.textContent = "AVG. DISTANCE";
  distanceHeading.classList.add("white-font");
  traveltime.textContent = destinationTime;
  traveltime.classList.add("white-font");
  travelDistance.textContent = destinationDistance;
  travelDistance.classList.add("white-font");

  timeDiv.classList.add("time-div");
  timeDiv.append(timeHeading, traveltime);
  distanceDiv.append(distanceHeading, travelDistance);
  distanceDiv.classList.add("distance-div");

  travelDetails.classList.add("travel-details", "flex");
  travelDetails.append(distanceDiv, timeDiv);
  profile.classList.add("p", "white-font", "text9");
  profile.textContent = destinationText;
  name.classList.add("text1", "white-font");
  name.textContent = destinationName;
  textContainer.append(destinationNavbar, name, profile, travelDetails);

  contentContainer.replaceWith(page);
  section.classList.remove("home-page");
  section.classList.add("destination");
}

navbar[1].addEventListener("click", function () {
  createDestinationPage(
    imageCont[0],
    textCont[0],
    distanceCont[0],
    timeCont[0],
    nameCont[0]
  );
  for (const bar of navbar) {
    bar.classList.remove("selector");
  }
  navbar[1].classList.add("selector");
});

console.log(destinationNavbar);
destinationNavbar.children[0].addEventListener("click", function () {
  createDestinationPage(
    imageCont[0],
    textCont[0],
    distanceCont[0],
    timeCont[0],
    nameCont[0]
  );
});

destinationNavbar.children[1].addEventListener("click", function () {
  createDestinationPage(
    imageCont[1],
    textCont[1],
    distanceCont[1],
    timeCont[1],
    nameCont[1]
  );
});
destinationNavbar.children[2].addEventListener("click", function () {
  createDestinationPage(destination[2]);
});
destinationNavbar.children[3].addEventListener("click", function () {
  createDestinationPage(destination[3]);
});
