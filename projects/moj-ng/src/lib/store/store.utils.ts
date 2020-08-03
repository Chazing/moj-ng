import { Store } from "./store";

export function getStoresSnapshot(__stores__) {
    let acc = {};
    const keys = Object.keys(__stores__);
    for (let i = 0; i < keys.length; i++) {
        let storeName = keys[i];
        acc[storeName] = __stores__[storeName].getSnapshot();
    }

    return acc;
}

export function deepFreeze(o) {
    Object.freeze(o);

    var oIsFunction = typeof o === "function";
    var hasOwnProp = Object.prototype.hasOwnProperty;

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (hasOwnProp.call(o, prop)
            && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
};


export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

export const __stores__: { [storeName: string]: Store<any> } = {};

export type UpdateStateCallback<State> = (state: State) => Partial<State> | void;

