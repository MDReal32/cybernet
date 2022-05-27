export class Storage<T> {
  constructor(private items: T[] = []) {}

  add(item: T) {
    this.items.push(item);
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  get(index: number) {
    return this.items[index];
  }
}
