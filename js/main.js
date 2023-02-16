const header = document.querySelector(`header`);
const nav = document.querySelector(`nav`);
const xMark = document.getElementById(`xMark`);
const xMarkSpans = document.querySelectorAll(`#xMark span`);
const navUl = document.querySelector(`nav ul`);
const homeButton = document.querySelector(`#home .button`);

// toggle nav when use clicks on burger menu elements
xMark.addEventListener(`click`, () => {
  navChecker();
});

// close nav if it's open and user clicks outside it
document.addEventListener(`click`, (e) => {
  if (
    e.target !== navUl &&
    e.target !== xMark &&
    !e.target.classList.contains(`nav-links`) &&
    nav.classList.contains(`list-open`)
  ) {
    nav.classList.remove(`list-open`);
  }
});

// checks if nav is open or closed and toggle it
function navChecker() {
  if (nav.classList.contains(`list-open`)) {
    nav.classList.remove(`list-open`);
  } else {
    nav.classList.add(`list-open`);
  }
}

// fill the screen when the landing button is clicked

if (homeButton) {
  homeButton.addEventListener(`click`, () => {
    header.style.zIndex = `1`;
    homeButton.classList.add(`clicked`);

    setTimeout(() => {
      location.href = `/destination`;
    }, 600);
  });
}

// DESTINATION

const destinationLinks = document.querySelectorAll(
  `#destination section ul li a`
);
const planetName = document.getElementById(`planetName`);
const planetDescription = document.getElementById(`planetDescription`);
const distance = document.getElementById(`distance`);
const travelTime = document.getElementById(`travelTime`);
const planetImg = document.getElementById(`planetImg`);
let target;

if (destinationLinks) {
  destinationLinks.forEach((link) => {
    // change active class on click
    link.addEventListener(`click`, () => {
      destinationLinks.forEach((link) => link.classList.remove(`active`));
      link.classList.add(`active`);

      // change page content
      // get the index of the clicked link
      target = link.dataset.index;

      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => data.destinations)
        .then((data) => {
          planetName.innerHTML = data[target].name;
          return data;
        })
        .then((data) => {
          planetDescription.innerHTML = data[target].description;
          return data;
        })
        .then((data) => {
          distance.innerHTML = data[target].distance;
          return data;
        })
        .then((data) => {
          travelTime.innerHTML = data[target].travel;
          return data;
        })
        .then((data) => {
          planetImg.src = data[target].images.png;
        });
    });
  });
}
