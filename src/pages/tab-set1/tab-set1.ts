import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-tab-set1',
  templateUrl: 'tab-set1.html'
})
export class TabSet1Page {

  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;

  constructor() { }



}
