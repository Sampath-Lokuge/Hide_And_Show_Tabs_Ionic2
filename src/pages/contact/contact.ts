import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public events: Events) { }

  //refresh
  refreshPendingRequests() {
    this.events.publish('pending-requests', 5);
  }

}
