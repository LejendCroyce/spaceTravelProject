const navDiv = document.querySelector(".nav-div");
let contentContainer = document.querySelector(".hero-section");
const section = document.querySelector(".home-page");
const navbar = document.querySelector(".nav-bar").children;
const mobileNavBtn = document.querySelector(".mobile-nav-svg");

// console.log(returnBtn);
// returnBtn.classList.add("hide");
// console.log();
const explore = document.querySelector(".button-div button");
explore.addEventListener("click", function () {
  explore.classList.add("bigger");
  createDestinationPage(
    destination[0].destinationImage,
    destination[0].destinationText,
    destination[0].destinationDistance,
    destination[0].destinationTime,
    destination[0].destinationName
  );
  Array.from(destinationNavbar.children).forEach((navItem) =>
    navItem.classList.remove("selector")
  );

  Array.from(navbar).forEach((navItem) => navItem.classList.remove("selector"));
  navbar[1].classList.add("selector");

  Array.from(mobileNav.children[0].children).forEach((navItem) =>
    navItem.classList.remove("selector")
  );
  mobileNav.children[0].children[1].classList.add("selector");
});
// let mobileNav = document.querySelector(".mobile-nav");
const mobileNav = document.createElement("div");
mobileNav.classList.add("mobile-nav", "flex");
mobileNav.innerHTML = `<div><a href="spaceTour.html" class="white-font ">
            <li class="white-font  selector text9"><b>00</b> HOME</li>
          </a>
          <li class="white-font text9"><b>01</b> DESTINATION</li>
          <li class="white-font text9"><b>02</b> CREW</li>
          <li class="white-font text9"><b>03</b> TECHNOLOGY</li>
          </div><svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="return-btn hide"
        >
          <path
            fill="currentColor"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          />
        </svg>`;
const returnBtn = mobileNav.querySelector(".return-btn");

Array.from(mobileNav.children[0].children).forEach((child, index) => {
  child.addEventListener("click", function () {
    Array.from(mobileNav).forEach((navItem) =>
      navItem.classList.remove("selector")
    );
    child.classList.add("selector");
    if (index === 0) {
      return;
    } else if (index === 1) {
      createDestinationPage(
        destination[0].destinationImage,
        destination[0].destinationText,
        destination[0].destinationDistance,
        destination[0].destinationTime,
        destination[0].destinationName
      );
      Array.from(destinationNavbar.children).forEach((navItem) =>
        navItem.classList.remove("selector")
      );
      destinationNavbar.children[0].classList.add("selector");
      // console.log("Navbar 1 clicked");
    } else if (index === 2) {
      createCrewPage(
        crew[0].crewName,
        crew[0].crewImage,
        crew[0].work,
        crew[0].crewProfile
      );
      Array.from(crewNavbar.children).forEach((navItem) =>
        navItem.classList.remove("crew-selector")
      );
      crewNavbar.children[0].classList.add("crew-selector");
      // console.log(child.textContent);
    } else if (index === 3) {
      createTechPage(
        technology[0].techName,
        technology[0].techImage,
        technology[0].techprofile
      );
      Array.from(techNavbar.children).forEach((navItem) =>
        navItem.classList.remove("tech-selector")
      );
      techNavbar.children[0].classList.add("tech-selector");
      // console.log("Navbar 1 clicked");
    } else {
      console.log(`event listener not attached for${child.textContent}`);
    }
  });
});

