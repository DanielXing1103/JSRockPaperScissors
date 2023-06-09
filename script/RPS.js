let score=JSON.parse(localStorage.getItem(`score`))||{
    win: 0,
    loss: 0,
    tie: 0,
}

function updatescore(){
    score=JSON.parse(localStorage.getItem(`score`))||{
        win: 0,
        loss: 0,
        tie: 0,
    }
    document.querySelector('.jsScore')
    .innerHTML =` Win:${score.win} Loss:${score.loss} tie:${score.tie}`
}
function reset(){
    
    localStorage.removeItem(`score`); 
    
    document.querySelector(`.jsResult`)
            .innerHTML = `Result: `
    
    document.querySelector(`.moveDisplay`)
        .innerHTML = `<p class="jsmove">Your move-</p>
        <p class="pad"></p>
        <p class="jsmove">-Computer move</p>`
    
    updatescore();

}


function RPS(playermove){
    const randomnumber = Math.random();

    let computermove ='';
    let result='';


    if(randomnumber<=1/3)
    {
        computermove = 'Rock';
    }
    else if(randomnumber<=2/3){
        computermove = 'Paper';
    }
    else{
        computermove = 'Scissors';
    }
    if(playermove==='Rock'){

        if(computermove==='Rock'){
        
            result= 'Tie';
            score.tie++;

        }
        else if(computermove==='Paper'){
            result='Loss';
            score.loss++;
        }
        else if(computermove === 'Scissors'){
            result='Win';
            score.win++;
        }
        
    }
    else if(playermove==='Paper'){
        if(computermove==='Rock'){
            result= 'Win';
            score.win++;
        }
        else if(computermove==='Paper'){
            result='Tie';
            score.tie++;
        }
        else if(computermove === 'Scissors'){
            result='Loss';
            score.loss++;
        }
        
    }
    else if(playermove==='Scissors'){
        if(computermove==='Rock'){
            result= 'Loss';
            score.loss++
        }
        else if(computermove==='Paper'){
            result='Win';
            score.win++;
        }
        else if(computermove === 'Scissors'){
            result='Tie';
            score.tie++;
        }
    }
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector(`.jsResult`)
        .innerHTML = `Result: ${result}.`
    
    document.querySelector(`.moveDisplay`)
        .innerHTML = `<p class="jsmove">Your move-</p>
    <img src="images/${playermove}-emoji.png" class="moveDisplayIcon">
    <img src="images/${computermove}-emoji.png" class="moveDisplayIcon">
    <p class="jsmove">-Computer move</p>`
    updatescore();

};
updatescore();