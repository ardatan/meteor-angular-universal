import { Component, OnInit } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Settings } from '../../../api/collections/settings.collection';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-alex',
  template: `
    <p>
      alex works!
    </p>
    <ul>
      <li *ngFor="let setting of settings | async">{{setting._id}}</li>
    </ul>
  `,
  styles: []
})
export class AlexComponent implements OnInit {

  settings: Promise<any[]>;

  constructor (
    private zone: NgZone,
  ) {
    this.settings = this.getSettings();
   }

   ngOnInit() {}

  async getSettings() {
    const settings = await new Promise<any[]>((resolve, reject) => {

      Meteor.subscribe("settings", {
        onReady: () => {
          resolve(Settings.find({}).fetch());
        }
      });
    });
    
    return settings;
  }

}
