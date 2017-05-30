import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalPage } from '../modalpage/modalpage';

import { MyData } from '../../providers/my-data';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})

export class Page3 {
  myD:string = 'SSSSS';
  headname = "XxX ";
  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, sound: string, note: string, icon: string}>;


  constructor(public navCtrl: NavController, private myData: MyData) {
    console.log("Constructor PAGE3.TS");
    // myData.loadXML();
    // myD = myData;
    
   // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    
    this.items = [];
    // this.selectNode('//RECS/R');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3');
    this.selectNode("//RECS[3]/R")
  }

  showChar(index)
  {
    console.log("showChar: ");
    console.log(this.myD);
    this.myData.showData();
  }
  
  selectNode(ss)
  {
    console.log("selectNode : " + ss);
    // var nod = this.myData.XMLdata.selectElements("//RECS/R");
    var nod = this.myData.XMLdata.evaluate(ss, this.myData.XMLdata, null, XPathResult.ANY_TYPE,null); 
    var nodH = this.myData.XMLdata.evaluate("//RECS[3]", this.myData.XMLdata, null, XPathResult.ANY_TYPE,null); 
    console.log(nod.resultType);
    console.log(nodH.resultType);
    var actualHead = nodH.iterateNext();
    this.headname = actualHead.attributes['name'].value
    
    this.items = [];
    var i = 2;
    var actualSpan = nod.iterateNext ();
    while (actualSpan) {
      this.items.push({
        note: actualSpan.attributes['w'].value,
        sound: actualSpan.attributes['s'].value,
        title: actualSpan.innerHTML,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      actualSpan = nod.iterateNext ()
    }

    console.log(this.headname);  
  }
  
  itemTapped(event, item) {
    console.log("itemTapped page3 " + item);
    console.dir(item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ModalPage, {
      item: item
    });
  }
}
