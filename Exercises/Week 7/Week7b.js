class Player {
    constructor(xp, health) {
        this.xp = xp;
        this.health = health;
    }
    setHealth(x) {
        this.health = x;
    }
    getHealth() {
        return this.health;
    }
    setXP(temp) {
        this.xp = temp;
    }
    getXP() {
        return this.xp;
    }
}

const mario = new Player(100, 20);
console.log(mario.getHealth());
console.log(mario.getXP());

mario.setHealth(90);
mario.setXP(30);

console.log(mario.getHealth());
console.log(mario.getXP());