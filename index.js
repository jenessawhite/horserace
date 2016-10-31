console.log("howdy");

var track = {
    race1: [
        'PEHD',
        'Iron Lung',
        'Land Biscuit',
        'Dry Erase',
        'Prancy',
        'Dog'
    ],
    race2: [
        'Trick or Treats in Canada',
        'I am not my mane',
        'Synonym Rolls',
        'Tonald Drump',
        'Border Radius',
        'Last One'
    ],
    race3: [
        'Glue',
        'Violin Bow',
        'Longface',
        'You\'re a wizard Harry',
        'Donkey and Shrek 2',
        'The Finale'
    ]
};

var track2 = [
    [
        'PEHD',
        'Iron Lung',
        'Land Biscuit',
        'Dry Erase',
        'Prancy',
        'Dog'
    ],
    [
        'Trick or Treats in Canada',
        'I am not my mane',
        'Synonym Rolls',
        'Tonald Drump',
        'Border Radius',
        'Last One'
    ],
    [
        'Glue',
        'Violin Bow',
        'Longface',
        'You\'re a wizard Harry',
        'Donkey and Shrek 2',
        'The Finale'
    ]
];
//This function will pick top 3 horses in given race
function topHorses(race) {
    //This prevents loop from running if conditions are not met
    if (typeof race === 'undefined' || race.length < 3) {
        return [];
    }
    //This array will hold winning horses
    var winners = [];
    //This copies our race horses into a new array called contenders
    var contenders = race;
    //Starts loop that will run until 3 winners are picked
    while (winners.length < 3) {
        //Chooses a winner at random
        var winningPosition = Math.floor(Math.random() * contenders.length);
        //Adds chosen horse to winners array
        winners.push(contenders[winningPosition]);
        //Loops over all contenders
        contenders = contenders.filter(function(contender, i) {
            //This removes winning horse from contenders pool
            if (winningPosition === i) {
                return false;
            } else {
                return true;
            }
        });
    }

    console.log(winners);

    return winners;
}

console.assert(topHorses(track.race1).length === 3);
console.assert(topHorses(track.race2).length === 3);
console.assert(topHorses(track.race3).length === 3);

console.assert(topHorses(track2[0]).length === 3);
console.assert(topHorses(track2[1]).length === 3);
console.assert(topHorses(track2[2]).length === 3);
