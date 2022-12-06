(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-user-module"],{

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  margin: 135px auto;\r\n}"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form login-form\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Login Here</h1>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"username\" name=\"username\" placeholder=\"Username\" formControlName=\"username\" />\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"username.errors.required\">\r\n          Username is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"password\" class=\"pass\" name=\"password\" placeholder=\"***\" formControlName=\"password\" />\r\n      <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          Password is required\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength || password.errors.maxlength\">\r\n          Password must be between 3 and 16 symbols\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"submit\" class=\"submit\" value=\"Login\" [disabled]=\"loginForm.invalid\" />\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)
            ]),
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService
            .login(this.loginForm.value)
            .subscribe(function () {
            _this.router.navigate(['/home']);
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile {\r\n  margin-top: 40px !important;\r\n}\r\n\r\n#avatar {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n#avatar-input {\r\n  width: 50%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.admin-panel button {\r\n  margin-left: 5px;\r\n}\r\n\r\n.favorite-books {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.favorite-books h2 {\r\n  font-family: 'Wendy One', sans-serif;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.no-favorite {\r\n  margin-bottom: 11.6em;\r\n}"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" id=\"profile\" class=\"row my-2\">\r\n  <div class=\"col-lg-8 order-lg-2\">\r\n    <div class=\"tab-content py-4\">\r\n      <div class=\"tab-pane active\">\r\n        <h5 class=\"mb-3\">Username: {{user.username}}</h5>\r\n        <div *ngIf=\"isAdmin\" class=\"admin-panel clear-fix\">\r\n          <button class=\"btn btn-danger\" (click)=\"blockComments(user.id)\">Block Comments</button>\r\n          <button class=\"btn btn-success\" (click)=\"unblockComments(user.id)\">Unblock Comments</button>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h6>Role</h6>\r\n            <p>\r\n              {{user.isAdmin? 'Admin': 'User'}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h6>Comments</h6>\r\n            <p>\r\n              {{user.commentsCount}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <h5 class=\"mt-2\"><span class=\"fa fa-clock-o ion-clock float-right\"></span>Latest comments by {{user.username}}</h5>\r\n            <table class=\"table table-sm table-hover table-striped\" *ngIf=\"comments && comments.length > 0\">\r\n              <tbody>\r\n                <tr *ngFor=\"let c of comments\">\r\n                  <td>\r\n                    {{c.content | shortenString:100}} <a routerLink=\"/book/details/{{c.book._id}}\">{{c.book.title}}</a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div [hidden]=\"user.commentsCount > 0\">\r\n              No comments yet\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 order-lg-1 text-center\">\r\n    <img src=\"{{user.avatar}}\" id=\"avatar\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n    <ng-template [ngIf]=\"currentUserId === user.id || isAdmin\">\r\n      <h6 class=\"mt-2\">Change avatar (URL to a new image)</h6>\r\n      <label class=\"custom-file\">\r\n        <form #formDir=\"ngForm\" [formGroup]=\"avatarForm\" (ngSubmit)=\"onSubmit()\">\r\n          <input class=\"form-control\" id=\"avatar-input\" type=\"url\" name=\"avatar\" formControlName=\"avatar\" />\r\n          <input class=\"btn btn-success\" type=\"submit\" value=\"Submit\" [disabled]=\"avatarForm.invalid\" />\r\n        </form>\r\n      </label>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"user\" class=\"favorite-books\">\r\n  <h2>Favorite Books List</h2>\r\n  <app-book *ngFor=\"let book of user.favoriteBooks\" [book]=\"book\"></app-book>\r\n  <div [hidden]=\"user.favoriteBooks.length > 0\" class=\"no-favorite\">\r\n    No books to the list yet\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!user\" class=\"no-results\">\r\n  <img src=\"https://i.imgur.com/KRVihMq.png\" alt=\"no-item-found\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/comment.service */ "./src/app/core/services/comment.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/directives/is-url.directive */ "./src/app/core/directives/is-url.directive.ts");
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



// Custom Validators

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, commentService, userService, helperService) {
        this.route = route;
        this.commentService = commentService;
        this.userService = userService;
        this.helperService = helperService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeChangeSub$ = this.route.params.subscribe(function (params) {
            var username = params['username'];
            if (username === 'mine') {
                username = _this.helperService.getProfile().username;
            }
            _this.userService
                .getProfile(username)
                .subscribe(function (res) {
                _this.user = res.data;
                _this.getComments();
            });
        });
        this.isAdmin = this.helperService.isAdmin();
        this.currentUserId = this.helperService.getProfile().id;
        this.avatarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'avatar': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_6__["isUrlValidator"]
            ])
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.routeChangeSub$.unsubscribe();
    };
    ProfileComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService
            .getLatestFiveComments(this.user.id)
            .subscribe(function (res) {
            _this.comments = res.data;
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.changeUserAvatar();
    };
    ProfileComponent.prototype.changeUserAvatar = function () {
        var _this = this;
        var newAvatar = this.avatar.value;
        var payload = {
            id: this.user.id,
            avatar: newAvatar
        };
        this.userService
            .changeAvatar(payload)
            .subscribe(function () {
            _this.user.avatar = newAvatar;
            _this.avatarForm.reset();
        });
    };
    ProfileComponent.prototype.blockComments = function (id) {
        this.userService
            .blockComments(id)
            .subscribe();
    };
    ProfileComponent.prototype.unblockComments = function (id) {
        this.userService
            .unblockComments(id)
            .subscribe();
    };
    Object.defineProperty(ProfileComponent.prototype, "avatar", {
        get: function () {
            return this.avatarForm.get('avatar');
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/receipts/receipts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/receipts/receipts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin-top: 50px;\r\n  font-family: 'Shojumaru', cursive;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.shopping-cart {\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.pull-right {\r\n  margin: 5px;\r\n}\r\n\r\n.card-body {\r\n  background-color: #313532;\r\n}\r\n\r\n#book-price {\r\n  padding-top: 10px;\r\n}\r\n\r\n.text-muted {\r\n  margin-left: 5px;\r\n}\r\n\r\n.quantity {\r\n  float: left;\r\n  margin-right: 15px;\r\n  background-color: #EEE;\r\n  position: relative;\r\n  width: 80px;\r\n  overflow: hidden;\r\n}\r\n\r\n.quantity input {\r\n  margin: 0;\r\n  text-align: center;\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0;\r\n  float: right;\r\n  color: #000;\r\n  font-size: 20px;\r\n  border: 0;\r\n  outline: 0;\r\n  background-color: #F6F6F6;\r\n}\r\n\r\n.quantity input.qty {\r\n  position: relative;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px 25px 10px 10px;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  border-radius: 0;\r\n  background-clip: padding-box;\r\n}\r\n\r\n.no-receipts {\r\n  margin-bottom: 23.5em;\r\n}"

/***/ }),

/***/ "./src/app/components/user/receipts/receipts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/receipts/receipts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Your Purchase Histroy</h1>\r\n<div *ngIf=\"receipts\">\r\n  <div class=\"card shopping-cart\" *ngFor=\"let r of receipts; index as i\">\r\n    <div class=\"card-header bg-dark text-light\">\r\n      <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n      Receipt {{i + 1}}\r\n      <div class=\"pull-right\">\r\n        Total price: <b>{{r.totalPrice | number:'1.2-2'}}&#x24;</b>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"card-body\" *ngFor=\"let b of r.productsInfo\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-12 col-md-2 text-center\">\r\n          <img class=\"img-responsive\" src=\"{{b.cover}}\" alt=\"cover\" width=\"100\" height=\"150\">\r\n        </div>\r\n        <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-6\">\r\n          <h4 class=\"product-name\"><strong>{{b.title}}</strong></h4>\r\n          <h4>\r\n            <small>{{b.author}}</small>\r\n          </h4>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\r\n          <div id=\"book-price\" class=\"col-3 col-sm-3 col-md-6 text-md-right\">\r\n            <h6>\r\n              <strong>\r\n                {{b.price}} <span class=\"text-muted\">x</span>\r\n              </strong>\r\n            </h6>\r\n          </div>\r\n          <div class=\"col-4 col-sm-4 col-md-4\">\r\n            <div class=\"quantity\">\r\n              <input class=\"qty\" type=\"number\" size=\"4\" step=\"1\" name=\"{{b._id}}\" value=\"{{b.qty}}\" disabled />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer bg-dark\">\r\n      <div class=\"pull-right\">\r\n        <div class=\"pull-right\">\r\n          Total price: <b>{{r.totalPrice | number:'1.2-2'}}&#x24;</b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!receipts || receipts.length === 0\" class=\"no-receipts\">\r\n  No receipts yet! You can visit the <a routerLink=\"/book/store/default\">store</a> to buy your first book!\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/receipts/receipts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/receipts/receipts.component.ts ***!
  \****************************************************************/
/*! exports provided: ReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsComponent", function() { return ReceiptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
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

var ReceiptsComponent = /** @class */ (function () {
    function ReceiptsComponent(userService) {
        this.userService = userService;
    }
    ReceiptsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getPurchaseHistory()
            .subscribe(function (res) {
            _this.receipts = res.data;
        });
    };
    ReceiptsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__(/*! ./receipts.component.html */ "./src/app/components/user/receipts/receipts.component.html"),
            styles: [__webpack_require__(/*! ./receipts.component.css */ "./src/app/components/user/receipts/receipts.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ReceiptsComponent);
    return ReceiptsComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form register-form\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Register Here</h1>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"username\" name=\"username\" placeholder=\"Username\" formControlName=\"username\" />\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"username.errors.required\">\r\n          Username is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"url\" class=\"avatar\" name=\"avatar\" placeholder=\"Url to Avatar image (optional)\" formControlName=\"avatar\" />\r\n      <i class=\"fas fa-image\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"email\" name=\"email\" placeholder=\"Email\" formControlName=\"email\" />\r\n      <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          Email is required\r\n        </div>\r\n        <div *ngIf=\"email.errors.pattern\">\r\n          Please provide a valid email address\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"password\" class=\"pass\" name=\"password\" placeholder=\"***\" formControlName=\"password\" />\r\n      <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          Password is required\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength || password.errors.maxlength\">\r\n          Password must be between 3 and 16 symbols\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"password\" class=\"pass\" name=\"confirmPassword\" placeholder=\"***\" formControlName=\"confirmPassword\" />\r\n      <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"registerForm.errors?.mustMatch && (registerForm.touched || registerForm.dirty)\" class=\"input-error\">\r\n        Both passwords must match\r\n      </div>\r\n    </div>\r\n    <input type=\"submit\" class=\"submit\" value=\"Register\" [disabled]=\"registerForm.invalid\" />\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_directives_must_match_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/directives/must-match.directive */ "./src/app/core/directives/must-match.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
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

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'avatar': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)
            ]),
            'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailRegex)
            ])
        }, { validators: _core_directives_must_match_directive__WEBPACK_IMPORTED_MODULE_2__["mustMatchValidator"] });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService
            .register(this.registerForm.value)
            .subscribe(function () {
            _this.router.navigate(['/home']);
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "avatar", {
        get: function () {
            return this.registerForm.get('avatar');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () {
            return this.registerForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.routing.module */ "./src/app/components/user/user.routing.module.ts");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receipts/receipts.component */ "./src/app/components/user/receipts/receipts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules




// Components




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_8__["ReceiptsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/components/user/user.routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user.routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _core_shared_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/cart/cart.component */ "./src/app/core/shared/cart/cart.component.ts");
/* harmony import */ var _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipts/receipts.component */ "./src/app/components/user/receipts/receipts.component.ts");
/* harmony import */ var _core_guards_is_anonymous_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/guards/is-anonymous.guard */ "./src/app/core/guards/is-anonymous.guard.ts");
/* harmony import */ var _core_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/guards/is-authenticated.guard */ "./src/app/core/guards/is-authenticated.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules

// Components





// Guards


var userRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'profile/:username',
        canActivate: [_core_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["IsAuthenticatedGuard"]],
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    },
    {
        path: 'purchaseHistory',
        canActivate: [_core_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["IsAuthenticatedGuard"]],
        component: _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_6__["ReceiptsComponent"]
    },
    {
        path: 'cart',
        canActivate: [_core_guards_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["IsAuthenticatedGuard"]],
        component: _core_shared_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    },
    {
        path: 'register',
        canActivate: [_core_guards_is_anonymous_guard__WEBPACK_IMPORTED_MODULE_7__["IsAnonymousGuard"]],
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'login',
        canActivate: [_core_guards_is_anonymous_guard__WEBPACK_IMPORTED_MODULE_7__["IsAnonymousGuard"]],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/guards/is-anonymous.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guards/is-anonymous.guard.ts ***!
  \***************************************************/
/*! exports provided: IsAnonymousGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAnonymousGuard", function() { return IsAnonymousGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/core/services/helper.service.ts");
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

// Router

// Services

var IsAnonymousGuard = /** @class */ (function () {
    function IsAnonymousGuard(router, helperService) {
        this.router = router;
        this.helperService = helperService;
    }
    IsAnonymousGuard.prototype.canLoad = function (route) {
        return this.isAnonymous();
    };
    IsAnonymousGuard.prototype.canActivate = function (next, state) {
        return this.isAnonymous();
    };
    IsAnonymousGuard.prototype.isAnonymous = function () {
        if (!this.helperService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    IsAnonymousGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], IsAnonymousGuard);
    return IsAnonymousGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/is-authenticated.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/guards/is-authenticated.guard.ts ***!
  \*******************************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/core/services/helper.service.ts");
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

// Router

// Services

var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(router, helperService) {
        this.router = router;
        this.helperService = helperService;
    }
    IsAuthenticatedGuard.prototype.canLoad = function (route) {
        return this.isAuthenticated();
    };
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        return this.isAuthenticated();
    };
    IsAuthenticatedGuard.prototype.isAuthenticated = function () {
        if (this.helperService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    };
    IsAuthenticatedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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


var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + "/user";
var registerEndpoint = baseUrl + "/register";
var loginEndpoint = baseUrl + "/login";
var profileEndpoint = baseUrl + "/profile/";
var getPurchaseHistoryEndpoint = baseUrl + "/purchaseHistory";
var changeAvatarEndpoint = baseUrl + "/changeAvatar";
var blockCommentsEndpoint = baseUrl + "/blockComments/";
var unblockCommentsEndpoint = baseUrl + "/unlockComments/";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (payload) {
        return this.http.post(registerEndpoint, payload);
    };
    UserService.prototype.login = function (payload) {
        return this.http.post(loginEndpoint, payload);
    };
    UserService.prototype.getProfile = function (username) {
        return this.http.get(profileEndpoint + username);
    };
    UserService.prototype.getPurchaseHistory = function () {
        return this.http.get(getPurchaseHistoryEndpoint);
    };
    UserService.prototype.changeAvatar = function (payload) {
        return this.http.post(changeAvatarEndpoint, payload);
    };
    UserService.prototype.blockComments = function (id) {
        return this.http.post(blockCommentsEndpoint + id, {});
    };
    UserService.prototype.unblockComments = function (id) {
        return this.http.post(unblockCommentsEndpoint + id, {});
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=components-user-user-module.js.map