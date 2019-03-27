import {Component} from '@angular/core';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public groups = [];

  constructor() {

  }
}
