import Character from '../character.js';

export class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status, activeDefense = 0) {
    super(name, hp, dmg, mana, status);
    this.activeDefense = activeDefense;
  }
  details = () => {
    return "The Fighter will have a special Dark Vision attack, dealing 5 damage. Until the next turn, each hit received will deal 2 less damage. It costs 20 mana."
  };
};

//   Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
// Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, chaque coup reçu lui infligera 2 dégâts de moins. Elle coute 20 mana.