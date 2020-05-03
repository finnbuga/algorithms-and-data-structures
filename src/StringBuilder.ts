export default class StringBuilder {
  str: string[];

  constructor(str = "") {
    // this.str = str.split("");
    this.str = [str];
  }

  append(...strings: string[]) {
    for (let str of strings) {
      // this.str.push(...str.split(""));
      this.str.push(str);
    }
  }

  getStr(): string {
    return this.str.join("");
  }
}
