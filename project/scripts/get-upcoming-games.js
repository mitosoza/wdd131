const gamesData = [
  {
    teamAName: "Skyline Raptors",
    teamBName: "Ironcourt Titans",
    location: "America First Arena",
    date: "2025-04-15"
  },
  {
    teamAName: "Frostbite Wolves",
    teamBName: "Thunderdunk Syndicate",
    location: "Zions Bank Arena",
    date: "2025-05-05"
  },
  {
    teamAName: "Metro Vipers",
    teamBName: "Crimson Flyers",
    location: "Weber State University",
    date: "2025-06-20"
  },
  {
    teamAName: "The Alley-Oop Coalition",
    teamBName: "Solar Hawks",
    location: "Salt Lake Community College",
    date: "2025-07-15"
  },
  {
    teamAName: "Rustbelt Reign",
    teamBName: "Shadowhoop Phantoms",
    location: "The Sports Mall",
    date: "2025-08-10"
  }
];

createUpcomingGamesCard(gamesData);

function createUpcomingGamesCard(gamesDataArray) {
  const upcomingGames = document.querySelector('#upcoming-games');

  gamesDataArray.forEach(game => {
    const gameDiv = document.createElement('div');

    const gameTitle = document.createElement('div');
    gameTitle.classList.add('game-title');
    gameTitle.innerHTML = `
      <h4>${game.teamAName}</h4>
      <span id="versus">v/s</span>
      <h4>${game.teamBName}</h4>
    `;
    gameDiv.appendChild(gameTitle);

    const gameLocation = document.createElement('p');
    gameLocation.innerHTML = `<i class="fa fa-location-dot"></i> ${game.location}`;
    gameDiv.appendChild(gameLocation);

    const gameDate = document.createElement('p');
    const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    gameDate.innerHTML = `<i class="fa fa-calendar"></i> ${formattedDate}`;
    gameDiv.appendChild(gameDate);

    upcomingGames.appendChild(gameDiv);

    const divider = document.createElement('hr');
    upcomingGames.appendChild(divider);
  });
}