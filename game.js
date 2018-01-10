class Game {
  constructor(ui, player1 = new Person(), player2 = new Person()) {
    this.rounds = 5;
    this.ui = ui;
    this.you = player1;
    this.oponent = player2;
  }

  addMove(movesBoard, love) {
    const icon = document.createElement("canvas")
    icon.className = love ? "icon icon--love" : "icon icon--hate";
    movesBoard.appendChild(icon);
  }
  removeAllMoves() {
    while(this.ui.movesYou.firstChild) {
      this.ui.movesYou.removeChild(this.ui.movesYou.firstChild);
    }
    while(this.ui.movesOponent.firstChild) {
      this.ui.movesOponent.removeChild(this.ui.movesOponent.firstChild);
    }
  }

  init() {
    this.ui.nav.className = "nav nav--hidden";
    this.ui.payoffsYou.innerHTML = this.you.payoff;
    this.ui.payoffsOponent.innerHTML = this.oponent.payoff;
    this.removeAllMoves()
  }
}
class Strategy {
  constructor() {

  }
}
class Person {
  constructor(options = {}) {
    this.payoff = options.payoff || 0;
    this.moves = options.moves || [];
    this.strategy = options.strategy || new Strategy();
  }
}


let you = new Person();
let oponent = new Person();
let game;
const UI =  {
  btnStart:  document.querySelector("#btn-start"),
  nav:  document.querySelector('.nav'),
  payoffsYou:  document.querySelector('.payoffs__you'),
  payoffsOponent:  document.querySelector('.payoffs__oponent'),
  movesYou:  document.querySelector('.moves__board--you'),
  movesOponent:  document.querySelector('.moves__board--oponent'),
  imgYou:  document.querySelector('.you'),
  imgOponent:  document.querySelector('.oponent'),
  payoffsBoard:  document.querySelector('.game__payoffs')
}

UI.btnStart.onclick = () => {
  game = new Game(UI);
  // nav.className = "nav nav--hidden"
  game.init()
}

// najpierw robimy podstawowa gre człowiek-człowiek
