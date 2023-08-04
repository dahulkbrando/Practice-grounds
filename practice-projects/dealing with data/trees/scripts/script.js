class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(value){
        this.root = null;
    }

    graft(value){
        let current = this.root;
        if(value === current.value) return undefined;
        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = value;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = value;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current){
                current = current.left;
            } else if(value > current){
                current = current.right;
            } else {
                found = true;
            }
        }

        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return undefined;
        let current = this.root;
        while(current){
            if(value < current){
                current = current.left;
            } else if(value > current){
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }
}