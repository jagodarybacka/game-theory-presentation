class Game {
  constructor(ui, player1 = new Person(), player2 = new Person()) {
    this.rounds = 5;
    this.ui = ui;
    this.you = player1;
    this.oponent = player2;
    this.payoffs = {
      r: [2, 2, "r"],
      s: [-1, 3, "s"],
      t: [3, -1, "t"],
      p: [0, 0, "p"]
    }
  }

  makeMove(move) {
    this.you.addMove(move)
    const oponentMove = this.oponent.makeMove(this.you.moves)
    const payoffs = this.calculatePayoffs(move, oponentMove)

    this.you.setPayoff(payoffs[0]);
    this.oponent.setPayoff(payoffs[1]);

    this.setPayoff(this.ui.you.payoff, this.you.payoff)
    this.setPayoff(this.ui.oponent.payoff, this.oponent.payoff)

    this.setUI(payoffs);
    this.addMove(this.ui.you.moves, move)
    this.addMove(this.ui.oponent.moves, oponentMove)
  }

  addMove(movesUI, move) {
    const icon = document.createElement('canvas')
    icon.className = move === 'cheat' ? 'icon icon--hate' : 'icon icon--love';
    movesUI.appendChild(icon);
  }

  calculatePayoffs(move, oponentMove) {
    let payoffs;
    if (move === "cheat" && oponentMove === "cheat") {
      payoffs = this.payoffs.p;
    }
    if (move === "cheat" && oponentMove === "trust") {
      payoffs = this.payoffs.t;
    }
    if (move === "trust" && oponentMove === "cheat") {
      payoffs = this.payoffs.s;
    }
    if (move === "trust" && oponentMove === "trust") {
      payoffs = this.payoffs.r;
    }
    return payoffs;
  }

  setPayoff(payoffUI, payoff) {
    payoffUI.innerHTML = payoff;
  }

  setUI(payoffs) {
    const result = payoffs.slice(-1);
    this.ui.payoffsBoard.className = `game__payoffs payoffs--${result}`
    this.ui.you.img.className = `game__player you you--${result}`;
    this.ui.oponent.img.className = `game__player oponent oponent--${result}`;
  }

  removeAllMoves() {
    while(this.ui.you.moves.firstChild) {
      this.ui.you.moves.removeChild(this.ui.you.moves.firstChild);
    }
    while(this.ui.oponent.moves.firstChild) {
      this.ui.oponent.moves.removeChild(this.ui.oponent.moves.firstChild);
    }
  }

  init() {
    this.ui.nav.className = 'nav nav--hidden';
    this.ui.you.payoff.innerHTML = this.you.payoff;
    this.ui.oponent.payoff.innerHTML = this.oponent.payoff;
    this.removeAllMoves()
  }


}
class Strategy {
  constructor(strategy = 'random') {
    this.strategy = this.random;
  }

  random() {
    return Math.random() > 0.5 ? 'cheat' : 'trust';
  }

  apply(oponentMoves) {
    return this.strategy(oponentMoves)
  }
}


class Person {
  constructor(options = {}) {
    this.payoff = options.payoff || 0;
    this.moves = options.moves || [];
    this.strategy = options.strategy || new Strategy();
  }

  addMove(move) {
    this.moves.push(move);
  }

  makeMove(oponentMoves) {
    return this.strategy.apply(oponentMoves);
  }

  setPayoff(payoff) {
    this.payoff = this.payoff + payoff;
    console.log(this.payoff);
  }
}


let you = new Person();
let oponent = new Person();
let game;
const UI =  {
  nav:  document.querySelector('.nav'),
  btnStart:  document.querySelector('#btn-start'),
  btnCheat:  document.querySelector('#btn-cheat'),
  btnTrust:  document.querySelector('#btn-trust'),
  payoffsBoard:  document.querySelector('.game__payoffs'),
  you: {
    payoff:  document.querySelector('.payoffs__you'),
    moves:  document.querySelector('.moves__board--you'),
    img:  document.querySelector('.you'),
  },
  oponent: {
    payoff:  document.querySelector('.payoffs__oponent'),
    moves:  document.querySelector('.moves__board--oponent'),
    img:  document.querySelector('.oponent'),
  }
}

UI.btnStart.onclick = () => {
  game = new Game(UI);
  // nav.className = 'nav nav--hidden'
  game.init()
}
UI.btnCheat.onclick = () => {
  game.makeMove('cheat');
}
UI.btnTrust.onclick = () => {
  game.makeMove('trust')
}


// najpierw robimy podstawowa gre człowiek-człowiek
