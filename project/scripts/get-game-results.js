const resultsData = [
  {
    teamAName: "Jetstream Cobras",
    teamBName: "Ironclad Kings",
    location: "VoltEdge Arena",
    date: "2024-09-05",
    teamAScore: 91,
    teamBScore: 102
  },
  {
    teamAName: "Midnight Cyclones",
    teamBName: "Echo City Spartans",
    location: "The Crucible Dome",
    date: "2024-10-20",
    teamAScore: 82,
    teamBScore: 92
  },
  {
    teamAName: "Turbo Lynx",
    teamBName: "Graveyard Shift",
    location: "Skyvault Pavilion",
    date: "2024-11-15",
    teamAScore: 90,
    teamBScore: 101
  },
  {
    teamAName: "Phantom Breakers",
    teamBName: "Redline Howlers",
    location: "Ironspire Coliseum",
    date: "2024-12-10",
    teamAScore: 111,
    teamBScore: 94
  },
  {
    teamAName: "Voltage Stallions",
    teamBName: "Blacktop Nomads",
    location: "EchoCore Arena",
    date: "2024-12-20",
    teamAScore: 92,
    teamBScore: 72
  },
  {
    teamAName: "Skyforge Serpents",
    teamBName: "Omega Ballers",
    location: "Stormline Center",
    date: "2025-01-05",
    teamAScore: 93,
    teamBScore: 82
  }
];

createGameResultsCard(resultsData);

function createGameResultsCard(resultsDataArray) {
  const gameResults = document.querySelector('#game-results');

  resultsDataArray.forEach(game => {
    const resultsDiv = document.createElement('div');

    const resultsTitle = document.createElement('div');
    resultsTitle.classList.add('result-title');
    resultsTitle.innerHTML = `
      <h4>${game.teamAName}</h4>
      <span id="score">${game.teamAScore} - ${game.teamBScore}</span>
      <h4>${game.teamBName}</h4>
    `;
    resultsDiv.appendChild(resultsTitle);

    const gameLocation = document.createElement('p');
    const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    gameLocation.innerHTML = `
    <i class="fa fa-location-dot"></i>
    ${game.location} / ${formattedDate}
    `;
    resultsDiv.appendChild(gameLocation);
    gameResults.appendChild(resultsDiv);

    const divider = document.createElement('hr');
    gameResults.appendChild(divider);
  });
}