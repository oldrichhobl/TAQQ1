import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { MyData } from '../providers/my-data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  pages: Array<{title: string, component: any}>;
  
  
  constructor(public platform: Platform, private myData: MyData,
              public events: Events) {
    
   this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Page 3', component: Page3 }
    ];
   
    // spravna data doplnime az po nacteni alphabet.xml
    this.events.subscribe('data:loaded', (user, time) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('2 DATA LOADED event DRUHY', user, 'at', time);
    // ted konecne nactem vsechny stranky do menu
    this.pages.push({ title: 'Page One 2', component: Page1 } );
    // this.selectNode('//RECS/R');
       console.log("ZACATEK doplneni menu: ");
    // var nod = this.myData.XMLdata.selectElements("//RECS/R");
    var nodH = this.myData.XMLdata.evaluate("//RECS", this.myData.XMLdata, null, XPathResult.ANY_TYPE,null); 
    console.log(nodH.resultType);
    console.dir(nodH);
    var actualSpan = nodH.iterateNext ();
    while (actualSpan) {
      this.pages.push({
        title: actualSpan.attributes['name'].value,
        component: Page1
      });
      
      console.log(actualSpan.attributes['name'].value);
      actualSpan = nodH.iterateNext ()
    }
    });   //konec osetreni data:loaded  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    console.log("open page " + page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.myData.actRECS = page.title;
    this.nav.setRoot(page.component);
  }
}
