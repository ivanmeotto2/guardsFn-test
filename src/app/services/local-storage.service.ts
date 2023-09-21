import { Injectable } from '@angular/core';

/**
 * Service for centrally handling the local storage interface
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * @ignore
   */
  constructor() {}

  /**
   * Set a given item in local storage with a given key
   *
   * @param {string} key - The local storage item's key
   * @param {string} value - The value to store in local storage
   */
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * Retrieves an item from local storage and returns it as a string
   *
   * @param {string} key - The key of the local storage item to retrieve
   * @returns The item in a `string` type, or null if the item does not exist
   */
  get(key: string) {
    return localStorage.getItem(key);
  }

  /**
   * Removes an item with a given key from local storage
   *
   * @param {string} key - The key of the local storage item to delete
   */
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
