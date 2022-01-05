import Character from '../character.js';

export class Paladin extends Character {
    constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status) {
        super(name, hp, dmg, mana, status)
    };
};
// Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
// Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.