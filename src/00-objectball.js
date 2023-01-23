function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black","white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["turquoise","purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            },
        },
    }
}

gameObjectInfo = gameObject()


// takes in argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName){
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if(player === playerName){
                    return gameObjectInfo[team]["players"][playerName]["points"]  
                }
            }
        }
       
    }
}

console.log(numPointsScored('Ben Gordon'))

// takes in argument of a player's name and returns the shoe size for that player
function shoeSize(playerName){
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (player === playerName){
                    return gameObjectInfo[team]["players"][playerName]["shoe"]
                }
            }
        }
    }
}

console.log(shoeSize('Ben Gordon'))

// takes in argument of the team name and returns an array of that teams colors
function teamColors(teamName){
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["teamName"] === teamName){
            return gameObjectInfo[team]["colors"]
        }
    }
}

console.log(teamColors('Brooklyn Nets'))

// operates on the game object to return an array of the team names
function teamNames(){
    let teams =[]
    for (let team in gameObjectInfo){
            teams.push(gameObjectInfo[team]["teamName"])
        }
    return teams
}
   
console.log(teamNames())

// takes in argument of a team name and returns an array of the jersey number's for that team
function playerNumbers(teamName){
    let jerseyNumbers = []
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["teamName"] === teamName){
            for (let player in gameObjectInfo[team]["players"]){
                jerseyNumbers.push(gameObjectInfo[team]["players"][player]["number"])
            }
        }
    }
    return jerseyNumbers
}

console.log(playerNumbers('Brooklyn Nets'))

// takes in argument of a player's name and returns an object of that player's stats
function playerStats(playerName){
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (player === playerName){
                    return gameObjectInfo[team]["players"][playerName]
                }
                    
            }
        }
    }
}

console.log(playerStats('Alan Anderson'))

// returns the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds(){
    let shoeSize = 0
    let rebounds = 0
    let playerName
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (gameObjectInfo[team]["players"][player]["shoe"] > shoeSize){
                    shoeSize = gameObjectInfo[team]["players"][player]["shoe"] 
                    rebounds = gameObjectInfo[team]["players"][player]["rebounds"]
                    playerName = player
                }

            }
        }
    }
    return `${playerName}: Shoe Size = ${shoeSize}, # of Rebounds: ${rebounds}`
}

console.log(bigShoeRebounds())

// returns player with the most points
function mostPointsScored(){
    let pointsScored = 0
    let playerWithMostPoints
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (gameObjectInfo[team]["players"][player]["points"] > pointsScored){
                    pointsScored = gameObjectInfo[team]["players"][player]["points"]
                    playerWithMostPoints = player
                }
            }
        }
    }
    return playerWithMostPoints           
}

console.log(mostPointsScored())

// returns team with the most points
function winningTeam(){
    let netsPoints = 0
    let hornetsPoints = 0
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (gameObjectInfo[team]["teamName"] === "Brooklyn Nets"){
                    netsPoints += gameObjectInfo[team]["players"][player]["points"]
                } else {
                    hornetsPoints += gameObjectInfo[team]["players"][player]["points"]
                }
            }
        }
    }
    return (netsPoints > hornetsPoints ? `Brooklyn nets with ${netsPoints} points!` : `Charlet Hornets with ${hornetsPoints} points!`) 
}

console.log(winningTeam())


// returns player with the longest name
function playerWithLongestName(){
    let characterCount = 0
    let longestName
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (player.length > characterCount){
                    characterCount = player.length
                    longestName = player
                }
            }
        }
    }
    return longestName
}

console.log(playerWithLongestName())

// returns true if the player with the longest name had the most steals.
function doesLongNameStealATon(){
    let steals = 0
    let playerWithMostSteals
    for (let team in gameObjectInfo){
        if (gameObjectInfo[team]["players"]){
            for (let player in gameObjectInfo[team]["players"]){
                if (gameObjectInfo[team]["players"][player]["steals"] > steals){
                    steals = gameObjectInfo[team]["players"][player]["steals"]
                    playerWithMostSteals = player
                }

            }
        }
    }
    return (playerWithLongestName = playerWithMostSteals ? true : false)
}

console.log(doesLongNameStealATon())
