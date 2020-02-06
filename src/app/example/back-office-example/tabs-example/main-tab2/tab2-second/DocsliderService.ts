import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
})
export class DocsliderService {
    constructor() { }
    SliderSize: any;
    public saveSliderSize(sliderSize) {
        this.SliderSize = sliderSize;
    }
    public getSliderSize() {
        if (this.SliderSize)
            return this.SliderSize;
        return null;
    }
}
