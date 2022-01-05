import {
  Fighter
} from './character/fighter.js'
import {
  Paladin
} from './character/paladin.js'
import {
  Monk
} from './character/monk.js'
import {
  Berzerker
} from './character/berzerker.js'
import {
  Assassin
} from './character/assassin.js'
import {
  Francis
} from './character/francis.js'
// import {Turn} from './turn.js'

class Game {
  constructor(turnLeft = 10, gameOver = false, characters = []) {
    this.turnLeft = turnLeft;
    this.gameOver = gameOver;
    this.characters = characters;
  };

  createPlayer() {
    if (prompt('Est-tu prêt pour une partie ? (oui ou non)') === 'oui') {
      switch (prompt('Prenez le character qui plait : (Assassin, Berzerker, Fighter, Francis, Monk, Paladin)').toUpperCase()) {
        case 'ASSASSIN': {
          this.player = new Assassin('Player')
          break;
        }
        case 'BERZERKER': {
          this.player = new Berzerker('Player')
          break;
        }
        case 'FIGHTER': {
          this.player = new Fighter('Player')
          break;
        }
        case 'FRANCIS': {
          this.player = new Francis('Player')
          break;
        }
        case 'MONK': {
          this.player = new Monk('Player')
          break;
        }
        case 'PALADIN': {
          this.player = new Paladin('Player')
          break;
        }
        default:
          alert('Veuillez choisir une classe valide !');
          this.createPlayer()        
      };
    } else {
        console.log("hello world")
    }
  }

  isGameOver = () => {
    if (this.turnLeft === 0 || this.characters.length === 1) {
      console.log("Game is over !")
      this.gameOver = true;
    }
  };

  newTurn() {
    if (this.turnLeft > 0) {
      this.turnLeft -= 1;
      this.isGameOver();
    };
  };

    aTurn = () => {
    console.log(`Tour de jeu n° ${11 - this.turnLeft} / 10`)
    let attackerNamer = window.prompt(`quel joueur veux tu attaquer ? [1] ${this.player().name} `)
    // à remplir  avec askSelection & attack (en gros)
    
    this.newTurn();
  };

  startGame = () => {
    while (this.isgameOver === false) {
      this.newTurn();
    }
    this.endGame();
  };

  endGame = () => { 
  console.log("Fin de partie...!")
    if (this.turnLeft == 0 && characters.length > 1) {
      console.log(`Bravo aux gagnants : ${characters.name}`);
    }
    if (characters.length === 1) {
      console.log(`Bravo au gagnant : ${characters.name}`)
    }
  }

  attack(attack, victim) {
    if (victim.hp > 0 && attack.hp > 0) {
      let resultAttack = victim.hp - attack.dmg
      victim.hp = resultAttack
      console.log(victim.hp)
    }
    if (victim.hp <= 0) {
      victim.status = "men is Dead !"
      console.log(victim.status)
    }
  };
};

const newGame = new Game();
// game.newGame()


const playerCreated = newGame.createPlayer()
// console.log(playerCreated)


// console.log(victim)
//const newTurn = newTurn();
// const ask = newGame.askSelection();
// // console.log(attackerNamer.name)
// // let attackerNamer = window.prompt(`quel joueur veux tu attaquer ? [1] = ${carl.name.toUpperCase()} [2] = ${grace.name.toUpperCase()}`)
// // let victimName = window.prompt(`quel joueur veux tu attaquer ? [1] = ${carl.name.toUpperCase()} [2] = ${grace.name.toUpperCase()}`)
// const newAttack = newGame.attack(grace, victimName)