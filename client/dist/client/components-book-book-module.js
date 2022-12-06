(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-book-book-module"],{

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/components/book/book-create/book-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/book/book-create/book-create.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  top: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/book/book-create/book-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/book/book-create/book-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form create-book-form\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"createBookForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Add new Book</h1>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"title\" name=\"title\" placeholder=\"Book Title\" formControlName=\"title\" />\r\n      <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"title.errors.required\">\r\n          Book title is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"author\" name=\"author\" placeholder=\"Book Author\" formControlName=\"author\" />\r\n      <i class=\"fas fa-user\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"author.invalid && (author.dirty || author.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"author.errors.required\">\r\n          Book author is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"genre\" name=\"genre\" placeholder=\"Book Genre\" formControlName=\"genre\" />\r\n      <i class=\"fas fa-clipboard\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"genre.invalid && (genre.dirty || genre.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"genre.errors.required\">\r\n          Book genre is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"year\" name=\"year\" placeholder=\"Book Relase Year\" formControlName=\"year\" step=\"1\" />\r\n      <i class=\"fas fa-sign-in-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"year.invalid && (year.dirty || year.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"year.errors.required\">\r\n          Book release year is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <textarea class=\"description\" name=\"description\" placeholder=\"Book description\" formControlName=\"description\" cols=\"30\" rows=\"10\"></textarea>\r\n      <i class=\"fas fa-pen\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"description.errors.required || description.errors.minlength \">\r\n          Book description must be more than 10 symbols long\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"url\" class=\"cover\" name=\"cover\" placeholder=\"Book Cover\" formControlName=\"cover\" />\r\n      <i class=\"fas fa-book-open\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"cover.invalid && (cover.dirty || cover.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"cover.errors.required\">\r\n          Book cover is required\r\n        </div>\r\n        <div *ngIf=\"!cover.errors.isUrl\">\r\n          Book cover must be a valid Url\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"isbn\" name=\"isbn\" placeholder=\"Book ISBN\" formControlName=\"isbn\" />\r\n      <i class=\"fas fas fa-barcode\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"isbn.invalid && (isbn.dirty || isbn.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"isbn.errors.required\">\r\n          Book isbn is required\r\n        </div>\r\n        <div *ngIf=\"!isbn.errors.isIsbn\">\r\n          Please specify a valid ISBN\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"pagesCount\" name=\"pagesCount\" placeholder=\"Book Pages Count\" formControlName=\"pagesCount\" step=\"1\"\r\n      />\r\n      <i class=\"fas fa-file-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"pagesCount.invalid && (pagesCount.dirty || pagesCount.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"pagesCount.errors.required\">\r\n          Book pages count is required\r\n        </div>\r\n        <div *ngIf=\"pagesCount.errors.min\">\r\n          Pages count must be positive number\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"price\" name=\"price\" placeholder=\"Book Price\" formControlName=\"price\" step=\"0.1\" />\r\n      <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"price.errors.required\">\r\n          Book price is required\r\n        </div>\r\n        <div *ngIf=\"price.errors.min\">\r\n          Price must be positive number\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"submit\" class=\"submit\" value=\"Create Book\" [disabled]=\"createBookForm.invalid\" />\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/book/book-create/book-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/book/book-create/book-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
/* harmony import */ var _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/directives/is-url.directive */ "./src/app/core/directives/is-url.directive.ts");
/* harmony import */ var _core_directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/directives/is-isbn.directive */ "./src/app/core/directives/is-isbn.directive.ts");
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

// Custom Validators


var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.createBookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'genre': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
            ]),
            'cover': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_4__["isUrlValidator"]
            ]),
            'isbn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _core_directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_5__["isIsbnValidator"]
            ]),
            'pagesCount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ])
        });
    };
    BookCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bookService
            .createBook(this.createBookForm.value)
            .subscribe(function (res) {
            _this.router.navigate(["/book/details/" + res.data._id]);
        });
    };
    Object.defineProperty(BookCreateComponent.prototype, "title", {
        get: function () {
            return this.createBookForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "author", {
        get: function () {
            return this.createBookForm.get('author');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "genre", {
        get: function () {
            return this.createBookForm.get('genre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "year", {
        get: function () {
            return this.createBookForm.get('year');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "description", {
        get: function () {
            return this.createBookForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "cover", {
        get: function () {
            return this.createBookForm.get('cover');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "isbn", {
        get: function () {
            return this.createBookForm.get('isbn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "pagesCount", {
        get: function () {
            return this.createBookForm.get('pagesCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookCreateComponent.prototype, "price", {
        get: function () {
            return this.createBookForm.get('price');
        },
        enumerable: true,
        configurable: true
    });
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/components/book/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/components/book/book-create/book-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book-delete/book-delete.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/book/book-delete/book-delete.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  top: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/book/book-delete/book-delete.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/book/book-delete/book-delete.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form delete-book-form\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"deleteBookForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Delete Book</h1>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"title\" name=\"title\" placeholder=\"Book Title\" formControlName=\"title\" disabled />\r\n      <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"author\" name=\"author\" placeholder=\"Book Author\" formControlName=\"author\" disabled />\r\n      <i class=\"fas fa-user\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"genre\" name=\"genre\" placeholder=\"Book Genre\" formControlName=\"genre\" disabled />\r\n      <i class=\"fas fa-clipboard\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <textarea class=\"description\" name=\"description\" placeholder=\"Book description\" formControlName=\"description\" cols=\"30\" rows=\"3\" disabled></textarea>\r\n      <i class=\"fas fa-pen\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"price\" name=\"price\" placeholder=\"Book Price\" formControlName=\"price\" step=\"0.1\" disabled />\r\n      <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <input type=\"submit\" class=\"submit delete-book\" value=\"Confirm Delete\" />\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/book/book-delete/book-delete.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/book/book-delete/book-delete.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDeleteComponent", function() { return BookDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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

var BookDeleteComponent = /** @class */ (function () {
    function BookDeleteComponent(router, route, bookService) {
        this.router = router;
        this.route = route;
        this.bookService = bookService;
    }
    BookDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.id = this.route.snapshot.paramMap.get('bookId');
        this.bookService
            .getSingleBook(this.id)
            .subscribe(function (res) {
            _this.deleteBookForm.patchValue(__assign({}, res.data));
        });
    };
    BookDeleteComponent.prototype.initForm = function () {
        this.deleteBookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'genre': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
            ]),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ])
        });
    };
    BookDeleteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bookService
            .deleteBook(this.id)
            .subscribe(function () {
            _this.router.navigate(['/home']);
        });
    };
    BookDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-delete',
            template: __webpack_require__(/*! ./book-delete.component.html */ "./src/app/components/book/book-delete/book-delete.component.html"),
            styles: [__webpack_require__(/*! ./book-delete.component.css */ "./src/app/components/book/book-delete/book-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], BookDeleteComponent);
    return BookDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book-details/book-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/book/book-details/book-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-details {\r\n  width: 100%;\r\n}\r\n\r\n.book-details img {\r\n  border-radius: 5px;\r\n}\r\n\r\n.book-info {\r\n  padding: 30px;\r\n  background-color: #313532;\r\n  border-radius: 15px;\r\n}\r\n\r\n.book-info a {\r\n  text-decoration: none;\r\n  margin-right: 10px;\r\n}\r\n\r\n.book-info button {\r\n  margin: 10px 10px 10px 0;\r\n}\r\n\r\n.book-description {\r\n  text-align: justify;\r\n}\r\n\r\n.book-details div {\r\n  margin: 50px auto;\r\n  text-align: left;\r\n}\r\n\r\n.checked {\r\n  color: orange;\r\n}\r\n\r\n#admin-panel {\r\n  margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/book/book-details/book-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/book/book-details/book-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book\" class=\"row book-details\">\r\n  <div class=\"col-1\">\r\n    <img src=\"{{book.cover}}\" alt=\"book-cover\" />\r\n  </div>\r\n  <div class=\"col-7 book-info\">\r\n    <h3>{{book.title}}</h3>\r\n    <span class=\"fa fa-star {{stars[0]}}\" (click)=\"rateBook(1)\" (mouseenter)=\"calcRating(1)\" (mouseleave)=\"resetRating()\"></span>\r\n    <span class=\"fa fa-star {{stars[1]}}\" (click)=\"rateBook(2)\" (mouseenter)=\"calcRating(2)\" (mouseleave)=\"resetRating()\"></span>\r\n    <span class=\"fa fa-star {{stars[2]}}\" (click)=\"rateBook(3)\" (mouseenter)=\"calcRating(3)\" (mouseleave)=\"resetRating()\"></span>\r\n    <span class=\"fa fa-star {{stars[3]}}\" (click)=\"rateBook(4)\" (mouseenter)=\"calcRating(4)\" (mouseleave)=\"resetRating()\"></span>\r\n    <span class=\"fa fa-star {{stars[4]}}\" (click)=\"rateBook(5)\" (mouseenter)=\"calcRating(5)\" (mouseleave)=\"resetRating()\"></span>\r\n    <p>based on {{book.ratedCount}} ratings</p>\r\n    <p>{{book.comments.length}} comments</p>\r\n    <p>Author: {{book.author}}</p>\r\n    <p>Genre: {{book.genre}}</p>\r\n    <p>Relsease Year: {{book.year}}</p>\r\n    <p>ISBN: {{book.isbn}}</p>\r\n    <p>Pages: {{book.pagesCount}}</p>\r\n    <p class=\"book-description\">Description: {{book.description}}</p>\r\n    <h2>Price: {{book.price}} &#x24;</h2>\r\n    <ng-template [ngIf]=\"isLogged\">\r\n      <button class=\"btn btn-success\" (click)=\"buyBook()\" [disabled]=\"isBought\">Buy Book</button>\r\n      <button class=\"btn btn-secondary\" (click)=\"addToFavorites()\" [disabled]=\"isAdded\">Add to favourites</button>\r\n    </ng-template>\r\n    <ng-template [ngIf]=\"isAdmin\">\r\n      <div id=\"admin-panel\">\r\n        <a class=\"btn btn-warning\" routerLink=\"/book/edit/{{book._id}}\">Edit Book</a>\r\n        <a class=\"btn btn-danger\" routerLink=\"/book/delete/{{book._id}}\">Delete Book</a>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template [ngIf]=\"!isLogged\">\r\n      <button class=\"btn btn-secondary\" (click)=\"login()\">Login to Buy, Rate and Comment</button>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n<ng-template [ngIf]=\"book\">\r\n  <app-comment [bookId]=\"bookId\" [isLogged]=\"isLogged\" [isAdmin]=\"isAdmin\" [userId]=\"userId\"></app-comment>\r\n</ng-template>\r\n<div [hidden]=\"book\" class=\"no-results\">\r\n  <img src=\"https://i.imgur.com/KRVihMq.png\" alt=\"no-item-found\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/book/book-details/book-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/book/book-details/book-details.component.ts ***!
  \************************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
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

// Services



var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(router, route, bookService, cartService, helperService) {
        this.router = router;
        this.route = route;
        this.bookService = bookService;
        this.cartService = cartService;
        this.helperService = helperService;
        this.stars = ['', '', '', '', ''];
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookId = this.route.snapshot.paramMap.get('bookId');
        this.isLogged = this.helperService.isLoggedIn();
        this.isAdmin = this.helperService.isAdmin();
        this.userId = this.helperService.getProfile().id;
        this.bookService
            .getSingleBook(this.bookId)
            .subscribe(function (res) {
            _this.book = res.data;
            _this.calcRating(_this.book.currentRating);
        });
    };
    BookDetailsComponent.prototype.buyBook = function () {
        var _this = this;
        this.cartService
            .addToCart(this.bookId)
            .subscribe(function () {
            _this.helperService.cartStatus.next('add');
            _this.isBought = true;
        }, function () {
            _this.isBought = true;
        });
    };
    BookDetailsComponent.prototype.addToFavorites = function () {
        var _this = this;
        this.bookService
            .addToFavourites(this.bookId)
            .subscribe(function () {
            _this.isAdded = true;
        }, function () {
            _this.isAdded = true;
        });
    };
    BookDetailsComponent.prototype.rateBook = function (rating) {
        var _this = this;
        if (!this.isRated) {
            this.isRated = true;
            this.bookService
                .rateBook(this.bookId, { rating: rating })
                .subscribe(function (res) {
                _this.book.currentRating = res.data.currentRating;
                _this.book.ratedCount++;
                _this.calcRating(_this.book.currentRating);
            });
        }
    };
    BookDetailsComponent.prototype.calcRating = function (rating) {
        this.stars = ['', '', '', '', ''];
        rating = Math.round(rating);
        for (var i = 0; i < rating; i++) {
            this.stars[i] = 'checked';
        }
    };
    BookDetailsComponent.prototype.resetRating = function () {
        this.calcRating(this.book.currentRating);
    };
    BookDetailsComponent.prototype.login = function () {
        this.router.navigate(['/user/login']);
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/components/book/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/components/book/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book-edit/book-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/book/book-edit/book-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  top: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/book/book-edit/book-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/book/book-edit/book-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form edit-book-form\">\r\n  <form #formDir=\"ngForm\" [formGroup]=\"editBookForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Edit Book</h1>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"title\" name=\"title\" placeholder=\"Book Title\" formControlName=\"title\" />\r\n      <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"title.errors.required\">\r\n          Book title is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"author\" name=\"author\" placeholder=\"Book Author\" formControlName=\"author\" />\r\n      <i class=\"fas fa-user\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"author.invalid && (author.dirty || author.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"author.errors.required\">\r\n          Book author is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"genre\" name=\"genre\" placeholder=\"Book Genre\" formControlName=\"genre\" />\r\n      <i class=\"fas fa-clipboard\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"genre.invalid && (genre.dirty || genre.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"genre.errors.required\">\r\n          Book genre is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"year\" name=\"year\" placeholder=\"Book Relase Year\" formControlName=\"year\" step=\"1\" />\r\n      <i class=\"fas fa-sign-in-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"year.invalid && (year.dirty || year.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"year.errors.required\">\r\n          Book release year is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <textarea class=\"description\" name=\"description\" placeholder=\"Book description\" formControlName=\"description\" cols=\"30\" rows=\"10\"></textarea>\r\n      <i class=\"fas fa-pen\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"description.errors.required || description.errors.minlength \">\r\n          Book description must be more than 10 symbols long\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"url\" class=\"cover\" name=\"cover\" placeholder=\"Book Cover\" formControlName=\"cover\" />\r\n      <i class=\"fas fa-book-open\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"cover.invalid && (cover.dirty || cover.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"cover.errors.required\">\r\n          Book cover is required\r\n        </div>\r\n        <div *ngIf=\"!cover.errors.isUrl\">\r\n          Book cover must be a valid Url\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"text\" class=\"isbn\" name=\"isbn\" placeholder=\"Book ISBN\" formControlName=\"isbn\" />\r\n      <i class=\"fas fas fa-barcode\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"isbn.invalid && (isbn.dirty || isbn.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"isbn.errors.required\">\r\n          Book isbn is required\r\n        </div>\r\n        <div *ngIf=\"!isbn.errors.isIsbn\">\r\n          Please specify a valid ISBN\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"pagesCount\" name=\"pagesCount\" placeholder=\"Book Pages Count\" formControlName=\"pagesCount\" step=\"1\"\r\n      />\r\n      <i class=\"fas fa-file-alt\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"pagesCount.invalid && (pagesCount.dirty || pagesCount.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"pagesCount.errors.required\">\r\n          Book pages count is required\r\n        </div>\r\n        <div *ngIf=\"pagesCount.errors.min\">\r\n          Pages count must be positive number\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-field\">\r\n      <input type=\"number\" class=\"price\" name=\"price\" placeholder=\"Book Price\" formControlName=\"price\" step=\"0.1\" />\r\n      <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\r\n      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"input-error\">\r\n        <div *ngIf=\"price.errors.required\">\r\n          Book price is required\r\n        </div>\r\n        <div *ngIf=\"price.errors.min\">\r\n          Price must be positive number\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"submit\" class=\"submit\" value=\"Submit Book\" [disabled]=\"editBookForm.invalid\" />\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/book/book-edit/book-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/book/book-edit/book-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
/* harmony import */ var _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/directives/is-url.directive */ "./src/app/core/directives/is-url.directive.ts");
/* harmony import */ var _core_directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/directives/is-isbn.directive */ "./src/app/core/directives/is-isbn.directive.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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

// Custom Validators


var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(router, route, bookService) {
        this.router = router;
        this.route = route;
        this.bookService = bookService;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.id = this.route.snapshot.paramMap.get('bookId');
        this.bookService
            .getSingleBook(this.id)
            .subscribe(function (res) {
            _this.editBookForm.patchValue(__assign({}, res.data));
        });
    };
    BookEditComponent.prototype.initForm = function () {
        this.editBookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'genre': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)
            ]),
            'cover': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _core_directives_is_url_directive__WEBPACK_IMPORTED_MODULE_4__["isUrlValidator"]
            ]),
            'isbn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _core_directives_is_isbn_directive__WEBPACK_IMPORTED_MODULE_5__["isIsbnValidator"]
            ]),
            'pagesCount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ])
        });
    };
    BookEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bookService
            .editBook(this.id, this.editBookForm.value)
            .subscribe(function (res) {
            _this.router.navigate(["/book/details/" + res.data._id]);
        });
    };
    Object.defineProperty(BookEditComponent.prototype, "title", {
        get: function () {
            return this.editBookForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "author", {
        get: function () {
            return this.editBookForm.get('author');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "genre", {
        get: function () {
            return this.editBookForm.get('genre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "year", {
        get: function () {
            return this.editBookForm.get('year');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "description", {
        get: function () {
            return this.editBookForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "cover", {
        get: function () {
            return this.editBookForm.get('cover');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "isbn", {
        get: function () {
            return this.editBookForm.get('isbn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "pagesCount", {
        get: function () {
            return this.editBookForm.get('pagesCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookEditComponent.prototype, "price", {
        get: function () {
            return this.editBookForm.get('price');
        },
        enumerable: true,
        configurable: true
    });
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/components/book/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/components/book/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/book/book-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function() { return BookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/components/book/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/components/book/book-edit/book-edit.component.ts");
/* harmony import */ var _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-delete/book-delete.component */ "./src/app/components/book/book-delete/book-delete.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/components/book/book-details/book-details.component.ts");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-store/book-store.component */ "./src/app/components/book/book-store/book-store.component.ts");
/* harmony import */ var _core_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/guards/is-admin.guard */ "./src/app/core/guards/is-admin.guard.ts");
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

var bookRoutes = [
    {
        path: '',
        redirectTo: 'store/default',
        pathMatch: 'full'
    },
    {
        path: 'store/:query',
        component: _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_6__["BookStoreComponent"]
    },
    {
        path: 'details/:bookId',
        component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_5__["BookDetailsComponent"]
    },
    {
        path: 'create',
        canActivate: [_core_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdminGuard"]],
        component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_2__["BookCreateComponent"]
    },
    {
        path: 'edit/:bookId',
        canActivate: [_core_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdminGuard"]],
        component: _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_3__["BookEditComponent"]
    },
    {
        path: 'delete/:bookId',
        canActivate: [_core_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_7__["IsAdminGuard"]],
        component: _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_4__["BookDeleteComponent"]
    }
];
var BookRoutingModule = /** @class */ (function () {
    function BookRoutingModule() {
    }
    BookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(bookRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BookRoutingModule);
    return BookRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/book/book-store/book-store.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/book/book-store/book-store.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".books-store {\r\n  margin: 30px auto;\r\n}\r\n\r\n.top {\r\n  margin-top: 50px;\r\n}\r\n\r\n.bottom {\r\n  margin-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/book/book-store/book-store.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/book/book-store/book-store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"books\">\r\n  <div class=\"top\">\r\n    <pagination-controls\r\n      (pageChange)=\"pageChanged($event)\"\r\n      maxSize=\"{{maxPages}}\"\r\n      directionLinks=\"true\"\r\n      autoHide=\"true\"\r\n      responsive=\"true\"\r\n      previousLabel=\"Previous\"\r\n      nextLabel=\"Next\"\r\n      screenReaderPaginationLabel=\"Pagination\"\r\n      screenReaderPageLabel=\"page\"\r\n      screenReaderCurrentLabel=\"You're on page\">\r\n    </pagination-controls>\r\n  </div>\r\n  <div class=\"books-store\">\r\n    <app-book *ngFor=\"let book of books | paginate: {\r\n    itemsPerPage: pageSize,\r\n    currentPage: currentPage,\r\n    totalItems: total }\" [book]=\"book\"></app-book>\r\n  </div>\r\n  <div *ngIf=\"books.length === 0\" class=\"no-results\">\r\n    <img src=\"https://i.imgur.com/KRVihMq.png\" alt=\"no-item-found\">\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <pagination-controls\r\n      (pageChange)=\"pageChanged($event)\"\r\n      maxSize=\"{{maxPages}}\"\r\n      directionLinks=\"true\"\r\n      autoHide=\"true\"\r\n      responsive=\"true\"\r\n      previousLabel=\"Previous\"\r\n      nextLabel=\"Next\"\r\n      screenReaderPaginationLabel=\"Pagination\"\r\n      screenReaderPageLabel=\"page\"\r\n      screenReaderCurrentLabel=\"You're on page\">\r\n    </pagination-controls>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/book/book-store/book-store.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/book/book-store/book-store.component.ts ***!
  \********************************************************************/
/*! exports provided: BookStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function() { return BookStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/book.service */ "./src/app/core/services/book.service.ts");
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

// Services


var BookStoreComponent = /** @class */ (function () {
    function BookStoreComponent(route, bookSevice, helperService) {
        this.route = route;
        this.bookSevice = bookSevice;
        this.helperService = helperService;
        this.pageSize = 15;
        this.currentPage = 1;
        this.total = 30;
        this.maxPages = 8;
    }
    BookStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeChangeSub$ = this.route.params.subscribe(function (params) {
            _this.currentQuery = params.query;
            _this.initRequest(_this.currentQuery);
        });
        this.querySub$ = this.helperService
            .searchQuery
            .subscribe(function () {
            _this.currentPage = 1;
        });
    };
    BookStoreComponent.prototype.ngOnDestroy = function () {
        this.routeChangeSub$.unsubscribe();
        this.querySub$.unsubscribe();
    };
    BookStoreComponent.prototype.initRequest = function (query) {
        var _this = this;
        query = this.generateQuery(query);
        this.bookSevice
            .search(query)
            .subscribe(function (res) {
            _this.total = res.itemsCount;
            _this.books = res.data;
        });
    };
    BookStoreComponent.prototype.generateQuery = function (query) {
        if (query === 'default') {
            return "?sort={\"creationDate\":-1}"
                + ("&skip=" + (this.currentPage - 1) * this.pageSize)
                + ("&limit=" + this.pageSize);
        }
        return "?query={\"searchTerm\":\"" + query + "\"}"
            + "&sort={\"creationDate\":-1}"
            + ("&skip=" + (this.currentPage - 1) * this.pageSize)
            + ("&limit=" + this.pageSize);
    };
    BookStoreComponent.prototype.pageChanged = function (newPage) {
        this.currentPage = newPage;
        this.initRequest(this.currentQuery);
    };
    BookStoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-store',
            template: __webpack_require__(/*! ./book-store.component.html */ "./src/app/components/book/book-store/book-store.component.html"),
            styles: [__webpack_require__(/*! ./book-store.component.css */ "./src/app/components/book/book-store/book-store.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], BookStoreComponent);
    return BookStoreComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/book/book.module.ts ***!
  \************************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/components/book/book-routing.module.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/components/book/book-create/book-create.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/components/book/book-edit/book-edit.component.ts");
/* harmony import */ var _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-delete/book-delete.component */ "./src/app/components/book/book-delete/book-delete.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/components/book/book-details/book-details.component.ts");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-store/book-store.component */ "./src/app/components/book/book-store/book-store.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators

// Modules





// Components





var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_6__["BookCreateComponent"],
                _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_7__["BookEditComponent"],
                _book_delete_book_delete_component__WEBPACK_IMPORTED_MODULE_8__["BookDeleteComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_9__["BookDetailsComponent"],
                _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_10__["BookStoreComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _book_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookRoutingModule"]
            ],
        })
    ], BookModule);
    return BookModule;
}());



/***/ }),

/***/ "./src/app/core/guards/is-admin.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/core/guards/is-admin.guard.ts ***!
  \***********************************************/
/*! exports provided: IsAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
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

var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(router, helperService) {
        this.router = router;
        this.helperService = helperService;
    }
    IsAdminGuard.prototype.canLoad = function (route) {
        return this.isAdmin();
    };
    IsAdminGuard.prototype.canActivate = function (next, state) {
        return this.isAdmin();
    };
    IsAdminGuard.prototype.isAdmin = function () {
        if (this.helperService.isAdmin()) {
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    };
    IsAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], IsAdminGuard);
    return IsAdminGuard;
}());



/***/ })

}]);
//# sourceMappingURL=components-book-book-module.js.map