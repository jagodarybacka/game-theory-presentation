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
    this.length = Math.floor(Math.random() * (10 - 5)) + 5;
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

    if (this.length > 0) {
      --this.length;
    } else {
      this.summary()
    }
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

  summary() {
    let resultYou = this.you.payoff;
    let resultOponent = this.oponent.payoff;
    let start = this.ui.navStart.className
    let again = this.ui.navAgain.className.split(" ").slice(0, -1).join(' ');

    this.ui.nav.className = 'nav';
    this.ui.navStart.className = start + " hide";
    this.ui.navAgain.className = again;
    this.ui.resultPayoff.innerHTML = `${resultYou} : ${resultOponent}`;
    this.ui.result.innerHTML = resultYou > resultOponent ?
      "Wygrana" :
      (
      resultYou < resultOponent ?
      'Przegrana':
      'Remis'
      )
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
    switch (strategy) {
      case 'tit-for-tat': {
        this.strategy = this.titForTat;
        this.name = "Wet za wet";
        break;
      }
      case 'tit-for-two-tats': {
        this.strategy = this.titForTwoTats;
        this.name = "Wet za dwa wety";
        break;
      }
      default: {
        this.strategy = this.random;
        this.name = "Strategia losowa"
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
    return this.strategy.apply(oponentMoves);
  }

  setPayoff(payoff) {
    this.payoff = this.payoff + payoff;
  }

  strategyName() {
    return this.strategy.name;
  }
}


const you = new Person();
// const oponent = new Person();
// const TitForTat = new Person('tit-for-tat');
const TitForTwoTats = new Person('tit-for-two-tats');
let game;
let selectedStrategy = 'default';
const UI =  {
  nav:  document.querySelector('.nav'),
  navStart: document.querySelector('#nav-start'),
  navAgain: document.querySelector('#nav-again'),
  selectStrategy: document.querySelector('#select-strategy'),
  oponentStrategy: document.querySelector('#oponent-strategy'),
  result: document.querySelector('#again-result'),
  resultPayoff: document.querySelector('#again-payoff'),
  btnStart:  document.querySelector('#btn-start'),
  btnAgain:  document.querySelector('#btn-again'),
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

UI.selectStrategy.onchange = (e) => selectedStrategy = e.target.value;
UI.btnReset.onclick = () => location.reload();
UI.btnAgain.onclick = () => location.reload();
UI.btnStart.onclick = () => {
  let oponent = new Person(selectedStrategy)
  UI.oponentStrategy.innerHTML = selectedStrategy === 'default' ?
    'Przeciwnik' : oponent.strategyName();
  game = new Game(UI, oponent);
  game.init()
}
UI.btnCheat.onclick = () => {
  game.makeMove('cheat');
}
UI.btnTrust.onclick = () => {
  game.makeMove('trust')
}
