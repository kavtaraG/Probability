//played matches by argentina
const matches = ({
    Win: 9, 
    Draw: 2, 
    Lose: 1
});

let sum = Object.values(matches).reduce((Win, Draw, Lose) => Win + Draw);

//Conditional probability
let winCondProb = matches.Win/sum;
let drawCondProb = (matches.Draw)/sum;
let loseCondProb = matches.Lose/sum;

//Binary probability
let binWin = (winCondProb**9)*((1-winCondProb)**3);
let binDraw = (drawCondProb**2)*((1-drawCondProb)**10);
let binLose = (loseCondProb**1)*((1-loseCondProb)**11);

// let median = ()

//Derivative of binary probability
let derivativeProbWin = 77;
let derivativeProbDraw = 75;
let derivativeProbLose = 24;

//Uncertanity risk
let risksWin = (100 - derivativeProbWin);
let risksDraw = ( 100 - derivativeProbDraw);
let risksLose = ( derivativeProbLose);

let risksOfLose_win = (risksWin + derivativeProbLose);
let risksOfLose_draw = (risksDraw + derivativeProbLose);

// let doc = document.getElementById('#win').addEventListener('load', calc)

const calc = () => {
    // let num1 = derivativeProbWin;
    // document.getElementById('#win').value = num1;
    // document.getElementById('win').innerHTML = num1;
    console.log("test")
}




module.exports = {  
                    matches, 
                    winCondProb,
                    drawCondProb,
                    loseCondProb,
                    binWin,
                    binDraw,
                    binLose,
                    derivativeProbWin,
                    derivativeProbDraw,
                    derivativeProbLose,
                    risksWin,
                    risksDraw,
                    risksLose,
                    risksOfLose_win,
                    risksOfLose_draw  
                };