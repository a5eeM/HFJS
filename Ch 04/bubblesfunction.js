var scores = [60, 50, 60, 58, 54, 54,     
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, 
             .25, .29, .27, .22, .31, .25, .25, .33, 
             .21, .25, .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25, .25, .25, 
             .27, .25, .26, .29];

function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;
    
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution # " + i + " score: " + scores[i];
        console.log(output);
        
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

/**
function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100; // much higher than any of the costs, we are finding the lowest
    var index;
    
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
**/

function getMostCostEffectiveSolution(bestSolutions, costs) {
    var cost = 100;
    // Direct
    /**
    var index;
    
    for (var i = 0; i < bestSolutions.length; i++) {
        if (cost > costs[bestSolutions[i]]) {
            index = bestSolutions[i];
            cost = costs[bestSolutions[i]];
        }
    }
    return index;
    **/
    //More easy to follow
    var solutionIndex;
    var lowCostIndex;
    
    for (var i = 0; i < bestSolutions.length; i++) {
        solutionIndex = bestSolutions[i];
        if (cost > costs[solutionIndex]) {
            lowCostIndex = solutionIndex;
            cost = costs[solutionIndex];
        }
    }
    return lowCostIndex;
    
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution(bestSolutions, costs);
console.log("Bubbles solution #" + mostCostEffective + " is the most cost effective");
