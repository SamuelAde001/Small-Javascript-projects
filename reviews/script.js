const reviews = [
  {
    id: 1,
    name: 'Samuel Adebayo',
    job: 'The Dev',
    img: 'images/p1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
  {
    id: 2,
    name: 'Unanta Favour',
    job: 'Frontend',
    img: 'images/p2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
  {
    id: 3,
    name: 'benita Glory',
    job: 'Backend',
    img: 'images/p3.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
  {
    id: 4,
    name: 'hamza chuckwu',
    job: 'Fullstack',
    img: 'images/p4.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
  {
    id: 5,
    name: 'prestige Honour',
    job: 'Graphic designer',
    img: 'images/p5.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
  {
    id: 6,
    name: 'Anita brownie',
    job: 'Game Dev',
    img: 'images/p6.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commod Lorem ipsum dolor sit amet consectetur adipisicing elit. Commo',
  },
];

// my initial variables

let image = document.querySelector ('.profilePics');
let name = document.getElementById ('author');
let occupation = document.getElementById ('nick');
let text = document.getElementById ('text');

// bottons

let nextBtn = document.getElementById ('nextBtn');
let prvBtn = document.getElementById ('prvBtn');
let random = document.getElementById ('random');

// initial loading of page
let current = 0;

window.addEventListener ('DOMContentLoaded', function () {
  person (current);
  console.log (current);
});

function person (a) {
  image.src = reviews[a].img;
  name.innerText = reviews[a].name;
  occupation.innerText = reviews[a].job;
  text.innerText = reviews[a].text;
}
nextBtn.addEventListener ('click', function () {
  current++;
  if (current >= reviews.length - 1) {
    current = 0;
  }
  person (current);
  // person (current);
});
prvBtn.addEventListener ('click', function () {
  current--;

  if (current < 0) {
    current = reviews.length - 1;
  }
  person (current);
});

random.addEventListener ('click', function () {
  current = Math.floor (Math.random () * reviews.length);
  person (current);
});
