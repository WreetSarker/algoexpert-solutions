const HOME_TEAM_WON = 1

// O(n) time | O(k) space
function tournamentWinner(competitions, results) {
    let currentBestTeam = "";
    const scores = {};
    scores[currentBestTeam] = 0;

    for (let i = 0; i < competitions.length; i++) {
        let competition = competitions[i];
        let result = results[i];

        let [homeTeam, awayTeam] = competition;

        let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;

        }
    }
    return currentBestTeam;
}

function updateScores(team, points, scores) {
    if (!scores[team]) {
        scores[team] = 0;
    }
    scores[team] += points;
}

console.log(tournamentWinner(
    [['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']], [0, 0, 1]));