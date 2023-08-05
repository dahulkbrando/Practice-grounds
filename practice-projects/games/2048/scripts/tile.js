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
        this.bgColor = this.color(this.value)[0];
        this.txtColor = this.color(this.value)[1];
    }

    color(num){
        let color = []

        // Add unique coloring to each tile
        switch(num){
            case 2:
                color.push("rgba(238, 230, 219, 1)");
                break;
            case 4:
                color.push("rgba(236, 224, 200, 1)");
                break;
            case 8:
                color.push("rgba(239, 178, 124, 1)");
                break;
            case 16:
                color.push("rgba(243, 151, 104, 1)");
                break;
            case 32:
                color.push("rgba(243, 125, 99, 1)");
                break;
            case 64:
                color.push("rgba(244, 96, 66, 1)");
                break;
            case 128:
                color.push("rgba(234, 207, 118, 1)");
                break;
            case 256:
                color.push("rgba(237, 203, 103, 1)");
                break;
            case 512:
                color.push("rgba(236, 200, 90, 1)");
                break;
            case 1024:
                color.push("rgba(231, 194, 87, 1)");
                break;
            case 2048:
                color.push("rgba(232, 190, 78, 1)");
                break;
            default:
                color.push("rgba(203, 194, 179, 1)");
        }

        if(num<=4){
            color.push("black");
        } else {
            color.push("white");
        }

        return color;
    }
}