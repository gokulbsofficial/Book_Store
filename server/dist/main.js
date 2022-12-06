(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/book/book.module": [
		"./src/app/components/book/book.module.ts",
		"components-book-book-module"
	],
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts",
		"components-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <app-header></app-header>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_common_my_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/my-common.module */ "./src/app/components/common/my-common.module.ts");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/landing/home/home.component */ "./src/app/components/landing/home/home.component.ts");
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
/* harmony import */ var _core_interceptors_success_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptors/success.interceptor */ "./src/app/core/interceptors/success.interceptor.ts");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules








// Components


// Interceptors



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_landing_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
                    newestOnTop: false
                }),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _components_common_my_common_module__WEBPACK_IMPORTED_MODULE_5__["MyCommonModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptors_success_interceptor__WEBPACK_IMPORTED_MODULE_12__["SuccessInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing/home/home.component */ "./src/app/components/landing/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules

// Components

var routes = [
    {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
    },
    {
        path: 'book',
        loadChildren: './components/book/book.module#BookModule'
    },
    {
        path: 'home',
        component: _components_landing_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  background-color: #313532;\r\n  padding: 60px 20px;\r\n  text-transform: uppercase;\r\n  font-size: 15px;\r\n}\r\n\r\nfooter span {\r\n  margin-top: 30px;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\n.fab {\r\n  margin-left: 20px;\r\n  font-size: 60px;\r\n}\r\n\r\n.fa-js {\r\n  color: #F7E018;\r\n}\r\n\r\n.fa-angular {\r\n  color: #C3002F;\r\n}\r\n\r\n.fa-github {\r\n  color: #FFF;\r\n}"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <span class=\"left\">\r\n    Book Store Web App</span>\r\n  <a href=\"https://developer.mozilla.org\">\r\n    <i class=\"fab fa-js\" aria-hidden=\"true\"></i>\r\n  </a>\r\n  <a href=\"https://angular.io\">\r\n    <i class=\"fab fa-angular\" aria-hidden=\"true\"></i>\r\n  </a>\r\n  <a href=\"https://github.com/GokulSreejith\">\r\n    <i class=\"fab fa-github\" aria-hidden=\"true\"></i>\r\n  </a>\r\n  <span class=\"right\"> &copy; 2022 Book Store - all rights reserved</span>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/common/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-navigation></app-navigation>\r\n</header>"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/my-common.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/common/my-common.module.ts ***!
  \*******************************************************/
/*! exports provided: MyCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCommonModule", function() { return MyCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/common/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules



// Components



var MyCommonModule = /** @class */ (function () {
    function MyCommonModule() {
    }
    MyCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ]
        })
    ], MyCommonModule);
    return MyCommonModule;
}());



/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\r\n  overflow: hidden;\r\n  background-color: #313532;\r\n}\r\n\r\n.topnav>a {\r\n  float: left;\r\n  display: block;\r\n  color: #FFF;\r\n  text-align: center;\r\n  padding: 25px 18px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background-color: #F5B324;\r\n  color: #000;\r\n}\r\n\r\n.topnav a.active {\r\n  background-color: #2196F3;\r\n  color: #FFF;\r\n}\r\n\r\n.topnav .search-container {\r\n  float: left;\r\n  margin-left: 5px;\r\n}\r\n\r\n.topnav .search-container button {\r\n  padding: 8px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #DDD;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.topnav input[type=text] {\r\n  padding: 8px;\r\n  width: 250px;\r\n  margin-top: 15px;\r\n  font-size: 17px;\r\n  border: none;\r\n}\r\n\r\n.topnav .search-container button:hover {\r\n  background: #CCC;\r\n}\r\n\r\n.menu-item-right {\r\n  float: right;\r\n  display: block;\r\n  color: #FFF;\r\n  text-align: center;\r\n  padding: 25px 18px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav .search-container {\r\n    float: none;\r\n  }\r\n  .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n  .topnav input[type=text] {\r\n    border: 1px solid #CCC;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"topnav\">\r\n  <a routerLink=\"/home\">Home</a>\r\n  <a routerLink=\"/book/store/default\">Book Store</a>\r\n  <ng-template [ngIf]=\"isUserLogged()\">\r\n    <a routerLink=\"/user/profile/mine\">My Profile</a>\r\n    <a routerLink=\"/user/purchaseHistory\">My Purchase History</a>\r\n    <a *ngIf=\"isUserAdmin()\" routerLink=\"/book/create\">Create Book</a>\r\n  </ng-template>\r\n  <div class=\"search-container\">\r\n    <form #formDir=\"ngForm\" [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\r\n      <input type=\"text\" name=\"query\" placeholder=\"title, author, genre, ISBN...\" formControlName=\"query\" />\r\n      <button type=\"submit\" [disabled]=\"searchForm.invalid\"><i class=\"fa fa-search\"></i></button>\r\n    </form>\r\n  </div>\r\n  <div>\r\n    <ng-template [ngIf]=\"!isUserLogged()\">\r\n      <a class=\"menu-item-right\" routerLink=\"/user/register\">Register</a>\r\n      <a class=\"menu-item-right\" routerLink=\"/user/login\">Login</a>\r\n    </ng-template>\r\n    <ng-template [ngIf]=\"isUserLogged()\">\r\n      <a class=\"menu-item-right\" routerLink=\"/home\" (click)=\"logout()\">\r\n        {{getUsername()}}\r\n        <span>Hello, {{username}}</span> Logout\r\n      </a>\r\n      <a class=\"menu-item-right\" routerLink=\"/user/cart\">Cart ({{cartItems}})</a>\r\n    </ng-template>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/cart.service */ "./src/app/core/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators and Lifehooks

