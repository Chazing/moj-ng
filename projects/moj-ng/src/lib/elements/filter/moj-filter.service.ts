import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class MojFilterService{
    constructor(){}

    isCheckChildren: boolean = true;

    debounceTime: number = 200;

    seeAllCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    searchCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    ExpandCategory: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}