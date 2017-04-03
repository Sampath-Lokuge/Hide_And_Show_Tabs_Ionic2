import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from "ionic-angular";
import { TabSet1Page } from "../pages/tab-set1/tab-set1";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  pendingRequests: number = 0;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.subscribePendingRequests();//subscribe
    this.events.publish('pending-requests', 0);//publish
  }

  //subscribe
  subscribePendingRequests() {
    this.events.subscribe('pending-requests', (data) => {
      if (data > 0) {
        this.rootPage = TabSet1Page;
      }
      else {
        this.rootPage = TabsPage;
      }
    });
  }

}
