/*
Tournament Winner:

There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round-robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each
competition, one team is designated the home team, while the other team is the
away team. In each competition there's always one winner and one loser; there
are no ties. A team receives 3 points if it wins and 0 points if it loses. The
winner of the tournament is the team that receives the most amount of points.
Given an array of pairs representing the teams that have competed against 
each other and an array containing the results of each competition, write a function 
that returns the winner of the tournament. The input arrays are named competitions and
results respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.
	It’s guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It’s also guaranteed that the tournament will always have at least two teams.
Sample Input: competitions = [ “HTML”, “C#”, “Python”, “Python”, “HTML” ],
results = [ 0, 0, 1]
Sample output: “Python”
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# - 3 points
// Python - 6 points

*/


function tournamentWinner(competitions, results) {
    const points = {};
    let resIndex = 0;
    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        let winTeam = '';

        if (results[resIndex] === 1) {
            winTeam = homeTeam;
        } else {
            winTeam = awayTeam;
        }
        points[winTeam] = (points[winTeam] || null) + 3; // initially it will be null(or 0 ) so we need to check in or statement also
        resIndex++; //increase result array's index
    }
    let max = 0;
    let maxKey = "";

    for (let i in points) {
        if (points[i] > max) {
            max = points[i];
            maxKey = i
        }
    }
    return maxKey;
}

console.log('Winner of the tournament is: ' + tournamentWinner( [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]) + ' team!');






//If there is a draw between teams in tournament
/*
function tournamentWinner(competitions, results) {
    const points = {};
    let resIndex = 0;
    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        let winTeam = '';

        if (results[resIndex] === 1) {
            winTeam = homeTeam;
        } else {
            winTeam = awayTeam;
        }
        // console.log(points[winTeam])
        points[winTeam] = (points[winTeam] || null) + 3; // initially it will be null(or 0 ) so we need to check in or statement also
        resIndex++; //increase result array's index
    }
    let max = 0;
    let maxKey = "";
    let flag = 0;
    
    for (let i in points) {
        if (points[i] === max) {
            flag = 1
            break;
        }
        if (points[i] > max) {
            max = points[i];
            maxKey = i
        }
    }
    if (flag === 1) {
        return maxKey = 'There is a draw between teams!'
    } else {
        return maxKey;
    }
}
console.log(tournamentWinner([ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ], [1, 1, 1]))
*/


