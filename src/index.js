'use strict';

class StorageWrapper {
  constructor(storage) {
    this._storage = storage;
  }

  getItem(key) {
    return JSON.parse(this._storage.getItem(key));
  }

  setItem(key, value) {
    return this._storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key) {
    return this._storage.removeItem(key);
  }

  key(index) {
    return this._storage.key(index);
  }

  clear() {
    return this._storage.clear();
  }

  get length() {
    return this._storage.length;
  }
}

export const jsonLocalStorage = new StorageWrapper(window.localStorage);

export const jsonSessionStorage = new StorageWrapper(window.sessionStorage);
