class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    graft(value){
        let current = this.root;
        if(current === null){
            this.root = new Node(value);
            return this;
        }
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = new Node(value);
                    return this;
                }
                current = current.left;
            } else if(value > current.value){
                if(current.right === null){
                    current.right = new Node(value);
                    return this;
                }
                current = current.right;
            }
        }
    }

    graftNode(preexistingNode){
        let current = this.root;
        if(current === null){
            this.root = preexistingNode;
            return this;
        }
        while(true){
            if(preexistingNode.value === current.value) return undefined;
            if(preexistingNode.value < current.value){
                if(current.left === null){
                    current.left = preexistingNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = preexistingNode;
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
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
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
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }
}