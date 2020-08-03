import { Component, Input, OnInit, Output, ChangeDetectorRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { pageSizeList } from "./page-size-list.const";
import { AgGridNg2 } from "ag-grid-angular";

@Component({
    selector: "moj-paging",
    templateUrl: "moj-paging.component.html"
})
export class MojPagingComponent implements OnInit{
    @Input() grid:AgGridNg2;
    @Input() enableChangePageSize:boolean = false;
 
    rowsInPageText:string;
    pageText:string;
    ofText:string;   
    resultsText:string;
    displayOfText:string;
    toText:string;
    
    gridApi;
    isPaging:boolean = true;

    disablePreviousAndFirst:boolean;
    disableNextAndLast:boolean;
    disablePaging:boolean; //when no data

    currentPage:number;
    totalPages:number;
    totalRows:number;
    startRow:number;
    endRow:number;

    pageSize:number;
    pageSizeList = pageSizeList;

    constructor(private translateService:TranslateService, private cdr:ChangeDetectorRef){}

    ngOnInit(){
        this.setTranslate();
        if(this.grid.pagination == false || this.grid.gridOptions.pagination == false){
            this.isPaging = false;
        } else{ //moj default with paging
            this.isPaging = true;
        }
        //bind onPaginationChanged function to any change in grid api pagination to update buttons and labels
        this.grid.gridOptions.onPaginationChanged = this.onPaginationChanged.bind(this);
        this.onPaginationChanged({});
    }

    setTranslate() {
        this.rowsInPageText = this.translateService.instant("MojTexts.grid.rowsInPage");
        this.pageText = this.translateService.instant("MojTexts.grid.page");
        this.ofText = this.translateService.instant("MojTexts.grid.of");
        this.resultsText = this.translateService.instant("MojTexts.grid.results");
        this.displayOfText = this.translateService.instant("MojTexts.grid.displayOf");
        this.toText = this.translateService.instant("MojTexts.grid.to");
    }
    
    onPaginationChanged(event){
        if(!this.grid.api){
            return;
        }
        if(!this.gridApi){ //init here because onInit there is no api
            this.gridApi = this.grid.api;
        }
        
        this.setPageSize();
        this.totalPages = this.gridApi.paginationGetTotalPages();
        this.totalRows = this.gridApi.paginationGetRowCount();
        this.setCurrentPage(event.newData);
        this.setFirstLastInPage();
        this.enableOrDisableButtons();
        this.cdr.markForCheck();
    }

    setPageSize(){
        if(this.pageSize != -1){//-1 == all
            this.pageSize = this.gridApi.paginationGetPageSize();
        }
    }

    setCurrentPage(newData) {
        if(newData){//set new array data to the grid
            this.gridApi.paginationGoToFirstPage();
        }
        if(this.gridApi.paginationGetTotalPages() > 0){
            this.currentPage = this.gridApi.paginationGetCurrentPage() + 1;
        }
        else{
            this.currentPage = 0;
        }
    };

    setFirstLastInPage(){
        if (this.isZeroPagesToDisplay()) {
            this.startRow = 0;
            this.endRow = 0;
        } else {
            this.startRow = (this.pageSize * (this.currentPage - 1)) + 1;
            this.endRow = this.startRow + this.pageSize - 1;
            if (this.currentPage === this.totalPages) {
                this.endRow = this.totalRows;
            }
        }
    }

    enableOrDisableButtons(){
        //if no rowData disable paging
        if(this.isZeroPagesToDisplay()){
            this.disablePaging = true;
            return;
        }
        else{
            this.disablePaging = false;
        }

        this.disablePreviousAndFirst = this.currentPage === 1 ? true : false;
        this.disableNextAndLast = this.currentPage === (this.totalPages) ? true : false;
    }

    pageSizeChange(){
       if(this.gridApi){
           if(this.pageSize == -1){ //all
                this.totalRows = this.gridApi.paginationGetRowCount();
                this.gridApi.paginationSetPageSize(this.totalRows);
           }
          else{
            this.gridApi.paginationSetPageSize(this.pageSize);
            }
        } 
    }

    currentPageChange(){
        //if currentPage big than total pages, set currentPage = total
        this.currentPage = +this.currentPage;
        if(this.currentPage > this.gridApi.paginationGetTotalPages()){
            this.currentPage = this.gridApi.paginationGetTotalPages();
        }
        this.gridApi.paginationGoToPage(this.currentPage - 1);
    }

    firstClick(){
        this.gridApi.paginationGoToFirstPage();
    }

    lastClick() {
        this.gridApi.paginationGoToLastPage();
    }
    
    nextClick() {
        this.gridApi.paginationGoToNextPage();
    }

    previousClick() {
        this.gridApi.paginationGoToPreviousPage();
    }
    
    isZeroPagesToDisplay(){
        let maxRowFound = this.gridApi.paginationIsLastPageFound();
        return maxRowFound && this.totalPages === 0;
    }
}