mobileNavBtn.addEventListener("click", function () {
  mobileNavBtn.classList.replace("mobile-nav-svg", "hide");
  returnBtn.classList.remove("hide");
  section.prepend(mobileNav);
  if (mobileNav.classList.contains("sr-only")) {
    mobileNav.classList.remove("sr-only");
  }
  Array.from(mobileNav.children[0].children).forEach((child, index) => {
    child.addEventListener("click", function () {
      Array.from(mobileNav.children[0].children).forEach((navItem) =>
        navItem.classList.remove("selector")
      );
      child.classList.add("selector");
      mobileNav.classList.add("sr-only");
      // mobileNav.classList.add("hide");
      if (index === 0) {
        return;
      } else if (index === 1) {
        createDestinationPage(
          destination[0].destinationImage,
          destination[0].destinationText,
          destination[0].destinationDistance,
          destination[0].destinationTime,
          destination[0].destinationName
        );
        Array.from(destinationNavbar.children).forEach((navItem) =>
          navItem.classList.remove("selector")
        );
        destinationNavbar.children[0].classList.add("selector");
        // console.log("Navbar 1 clicked");
      } else if (index === 2) {
        createCrewPage(
          crew[0].crewName,
          crew[0].crewImage,
          crew[0].work,
          crew[0].crewProfile
        );
        Array.from(crewNavbar.children).forEach((navItem) =>
          navItem.classList.remove("crew-selector")
        );
        crewNavbar.children[0].classList.add("crew-selector");
        // console.log(child.textContent);
      } else if (index === 3) {
        createTechPage(
          technology[0].techName,
          technology[0].techImage,
          technology[0].techprofile
        );
        Array.from(techNavbar.children).forEach((navItem) =>
          navItem.classList.remove("tech-selector")
        );
        techNavbar.children[0].classList.add("tech-selector");
        // console.log("Navbar 1 clicked");
      } else {
        console.log(`event listener not attached for${child.textContent}`);
      }
    });
  });
});
returnBtn.addEventListener("click", function () {
  returnBtn.classList.add("hide");
  mobileNav.classList.add("sr-only");
  mobileNavBtn.classList.replace("hide", "mobile-nav-svg");
});
let webStore = [];
let destination = [];
let technology = [];
let crew = [];
const moonText = `See our planet as you've never seen it before. A perfect relaxing trip away to help you regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo11 landing sites.`;
const marsText = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and half times the size of Everest!`;
const europaText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling , hockey, or simple relaxation in your snug wintery cabin.`;
const titanText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
const commanderText = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Drew Dragon Demo-2`;
const missionistText = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
const pilotText = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander of the US Navy where he pilots on FIA-!B. He was a crew member of Expedition84 and served as a station systems flight engineer.`;
const engineerText = `Anousheh Ansari is an Iranian American engeneer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS and the first Iranian in space.`;
const tech1Text = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from the Earth's surface to space, usually to earth's orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
const tech2Text = `A spaceport or cosmodrome is a site for launching(or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. ased in the famous cape Cavarjal, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`;
const tech3Text = `A space capsule is an often crewed spacecreft that uses a blunt body reentry capsule to enter the earth's atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, a cinema and plenty of other activities to keep you entertained.`;
function addWebGrp(group) {
  webStore.push(group);
}

addWebGrp(destination);
addWebGrp(crew);
addWebGrp(technology);
console.log(webStore);
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
addCrew(
  1,
  "DOUGLAS HURLEY",
  getImage("images/crew2.png", "commander image"),
  "COMMANDER",
  commanderText
);
addCrew(
  2,
  "MARK SHUTTLEWORTH",
  getImage("images/crew4.png", "Missionist image"),
  "MISSION SPECIALIST",
  missionistText
);
addCrew(
  3,
  "VICTOR GLOVER",
  getImage("images/crew1.png", "pilot image"),
  "PILOT",
  pilotText
);
addCrew(
  4,
  "ANOUSHEH ANSARI",
  getImage("images/crew3.png", "engineer image"),
  "FLIGHT ENGINEER",
  engineerText
);
addTechnology(1, "LAUNCH VEHICLE", getImage("images/tech-img2.png"), tech1Text);
addTechnology(2, "SPACEPORT", getImage("images/tech-img1.png"), tech2Text);
addTechnology(3, "SPACE CAPSULE", getImage("images/tech-img3.png"), tech3Text);
// how i created the button for the diff. destinations

const destinationNavbar = document.createElement("ul");
const crewNavbar = document.createElement("div");
const techNavbar = document.createElement("div");
techNavbar.classList.add("tech-navbar", "flex");
crewNavbar.classList.add("crew-navbar", "flex");
destinationNavbar.classList.add("destination-navbar", "flex");

