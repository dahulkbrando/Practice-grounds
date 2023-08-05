class Board{
    constructor(x,y,width,height,size=4){
        this.x = x;
        this.y = y;
        this.size = size;
        this.width = width;
        this.height = height;
        this.leftPos = this.x - this.width/2 + this.width/this.size/2;
        this.rightPos = this.x + this.width/2 - this.width/this.size/2;
        this.topPos = this.y - this.height/2 + this.height/this.size/2;
        this.bottomPos = this.y + this.height/2 - this.height/this.size/2;
        this.spaces = this.spaceArray(size);
    }

    spaceArray(n){
        let arr = [];
        for(let i=0;i<n;i++){
            arr.push(new Array(n).fill(new Tile(false)));
        }
        return arr;
    }

    draw(ctx){
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                ctx.fillText(string(this.spaces[i][j].value),lerp(this.leftPos,this.rightPos,j/this.size),lerp(this.topPos,this.bottomPos,i/this.size))
                console.log(this.spaces[i][j]);
            }
        }
    }
}