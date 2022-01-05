import Character from "../character.js";

export class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
        super(name, hp, dmg, mana, status)
    };

    details = () => {
        return "The Assassin will have a special Shadow hit attack allowing him to deal 7 damage and not take damage during the next turn. This attack costs 20 mana."
    }; 

};