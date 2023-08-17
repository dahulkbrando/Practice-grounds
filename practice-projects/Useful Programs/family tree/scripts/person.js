class person {
    constructor(fName, lName, middle=null, gender="unknown", status="unknown", bYear = null, dYear = null){
        this.firstName = fName;
        this.lastName = lName;
        this.midName = middle;
        this.gender = gender;
        this.status = status;
        this.birthYear = bYear;
        this.deathYear = dYear;
        this.mother = null;
        this.father = null;
        this.children = [];
        this.picture = null;
    }

    addRelative(){

    }
}