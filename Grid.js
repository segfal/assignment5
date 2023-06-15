

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
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < colNum; j++) {
                let square = this.createSquare('black');
                document.getElementById('grid').appendChild(square);
                this.grid[i].push(square);
            }
        }
        this.cols += colNum;
    }

    removeRow = (rowNum = 1) => {
        //Remove a row of squares from the grid
        for (let i = 0; i < rowNum; i++) {
            for (let j = 0; j < this.cols; j++) {
                document.getElementById('grid').removeChild(this.grid[this.rows - 1][j]);
            }
            this.grid.pop();
        }
        this.rows -= rowNum;
    }

    removeCol = (colNum = 1) => {
        //Remove a column of squares from the grid
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < colNum; j++) {
                document.getElementById('grid').removeChild(this.grid[i][this.cols - 1]);
                this.grid[i].pop();
            }
        }
        this.cols -= colNum;
    }





}




const grid = new Grid(10,10);
grid.addRow(5);
grid.addCol();
//grid.removeRow(5);
//grid.removeCol(2);
