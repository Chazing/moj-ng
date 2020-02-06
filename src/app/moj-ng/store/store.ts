import { Injectable } from "@angular/core";
import * as cloneDeep from 'lodash/cloneDeep';
import * as _ from "lodash"
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, takeUntil, map } from "rxjs/operators";

import { IState, IStore, State } from "./state";
import { Dictionary } from "./dictionary";
import { RecursivePartial } from "./dictionary"


@Injectable({
    providedIn: "root"
})
export class Store<T> {

    private initialState: IStore<T> = {
        repository: new Dictionary<IState<T>>()
    };

    constructor() {
        console.log("store created");
    }

    private destroy$: Subject<boolean> = new Subject<boolean>();
    private store: BehaviorSubject<IStore<T>> = new BehaviorSubject<IStore<T>>(this.initialState);
    private store$: Observable<IStore<T>> = this.store.asObservable().pipe(distinctUntilChanged());

    getState(key: string): Observable<IState<T>> {
        let stateValue = this.store.getValue();
        if (stateValue.repository.ContainsKey(key)) {
            return this.store$.pipe(takeUntil(this.destroy$), map(v => v.repository.Item(key)));
        }
        return null;
    }

    getStateSnapshot(key: string): IState<T> {
        let stateValue = this.store.getValue();
        if (stateValue.repository.ContainsKey(key)) {
            let state = stateValue.repository.Item(key);
            let newState = cloneDeep(stateValue.repository.Item(key)) as IState<T>;
            newState.refData = state.refData;
            return newState;
        }
        return null;
    }

    addState(key: string, state: IState<T>) {
        let stateValue = this.store.getValue();
        if (stateValue.repository.ContainsKey(key)) {
            console.trace(`error: key violation in store! Key:${key}`);
            console.log(stateValue.repository);
            throw new Error(`error: key violation in store! Key:${key}`);
        }
        stateValue.repository.Add(key, state);
        this.store.next(this.cloneState(stateValue));
    }

    setState(key: string, state: IState<T>) {
        let stateValue = this.store.getValue();
        this.IsKeyContains(stateValue, key);
        let oldState = stateValue.repository.Remove(key);
        let newState = cloneDeep(state) as IState<T>;
        newState.refData = oldState.refData;
        oldState = null;
        stateValue.repository.Add(key, newState);
        this.store.next(this.cloneState(stateValue));
    }

    updateState(key: string, state: Partial<IState<RecursivePartial<T>>>): IState<T> {
        let stateValue = this.store.getValue();
        this.IsKeyContains(stateValue, key);
        let oldState = stateValue.repository.Remove(key);
        // merge and copy
        let newState = _.merge({...oldState}, state);
        newState.refData = oldState.refData;
        oldState = null;
        stateValue.repository.Add(key, newState);
        this.store.next(this.cloneState(stateValue));
        return newState;
    }

    removeState(key: string) {
        let stateValue = this.store.getValue();
        this.IsKeyContains(stateValue, key);
        let oldState = stateValue.repository.Remove(key);
        oldState = null;
        this.destroy$.next(true);
        this.store.next(this.cloneState(stateValue));
    }

    resetState(key: string) {
        let stateValue = this.store.getValue();
        this.IsKeyContains(stateValue, key);
        let oldState = stateValue.repository.Remove(key);
        let newState = cloneDeep(oldState) as IState<T>;
        newState.refData = oldState.refData;
        oldState = null;
        newState.data = cloneDeep(newState.originalData);
        newState.errors = [];
        newState.isDirty = false;
        newState.isProcessing = false;
        newState.additionalData = null;
        newState.showSaveCancel = true;
        stateValue.repository.Add(key, newState);
        this.store.next(this.cloneState(stateValue));
    }

    initState(key: string, initialData: T) {
        let initialState = new State<T>(initialData);
        this.addState(key, initialState);
    }

    // select<R>(project?: (store: T) => R): Observable<R>;
    // select(): Observable<T>;
    // select<R>(project?: (store: T) => R): Observable<R | T> {
    //     let state = project ? project : state => state;
    //     return this._select(state);
    // }

    //private functions

    private cloneState(oldState: IStore<T>): IStore<T> {
        let newState: IStore<T> = {
            repository: new Dictionary<IState<T>>()
        };
        let keys = oldState.repository.Keys();
        keys.forEach(key => newState.repository.Add(key, oldState.repository.Item(key)));
        oldState = null;
        return newState;
    }

    private IsKeyContains(state: IStore<T>, key: string) {
        if (!state.repository.ContainsKey(key)) {
            console.trace(`error: no State found by this key! Key:${key}`);
            console.log(state.repository);
            throw new Error(`error: no State found by this key! Key:${key}`);
        }
    }

    // private _select<R>(project: (store: T) => R): Observable<R> {
    //     return this.store.pipe(
    //         map(project),
    //         distinctUntilChanged()
    //     );
    // }


    

}