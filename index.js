class HashTable {
  store = {};
  size = 0;

  constructor() {}

  hash(key) {
    const str = key.toString();
    let res = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      res = (res << 5) - res + char;
    }

    return Math.abs(res);
  }

  add(key, value) {
    this.store[this.hash(key)] = value;
    this.size++;
  }

  get(key) {
    const hash = this.hash(key);
    let res = undefined;

    if (this.store.hasOwnProperty(hash)) {
      res = this.store[hash];
    }

    return res;
  }

  remove(name) {
    const hash = this.hash(name);

    /// key при переборе будет в виде строки, а hash в виде числа.
    /// привести к единому типу через +key
    for (let key in this.store) {
      if (this.store.hasOwnProperty(key) && +key === hash) {
        delete this.store[key];
        this.size--;
      }
    }
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
dict.add('apelsin', 'апельсинка');
dict.add('ab', 18);
dict.add('ba', 27);
dict.add('test', 36);
dict.add('qwerty', 45);
dict.add('ytrewq', 54);
dict.add('abc', 63);
dict.add('cba', 72);

console.log('apelsin:', dict.get('apelsin'));
console.log('ab:', dict.get('ab'));
console.log('ba:', dict.get('ba'));
console.log('test:', dict.get('test'));
console.log('qwerty:', dict.get('qwerty'));
console.log('ytrewq:', dict.get('ytrewq'));
console.log('abc:', dict.get('abc'));
console.log('cba:', dict.get('cba'));
console.log('unknown:', dict.get('unknown'));

dict.display();
console.log('length:', dict.length);

dict.remove('test');

dict.display();
console.log('length:', dict.length);
