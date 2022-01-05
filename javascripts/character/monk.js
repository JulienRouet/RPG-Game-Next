import Character from '../character.js';

export class Monk extends Character {
    constructor(name = "Moana", hp = 12, dmg = 4, mana = 40, status) {
        super(name, hp, dmg, mana, status)
    };


    details = () => {
        return "The Monk, when he has him, will have a special heal attack returning 8 HP. It costs 25 mana."
    };

};