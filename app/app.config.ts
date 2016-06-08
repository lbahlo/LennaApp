import {Component, Injectable} from '@angular/core'
/import {BuildTargetItems, BuildTargetService} from './build.target.service';
import {AppConfigItems, AppConfigService} from './app.config.service';
import {TsHelper} from './common/utils/tsHelper';

import {Subscription}   from 'rxjs/Subscription';

//
//This module will be used to visualize any app settings in the future..
//

  //  providers: [AppConfigService, BuildTargetService]
@Component({
    selector: 'appConfig',
    template: ``,
    directives: [],
    providers: [AppConfigService]

})

@Injectable()
export class AppConfig  {
   //TBD figure out a way to inject int appConfigServices based on type of build
   // public static ENV: string = "Development"; 
  //  public static ENV: string = "Production"; 

    private appConfig: any;
    private buildTarget: string;

    buildTargetSubscription: Subscription;
 
    // constructor(public appConfigService: AppConfigService,
    //     private buildTargetService: BuildTargetService) {

    // }

    constructor() { }

    getConfig() {
        //first get build target, when loaded then load correct appconfig
        this.subscribeToBuildTargetService();

      //  this.buildTargetService.getBuildTarget();

      
    }

    subscribeToBuildTargetService() {
        this.buildTargetSubscription = this.buildTargetService.buildTarget$.subscribe(

            (configuration) => {
                //now that configuration has been loaded, get the bewl items
                this.getAppConfig();
            });

    }

    getAppConfig() {

        //update the ENV based on buildTarget loaded
        this.appConfigService.ENV = BuildTargetItems.ENV;
    
        this.appConfigService.getConfig();
    }

    ngOnDestroy() {

        // prevent memory leak when component destroyed
        if (TsHelper.IsNotNull(this.buildTargetSubscription)) {
            this.buildTargetSubscription.unsubscribe();
        }

    }

    //constructor(public appConfigService: AppConfigService,
    //    public buildTargetService: BuildTargetService) {

    //    buildTargetService.getBuildTarget();
    //    AppConfig.ENV = BuildTargetItems.ENV;
    //}
   
}