class HashTable {
  store = {};
  size = 0;

  constructor() {}

  hash(key) {
    const str = key.toString();
    let res = 0;

    for (let i = 0; i < str.length; i++) {
      res += str.charCodeAt(i);
    }

    console.log('hash:', res, key);

    return res;
  }

  add(key, value) {
    this.size++;
    this.store[this.hash(key)] = value;
  }

  get(key) {
    const hash = this.hash(key);
    let res = null;

    if (this.store.hasOwnProperty(hash)) {
      res = this.store[hash];
    }

    return res;
  }

  get length() {
    return this.size;
  }

  display() {
    console.log(this.store);
  }
}

/// - - - - - - - - - - - - - - - - - - - - - -

const dict = new HashTable();
// dict.add('a', 0);
dict.add('ab', 1);
dict.add('ba', 2);
// dict.add('test', 3);
// dict.add('qwerty', 4);
// dict.add('ytrewq', 5);
// dict.add('abc', 6);
// dict.add('cba', 7);

console.group('res:');
// console.log('a:', dict.get('a'));
console.log('ab:', dict.get('ab'));
console.log('ba:', dict.get('ba'));
// console.log('test:', dict.add('test'));
// console.log('qwerty:', dict.get('qwerty'));
// console.log('ytrewq:', dict.get('ytrewq'));
// console.log('abc:', dict.get('abc'));
// console.log('cba:', dict.get('cba'));
// console.log('unknown:', dict.get('unknown'));
// console.log('length:', dict.length);
dict.display();
console.groupEnd();
