(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-boostrap.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-boostrap.module.ts ***!
  \****************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");







var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"]
            ]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_product_item_list_product_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product-item-list/product-item-list.component */ "./src/app/product-item-list/product-item-list.component.ts");
/* harmony import */ var src_app_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/product-item-detail/product-item-detail.component */ "./src/app/product-item-detail/product-item-detail.component.ts");





var routes = [{
        path: '',
        component: src_app_product_item_list_product_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemListComponent"]
    }, {
        path: 'detail/:id',
        component: src_app_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemDetailComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .product-list {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-row-gap: 10px;\n  grid-column-gap: 10px;\n  min-height: 0;\n  /* NEW */\n  min-width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGF0aG9uZy9Eb2N1bWVudHMvUHJvamVjdHMvbm9kZS1qcy1nZXR0aW5nLXN0YXJ0ZWQvSFRNTC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQUcsUUFBQTtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC97XG4gIC5wcm9kdWN0LWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7ICAvKiBORVcgKi9cbiAgICBtaW4td2lkdGg6IDA7XG4gICAgYXBwLXByb2R1Y3QtaXRlbSB7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.groups = [];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_app_boostrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-boostrap.module */ "./src/app/app-boostrap.module.ts");
/* harmony import */ var src_app_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/product-item/product-item.component */ "./src/app/product-item/product-item.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_product_item_list_product_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/product-item-list/product-item-list.component */ "./src/app/product-item-list/product-item-list.component.ts");
/* harmony import */ var src_app_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/product-item-detail/product-item-detail.component */ "./src/app/product-item-detail/product-item-detail.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                src_app_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemComponent"],
                src_app_product_item_list_product_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemListComponent"],
                src_app_product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                src_app_app_boostrap_module__WEBPACK_IMPORTED_MODULE_5__["AppBootstrapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product-item-detail/product-item-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product-item-detail/product-item-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "TODO Things.. Build UI for this json\n\n{{productDetail | json}}\n"

/***/ }),

/***/ "./src/app/product-item-detail/product-item-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/product-item-detail/product-item-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtaXRlbS1kZXRhaWwvcHJvZHVjdC1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product-item-detail/product-item-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product-item-detail/product-item-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponent", function() { return ProductItemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductItemDetailComponent = /** @class */ (function () {
    function ProductItemDetailComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.productDetail = {};
        var routeSubscription = this.route.params.subscribe(function (_a) {
            var id = _a.id;
            _this.getProductDetail(id)
                .subscribe(function (resp) {
                _this.productDetail = resp;
            });
        });
    }
    ProductItemDetailComponent.prototype.getProductDetail = function (id) {
        return this.http.get('/products/' + id);
    };
    ProductItemDetailComponent.prototype.ngOnInit = function () {
    };
    ProductItemDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-item-detail',
            template: __webpack_require__(/*! ./product-item-detail.component.html */ "./src/app/product-item-detail/product-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-item-detail.component.scss */ "./src/app/product-item-detail/product-item-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductItemDetailComponent);
    return ProductItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-item-list/product-item-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product-item-list/product-item-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<accordion>\n  <accordion-group [heading]=\"g[0]\" *ngFor=\"let g of groups\">\n    <div class=\"product-list\">\n      <app-product-item [routerLink]=\"['./detail',p._id]\" *ngFor=\"let p of g[1]\" [data]=\"p\"></app-product-item>\n    </div>\n  </accordion-group>\n</accordion>\n"

/***/ }),

/***/ "./src/app/product-item-list/product-item-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/product-item-list/product-item-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .product-list {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-row-gap: 10px;\n  grid-column-gap: 10px;\n  min-height: 0;\n  /* NEW */\n  min-width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGF0aG9uZy9Eb2N1bWVudHMvUHJvamVjdHMvbm9kZS1qcy1nZXR0aW5nLXN0YXJ0ZWQvSFRNTC9zcmMvYXBwL3Byb2R1Y3QtaXRlbS1saXN0L3Byb2R1Y3QtaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFBRSxRQUFBO0VBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1pdGVtLWxpc3QvcHJvZHVjdC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8ge1xuICAucHJvZHVjdC1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAwOyAvKiBORVcgKi9cbiAgICBtaW4td2lkdGg6IDA7XG4gICAgYXBwLXByb2R1Y3QtaXRlbSB7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/product-item-list/product-item-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product-item-list/product-item-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemListComponent", function() { return ProductItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProductItemListComponent = /** @class */ (function () {
    function ProductItemListComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('/products')
            .subscribe(function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) { return x.categories; }));
            _this.groups = lodash__WEBPACK_IMPORTED_MODULE_2__["toPairs"](lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"](lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) { return x.categories; }))), function (recorder, cat) {
                recorder[cat] = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](data, function (item) {
                    return item.categories.includes(cat);
                });
                return recorder;
            }, {}));
        });
    }
    ProductItemListComponent.prototype.ngOnInit = function () {
    };
    ProductItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-item-list',
            template: __webpack_require__(/*! ./product-item-list.component.html */ "./src/app/product-item-list/product-item-list.component.html"),
            styles: [__webpack_require__(/*! ./product-item-list.component.scss */ "./src/app/product-item-list/product-item-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProductItemListComponent);
    return ProductItemListComponent;
}());



/***/ }),

/***/ "./src/app/product-item/product-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-item/product-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"product-photo\" [src]=\"data?.photo\" alt=\"\">\n<div class=\"product-content\">\n  <div class=\"product-name\">\n    {{data?.name}}\n  </div>\n  <div class=\"product-unit\">\n    {{data?.unit}}\n  </div>\n  <div class=\"product-price\">\n    {{data?.price | currency: 'VND':'đ ': '1.0-2'}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-item/product-item.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-item/product-item.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 200px;\n  height: 300px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 12px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  background: #fbfbfb; }\n  :host:hover {\n    opacity: 0.9;\n    background: #eaeaea;\n    cursor: pointer; }\n  :host .product-photo {\n    width: 100%;\n    height: 228px;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    -o-object-fit: contain;\n       object-fit: contain; }\n  :host .product-content {\n    width: 100%;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  :host .product-content .product-name {\n      font-weight: bold;\n      font-size: 13px; }\n  :host .product-content .product-description {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 11px; }\n  :host .product-content .product-price {\n      font-size: 13px;\n      margin-top: 5px;\n      font-weight: bold;\n      color: #0300b3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGF0aG9uZy9Eb2N1bWVudHMvUHJvamVjdHMvbm9kZS1qcy1nZXR0aW5nLXN0YXJ0ZWQvSFRNTC9zcmMvYXBwL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBVHJCO0lBV0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFibkI7SUFnQkksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFtQjtPQUFuQixtQkFBbUIsRUFBQTtFQXBCdkI7SUF1QkksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtFQTVCdkI7TUE4Qk0saUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQS9CckI7TUFrQ00sbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsZUFBZSxFQUFBO0VBckNyQjtNQXdDTSxlQUFlO01BQ2YsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5wcm9kdWN0LXBob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIyOHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMwMzAwYjM7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-item/product-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-item/product-item.component.ts ***!
  \********************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent() {
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductItemComponent.prototype, "data", void 0);
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! ./product-item.component.html */ "./src/app/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.scss */ "./src/app/product-item/product-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phathong/Documents/Projects/node-js-getting-started/HTML/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map