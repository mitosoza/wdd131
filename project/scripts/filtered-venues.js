const venues = [
  {
    venueName: "Summit Court Arena",
    location: "784 Desert Wind Way, Moab, UT 84532",
    dedicated: "2012, June 14",
    area: 14500,
    image: "images/court1.webp"
  },
  {
    venueName: "Ironclad Pavilion",
    location: "1225 Alpine Crest Dr, Provo, UT 84604",
    dedicated: "1978, May 21",
    area: 74792,
    image: "images/court9.webp"
  },
  {
    venueName: "Skyline Dome",
    location: "310 Horizon Flats Rd, Delta, UT 84624",
    dedicated: "2015, June 7",
    area: 96630,
    image: "images/court7.webp"
  },
  {
    venueName: "Maplewood Coliseum",
    location: "401 District Ln, Salt Lake City, UT 84101",
    dedicated: "2020, May 2",
    area: 6861,
    image: "images/court5.webp"
  },
  {
    venueName: "Solaris Arena",
    location: "66 Rimrock Pass, St. George, UT 84770",
    dedicated: "1997, September 22",
    area: 156558,
    image: "images/court3.webp"
  },
  {
    venueName: "The Ironwood Court",
    location: "213 Juniper Rd, Heber City, UT 84032",
    dedicated: "1792, February 17",
    area: 9600,
    image: "images/court8.webp"
  },
  {
    venueName: "Bayfront Hoops Center",
    location: "87 Watchman Blvd, Springdale, UT 84767",
    dedicated: "2015, August 12",
    area: 11642,
    image: "images/court6.webp"
  },
  {
    venueName: "Stonegate Arena",
    location: "1429 Glacier Run Dr, Logan, UT 84321",
    dedicated: "2000, October 4",
    area: 20831,
    image: "images/court2.webp"
  },
  {
    venueName: "Echo Heights Fieldhouse",
    location: "977 Ridge Trail, Park City, UT 84060",
    dedicated: "1989, May 28",
    area: 14000,
    image: "images/court4.webp"
  }
];

createVenueCard(venues);

function createVenueCard(venuesArray) {
  document.querySelector('.res-grid').innerHTML = '';

  venuesArray.forEach(venue => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = venue.venueName;
    location.innerHTML = `<span class="label">Location:</span> ${venue.location}`;
    dedicated.innerHTML = `<span class="label">Built:</span> ${venue.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${venue.area} sq ft`;
    img.setAttribute('src', venue.image);
    img.setAttribute('alt', `${venue.venueName} Venue`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

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
  createVenueCard(venues);
  pageTitle.textContent = "All Venues";
 }
);

oldTabLink.addEventListener('click', () => {
   let oldVenues = venues.filter(venue => venue.dedicated.split(',')[0] < 1980);
   createVenueCard(oldVenues);
    pageTitle.textContent = "Old Venues";
  }
);

newTabLink.addEventListener('click', () => {
  let oldVenues = venues.filter(venue => venue.dedicated.split(',')[0] > 2000);
  createVenueCard(oldVenues);
  pageTitle.textContent = "New Venues";
 }
);

largeTabLink.addEventListener('click', () => {
  let largeVenues = venues.filter(venue => venue.area > 90000);
  createVenueCard(largeVenues);
  pageTitle.textContent = "Large Venues";
 }
);

smallTabLink.addEventListener('click', () => {
  let smallVenues = venues.filter(venue => venue.area < 15000);
  createVenueCard(smallVenues);
  pageTitle.textContent = "Smaller Venues";
  }
);