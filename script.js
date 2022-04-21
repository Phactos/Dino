const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;

const initialPosition = 50;
const maxPosition = 65;

let currentPosition = initialPosition;   

document.addEventListener('keyup',keyhandler);

function jump(){

    isJumping = true;
  
    let up = true;
    jumping = setInterval(() => {

        if (currentPosition < maxPosition && up === true){
            currentPosition += 1;
            dino.style.bottom = currentPosition + '%';
        }
        else if (currentPosition === maxPosition && up === true) {
            up = false;
        }
        else if (currentPosition > initialPosition && up === false){
                currentPosition -= 1;
                dino.style.bottom = currentPosition + '%';
            
        }

        else if (currentPosition === initialPosition && up === false){
            isJumping = false;
            clearInterval(jumping);
        }

    }, 20); 
    
}

function createCactus(){
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    let cactusPosition = 1000;

    cactus.style.left = cactusPosition + 'px';
    document.body.appendChild(cactus);

    let cactusMoving = setInterval(() => {
        if (cactusPosition < -60){
            document.body.removeChild(cactus);
            clearInterval(cactusMoving);
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && currentPosition < 55){
            clearInterval(cactusMoving);
            document.body.innerHTML = '<h1 class = gameOver>Fim de Jogo</h1>'
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    time = Math.random() * 6000
    setTimeout(createCactus, time);
}

function keyhandler(event){
    if (event.keyCode === 32) {
        if (isJumping === false){
            jump();
        }

    }
}

createCactus()