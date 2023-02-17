const techLinks = document.querySelectorAll(`#technology section ul li a`);
const techName = document.getElementById(`techName`);
const techDescription = document.getElementById(`techDescription`);
const techImgP = document.getElementById(`techImgP`);
const techImgL = document.getElementById(`techImgL`);
const techRole = document.getElementById(`techRole`);
const changingElements = document.querySelectorAll(`.changing`);

let techTarget;

if (techLinks) {
  techLinks.forEach((link) => {
    // change active class on click
    link.addEventListener(`click`, () => {
      techLinks.forEach((link) => link.classList.remove(`active`));
      link.classList.add(`active`);

      // hide all changing elements
      changingElements.forEach((el) => (el.style.opacity = `0`));

      // change page content
      // get the index of the clicked link

      setTimeout(() => {
        techTarget = link.dataset.index;

        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => data.technology)
          .then((data) => {
            techImgP.src = data[techTarget].images.portrait;
            return data;
          })
          .then((data) => {
            techImgL.src = data[techTarget].images.landscape;
            return data;
          })
          .then((data) => {
            techName.innerHTML = data[techTarget].name;
            return data;
          })
          .then((data) => {
            techDescription.innerHTML = data[techTarget].description;
            return data;
          });

        setTimeout(() => {
          changingElements.forEach((el) => (el.style.opacity = `1`));
        }, 460);
      }, 280);
    });
  });
}
