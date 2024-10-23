// Challenge 1: Photo Selection
function correctChoice() {
    
    document.getElementById('photo-challenge').style.display = 'none';
    document.getElementById('ofcourse').style.display = 'block';
}
function clickOnMe() {
   
    document.getElementById('image-challenge').style.display = 'block';
    document.getElementById('ofcourse').style.display = 'none';
}


// Challenge 2: Correct or wrong image choice
function correctImageChoice() {

    document.getElementById('image-challenge').style.display = 'none';
    document.getElementById('next-challenge').style.display = 'block';
    document.getElementById('hidden-cake').style.display = 'inline';
}

// Challenge 3: Reveal final message
function showFinalMessage() {
    document.getElementById('next-challenge').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}
