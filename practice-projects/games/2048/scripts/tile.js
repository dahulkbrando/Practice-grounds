class Tile{
    constructor(value = false){
        if(value){
            let randInit = Math.floor(Math.random()*20);
            if(randInit < 1){
                this.value = 4;
            } else {
                this.value = 2;
            }
        } else {
            this.value = 0;
        }
    }
}