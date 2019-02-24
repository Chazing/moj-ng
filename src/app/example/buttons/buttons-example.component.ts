import { Component } from '@angular/core';
import { ButtonToggleItem } from '../../moj-ng/elements/buttons/button-toggle/button-toggle.model';

@Component({
  selector: 'moj-buttons-example',
  templateUrl: './buttons-example.component.html'
})
export class ButtonsExampleComponent {
    buttonToggleItems:ButtonToggleItem[] = [
        {id:1, text:'תוכנית'},//, cssClasses:'orange1'
        {id:2, text:'גוש', },
        {id:3, text:'פוליגון'},
        {id:4, iconClass:'fas fa-plus'}
    ]

    toggleValue:number;

    onToggleChange(value){
        alert(value);
    }
}
