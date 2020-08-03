import { Component, OnInit } from '@angular/core';
import { EntityFilesComponent } from '../entity-files/entity-files.component';
import { EntityDocsComponent } from '../entity-docs/entity-docs.component';
import { EntityRequestsComponent } from '../entity-requests/entity-requests.component';
import { of } from 'rxjs';
import { MojListItemType, MojDataViewType } from '@moj/moj-ng';

@Component({
  selector: 'app-entity-layout',
  templateUrl: './entity-layout.component.html'
})
export class EntityLayoutComponent implements OnInit {

    items: any[] = [
        {title$: of("טאב לדוגמה"), component: EntityFilesComponent, data: {pnina: "1"}},
        {title$: of("טאב נוסף"), component: EntityDocsComponent},
        {title$: of("טאב שלישי"), component: EntityRequestsComponent}
    ];

    rowData = [{}, {}, {}];
    listItemType = MojListItemType;
    dataViewType = MojDataViewType;



  constructor() { }

  ngOnInit() {
  }

}
