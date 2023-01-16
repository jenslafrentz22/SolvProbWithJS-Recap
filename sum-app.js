class SumApp {
  constructor(numbers) {
    this.numbers = [];
    this.result = 0;
  }
  // numb = [];
  addNumber(a) {
    this.numbers.push(a);
  }
  getSum(x) {
    for (let i = 0; i < this.numbers.length; i++) {
      this.result += this.numbers[i];
    }
    return this.result;
  }
  reset() {
    this.numbers = [];
    this.result = 0;
  }
}
