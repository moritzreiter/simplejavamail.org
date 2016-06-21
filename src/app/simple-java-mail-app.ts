declare var Prism:any;

import {Component, ViewEncapsulation, AfterViewChecked, ElementRef} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {SimplePageScroll} from 'ng2-simple-page-scroll';

import {About} from './components/about/about';
import {Features} from './components/features/features';
import {Configuration} from './components/configuration/configuration';
import {Debugging} from './components/debugging/debugging';
import {RfcCompliant} from './components/rfc/rfc';
import {Download} from './components/download/download';
import {Contact} from './components/contact/contact';

require('./lib/prism.ts');

@Component({
  selector: 'simple-java-mail-app',
  directives: [ROUTER_DIRECTIVES, SimplePageScroll],
  template: require('app/simple-java-mail-app.html'),
  styles: [require('app/simple-java-mail-app.less')],
  encapsulation: ViewEncapsulation.None
})

@Routes([
  {path: '/about', component: About},
  {path: '/features', component: Features},
  {path: '/configuration', component: Configuration},
  {path: '/debugging', component: Debugging},
  {path: '/rfc', component: RfcCompliant},
  {path: '/download', component: Download},
  {path: '/contact', component: Contact},
  {path: '', component: About}
])

export class SimpleJavaMailApp implements AfterViewChecked {
  // router is used by the template
  constructor(private router:Router, private el:ElementRef) {
  }

  // scrollToTop is used by the template
  scrollToTop():void {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }

  ngAfterViewChecked():any {
    return Prism.highlightAll();
  }
}
