const crewLinks = document.querySelectorAll(`#crew section ul li a`);
const crewName = document.getElementById(`crewName`);
const crewDescription = document.getElementById(`crewDescription`);
const crewImg = document.getElementById(`crewImg`);
const crewRole = document.getElementById(`crewRole`);
const changingElements = document.querySelectorAll(`.changing`);

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
        }, 460);
      }, 280);
    });
  });
}
