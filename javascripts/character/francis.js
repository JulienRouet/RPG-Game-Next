import Character from '../character.js';

export class Francis extends Character {
    constructor(name, hp = 120, dmg = 160, mana = 420, status) {
        super(name, hp, dmg, mana, status)
    };

    details = () => {
        return "There are stab wounds that get lost."
    };

};