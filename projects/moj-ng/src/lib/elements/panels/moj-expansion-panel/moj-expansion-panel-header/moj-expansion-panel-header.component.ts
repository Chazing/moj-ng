import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'moj-expansion-panel-header',
  templateUrl: './moj-expansion-panel-header.component.html',
  styleUrls: ['./moj-expansion-panel-header.component.css']
})
export class MojExpansionPanelHeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }



  ngOnInit() {
  }
 

}
