import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'modalpage',
  templateUrl: 'modalpage.html'
})
export class ModalPage {

  item: any;

  constructor(public navCtrl: NavController,
              private view: ViewController,
              public navParams: NavParams)
  {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage' + this.navParams);
    console.dir(this.navParams);
    // this.item.title = this.navParams.data.item.title;
  }

  ok() {
    this.view.dismiss()
}
}