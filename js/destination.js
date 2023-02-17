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
            return data;
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
        }, 460);
      }, 280);
    });
  });
}