// Forms

// Router

// Services


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, helperService, cartService) {
        this.router = router;
        this.helperService = helperService;
        this.cartService = cartService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusChecker = window.setInterval(function () { return _this.tick(); }, 600000);
        this.isLogged = this.helperService.isLoggedIn();
        this.initForm();
        if (this.isLogged) {
            this.getCartSize();
        }
        this.isLoggedSub$ = this.helperService
            .isUserLogged
            .subscribe(function (data) {
            _this.isLogged = data;
        });
        this.cartStatusSub$ = this.helperService
            .cartStatus
            .subscribe(function (data) {
            if (data === 'add') {
                _this.cartItems++;
            }
            else if (data === 'remove') {
                _this.cartItems--;
            }
            else if (data === 'updateStatus') {
                _this.getCartSize();
            }
        });
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.statusChecker);
        this.isLoggedSub$.unsubscribe();
        this.cartStatusSub$.unsubscribe();
    };
    NavigationComponent.prototype.initForm = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'query': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    NavigationComponent.prototype.onSubmit = function () {
        var query = this.searchForm.value.query.trim();
        if (query.length !== 0) {
            this.router.navigate(["/book/store/" + query]);
            this.helperService.searchQuery.next();
        }
    };
    NavigationComponent.prototype.tick = function () {
        this.isLogged = this.helperService.isLoggedIn();
    };
    NavigationComponent.prototype.isUserLogged = function () {
        return this.isLogged;
    };
    NavigationComponent.prototype.isUserAdmin = function () {
        if (!this.isAdmin) {
            this.isAdmin = this.helperService.isAdmin();
        }
        return this.isAdmin;
    };
    NavigationComponent.prototype.getUsername = function () {
        if (!this.username) {
            this.username = this.helperService.getProfile().username;
        }
    };
    NavigationComponent.prototype.getCartSize = function () {
        var _this = this;
        this.cartService
            .getCartSize()
            .subscribe(function (res) {
            _this.cartItems = res.data;
        });
    };
    NavigationComponent.prototype.logout = function () {
        this.username = undefined;
        this.isAdmin = undefined;
        this.cartItems = undefined;
        this.helperService.clearSession();
        this.helperService.isUserLogged.next(false);
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/common/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/common/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/home/home.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/landing/home/home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-family: 'Shojumaru', cursive;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-top: 50px;\r\n  color: #CCC;\r\n}\r\n\r\n.books-home {\r\n  margin: 30px auto;\r\n}\r\n\r\n.panel h2 {\r\n  font-family: 'Wendy One', sans-serif;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  margin-left: 145px;\r\n  text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/components/landing/home/home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/landing/home/home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to our Book Store</h1>\r\n<div *ngIf=\"mostPurchasedBooks\" class=\"books-home\">\r\n  <div class=\"panel\">\r\n    <h2>Most Purchased Books</h2>\r\n  </div>\r\n  <app-book *ngFor=\"let book of mostPurchasedBooks\" [book]=\"book\"></app-book>\r\n</div>\r\n<div *ngIf=\"bestRatedBooks\" class=\"books-home\">\r\n  <div class=\"panel\">\r\n    <h2>Best Rated Books</h2>\r\n  </div>\r\n  <app-book *ngFor=\"let book of bestRatedBooks\" [book]=\"book\"></app-book>\r\n</div>\r\n<div *ngIf=\"newestBooks\" class=\"books-home\">\r\n  <div class=\"panel\">\r\n    <h2>Newest Books</h2>\r\n  </div>\r\n  <app-book *ngFor=\"let book of newestBooks\" [book]=\"book\"></app-book>\r\n</div>"

/***/ }),

