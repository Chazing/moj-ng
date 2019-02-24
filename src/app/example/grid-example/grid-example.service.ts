import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model'
import { MojMessagesService } from '../../moj-ng/messages/moj-messages.service';
import { EditServiceBase } from '../../moj-ng/elements/grid/service/edit-service.base';


@Injectable()
export class GridExampleService extends EditServiceBase {

    constructor(protected http: HttpClient, private messagesService: MojMessagesService) {
        super(http);
    }

    getProducts() {
        return this.http.get('http://localhost:62060/api/Grid/Get');     
    } 

    initItem() {
        let product = new Product();
        product.ProductName = 'מחשב';
        return product;
    }

    //save(product: Product) {
    //    return this.http.post('http://localhost:62060/api/Grid/Post', product);
    //}

    //delete(product: Product) {
    //    return this.http.delete('http://localhost:62060/api/Grid/Delete/' + product.ID);
    //}

    //afterDelete(product: Product) {
    //    alert("after delete");
    //}

    //beforeSave(product: Product): boolean {
    //    if (product.ID == 1) {
    //        this.messagesService.confirm("מוצר זה אינו יכול להישמר", "אישור").subscribe((result) => {
    //        })
    //        return false;
    //    }
    //}

    //afterSave(product: Product): void {
    //    this.messagesService.confirm("נשמר", "אישור").subscribe((result) => {
    //    })
    //}
}