function createNavlist(a, attr, no) {
  let count = 0;
  while (count <= no - 1) {
    const navList = document.createElement(attr);
    navList.classList.add("white-font", "text8");
    a.append(navList);
    count += 1;
  }
  console.log(a);
  return a;
}
createNavlist(destinationNavbar, "li", 4);
createNavlist(crewNavbar, "button", 4);
createNavlist(techNavbar, "button", 3);
destinationNavbar.children[0].textContent = "MOON";
destinationNavbar.children[1].textContent = "MARS";
destinationNavbar.children[2].textContent = "EUROPA";
destinationNavbar.children[3].textContent = "TITAN";
let count = 0;
for (const nav of techNavbar.children) {
  count += 1;
  nav.textContent = count;
}
// console.log(techNavbar);
// the function that creates each destination page
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
  heading.classList.add("heading", "white-font", "text8");
  heading.innerHTML = `<b>01</b> PICK YOUR DESTINATION`;
  page.append(heading, content);
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  imageContainer.classList.add("image-div", "gradient");
  textContainer.classList.add("text-div");
  content.append(imageContainer, textContainer);
  imageContainer.append(destinationImage);
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
  timeHeading.classList.add("white-font", "text8");
  distanceHeading.textContent = "AVG. DISTANCE";
  distanceHeading.classList.add("white-font", "text8");
  traveltime.textContent = destinationTime;
  traveltime.classList.add("white-font", "text6");
  travelDistance.textContent = destinationDistance;
  travelDistance.classList.add("white-font", "text6");

  timeDiv.classList.add("time-div");
  timeDiv.append(timeHeading, traveltime);
  distanceDiv.append(distanceHeading, travelDistance);
  distanceDiv.classList.add("distance-div");

  travelDetails.classList.add("travel-details", "flex");
  travelDetails.append(distanceDiv, timeDiv);
  profile.classList.add("p", "white-font", "text9");
  profile.textContent = destinationText;
  name.classList.add("text2", "white-font");
  name.textContent = destinationName;
  textContainer.append(destinationNavbar, name, profile, travelDetails);
  contentContainer.replaceWith(page);
  contentContainer = page;

  section.classList.remove("home-page", "destination", "crew", "technology");
  section.classList.add("destination");
}
function createCrewPage(crewName, crewImage, crewWork, crewProfile) {
  const page = document.createElement("div");
  const heading = document.createElement("div");
  const content = document.createElement("div");
  page.classList.add("hero-section");
  page.classList.add("crew-content");
  content.classList.add("content-div", "flex");
  heading.classList.add("heading", "white-font", "text8");
  heading.innerHTML = `<b>02</b> MEET YOUR CREW`;
  page.append(heading, content);
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  imageContainer.classList.add("image-div");
  textContainer.classList.add("text-div");
  content.append(textContainer, imageContainer);
  imageContainer.append(crewImage);
  const name = document.createElement("p");
  const work = document.createElement("p");
  const profile = document.createElement("p");
  name.classList.add("text3", "white-font");
  profile.classList.add("text9", "white-font");
  work.classList.add("text5", "white-font");
  name.textContent = crewName;
  work.textContent = crewWork;
  profile.textContent = crewProfile;

  textContainer.append(work, name, profile, crewNavbar);
  contentContainer.replaceWith(page);
  contentContainer = page;

  section.classList.remove("home-page", "destination", "crew", "technology");
  section.classList.add("crew");
}
function createTechPage(techName, techImage, techProfile) {
  const page = document.createElement("div");
  const heading = document.createElement("div");
  const content = document.createElement("div");
  page.classList.add("hero-section");
  page.classList.add("tech-content");
  content.classList.add("content-div", "flex");
  heading.classList.add("heading", "white-font", "text8");
  heading.innerHTML = `<b>03</b> SPACE LAUNCH 101`;
  page.append(heading, content);
  const imageContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  imageContainer.classList.add("image-div", "flex");
  textContainer.classList.add("text-div", "flex");
  content.append(textContainer, imageContainer);
  techImage.classList.add("tech-image");
  imageContainer.append(techImage);
  const name = document.createElement("p");
  const work = document.createElement("p");
  const profile = document.createElement("p");
  name.classList.add("text3", "white-font");
  profile.classList.add("text9", "white-font");
  work.classList.add("text5", "white-font");
  name.textContent = techName;
  work.textContent = "THE TERMINOLOGY...";
  profile.textContent = techProfile;
  const textContentDiv = document.createElement("div");
  textContentDiv.classList.add("text-content-div");
  textContentDiv.append(work, name, profile);
  textContainer.append(techNavbar, textContentDiv);
  contentContainer.replaceWith(page);
  contentContainer = page;

  section.classList.remove("home-page", "destination", "crew", "technology");
  section.classList.add("technology");
}
// event listener for the destiation button on the homepage