/***/ "./src/app/components/landing/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators and Lifehooks

// Services

var newestBooksQuery = '?sort={"creationDate":-1}&limit=5';
var bestRatedBooksQuery = '?sort={"currentRating":-1}&limit=5';
var mostPurchasedBooksQuery = '?sort={"purchasesCount":-1}&limit=5';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookService) {
        this.bookService = bookService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService
            .search(newestBooksQuery)
            .subscribe(function (res) {
            _this.newestBooks = res.data;
        });
        this.bookService
            .search(bestRatedBooksQuery)
            .subscribe(function (res) {
            _this.bestRatedBooks = res.data;
        });
        this.bookService
            .search(mostPurchasedBooksQuery)
            .subscribe(function (res) {
            _this.mostPurchasedBooks = res.data;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/landing/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/landing/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/directives/is-isbn.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/core/directives/is-isbn.directive.ts ***!
  \******************************************************/
/*! exports provided: isIsbnValidator, IsIsbnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIsbnValidator", function() { return isIsbnValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIsbnDirective", function() { return IsIsbnDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var validator_lib_isISBN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator/lib/isISBN */ "./node_modules/validator/lib/isISBN.js");
/* harmony import */ var validator_lib_isISBN__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isISBN__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Forms

// Validator

var isIsbnValidator = function (control) {
    var isControlIsbn = validator_lib_isISBN__WEBPACK_IMPORTED_MODULE_2___default()(control.value);
    return !isControlIsbn ? { 'isIsbn': false } : null;
};
var IsIsbnDirective = /** @class */ (function () {
    function IsIsbnDirective() {
    }
    IsIsbnDirective_1 = IsIsbnDirective;
    IsIsbnDirective.prototype.validate = function (control) {
        return isIsbnValidator(control);
    };
    IsIsbnDirective = IsIsbnDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appIsIsbn]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: IsIsbnDirective_1,
                    multi: true
                }]
        })
    ], IsIsbnDirective);
    return IsIsbnDirective;
    var IsIsbnDirective_1;
}());



/***/ }),

/***/ "./src/app/core/directives/is-url.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/directives/is-url.directive.ts ***!
  \*****************************************************/
/*! exports provided: isUrlValidator, IsUrlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlValidator", function() { return isUrlValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUrlDirective", function() { return IsUrlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator/lib/isURL */ "./node_modules/validator/lib/isURL.js");
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isURL__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Forms

// Validator

var isUrlValidator = function (control) {
    var isControlUrl = validator_lib_isURL__WEBPACK_IMPORTED_MODULE_2___default()(control.value);
    return !isControlUrl ? { 'isUrl': false } : null;
};
var IsUrlDirective = /** @class */ (function () {
    function IsUrlDirective() {
    }
    IsUrlDirective_1 = IsUrlDirective;
    IsUrlDirective.prototype.validate = function (control) {
        return isUrlValidator(control);
    };
    IsUrlDirective = IsUrlDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appIsUrl]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: IsUrlDirective_1,
                    multi: true
                }]
        })
    ], IsUrlDirective);
    return IsUrlDirective;
    var IsUrlDirective_1;
}());



/***/ }),

/***/ "./src/app/core/directives/must-match.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/directives/must-match.directive.ts ***!
  \*********************************************************/
/*! exports provided: mustMatchValidator, MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustMatchValidator", function() { return mustMatchValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Forms

var mustMatchValidator = function (control) {
    var password = control.get('password');
    var confirmPasssword = control.get('confirmPassword');
    return password && confirmPasssword && password.value !== confirmPasssword.value ? { 'mustMatch': true } : null;
};
var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (control) {
        return mustMatchValidator(control);
    };
    MustMatchDirective = MustMatchDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMustMatch]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: MustMatchDirective_1,
                    multi: true
                }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
    var MustMatchDirective_1;
}());



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators

// RXJS


// Services

var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(toastr) {
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.error instanceof ProgressEvent) {
                // A client-side or network error occurred
                _this.toastr.error('Network Error!');
            }
            else {
                // The backend returned an unsuccessful response code
                _this.toastr.error(err.error.message, err.status.toString() + " - " + err.statusText);
                if (err.error.errors) {
                    for (var e in err.error.errors) {
                        if (err.error.errors.hasOwnProperty(e)) {
                            _this.toastr.error(err.error.errors[e]);
                        }
                    }
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/core/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators

// Services

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(heplerService) {
        this.heplerService = heplerService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        if (this.heplerService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.heplerService.getToken()
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/success.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/success.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: SuccessInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessInterceptor", function() { return SuccessInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/core/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators


// HTTP

// Services


var SuccessInterceptor = /** @class */ (function () {
    function SuccessInterceptor(toastr, helperService) {
        this.toastr = toastr;
        this.helperService = helperService;
    }
    SuccessInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                if (event.body.message || event.body.message !== '') {
                    _this.toastr.success(event.body.message);
                }
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && request.url.endsWith('login') ||
                event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && request.url.endsWith('register')) {
                _this.helperService.saveSession(event.body.data);
                _this.helperService.isUserLogged.next(true);
                _this.helperService.cartStatus.next('updateStatus');
            }
        }));
    };
    SuccessInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], SuccessInterceptor);
    return SuccessInterceptor;
}());



