import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MojFormService {
  private isGridsEditOpen: boolean[] = [];
  isGridEditOpen: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  setGridEditState(val: boolean) {
    if (val) {
      this.isGridsEditOpen.push(true);
      this.isGridEditOpen.next(true);
    }
    else {
      this.isGridsEditOpen.pop();
      if (this.isGridsEditOpen.length == 0)
        this.isGridEditOpen.next(false);
    }
  }
}
