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
    for (let designation in gameObjectInfo){
       let designationObj = gameObjectInfo[designation]
        for (let details in designationObj){
            if (details === "players"){
                let playerInfoObj = designationObj[details]
                for (let players in playerInfoObj){
                    if(players === playerName){
                        let statsObj = playerInfoObj[players]
                        for (let stats in statsObj){
                            if (stats === "points"){
                                console.log(statsObj[stats])
                            }
                        }
                    }
                }
            }
        }
       
    }
}

numPointsScored('Ben Gordon')

// takes in argument of a player's name and returns the shoe size for that player
function shoeSize(playerName){
    for (let designation in gameObjectInfo){
       let designationObj = gameObjectInfo[designation]
        for (let details in designationObj){
            if (details === "players"){
                let playerInfoObj = designationObj[details]
                for (let players in playerInfoObj){
                    if(players === playerName){
                        let statsObj = playerInfoObj[players]
                        for (let stats in statsObj){
                            if (stats === "shoe"){
                                console.log(statsObj[stats])
                            }
                        }
                    }
                }
            }
        }
       
    }
}

shoeSize('Ben Gordon')

// takes in argument of the team name and returns an array of that teams colors
function teamColors(teamName){
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
             if (designationObj[details] === teamName){
                console.log(designationObj["colors"])
             }
        }
    }
}

teamColors('Brooklyn Nets')

// operates on the game object to return an array of the team names
function teamNames(){
    let teams =[]
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
        for (let details in designationObj){
            if (details === "teamName")
            teams.push(designationObj[details])
        }
    }
    console.log(teams)
}

teamNames()

// takes in argument of a team name and returns an array of the jersey number's for that team
function playerNumbers(teamName){
    let jerseyNumbers = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (designationObj[details] === teamName){
                let playerInfoObj = designationObj['players']
                for (let players in playerInfoObj){
                    let statsObj = playerInfoObj[players]
                    for (let stats in statsObj){
                        if (stats === 'number'){
                            jerseyNumbers.push(statsObj[stats])
                        }
                    } 
                }
            }
        }
    }
    console.log(jerseyNumbers)
}

playerNumbers('Brooklyn Nets')

// takes in argument of a player's name and returns a object of that player's stats
function playerStats(playerName){
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
        for (let details in designationObj){
            if (details === "players"){
                let playerInfoObj = designationObj[details]
                for (let players in playerInfoObj){
                    if (players === playerName){
                        console.log(playerInfoObj[players])
                    }
                }
                    
            }
        }
    }
}

playerStats('Alan Anderson')

// returns the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds(){
    let shoeSizes = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'shoe'){
                            shoeSizes.push(statsObj[stats])
                        }
                    }
                }
            
            }
        }
    }
    let shoeMax = Math.max.apply(Math, shoeSizes)
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'shoe' && statsObj[stats] === shoeMax){
                            console.log(`${players} - Shoe Size: ${statsObj[stats]}, Rebounds: ${statsObj['rebounds']}`)
                        }
                    }
                } 
            }
        }
    }               
}

bigShoeRebounds()

// returns player with the most points
function mostPointsScored(){
    let pointsScored = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'points'){
                            pointsScored.push(statsObj[stats])
                        }
                    }
                }
            
            }
        }
    } 
    let maxPoints = Math.max.apply(Math, pointsScored)
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'points' && statsObj[stats] === maxPoints){
                            console.log(`${players} - Points: ${statsObj[stats]}`)
                        }
                    }
                } 
            }
        }
    }            
}

mostPointsScored()

// returns team with the most posts
function winningTeam(){
    let teamPoints = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'points'){
                            let obj = {}
                            obj[designationObj['teamName']] = statsObj[stats]
                            teamPoints.push(obj)
                        }
                    }
                }
            
            }
        }
    }  
    let netsScore = []
    let hornetsScore = []
    for (let points in teamPoints){
        let pointsObj = teamPoints[points]
        for (let team in pointsObj){
            if (team === 'Brooklyn Nets'){
                netsScore.push(pointsObj[team])
            } else {
                hornetsScore.push(pointsObj[team])
            }
        }
    }
    let sumNets = 0
    let sumHornets = 0
    for (let i = 0; i < netsScore.length; i++){
        sumNets += netsScore[i]
    }
    for (let i = 0; i < hornetsScore.length; i++){
        sumHornets += hornetsScore[i]
    }
    sumNets > sumHornets ? console.log(`Winning Team: Nets with ${sumNets} points!`) : console.log(`Winning Team: Hornets with ${sumHornets} points!`) 
}

winningTeam()


// returns player with the longest name
function playerWithLongestName(){
    let characterCount = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    characterCount.push(players.length)
                }
            }
        }
    }
    let longestName = Math.max.apply(Math, characterCount)
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    if (players.length === longestName){
                        console.log(`${players} has the longest name!`)
                        return players
                    }
                } 
            }
        }
    }                  
}

playerWithLongestName()

// returns true if the player with the longest name had the most steals.
function doesLongNameStealATon(){
    let allSteals = []
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'steals'){
                            allSteals.push(statsObj[stats])
                        }
                    }
                }
            }
        }
                    
    }
    let maxSteals = Math.max.apply(Math, allSteals)
    for (let designation in gameObjectInfo){
        let designationObj = gameObjectInfo[designation]
         for (let details in designationObj){
            if (details === 'players'){
                let playerObj = designationObj[details]
                for (let players in playerObj){
                    let statsObj = playerObj[players]
                    for (stats in statsObj){
                        if (stats === 'steals' && statsObj[stats] === maxSteals && players === playerWithLongestName()){
                            console.log(`${players} has the longest name and the most steals with ${maxSteals}!`)
                            return true
                        } 
                    }
                } 
            }
        }
    }               
}

doesLongNameStealATon()