/***/ }),

/***/ "./src/app/core/models/book.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/book.model.ts ***!
  \*******************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(_id, title, author, genre, year, description, cover, isbn, pagesCount, price, qty, creationDate, currentRating, ratingPoints, ratedCount, purchasesCount, comments) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.description = description;
        this.cover = cover;
        this.isbn = isbn;
        this.pagesCount = pagesCount;
        this.price = price;
        this.qty = qty;
        this.creationDate = creationDate;
        this.currentRating = currentRating;
        this.ratingPoints = ratingPoints;
        this.ratedCount = ratedCount;
        this.purchasesCount = purchasesCount;
        this.comments = comments;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/core/pipes/comment-time.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/core/pipes/comment-time.pipe.ts ***!
  \*************************************************/
/*! exports provided: CommentTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentTimePipe", function() { return CommentTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

function calcTime(dateIsoFormat) {
    var diff = new Date().getTime() - (new Date(dateIsoFormat).getTime());
    diff = Math.floor(diff / 60000);
    if (diff < 1) {
        return 'less than a minute';
    }
    if (diff < 60) {
        return diff + ' minute' + pluralize(diff);
    }
    diff = Math.floor(diff / 60);
    if (diff < 24) {
        return diff + ' hour' + pluralize(diff);
    }
    diff = Math.floor(diff / 24);
    if (diff < 30) {
        return diff + ' day' + pluralize(diff);
    }
    diff = Math.floor(diff / 30);
    if (diff < 12) {
        return diff + ' month' + pluralize(diff);
    }
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) {
            return 's';
        }
        else {
            return '';
        }
    }
}
var CommentTimePipe = /** @class */ (function () {
    function CommentTimePipe() {
    }
    CommentTimePipe.prototype.transform = function (value, args) {
        return calcTime(value);
    };
    CommentTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'commentTime',
            pure: true
        })
    ], CommentTimePipe);
    return CommentTimePipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/shorten-string.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/core/pipes/shorten-string.pipe.ts ***!
  \***************************************************/
/*! exports provided: ShortenStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenStringPipe", function() { return ShortenStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    ShortenStringPipe.prototype.transform = function (value, len) {
        if (value.length <= len) {
            return value;
        }
        return value.slice(0, len) + '...';
    };
    ShortenStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'shortenString',
            pure: true
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());



/***/ }),

/***/ "./src/app/core/services/book.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/book.service.ts ***!
  \***********************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators

// HTTP


var domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
var getSingleBookEndpoint = domain + "/book/details/";
var createBookEndpoint = domain + "/book/add";
var editBookEndpoint = domain + "/book/edit/";
var deleteBookEndpoint = domain + "/book/delete/";
var rateBookEndpoint = domain + "/book/rate/";
var addToFavoritesEndpoint = domain + "/book/addToFavorites/";
var searchBookEndpoint = domain + "/book/search";
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getSingleBook = function (id) {
        return this.http.get(getSingleBookEndpoint + id);
    };
    BookService.prototype.createBook = function (payload) {
        return this.http.post(createBookEndpoint, payload);
    };
    BookService.prototype.editBook = function (id, payload) {
        return this.http.put(editBookEndpoint + id, payload);
    };
    BookService.prototype.deleteBook = function (id) {
        return this.http.delete(deleteBookEndpoint + id);
    };
    BookService.prototype.rateBook = function (id, payload) {
        return this.http.post(rateBookEndpoint + id, payload);
    };
    BookService.prototype.addToFavourites = function (id) {
        return this.http.post(addToFavoritesEndpoint + id, {});
    };
    BookService.prototype.search = function (query) {
        return this.http.get(searchBookEndpoint + query);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/core/services/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators


// HTTP


var domain = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL;
var baseUrl = domain + "/user/cart";
var getCartSizeEndpoint = domain + "/cart/getSize";
var addToCartEndpoint = "/add/";
var removeFromCartEndpoint = "/delete/";
var checkoutEndpoint = "/checkout";
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.getCartSize = function () {
        return this.http.get(getCartSizeEndpoint);
    };
    CartService.prototype.getCart = function () {
        return this.http.get(baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            res.data.books.map(function (b) { return (b.qty = 1); });
            return res;
        }));
    };
    CartService.prototype.addToCart = function (id) {
        return this.http.post(baseUrl + addToCartEndpoint + id, {});
    };
    CartService.prototype.removeFromCart = function (id) {
        return this.http.delete(baseUrl + removeFromCartEndpoint + id);
    };
    CartService.prototype.checkout = function (payload) {
        return this.http.post(baseUrl + checkoutEndpoint, payload);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/core/services/comment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/comment.service.ts ***!
  \**************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators

// HTTP


var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + "/comment";
var addCommentEndpoint = "/add/";
var editCommentEndpoint = "/edit/";
var deleteCommentEndpoint = "/delete/";
var getLatestFiveEndpont = "/getLatestFiveByUser/";
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.getComments = function (id, page) {
        return this.http.get(baseUrl + "/" + id + "/" + page);
    };
    CommentService.prototype.getLatestFiveComments = function (id) {
        return this.http.get(baseUrl + getLatestFiveEndpont + id);
    };
    CommentService.prototype.addComment = function (id, payload) {
        return this.http.post(baseUrl + addCommentEndpoint + id, payload);
    };
    CommentService.prototype.editComment = function (id, payload) {
        return this.http.put(baseUrl + editCommentEndpoint + id, payload);
    };
    CommentService.prototype.deleteComment = function (id) {
        return this.http.delete(baseUrl + deleteCommentEndpoint + id);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/core/services/helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/helper.service.ts ***!
  \*************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// RXJS

// JWT Decoding

var HelperService = /** @class */ (function () {
    function HelperService() {
        this.isUserLogged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchQuery = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cartStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HelperService.prototype.saveSession = function (token) {
        localStorage.setItem('token', token);
    };
    HelperService.prototype.clearSession = function () {
        localStorage.clear();
    };
    HelperService.prototype.getProfile = function () {
        try {
            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(this.getToken());
            return decoded.sub;
        }
        catch (err) {
            return {};
        }
    };
    HelperService.prototype.isLoggedIn = function () {
        try {
            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(this.getToken());
            if (decoded.exp > Date.now() / 1000) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
    };
    HelperService.prototype.isAdmin = function () {
        try {
            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(this.getToken());
            if (decoded.exp < Date.now() / 1000 || !decoded.sub.isAdmin) {
                return false;
            }
            return true;
        }
        catch (err) {
            return false;
        }
    };
    HelperService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/core/shared/book/book.component.css":
/*!*****************************************************!*\
  !*** ./src/app/core/shared/book/book.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-card {\r\n  border: 5px solid transparent;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin: 10px;\r\n  width: 15%;\r\n}\r\n\r\n.book-card img {\r\n  width: 100%;\r\n  height: 350px;\r\n}\r\n\r\n.book-card h5 {\r\n  display: inline-block;\r\n  font-size: 19px;\r\n}\r\n\r\n.book-card h5, .book-card h6, .book-card p {\r\n  margin: 10px 10px;\r\n}\r\n\r\n.book-card:hover {\r\n  background-color: #91A3B0;\r\n  border-color: #91A3B0;\r\n  color: #000;\r\n}"

/***/ }),

/***/ "./src/app/core/shared/book/book.component.html":
/*!******************************************************!*\
  !*** ./src/app/core/shared/book/book.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"book-card\">\r\n  <img src=\"{{book.cover}}\" alt=\"book-cover\">\r\n  <h5>{{book.title}}</h5>\r\n  <h6>{{book.author}}</h6>\r\n  <p>{{book.price}} &#36;</p>\r\n  <a class=\"btn btn-primary\" routerLink=\"/book/details/{{book._id}}\">View Details</a>\r\n</div>"

/***/ }),

/***/ "./src/app/core/shared/book/book.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/shared/book/book.component.ts ***!
  \****************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/core/models/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators

// Models

var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('book'),
        __metadata("design:type", _models_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookComponent.prototype, "book", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/core/shared/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/core/shared/book/book.component.css")]
        })
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/cart/cart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/core/shared/cart/cart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart {\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.pull-right {\r\n  margin: 5px;\r\n}\r\n\r\n.card-body {\r\n  background-color: #313532;\r\n}\r\n\r\n#book-price {\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-muted {\r\n  margin-left: 5px;\r\n}\r\n\r\n.quantity {\r\n  float: left;\r\n  margin-right: 15px;\r\n  background-color: #EEE;\r\n  position: relative;\r\n  width: 80px;\r\n  overflow: hidden;\r\n}\r\n\r\n.quantity input {\r\n  margin: 0;\r\n  text-align: center;\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0;\r\n  float: right;\r\n  color: #000;\r\n  font-size: 20px;\r\n  border: 0;\r\n  outline: 0;\r\n  background-color: #F6F6F6;\r\n}\r\n\r\n.quantity input.qty {\r\n  position: relative;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px 25px 10px 10px;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  border-radius: 0;\r\n  background-clip: padding-box;\r\n}\r\n\r\n.alert {\r\n  width: 25%;\r\n  float: right;\r\n  font-size: 15px;\r\n}"

/***/ }),

/***/ "./src/app/core/shared/cart/cart.component.html":
/*!******************************************************!*\
  !*** ./src/app/core/shared/cart/cart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"cartForm\">\r\n    <div class=\"card shopping-cart\">\r\n      <div class=\"card-header bg-dark text-light\">\r\n        <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n        Shopping Cart\r\n        <div class=\"pull-right\">\r\n          Total price: <b>{{cart.totalPrice | number:'1.2-2'}}&#x24;</b>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n      <div class=\"card-body\" *ngFor=\"let b of cart.books\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-12 col-md-2 text-center\">\r\n            <img class=\"img-responsive\" src=\"{{b.cover}}\" alt=\"cover\" width=\"100\" height=\"150\">\r\n          </div>\r\n          <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-6\">\r\n            <h4 class=\"product-name\"><strong>{{b.title}}</strong></h4>\r\n            <h4>\r\n              <small>{{b.author}}</small>\r\n            </h4>\r\n          </div>\r\n          <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\r\n            <div id=\"book-price\" class=\"col-3 col-sm-3 col-md-6 text-md-right\" >\r\n              <h6>\r\n                <strong>\r\n                  {{b.price}} <span class=\"text-muted\">x</span>\r\n                </strong>\r\n              </h6>\r\n            </div>\r\n            <div class=\"col-4 col-sm-4 col-md-4\">\r\n              <div class=\"quantity\">\r\n                <input\r\n                  class=\"qty\"\r\n                  type=\"number\"\r\n                  size=\"4\"\r\n                  step=\"1\"\r\n                  name=\"{{b._id}}\"\r\n                  formControlName=\"{{b._id}}\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2 col-sm-2 col-md-2 text-right\">\r\n              <button class=\"btn btn-outline-danger btn-xs\" (click)=\"openRemoveModal(remove, b._id)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div \r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"getControl(b._id).invalid\r\n          && (getControl(b._id).dirty\r\n          || getControl(b._id).touched)\"\r\n        >\r\n          <div *ngIf=\"getControl(b._id).errors.required\">\r\n            Quantity is required\r\n          </div>\r\n          <div *ngIf=\"getControl(b._id).errors.min || getControl(b._id).errors.max\">\r\n            Quantity must be between 1 and 20\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-dark\">\r\n        <div class=\"pull-right\">\r\n          <div class=\"pull-right\">\r\n            Total price: <b>{{cart.totalPrice | number:'1.2-2'}}&#x24;</b>\r\n          </div>\r\n          <input\r\n            class=\"btn btn-success pull-right\"\r\n            type=\"submit\" value=\"Checkout\"\r\n            [disabled]=\"cartForm.invalid\"\r\n            (click)=\"onSubmit()\"\r\n          />\r\n          <a routerLink=\"/book/store/default\" class=\"btn btn-secondary\">\r\n            Continue shopping\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ng-template #remove>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you really want to remove this book from cart?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onRemove()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeModalRef.hide()\">No</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/core/shared/cart/cart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/shared/cart/cart.component.ts ***!
  \****************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators and Lifehooks

// Router

// Forms


// Services



var CartComponent = /** @class */ (function () {
    function CartComponent(router, cartService, helperService, modalService) {
        this.router = router;
        this.cartService = cartService;
        this.helperService = helperService;
        this.modalService = modalService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService
            .getCart()
            .subscribe(function (res) {
            _this.cart = res.data;
            _this.cartForm = _this.toFormGroup(_this.cart.books);
            _this.onChanges();
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.changesSub$.unsubscribe();
    };
    CartComponent.prototype.toFormGroup = function (books) {
        var group = {};
        books.forEach(function (book) {
            group[book._id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](book.qty || '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)
            ]);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
    };
    CartComponent.prototype.onChanges = function () {
        var _this = this;
        this.changesSub$ = this.cartForm
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(800), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (val) {
            if (_this.lastCartState !== JSON.stringify(val)) {
                _this.lastCartState = JSON.stringify(val);
                _this.reCalcSum(val);
            }
        });
    };
    CartComponent.prototype.openRemoveModal = function (template, id) {
        this.lastDeleteId = id;
        this.removeModalRef = this.modalService.show(template, { class: 'myModal modal-sm' });
    };
    CartComponent.prototype.onRemove = function () {
        var _this = this;
        this.cartService
            .removeFromCart(this.lastDeleteId)
            .subscribe(function () {
            _this.helperService.cartStatus.next('remove');
            _this.cart.books = _this.cart.books.filter(function (b) { return b._id !== _this.lastDeleteId; });
            _this.reCalcSum(_this.cartForm.value);
            _this.removeModalRef.hide();
        });
    };
    CartComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cartService
            .checkout(this.cartForm.value)
            .subscribe(function () {
            _this.helperService.cartStatus.next('updateStatus');
            _this.router.navigate(['/user/purchaseHistory']);
        });
    };
    CartComponent.prototype.reCalcSum = function (formValues) {
        var price = 0;
        for (var _i = 0, _a = this.cart.books; _i < _a.length; _i++) {
            var b = _a[_i];
            price += b.price * formValues[b._id];
        }
        this.cart.totalPrice = price;
    };
    CartComponent.prototype.getControl = function (id) {
        return this.cartForm.get(id);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/core/shared/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/core/shared/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/comment/comment.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/shared/comment/comment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment {\r\n  padding: 20px;\r\n  background-color: #313532;\r\n  border-radius: 10px;\r\n}\r\n\r\n.col-12 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.col-md-9 {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.mb-2 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment-body button {\r\n  float: left;\r\n  margin-left: 10px;\r\n}\r\n\r\n.comment-meta {\r\n  text-align: left;\r\n}\r\n\r\n.comment-body p {\r\n  text-align: justify;\r\n}"

/***/ }),

/***/ "./src/app/core/shared/comment/comment.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/shared/comment/comment.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"comments col-md-9\">\r\n    <h3 class=\"mb-2\">Comments</h3>\r\n\r\n    <div class=\"row pt-2\">\r\n      <div class=\"col-12\">\r\n        <button \r\n          [hidden]=\"!isLogged\"\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          (click)=\"openFormModal(commentFormTemplate)\">Add Comment\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"comment mb-2 row\" *ngFor=\"let c of comments\">\r\n      <div class=\"comment-avatar col-md-1 col-sm-2 text-center pr-1\">\r\n        <a routerLink=\"/user/profile/{{c.user.username}}\">\r\n          <img class=\"mx-auto rounded-circle img-fluid\" src=\"{{c.user.avatar}}\" alt=\"avatar\" />\r\n        </a>\r\n      </div>\r\n      <div class=\"comment-content col-md-11 col-sm-10\">\r\n        <h6 class=\"small comment-meta\">\r\n          <a routerLink=\"/user/profile/{{c.user.username}}\">by {{c.user.username}}</a> {{c.creationDate | commentTime}} ago\r\n        </h6>\r\n        <div class=\"comment-body\">\r\n          <p>{{c.content}}</p>\r\n          <button \r\n            [hidden]=\"!isAdmin && c.user._id !== userId\"\r\n            type=\"button\"\r\n            class=\"btn btn-primary btn-sm\"\r\n            (click)=\"openFormModal(commentFormTemplate, c._id)\">Edit Comment\r\n          </button>\r\n          <button\r\n          [hidden]=\"!isAdmin && c.user._id !== userId\"\r\n          type=\"button\"\r\n          class=\"btn btn-danger btn-sm\"\r\n          (click)=\"openRemoveModal(remove, c._id)\">Delete Comment\r\n        </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2\">\r\n      <div class=\"col-12\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"loadMoreComments()\">Load More...</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #commentFormTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{action}} Comment</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"commentModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #formDir=\"ngForm\" [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <textarea class=\"form-control\" name=\"content\" cols=\"30\" rows=\"10\" formControlName=\"content\"></textarea>\r\n        <div class=\"test\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"commentModalRef.hide()\" [disabled]=\"commentForm.invalid\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #remove>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you really want to delete your comment?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"removeComment()\">Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"removeModalRef.hide()\">No</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/core/shared/comment/comment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/shared/comment/comment.component.ts ***!
  \**********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/comment.service */ "./src/app/core/services/comment.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators and Lifehooks

// Services



var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService, modalService) {
        this.commentService = commentService;
        this.modalService = modalService;
        this.comments = [];
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.commentService
            .getComments(this.bookId, this.comments.length.toString())
            .subscribe(function (res) {
            _this.comments = res.data;
        });
    };
    CommentComponent.prototype.openFormModal = function (template, id) {
        if (id) {
            var content = '';
            this.isFromEdit = true;
            this.lastEditId = id;
            for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c._id === id) {
                    content = c.content;
                    break;
                }
            }
            this.action = 'Edit';
            this.commentForm.patchValue({ content: content });
        }
        else {
            this.action = 'Create';
            this.isFromEdit = false;
            this.commentForm.patchValue({ content: '' });
        }
        this.commentModalRef = this.modalService.show(template, { class: 'myModal' });
    };
    CommentComponent.prototype.openRemoveModal = function (template, id) {
        this.lastDeleteId = id;
        this.removeModalRef = this.modalService.show(template, { class: 'myModal modal-sm' });
    };
    CommentComponent.prototype.onSubmit = function () {
        if (this.isFromEdit) {
            this.modifyComment();
        }
        else {
            this.createComment();
        }
    };
    CommentComponent.prototype.loadMoreComments = function () {
        var _this = this;
        this.commentService
            .getComments(this.bookId, this.comments.length.toString())
            .subscribe(function (res) {
            if (res.data.length !== 0) {
                (_a = _this.comments).splice.apply(_a, [_this.comments.length, 0].concat(res.data));
            }
            var _a;
        });
    };
    CommentComponent.prototype.createComment = function () {
        var _this = this;
        this.commentService
            .addComment(this.bookId, this.commentForm.value)
            .subscribe(function (res) {
            _this.comments.unshift(res.data);
        });
        this.commentForm.reset();
    };
    CommentComponent.prototype.modifyComment = function () {
        var _this = this;
        var editedContent = this.commentForm.value.content;
        this.commentService
            .editComment(this.lastEditId, this.commentForm.value)
            .subscribe(function () {
            for (var _i = 0, _a = _this.comments; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c._id === _this.lastEditId) {
                    c.content = editedContent;
                    break;
                }
            }
        });
        this.commentForm.reset();
    };
    CommentComponent.prototype.removeComment = function () {
        var _this = this;
        this.removeModalRef.hide();
        var delId = this.lastDeleteId;
        this.commentService
            .deleteComment(this.lastDeleteId)
            .subscribe(function () {
            _this.comments = _this.comments.filter(function (c) { return c._id !== delId; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bookId'),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "bookId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isLogged'),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "isLogged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isAdmin'),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "isAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userId'),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "userId", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/core/shared/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/core/shared/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/core/shared/comment/comment.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/core/shared/cart/cart.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/core/shared/book/book.component.ts");
/* harmony import */ var _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/must-match.directive */ "./src/app/core/directives/must-match.directive.ts");
/* harmony import */ var _directives_is_url_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/is-url.directive */ "./src/app/core/directives/is-url.directive.ts");
/* harmony import */ var _directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/is-isbn.directive */ "./src/app/core/directives/is-isbn.directive.ts");
/* harmony import */ var _pipes_comment_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/comment-time.pipe */ "./src/app/core/pipes/comment-time.pipe.ts");
/* harmony import */ var _pipes_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/shorten-string.pipe */ "./src/app/core/pipes/shorten-string.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules



// Components



// Directives



// Pipes


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_7__["MustMatchDirective"],
                _directives_is_url_directive__WEBPACK_IMPORTED_MODULE_8__["IsUrlDirective"],
                _directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_9__["IsIsbnDirective"],
                _pipes_comment_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CommentTimePipe"],
                _pipes_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_11__["ShortenStringPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _directives_must_match_directive__WEBPACK_IMPORTED_MODULE_7__["MustMatchDirective"],
                _directives_is_url_directive__WEBPACK_IMPORTED_MODULE_8__["IsUrlDirective"],
                _directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_9__["IsIsbnDirective"],
                _pipes_comment_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CommentTimePipe"],
                _pipes_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_11__["ShortenStringPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
var environment = {
    production: true,
    serverURL: "/api"
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gokulsreejith/Downloads/NAN MUTHALVAL/Projects/Book-Store/Boot_Store_Final/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map