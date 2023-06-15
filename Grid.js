

class Grid {
    constructor(rows = 1, cols = 1) {
        this.rows = rows;
        this.cols = cols;
        this.squareSize = 20;
        this.grid = [];
        this.createGrid();

    }

    createGrid() {
        const container = document.getElementById('grid');
        //create grid onto the screen with black squares
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.cols; j++) {
                let square = this.createSquare('black');
                container.appendChild(square);
                row.push(square);
            }
            container.appendChild(document.createElement('br'));
            this.grid.push(row);
        }

    }

    createSquare = (color) => {
        let square = document.createElement('div');
        square.style.backgroundColor = color;
        square.style.width = '10px';
        square.style.height = '10px';
        square.style.border = 'solid 1px black';
        square.style.padding = '2px';
        square.style.display = 'inline-block';
        //background color
        square.style.backgroundColor = 'white';
        return square;
    } 
    removeGrid = () => {
        //remove grid from screen
        const container = document.getElementById('grid');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        this.grid = [];
    }


    addRow = (rowNum = 1) => {
        //Add a row of squares to the grid
        for (let i = 0; i < rowNum; i++) {
            let row = [];
            for (let j = 0; j < this.cols; j++) {
                let square = this.createSquare('black');
                document.getElementById('grid').appendChild(square);
                row.push(square);
            }
            document.getElementById('grid').appendChild(document.createElement('br'));
            this.grid.push(row);
        }
        this.rows += rowNum;

    }

    addCol = (colNum = 1) => {
        //Add a column of squares to the grid
        ///Erase grid and recreate it with new column
        this.removeGrid();
        this.cols += colNum;
        this.createGrid();


    }

    removeRow = (rowNum = 1) => {
        //Remove a row of squares from the grid
        this.removeGrid();
        this.rows -= rowNum;
        this.createGrid();

    }

    removeCol = (colNum = 1) => {
        //Remove a column of squares from the grid
        this.removeGrid();
        this.cols -= colNum;
        this.createGrid();

    }





}




const grid = new Grid(10,10);
grid.addRow(5);
grid.addCol(5);
grid.removeRow(10);
grid.removeCol(15);

//grid.removeRow(5);
//grid.removeCol(2);
