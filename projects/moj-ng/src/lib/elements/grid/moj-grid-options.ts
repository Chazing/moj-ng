import { Directive, OnInit } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridService } from './service/moj-grid.service';

@Directive({
    selector: '[mojGridOptions]'
})
export class MojGridOptionsDirective implements OnInit {

    constructor(private grid: AgGridNg2, private gridService: GridService) {
    }

    ngOnInit(): void {
        this.grid.gridOptions = this.gridService.getMojGridOptions();
    }
}