// //played matches by argentina
// const matches = ({
//     Win: 9, 
//     Draw: 2, 
//     Lose: 1
// });

// var sum = Object.values(matches).reduce((Win, Draw, Lose) => Win + Draw);

// //Conditional probability
// var winCondProb = matches.Win/sum;
// var drawCondProb = (matches.Draw)/sum;
// var loseCondProb = matches.Lose/sum;

// //Binary probability
// var binWin = (winCondProb**9)*((1-winCondProb)**3);
// var binDraw = (drawCondProb**2)*((1-drawCondProb)**10);
// var binLose = (loseCondProb**1)*((1-loseCondProb)**11);

// // var median = ()

// //Derivative of binary probability
// var derivativeProbWin = 77;
// var derivativeProbDraw = 75;
// var derivativeProbLose = 24;

// //Uncertanity risk
// var risksWin = (100 - derivativeProbWin);
// var risksDraw = ( 100 - derivativeProbDraw);
// var risksLose = ( derivativeProbLose);

// var risksOfLose_win = (risksWin + derivativeProbLose);
// var risksOfLose_draw = (risksDraw + derivativeProbLose);

// module.exports = {  
//                     matches, 
//                     winCondProb,
//                     drawCondProb,
//                     loseCondProb,
//                     binWin,
//                     binDraw,
//                     binLose,
//                     derivativeProbWin,
//                     derivativeProbDraw,
//                     derivativeProbLose,
//                     risksWin,
//                     risksDraw,
//                     risksLose,
//                     risksOfLose_win,
//                     risksOfLose_draw  
//                 };