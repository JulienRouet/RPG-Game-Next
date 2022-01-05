
export default class Character {
    constructor(name, hp, dmg, mana, status = "Alive") {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }

isDead = () => {
    if (this.hp === 0) {
        this.status = "Dead";
        // this.remove from characters  
    }
};

statAfterAttack = (x) => {
    this.hp -= x;
    console.log(`Il reste ${this.hp} points de vie à ${this.name}`)
}

underAttack = (x) => { 
    this.hp -= x;
    console.log(`${this.name} a attaqué ${victim.name} et lui a causé ${this.dmg} dommages!`)
}


}

