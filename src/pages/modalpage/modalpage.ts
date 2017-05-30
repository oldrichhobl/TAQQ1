import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


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
  file: any;
  nativeAudio: NativeAudio;

  constructor(public navCtrl: NavController,
              public view: ViewController,
              public navParams: NavParams)
  {
    this.item = navParams.get('item');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage' + this.navParams);
    console.dir(this.navParams);
    // this.item.title = this.navParams.data.item.title;
  }

  audioplay() {
  	var pathalone = 'assets/sounds/' +
  	                 this.item.sound + '.wma.mp3';
  	console.log("AUDIOPLAY " + pathalone);
  	
    this.nativeAudio = new NativeAudio();
    this.nativeAudio.preloadSimple('uniqueId1', 
	             pathalone).then(()=>{
	             	console.log("SUCCESS");
	             	this.nativeAudio.play('uniqueId1',
	             		()=>{this.nativeAudio.unload('uniqueId1')}
	             		)
	                 },
	                 ()=>{console.log("ERROR")});
  }




  ok() {
    this.view.dismiss()
}
}