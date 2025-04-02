const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Concepcion Chile",
    location: "Concepcion, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
  }
];

createTempleCard(temples);

function createTempleCard(templesArray) {
  document.querySelector('.res-grid').innerHTML = '';

  templesArray.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.res-grid').appendChild(card);
  });
}

const homeTabLink = document.querySelector('#homeTab');
const oldTabLink = document.querySelector('#oldTab');
const newTabLink = document.querySelector('#newTab');
const largeTabLink = document.querySelector('#largeTab');
const smallTabLink = document.querySelector('#smallTab');
const pageTitle = document.querySelector('#pageTitle');

homeTabLink.addEventListener('click', () => {
  createTempleCard(temples);
  pageTitle.textContent = "Home";
 }
);

oldTabLink.addEventListener('click', () => {
   let oldTemples = temples.filter(temple => temple.dedicated.split(',')[0] < 1900);
   createTempleCard(oldTemples);
    pageTitle.textContent = "Old Temples";
  }
);

newTabLink.addEventListener('click', () => {
  let oldTemples = temples.filter(temple => temple.dedicated.split(',')[0] > 2000);
  createTempleCard(oldTemples);
  pageTitle.textContent = "New Temples";
 }
);

largeTabLink.addEventListener('click', () => {
  let largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
  pageTitle.textContent = "Large Temples";
 }
);

smallTabLink.addEventListener('click', () => {
  let smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
  pageTitle.textContent = "Smaller Temples";
  }
);