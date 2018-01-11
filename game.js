class Game {
  constructor(ui, oponent = new Person(), you = new Person()) {
    this.rounds = 5;
    this.ui = ui;
    this.you = you;
    this.oponent = oponent;
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
    console.log(strategy);
    switch (strategy) {
      case 'tit-for-tat': {
        this.strategy = this.titForTat;
        break;
      }
      case 'tit-for-two-tats': {
        this.strategy = this.titForTwoTats;
        break;
      }
      default: {
        this.strategy = this.random;
      }
    }
  }

  random() {
    return Math.random() > 0.5 ? 'cheat' : 'trust';
  }

  titForTat(oponentMoves) {
    return oponentMoves.slice(-2)[0] === 'cheat' ? 'cheat' : 'trust'
  }

  titForTwoTats(oponentMoves) {
    let [prev, last] = oponentMoves.slice(-3, -1);
    console.log(prev, last);
    return prev === 'cheat' && last === 'cheat' ?
      'cheat' : 'trust';
  }

  apply(oponentMoves) {
    return this.strategy(oponentMoves)
  }
}


class Person {
  constructor(strategy = new Strategy(), payoff = 0, moves = []) {
    this.payoff = payoff;
    this.moves = moves;
    this.strategy = new Strategy(strategy);
  }

  addMove(move) {
    this.moves.push(move);
  }

  makeMove(oponentMoves) {
    console.log(oponentMoves);
    return this.strategy.apply(oponentMoves);
  }

  setPayoff(payoff) {
    this.payoff = this.payoff + payoff;
    console.log(this.payoff);
  }
}


const you = new Person();
// const oponent = new Person();
// const TitForTat = new Person('tit-for-tat');
const TitForTwoTats = new Person('tit-for-two-tats');
let game;
const UI =  {
  nav:  document.querySelector('.nav'),
  navStart: document.querySelector('#nav-start'),
  navAgain: document.querySelector('#nav-again'),
  btnStart:  document.querySelector('#btn-start'),
  btnCheat:  document.querySelector('#btn-cheat'),
  btnTrust:  document.querySelector('#btn-trust'),
  btnReset:  document.querySelector('#btn-reset'),
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

UI.navAgain.style.display = "none";
UI.btnReset.onclick = () => location.reload();
UI.btnStart.onclick = () => {
  game = new Game(UI, TitForTwoTats);
  game.init()
}
UI.btnCheat.onclick = () => {
  game.makeMove('cheat');
}
UI.btnTrust.onclick = () => {
  game.makeMove('trust')
}


/* nav
1. wybieranie strategii przeciwnika (UI ok)

rozgrywka:
1. wypisanie strategii jaka gra przeciwnik nad nim
OK. opcja resetu gry w trakcie

konczenie gry:
1. wypisanie wyniku gry (UI ok)
2. przycisk zagraj ponownie (UI ok)
*/
