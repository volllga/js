//https://github.com/github/copilot-docs/blob/main/docs/jetbrains/gettingstarted.md#getting-started-with-github-copilot-in-jetbrains

class Test {
  constructor(name) {
    this.name = name;
    this.tests = [];
  }

  addTest(test) {
    this.tests.push(test);
  }

  run() {
    console.log(`Running test: ${this.name}`);
    this.tests.forEach(test => test.run());
  }


}

let calculateDaysBetweenDates = (date1, date2) => {
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date(date1);
  let secondDate = new Date(date2);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}