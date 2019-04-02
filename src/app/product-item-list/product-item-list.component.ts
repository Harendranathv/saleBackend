import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {


  public groups;

  constructor(private  http: HttpClient) {
    this.http.get('/products')
      .subscribe((data: any) => {
        _.flatten(_.map(data, x => x.categories));
        this.groups = _.toPairs(_.reduce(_.uniq(_.flatten(_.map(data, x => x.categories))), (recorder, cat) => {
          recorder[cat] = _.filter(data, (item) => {
            return item.categories.includes(cat);
          });
          return recorder;
        }, {}));
      });

  }

  ngOnInit() {
  }

}
