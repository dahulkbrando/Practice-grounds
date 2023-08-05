class Board{
    constructor(x,y,length,size=4){
        this.x = x;
        this.y = y;
        this.length = length;
        this.size = size;
        this.margin = 5;
        this.fontSize = 30;

        this.squareSize = this.length/this.size;
        this.leftEdge = this.x - this.length/2;
        this.rightEdge = this.x + this.length/2;
        this.topEdge = this.y - this.length/2;
        this.bottomEdge = this.y + this.length/2;
        this.spaces = this.spaceArray(size);
    }

    // Creates the grid for the board and fills it with tiles
    spaceArray(n){
        let arr = [];
        for(let i=0;i<n;i++){
            arr.push(new Array(n).fill(new Tile(false)));
        }
        return arr;
    }

    // Determine the positioning of each space on the grid and draw each tile
    draw(ctx){
        ctx.clearRect(0,0,this.length,this.length);
        let xPos;
        let yPos;
        
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                xPos = this.leftEdge + this.squareSize/2 + j*this.squareSize;
                yPos = this.topEdge + this.squareSize/2 + i*this.squareSize + this.fontSize/3;
                
                ctx.fillStyle = this.spaces[i][j].bgColor;
                ctx.fillRect(
                    this.leftEdge + this.margin + j*this.squareSize,
                    this.topEdge + this.margin + i*this.squareSize,
                    this.squareSize - 2*this.margin,
                    this.squareSize - 2*this.margin
                )

                if(this.spaces[i][j].value > 0){
                    ctx.font = this.fontSize + "px Arial";
                    ctx.fillStyle = this.spaces[i][j].txtColor;
                    ctx.textAlign = "center";
                    ctx.fillText(this.spaces[i][j].value.toString(),xPos,yPos)
                }
            }
        }
    }

    update(){
        // Only select open spaces
        let openSpace = [];
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                if(this.spaces[i][j].value===0){
                    // Add open space to array while preserving the location in the spaces array
                    openSpace.push([this.spaces[i][j],[i,j]]);
                }
            }
        }

        // Insert new tile into open space
        if(openSpace.length > 0){
            let randSpace = Math.floor(Math.random()*openSpace.length);
            this.spaces[openSpace[randSpace][1][0]][openSpace[randSpace][1][1]] = new Tile(true);
        } else {
            console.log("Game Over");
        }
    }

    shiftTiles(direction){
        let x = 0;
        let y = 0;
        let done = false;
        switch(direction){
            case "up":
                y = -1;
                break;
            case "left":
                x = -1;
                break;
            case "down":
                y = 1;
                break;
            case "right":
                x = 1;
                break;
        }

        /*
            Calculated what equation would allow i to be 0 when x is 0, increment from 1 when x = -1, or decrement from a variable when x = 1 using the following logic:

            the line, i = (S - 1)x/2 + (S-1)/2 + 1, is evaluated at 1 when x = -1 and S when x = 1, where S = size
            this can be multiplied by the equation x^2 which is 1 when x = -1 and x = 1, and is 0 when x = 0.
            The end result is the following equation where i(-1) = 1, i(0) = 0, and i(1) = S:

            i(x) = (S - 1)(x^3)/2 + (S + 1)(x^2)/2

            1 is subtracted from S everywhere to account for proper indexing.
            i is decremented by x in order to move in the proper direction.
            The same equation applies for j(y) and y.
        */

        for(let i=((this.size-2)*(x^3)+(this.size)*(x^2))/2; i>=0 && i<this.size;i-=x){
            for(let j=(((this.size-2)*(y^3)+(this.size)*(y^2))/2); j>=0 && j<this.size;j-=y){
                console.log("position x: " + i + " y: " + j);
                if(this.spaces[i+x][j+y].value==0){
                    this.spaces[i+x][j+y] = this.spaces[i][j];
                    this.spaces[i][j] = new Tile(false);
                }
                if(i > 10){
                    return;
                } else if(i<-10){
                    return;
                } else if(j > 10){
                    return;
                } else if(j<-10){
                    return;
                }
            }
        }
    }
}