import { Subscription, Observable } from "rxjs";

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
  data: any;

  private movingSubscription?: Subscription;
  private closingSubscription?: Subscription;

  constructor(public url: string, public title$: Observable<string>) {
  }  

  public saveMovingSubscription(subscription: Subscription) {
    this.movingSubscription = subscription;
  }

  public saveClosingSubscription(subscription: Subscription) {
    this.closingSubscription = subscription;
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

export enum TabsColor {
    red = "red",
    blue = "blue"
}



