import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model'
import { EditServiceBase, MojMessagesService } from '@moj/moj-ng';

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
}
