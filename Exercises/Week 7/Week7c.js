class Warrior {
    constructor() {
        this.health = 0;
        this.damage = 0;
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setDamage(newDamage) {
        this.damage = newDamage;
    }
    getDamage() {
        return this.damage;
    }
}

const leviathan = new Warrior();
leviathan.setDamage(10);
leviathan.setHealth(100);
console.log("Leviathan's Stats:\n" + leviathan.getDamage()
+ "\n" + leviathan.getHealth());

const behemoth = new Warrior();
behemoth.setDamage(15);
behemoth.setHealth(90);
console.log("Behemoth's Stats:\n" + behemoth.getDamage()
+ "\n" + behemoth.getHealth());

const thanos = new Warrior();
thanos.setDamage(99);
thanos.setHealth(100);
console.log("Thanos's Stats:\n" + thanos.getDamage()
+ "\n" + thanos.getHealth());