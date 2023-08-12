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
        // console.log(board.spaces);
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
        let slideX = 0;
        let slideY = 0;
        let done = false;
        switch(direction){
            case "up":
                x = -1;
                break;
            case "left":
                y = -1;
                break;
            case "down":
                x = 1;
                break;
            case "right":
                y = 1;
                break;
        }

        console.log("x: " + x + " y: " + y)

        for(let i=1*(x<0)+(this.size-1)*(x>0); i>=0 && i<this.size;i+=1*(x<=0)-1*(x>0)){
            for(let j=1*(y<0)+(this.size-1)*(y>0); j>=0 && j<this.size;j+=1*(y<=0)-1*(y>0)){
                // console.log("x: " + x + " y: " + y)
                console.log("i: " + i + " j: " + j);
                slideX = 0;
                slideY = 0;

                if(this.spaces[i+x*slideX][j+y*slideY].value!==0 && this.spaces[i+x+x*slideX][j+y+y*slideY].value===0){
                    this.spaces[i+x+x*slideX][j+y+y*slideY] = {...this.spaces[i+x*slideX][j+y*slideY]};
                    this.spaces[i+x*slideX][j+y*slideY] = new Tile(false);

                    console.log("xPos: " + (i+x+x*slideX) + " yPos: " + (j+y+y*slideY));

                    slideX-=x;
                    slideY-=y;
                }
            }
        }
    }

    clearBoard(ctx){
        ctx.clearRect(0,0,this.length,this.length);
    }

}