class StringBuilder{
  #value = {};
  constructor(initialValue) {
    this.#value = [initialValue];
  }

  getValue() {
    return this.#value.join('');
  }

  padEnd(str) {
    this.#value.push(str);
    return this;
  }

  padStart(str) {
    this.#value.unshift(str);
    return this;
  }

  padBoth(str) {
    this.#value.push(str);
    this.#value.unshift(str);
    return this;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="