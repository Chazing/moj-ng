import { BehaviorSubject, Observable } from "rxjs";
import { __stores__, deepFreeze, isFunction, UpdateStateCallback } from "./store.utils";
import { map, distinctUntilChanged } from "rxjs/operators";
// import { environment } from 'src/environments/environment';
import { produce } from 'immer';

export class Store<S = any> {
    private store: BehaviorSubject<Readonly<S>>;
    private storeValue: S;
    private _initialState: S;

    private _producerFn?: (state: any, fn: any) => any = produce;

    constructor(private storeName: string, initialState: Partial<S>) {
        this.onInit(initialState as S);
    }

    //public functions
    
    getValue() {
        return this.storeValue;
    }

    reset() {
        this._setState(() => Object.assign({}, this._initialState));
    }

    updateState(stateCallback: UpdateStateCallback<S>);
    updateState(state: Partial<S>);
    updateState(stateOrCallback: Partial<S> | UpdateStateCallback<S>) {
        let newState;
        const currentState = this._value();
        if (isFunction(stateOrCallback)) {
            newState = isFunction(this._producerFn) ? this._producerFn(currentState, stateOrCallback) : stateOrCallback(currentState);
            //newState = produce(currentState, stateOrCallback);
        } else {
            //newState = stateOrCallback;
            newState = { ...currentState, ...stateOrCallback };
        }

        //newState = { ...currentState, ...stateOrCallback };
        this._setState(newState);
    }

    setLoading(loading = false) {
        if (loading !== (this._value() as S & { loading: boolean }).loading) {
            this._setState(state => ({ ...state, loading } as S & { loading: boolean }));
        }
    }

    setError<T>(error: T) {
        if (error !== (this._value() as S & { error: any }).error) {
            this._setState(state => ({ ...state, error } as S & { error: any }));
        }
    }

    destroy() {
        if (this === __stores__[this.storeName]) {
            delete __stores__[this.storeName];
        }
    }

    select<R>(project?: (store: S) => R): Observable<R>;
    select(): Observable<S>;
    select<R>(project?: (store: S) => R): Observable<R | S> {
        let state = project ? project : state => state;
        return this._select(state);
    }



    //private functions
    
    private onInit(initialState: S) {
        __stores__[this.storeName] = this;
        this._setState(() => initialState);
        this._initialState = initialState;
    }

    protected _setState(newState: ((state: Readonly<S>) => S) | S) {
        if (isFunction(newState)) {
            const _newState = newState(this._value());
            this.storeValue = deepFreeze(_newState);
        } else {
            this.storeValue = deepFreeze(newState);
        }

        if (!this.store) {
            this.store = new BehaviorSubject(this.storeValue);
            return;
        }

        this.dispatch(this.storeValue);
    }
    
    private _select<R>(project: (store: S) => R): Observable<R> {
        return this.store.asObservable().pipe(
            map(project),
            distinctUntilChanged()
        );
    }

    protected _value(): S {
        return this.storeValue;
    }
    
    private dispatch(state: S) {
        this.store.next(state);
    }

}