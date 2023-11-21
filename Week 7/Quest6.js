class Player {
    constructor() {
        this.health = 0;
        this.weapon = "";
        this.armor = "";
        this.name = "";
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }

    getHealth() {
        return this.health;
    }

    setWeapon(newWeapon) {
        this.weapon = newWeapon;
    }

    getWeapon() {
        return this.weapon;
    }

    setArmor(newArmor) {
        this.armor = newArmor;
    }

    getArmor() {
        return this.armor;
    }

    setName(newName) {
        this.name = newName;
    }

    getName() {
        return this.name;
    }
}

const dante = new Player();
dante.setHealth(100);
dante.setWeapon("Force Edge");
dante.setArmor("Amulet");
dante.setName("Tony Redgrave");

console.log(dante.getHealth() + "\n" + dante.getWeapon() + "\n"
+ dante.getArmor() + "\n" + dante.getName());