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
const changingElements = document.querySelectorAll(`.changing`);

let DestTarget;

if (destinationLinks) {
  destinationLinks.forEach((link) => {
    // change active class on click
    link.addEventListener(`click`, () => {
      destinationLinks.forEach((link) => link.classList.remove(`active`));
      link.classList.add(`active`);

      // hide all changing elements
      changingElements.forEach((el) => (el.style.opacity = `0`));

      // change page content
      // get the index of the clicked link

      setTimeout(() => {
        DestTarget = link.dataset.index;

        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => data.destinations)
          .then((data) => {
            planetName.innerHTML = data[DestTarget].name;
            return data;
          })
          .then((data) => {
            planetImg.src = data[DestTarget].images.webp;
          })
          .then((data) => {
            planetDescription.innerHTML = data[DestTarget].description;
            return data;
          })
          .then((data) => {
            distance.innerHTML = data[DestTarget].distance;
            return data;
          })
          .then((data) => {
            travelTime.innerHTML = data[DestTarget].travel;
            return data;
          });

        setTimeout(() => {
          changingElements.forEach((el) => (el.style.opacity = `1`));
        }, 350);
      }, 350);
    });
  });
}

const crewLinks = document.querySelectorAll(`#crew section ul li a`);
const crewName = document.getElementById(`crewName`);
const crewDescription = document.getElementById(`crewDescription`);
const crewImg = document.getElementById(`crewImg`);
const crewRole = document.getElementById(`crewRole`);

let crewTarget;

if (crewLinks) {
  crewLinks.forEach((link) => {
    // change active class on click
    link.addEventListener(`click`, () => {
      crewLinks.forEach((link) => link.classList.remove(`active`));
      link.classList.add(`active`);

      // hide all changing elements
      changingElements.forEach((el) => (el.style.opacity = `0`));

      // change page content
      // get the index of the clicked link

      setTimeout(() => {
        crewTarget = link.dataset.index;

        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => data.crew)
          .then((data) => {
            crewName.innerHTML = data[crewTarget].name;
            return data;
          })
          .then((data) => {
            crewImg.src = data[crewTarget].images.webp;
            return data;
          })
          .then((data) => {
            crewRole.innerHTML = data[crewTarget].role;
            return data;
          })
          .then((data) => {
            crewDescription.innerHTML = data[crewTarget].bio;
            return data;
          });

        setTimeout(() => {
          changingElements.forEach((el) => (el.style.opacity = `1`));
        }, 350);
      }, 350);
    });
  });
}
