import { Injectable } from "@angular/core";
import { MojConfigModel } from "./moj-config";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MojConfigService {
  private config: MojConfigModel;
  constructor(private http: HttpClient) {
    
  }

  load(url: string):Promise<any> {
    return new Promise(resolve => {
      this.http.get(url).subscribe((config: MojConfigModel) => {
        this.config = config;
        resolve();
      });
    });
  }

  get configuration(): MojConfigModel {
    return this.config;
  }
}
