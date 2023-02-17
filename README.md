# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [I added](#i-added)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### I added

- white overlay fills the screen when user click (explore)
- floating animation to destination planets
- dynamically changing page content (no multiple html pages)

### Screenshot

![](/assets/shared/screenshot_1.png)
![](/assets/shared/screenshot_2.png)
![](/assets/shared/screenshot_3.png)
![](/assets/shared/screenshot_4.png)

### Links

- Solution URL: [solution](https://your-solution-url.com)
- Live Site URL: [spacediscovery.netlify.app](https://spacediscovery.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Although the project was really challenging but after I finished it I came out with a a lot

- Page transitions
- Dealing with json files
- Changing page content dynamically using json
- Be more comfortable with responsive design and mobile first workflow

To see how I changed the content dynamically, see below:

```js
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
```

### Continued development

I barely used CSS grid in this project, even though I think it would make things more functional. looking forward to using it more in my future projects

### Useful resources

- [JS onpageshow even MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event) - this documentary helped me in understanding how to reload the page when the user clicks back button (mobile)
- [tap highlight color MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color) - This documentary helped me remove the blue highlight when the user click a link on input

## Author

- Website - [Mohamed](https://mohamed-dev.netlify.app)
- Frontend Mentor - [@midoashraf010](https://www.frontendmentor.io/profile/midoashraf010)
- LinkedIn - [Mohamed Ashraf](https://www.linkedin.com/in/mohamed-ashraf-142659246/)

## Acknowledgments

Once I saw the project for the first time I thought I wont be able to make it,
but once you start it suddenly became easier and easier.
so just take the first step!
