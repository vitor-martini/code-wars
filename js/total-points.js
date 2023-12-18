//https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let total = 0;
    games.forEach(game => {
        let score = game.split(':');
        if(score[0] > score[1])
            total += 3;
        else if(score[0] == score[1])
            total += 1;
    });

    return total;
}

let gamesTest = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
console.log(points(gamesTest));
