class Rule {
  constructor(params) {
    Object.assign(this, params);
  }

  sum(dice) {
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  }

  count(dice, val) {
    return dice.filter((d) => d === val).length;
  }
}

class TotalOneNumber extends Rule {
  evalRoll = (dice) => {
    return this.val * this.count(dice, this.val);
  };
}

class SumDistro extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0;
  };
}

class FullHouse extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    return d.size === 2 && this.freq(dice).some((c) => c === this.count)
      ? this.score
      : 0;
  };
}

class SmallStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    return d.size >= 4 && d.has(3) ? this.score : 0;
  };
}

class LargeStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

class Yahtzee extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threes = new TotalOneNumber({ val: 3 });
const fours = new TotalOneNumber({ val: 4 });
const fives = new TotalOneNumber({ val: 5 });
const sixes = new TotalOneNumber({ val: 6 });

const threeOfKind = new SumDistro({ count: 3 });
const fourOfKind = new SumDistro({ count: 4 });

const fullHouse = new FullHouse({ count: 3, score: 25 });

const smallStraight = new SmallStraight({ score: 30 });
const largeStraight = new LargeStraight({ score: 40 });

const yahtzee = new Yahtzee({ score: 50 });

const chance = new SumDistro({ count: 0 });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};
