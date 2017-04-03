import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public events: Events) { }

  //refresh
  refreshPendingRequests() {
    this.events.publish('pending-requests', 0);
  }

}
