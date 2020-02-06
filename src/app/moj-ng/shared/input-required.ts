// import "reflect-metadata";

export function InputRequired(): any {
    return (target: any, key: string) => {
        //Reflect.defineMetadata("inputRequired", true, target, key);
    }
}

//export function Required(): any {
//    return (target: any, key: string) => {
//        debugger;
//        Reflect.defineMetadata("inputRequired", "true", target, key);
//    }
//}

//export interface MojPropertyDescriptor extends PropertyDescriptor {
//    isValid(): boolean;
//}