import { Subscription, Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';

export class MojTab {
    id?: string;
    urlRegex?: string = null;
    removable?: boolean = true;
    appMainTab?: boolean;
    selected?: boolean;
    mainTab?: boolean;
    color?: string;
    asteriskColor?: string;
    sideMenuItems?: MojSideMenuItem[];
    sideMenuItemSelected?: MojSideMenuItem;
    appMainTabMovingSubscriber?: (value: MojTab) => void;
    data?: any;
    headerData?: { [key: string]: string, cssClass?: string }[];
    //for tab by visibility
    component?: Type<any>;
    instance?: any;
    iconBefore:string;
    iconAfter:string;
    //end for tab by visibility
    disabled?: boolean;
    visible?: boolean;
    name?: string;

    private movingSubscription?: Subscription;
    private closingSubscription?: Subscription;

    public closingSubject = new Subject<MojTab>();
    public closing = this.closingSubject.asObservable();

    constructor(public url: string, public title$: Observable<string>) { }

    public saveMovingSubscription(subscription: Subscription) {
        this.movingSubscription = subscription;
    }

    public saveClosingSubscription(closingSubscriber: (value: MojTab) => void) {
        this.closingSubscription = this.closing.subscribe(closingSubscriber);
    }

    public hasMoving(): boolean {
        return this.movingSubscription != null;
    }
    public hasClosing(): boolean {
        return this.closingSubscription != null;
    }

    public unsubscribeToMoving() {
        if (this.movingSubscription) {
            this.movingSubscription.unsubscribe();
            this.movingSubscription = null;
        }
    }

    public unsubscribeToClosing() {
        if (this.closingSubscription) {
            this.closingSubscription.unsubscribe();
            this.closingSubscription = null;
        }
    }

    public unsubscribe() {
        this.unsubscribeToMoving();
        this.unsubscribeToClosing();
    }
}

export interface MojSideMenuItem {
    id?: string;
    url: string;
    title$: Observable<string>;
    color?: string;
    imgUrl?: string;
    icon?: string;
    asteriskColor?: string;
}

export interface TabUrl {
    url: string;
    urlWithoutParams?: string;
}

