import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Events } from 'ionic-angular';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {
  public loaded: any = false; 
  XMLstring: string;
  public XMLdata: any;
  Parser : any;
  
  actRECS: string = 'Consonants'; 
    
  constructor(public http: Http, public events: Events) {
    console.log('Hello MyData Provider constructor');
    this.loadXML();
  }

   // muj test
  loadXML() {
    console.log("napred loadXML ");
    this.http.get('./assets/xml/alphabet.xml').subscribe((res) => {
       console.log("NACTENO alphabet.xml");
       console.dir(res);
       this.XMLstring = res.text();
       
       if (typeof (window as any).DOMParser != "undefined") {
         console.log("DOMParser neni undefined !!!!!");
         }

       // domparser
       this.Parser = new (window as any).DOMParser();
       this.XMLdata = this.Parser.parseFromString(this.XMLstring, "text/xml");
       console.dir(this.XMLdata);
       this.loaded = true;   // mame nacteno
       //
       this.events.publish('data:loaded', 'Data', Date.now());
       });
  };
  public showData()
  {
    var xsltProcessor=new (window as any).XSLTProcessor();
    console.dir(this.XMLdata);
    console.dir(xsltProcessor);
  };
  

/*      VZOR XML
  var parser = new DOMParser();
var xml = parser.parseFromString(xmlString, 'text/xml');

var entryData = xml.getElementsByTagName('entry');
var posts = [];

for (var i = 0; i < entryData.length; i++) {
  posts.push({
    id          : getFirstNode(entryData[i], 'id').innerHTML,
    title       : getFirstNode(entryData[i], 'title').innerHTML,
    content     : getFirstNode(entryData[i], 'content').innerHTML,
    image       : getImageLink(entryData[i], 'thumbnail', 'media')
  });
}
*/

  
  
}
