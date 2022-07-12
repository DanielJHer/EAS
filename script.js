// function that hovers over
// dom for each div

// creates grid 
const div = document.createElement('div')
document.getElementById('main').appendChild(div);

function createGrid(x) {
    for(let i=0; i > x; i++) {
        document.getElementById('main').appendChild(div);
    }
}

// accepts number of rows and columns 
createGrid();
