import { IServerSideDatasource, IServerSideGetRowsParams } from "ag-grid-community";
import { products } from "../products";

export class ServerSideDatasource implements IServerSideDatasource {
    getRows(params: IServerSideGetRowsParams){
        params.successCallback(products, 10);
    }
}