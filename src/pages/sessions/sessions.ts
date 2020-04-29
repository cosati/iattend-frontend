import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionDTO } from '../../models/session.dto';
import { SessionService } from '../../services/domain/session.service';

@IonicPage()
@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {

  items: SessionDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sessionService: SessionService) {
      
  }

  ionViewDidLoad() {
    this.sessionService.findNext()
      .subscribe(response => {
        this.items = response['content'];
      },
      error => {}
      );
  }

}
