class Player {
    constructor () {
        this.name = "";
        this.level = 0;
    }
    setName(temp) {
        this.name = temp;
    }
    getName() {
        return this.name;
    }
    setLevel(tempLev) {
        this.level = tempLev;
    }
    getLevel() {
        return this.level;
    }
}
debugger;
const mario = new Player();
mario.setName("Mario");
mario.setLevel(9);

const luigi = new Player();
luigi.setName("Luigi");
luigi.setLevel(11);

const peach = new Player();
peach.setName("Peach");
peach.setLevel(1)

const objArr = [mario, luigi, peach];
console.log(objArr[1].getName());