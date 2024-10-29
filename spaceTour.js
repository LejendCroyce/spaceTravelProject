const navDiv = document.querySelector(".nav-div");
const contentContainer = document.querySelector(".content-div");
let webStore = [];
let destination = [];
let technology = [];
let crew = [];
function addWebGrp(group) {
  webStore.push(group);
}
addWebGrp(destination);
addWebGrp(crew);
addWebGrp(technology);
