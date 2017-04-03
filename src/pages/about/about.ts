import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public events: Events) { }

  //refresh
  refreshPendingRequests() {
    this.events.publish('pending-requests', 5);
  }


}
