import { Injectable } from '@angular/core';
import { Store } from '@moj/moj-ng';
import { DemoData } from './models';

const INITIAL_DATA: DemoData = {
  currentItem: 0,
  currentCategory: 0
};


@Injectable({
  providedIn: 'root'
})
export class DemoStoreService extends Store<DemoData> {
  constructor() {
    super("[Demo]", INITIAL_DATA); 
    // this.initState(this.key, INITIAL_DATA);
  }
}
