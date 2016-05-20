declare var Prism: any;
declare var console: any;

import {Component, ViewEncapsulation} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, OnActivate, ComponentInstruction} from '@angular/router-deprecated';

import {About} from './components/about/about';
import {Features} from './components/features/features';
import {Debugging} from './components/debugging/debugging';
import {Download} from './components/download/download';
import {Contact} from './components/contact/contact';

@Component({
  selector: 'simple-java-mail-app',
  directives: [ROUTER_DIRECTIVES],
  template: require('app/simple-java-mail-app.html'),
  styles: [require('app/simple-java-mail-app.less')],
  encapsulation: ViewEncapsulation.None
})

@RouteConfig([
  {path: '/about', component: About, name: 'About', useAsDefault: true},
  {path: '/features', component: Features, name: 'Features'},
  {path: '/debugging', component: Debugging, name: 'Debugging'},
  {path: '/download', component: Download, name: 'Download'},
  {path: '/contact', component: Contact, name: 'Contact'},
  { path: '/**', redirectTo: ['About'] }
])

export class SimpleJavaMailApp implements OnActivate {

  constructor(private router: Router) {}

  routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any|Promise<any> {
    console.debug('doit');
    return Prism.highlightAll();
  }
}
