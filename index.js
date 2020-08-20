import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/

const twentyFourteen = fifaData.filter(item => item.Year === 2014);

const twentyFourteenFinals = twentyFourteen.filter(function(item){
     return item.Stage === "Final" 
      
}); 

console.log(twentyFourteenFinals[0]["Home Team Name"])



//(b) Away Team name for 2014 world cup final




console.log(twentyFourteenFinals[0]["Away Team Name"])




//(c) Home Team goals for 2014 world cup final



console.log(twentyFourteenFinals[0]["Home Team Goals"])



//(d) Away Team goals for 2014 world cup final



console.log(twentyFourteenFinals[0]["Away Team Goals"])



//(e) Winner of 2014 world cup final 


console.log(twentyFourteenFinals[0]["Win conditions"])



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter(item => item.Stage === "Final");

console.log(getFinals)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

const years = callback.map(function(item){
     return item.Year

});
return years
}
console.log(getYears(getFinals));



/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

const winners = [];

callback.forEach(function(item){
    if(item["Home Team Goals"] > item["Away Team Goals"]){
        winners.push(item["Home Team Name"])
    }else if(item["Away Team Goals"] > item["Home Team Goals"]){
        winners.push(item["Away Team Name"])
    }else if(item["Away Team Goals"] === item["Home Team Goals"]){
        winners.push(item["Win conditions"])
    }
})

// for(let i=0; i<callback.length; i++){
//     if(callback[i]["Home Team Goals"] > callback[i]["Away Team Goals"]){
//         winners.push(callback[i]["Home Team Name"])
//     }else if(callback[i]["Away Team Goals"] > callback[i]["Home Team Goals"]){
//         winners.push(callback[i]["Away Team Name"])
//     }else if(callback[i]["Away Team Goals"] === callback[i]["Home Team Goals"]){
//         winners.push(callback[i]["Win conditions"])
//     }
    
//     }
    return winners

}

console.log(getWinners(getFinals));

// const winners = callback.map(function(item){
//     return `${item["Home Team Name"]}: ${item["Home Team Goals"]}, ${item["Away Team Name"]}: ${item["Away Team Goals"]}, ${item["Win conditions"]}`
// });

// const newArray = Object.fromEntries(winners)

//     const homeScore = callback.map(function(item){
//          item["Home Team Goals"]
   
//    });
//    return homeScore

//    const awayScore = callback.map(function(item){
//     return item["Away Team Goals"]

// });
// return awayScore

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

getWinners(cb)[map] => return W

getWinnerByYears (year, country, getWinner)

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbYear, cbWin) {
const headline = [];
for(let i=0; i<cbYear.length; i++){
    headline.push(`In ${cbYear[i]}, ${cbWin[i]} won the World Cup!`)
}
return headline
};

console.log(getWinnersByYear(getYears(getFinals), getWinners(getFinals)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

const goals = data.map(function(item){
    return item["Home Team Goals"] + item["Away Team Goals"]
 });

// const avgGoals = goals.reduce(function(a,b){
//     return a+b;
// },0);
    
const avgGoals = goals.reduce((a,b) => a+b,0);

return avgGoals/data.length
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //
/*function getAverageGoals(data) {

    let goalsHome = data.reduce((acc, currentValue =>
    
    };
    
    getAverageGoals(fifaData);
    
 Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team_initials) {

    const teamMatches = data.filter(item => item["Home Team Initials"] === team_initials && item["Home Team Goals"] > item["Away Team Goals"] || item["Away Team Initials"] === team_initials && item["Away Team Goals"] > item["Home Team Goals"]);
    return teamMatches.length
};

console.log(getCountryWins(fifaData, "USA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
