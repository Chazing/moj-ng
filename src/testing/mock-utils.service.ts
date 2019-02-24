export class MockUtilsService { 
    isInitialized;
    initialize(configFile:string){
        this.isInitialized = true;
    }
  }