class LRUCache {
  constructor() {
    this.map = new Map();
  }

  getValueFromMap(key) {
    const getValue = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, getValue);

    return getValue;
  }

  setValuesToMap(key, value) {
    if (this.map.size >= 5) {
      this.map.delete(this.first());
      this.map.set(key, value);
      console.log(this.map);
    } else this.map.set(key, value);
  }

  first() {
    return this.map.keys().next().value;
  }
}

const newCache = new LRUCache();
// newCache.setValuesToMap("a", 1);
// newCache.setValuesToMap("b", 2);
// newCache.setValuesToMap("c", 3);
// newCache.setValuesToMap("d", 4);
// newCache.setValuesToMap("e", 5);

// newCache.setValuesToMap("m", 22);
// newCache.getValueFromMap("b");