document.addEventListener("DOMContentLoaded", () => {
  Array.from(navbar).forEach((child, index) => {
    child.addEventListener("click", function () {
      Array.from(navbar).forEach((navItem) =>
        navItem.classList.remove("selector")
      );
      child.classList.add("selector");
      if (index === 0) {
        return;
      } else if (index === 1) {
        createDestinationPage(
          destination[0].destinationImage,
          destination[0].destinationText,
          destination[0].destinationDistance,
          destination[0].destinationTime,
          destination[0].destinationName
        );
        Array.from(destinationNavbar.children).forEach((navItem) =>
          navItem.classList.remove("selector")
        );
        destinationNavbar.children[0].classList.add("selector");
        // console.log("Navbar 1 clicked");
      } else if (index === 2) {
        createCrewPage(
          crew[0].crewName,
          crew[0].crewImage,
          crew[0].work,
          crew[0].crewProfile
        );
        Array.from(crewNavbar.children).forEach((navItem) =>
          navItem.classList.remove("crew-selector")
        );
        crewNavbar.children[0].classList.add("crew-selector");
        // console.log(child.textContent);
      } else if (index === 3) {
        createTechPage(
          technology[0].techName,
          technology[0].techImage,
          technology[0].techprofile
        );
        Array.from(techNavbar.children).forEach((navItem) =>
          navItem.classList.remove("tech-selector")
        );
        techNavbar.children[0].classList.add("tech-selector");
        // console.log("Navbar 1 clicked");
      } else {
        console.log(`event listener not attached for${child.textContent}`);
      }
    });
  });

  // console.log(document.body);
});

Array.from(destinationNavbar.children).forEach((child, index) => {
  child.addEventListener("click", function () {
    const destinationData = destination[index];
    if (destinationData) {
      createDestinationPage(
        destinationData.destinationImage,
        destinationData.destinationText,
        destinationData.destinationDistance,
        destinationData.destinationTime,
        destinationData.destinationName
      );

      Array.from(destinationNavbar.children).forEach((navItem) =>
        navItem.classList.remove("selector")
      );
      child.classList.add("selector");
    } else {
      console.log(`No destination data found for index ${index}`);
    }
  });
});
Array.from(crewNavbar.children).forEach((child, index) => {
  child.addEventListener("click", function () {
    const crewData = crew[index];
    if (crewData) {
      createCrewPage(
        crewData.crewName,
        crewData.crewImage,
        crewData.work,
        crewData.crewProfile
      );

      Array.from(crewNavbar.children).forEach((navItem) =>
        navItem.classList.remove("crew-selector")
      );
      child.classList.add("crew-selector");
    } else {
      console.log(`No crew data found for index ${index}`);
    }
  });
});
Array.from(techNavbar.children).forEach((child, index) => {
  child.addEventListener("click", function () {
    const techData = technology[index];
    if (techData) {
      createTechPage(
        techData.techName,
        techData.techImage,
        techData.techprofile
      );

      Array.from(techNavbar.children).forEach((navItem) =>
        navItem.classList.remove("tech-selector")
      );
      child.classList.add("tech-selector");
    } else {
      console.log(`No crew data found for index ${index}`);
    }
  });
});
