import { Component, Input, OnInit, ViewChild, ViewContainerRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MojTabsService } from '../../services/moj-tabs.service';
import { MojTab } from '../../models/moj-tabs.models';
import { PermissionService } from '../../../../permissions/permission.service';

@Component({
    selector: 'moj-tabs',
    templateUrl: './moj-tabs.component.html'
})
export class MojTabsComponent {
    @Input() tabs: MojTab[];

    currentIndex: number = 0;
    @Input() tabActiveIndex: number = 0;
    @Output() tabChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() tabClose: EventEmitter<any> = new EventEmitter<any>();
    selectedDefaultIndex: number = 0;
    disabled?: boolean = true;

    constructor(private permissionService: PermissionService) {

    }

    ngOnInit() {
        this.tabs.forEach((v, i) => {
            if (v.selected)
                this.selectedDefaultIndex = i;
                this.tabs[i].visible=true;
            if (v.name) {
                let permissionResult = this.permissionService.getControllerPermission(v.name);
                this.tabs[i].disabled = !permissionResult.enable;
                this.tabs[i].visible = permissionResult.visible;
            }      
        })
    }


    openTabByIndex(index: number) {
        
        if (index < this.tabs.length) {
            this.tabs[this.currentIndex].selected = false;
            this.tabs[index].selected = true;
            this.tabActiveIndex = this.currentIndex = index;
        }
    }

    handleChange(e) {
        if (this.tabActiveIndex !== e.index) {
            this.tabActiveIndex = e.index;
            this.currentIndex = e.index;
        }
        this.tabChange.emit(e);
    }

    handleClose(e) {
        if (e.index == 0 && this.currentIndex == 0 && this.tabs.length > 1) {
            this.tabActiveIndex = 1;
            setTimeout(() => {
                this.tabs.splice(0, 1);
                this.currentIndex = 0;
            }, 1000);
        } else {
            this.tabs.splice(e.index, 1);
            this.currentIndex = this.findSelectedTabIndex() || 0;
        }
        this.tabClose.emit(e);
    }

    /**
     * Get the selected tab
     */
    findSelectedTabIndex(): number {
        //return this.tabRef.findSelectedTab();
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return i;
            }
        }
        return null;
    }
}
