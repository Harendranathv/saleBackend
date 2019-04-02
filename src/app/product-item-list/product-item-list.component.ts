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

        this.groups = _.toPairs(_.reduce(_.compact(_.uniqBy(_.flatten(_.map(data, x => x.tag)), 'name')), (recorder, cat) => {
          recorder[cat.name] = _.filter(data, (item) => {
            return item.tag && item.tag.includes(cat);
          });
          return recorder;
        }, {
          'Uncategory': _.filter(data, x => !x.tag || !x.tag.length)
        }));
      });
  }

  ngOnInit() {
  }

}
