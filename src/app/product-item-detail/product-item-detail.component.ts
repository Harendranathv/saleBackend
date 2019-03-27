import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {


  public productDetail = {};

  constructor(public http: HttpClient, public route: ActivatedRoute) {

    const routeSubscription = this.route.params.subscribe(({id}) => {
      this.getProductDetail(id)
        .subscribe((resp) => {
          this.productDetail = resp;
        });
    });
  }

  public getProductDetail(id) {
    return this.http.get('/products/' + id);
  }

  ngOnInit() {

  }

}
