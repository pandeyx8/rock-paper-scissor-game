
let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = { wins: 0, losses: 0, ties: 0 };
} else {
  const confirmReset = confirm("Continue with previous score?");
  if (!confirmReset) {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));
  }
}

updatescore();



//for every refresh score becomes 0    //wins:0,
   //losses:0,
   //ties: 0

let isautoplay=false;
let intervalid;

function autoplay(){
  if(!isautoplay){
    intervalid = setInterval(function(){
    const playermove=pickcompmove();

    playgame(playermove);
  },3000);
  isautoplay=true;
  }
  else {
    clearInterval(intervalid);
    isautoplay=false;
  }
}

function playgame(playermove){

   const compmove=pickcompmove();

   let result='';

   if(playermove==='Scissor'){
       if(compmove==='Rock'){
       result='You Lose..';
      }
      else if(compmove==='Paper'){
       result='You Win..!!';
      }
      else if(compmove==='Scissor'){
       result='Tie..'
      }
   }

   else if(playermove==='Paper'){
     if(compmove==='Rock'){
       result='You Win..!!';
       }
       else if(compmove==='Paper'){
       result='Tie..';
       }
       else if(compmove==='Scissor'){
       result='You Lose..'
       }
   }

   else if(playermove==='Rock'){
     if(compmove==='Rock'){
     result='Tie..';
     }
     else if(compmove==='Paper'){
     result='You Lose..';
     }
     else if(compmove==='Scissor'){
     result='You Win..!!'
     }
   }

   if(result==='You Win..!!'){
     score.wins+=1;
   }
   else if(result==='You Lose..'){
     score.losses+=1;
   }
   else if(result==='Tie..'){
     score.ties+=1;
   }

   localStorage.setItem('score',JSON.stringify(score));
   
   updatescore();

   document.querySelector('.js-result').
   innerHTML=result;
   document.querySelector('.js-moves').innerHTML
   =`You
<img src="images/${playermove.toLowerCase()}-emoji.png" class="image-design">
<img src="images/${compmove.toLowerCase()}-emoji.png" class="image-design">
computer`;
   
}

function updatescore(){
   document.querySelector('.js-score').innerHTML=`wins:${score.wins},losses: 
   ${score.losses},Ties:${score.ties}`
}

function pickcompmove() {
 const rand = Math.random();
 let compmove = '';

 if (rand >= 0 && rand < 1 / 3) {
   compmove = 'Rock';
 }
 else if (rand >= 1 / 3 && rand < 2 / 3) {
   compmove = 'Paper';
 }
 else if (rand >= 2 / 3 && rand < 1) {
   compmove = 'Scissor';
 }

 return compmove;
}
