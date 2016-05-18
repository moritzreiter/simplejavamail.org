import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: require('app/components/download/download.html')
})

export class Download { }
