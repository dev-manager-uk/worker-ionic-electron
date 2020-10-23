import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor() {
    var self = this;
  }
  
  startWorker() {
		console.log('Worker path: ', '../../app.asar/electron/worker.js');
		const worker = new Worker('../../app.asar/electron/worker.js');
  }
}
