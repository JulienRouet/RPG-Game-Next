// import Game from './game.js';

class Turn {
    constructor(maxTurn = 10){
    this.maxTurn = maxTurn
  };
  
  newTurn() {
    this.maxTurn = maxTurn - 1;
      
    if (this.turnLeft >= 0) {
      const newTurn = new Turn();
    };

  };
};

(turnLeft = 10) {
    this.turnLeft = turnLeft
  };

  newTurn() {
    if (this.turnLeft >= 0) {
      this.turnLeft = this.turnLeft - 1;
    };
  };
