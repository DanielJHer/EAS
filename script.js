
// function that creates grid 
const container = document.getElementById('container');

createGrid = (y) => {
    for(let i=0; i<y; i++) {
        let row = document.createElement('div');
        row.className= 'row';
        container.appendChild(row);
        
        for(let j=0; j<y; j++) {
            let box =document.createElement('div');
            box.className= 'box';
            row.appendChild(box);

            // changes color of cells when hovering
            box.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
        }
    }
}

// button which prompts for number of rows and columns 
const button = document.getElementById('button');

button.addEventListener('click', function(){
    const promptAnswer = prompt('How many squares per side would you like?') 
    const y = parseInt(promptAnswer);

    if (y == null || y == '') {
        alert('User cancelled prompt');
    } else if(y<0 || y>101) {
        alert('Pick a number between 1-100!')
    }
    createGrid(y);
})
