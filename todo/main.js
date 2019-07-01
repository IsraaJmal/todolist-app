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
/* harmony import */ var _components_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-details/todo-details.component */ "./src/app/components/todo-details/todo-details.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-task/create-task.component */ "./src/app/components/create-task/create-task.component.ts");







var routes = [
    // {path:'home',component:HomeComponent},
    // {path:'about',component:AboutUsComponent},
    // {path:'about-details',component:HomeComponent},
    // {path:'contact',component:ContactUsComponent},
    { path: 'todo', component: _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"] },
    { path: 'create-task', component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_6__["CreateTaskComponent"] },
    // {path:'todo/details/:id/:title',component:HomeComponent},
    { path: 'todo/details/:id', component: _components_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_1__["TodoDetailsComponent"] },
    { path: '', component: _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer{\r\n    padding: 40px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA0MHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-menu></app-menu>\r\n  <div class=\"mycontainer\">\r\n    <router-outlet></router-outlet>\r\n\r\n  </div>\r\n "

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
        this.title = 'todo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todo-details/todo-details.component */ "./src/app/components/todo-details/todo-details.component.ts");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-task/create-task.component */ "./src/app/components/create-task/create-task.component.ts");
/* harmony import */ var _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/rating/rating.component */ "./src/app/shared/rating/rating.component.ts");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_9__["TodoDetailsComponent"],
                _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_10__["CreateTaskComponent"],
                _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_11__["RatingComponent"],
                _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">From overwhelmed to on top of it</h1>\n<div class=\"about text-center\">\n        <div class=\"row\">\n                <div class=\"col-md-6 offset-md-3\">\n                        <p class=\" text-center\">\n                                TodoList gives you the confidence that everything’s organized and accounted for, so you can make progress on the\n                                things that are important to you.\n                            </p>\n                </div>\n            </div>\n    \n\n\n</div>\n\n\n<div class=\"contact text-center\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n    <h1 class='text-centter '>Contact Us</h1>\n    \n                <a href=\"https://www.linkedin.com/in/esraa-gamal/\"> <img src='assets/linkedin.png'></a>\n    \n                <a href=\"https://api.whatsapp.com/send?phone=0201061775752\"> <img src='assets/whatsapp.png'></a>\n                <a href='https://mail.google.com/mail/u/0/#search/esraagamalmustafa@gmail.com'>\n                    <img src=\"assets/gmail.png\">\n                </a>\n            </div>\n        </div>\n    \n    \n    \n    </div>"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/create-task/create-task.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/create-task/create-task.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-style-5{\r\n\tmax-width: 500px;\r\n\tpadding: 10px 20px;\r\n\tbackground: #f4f7f8;\r\n\tmargin: 10px auto;\r\n\tpadding: 20px;\r\n\tbackground: #f4f7f8;\r\n\tborder-radius: 8px;\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n.form-style-5 fieldset{\r\n\tborder: none;\r\n}\r\n.form-style-5 legend {\r\n\tfont-size: 1.4em;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5 label {\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n.form-style-5 input[type=\"text\"],\r\n.form-style-5 input[type=\"email\"],\r\n.form-style-5 select {\r\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\r\n\tbackground: rgba(255,255,255,.1);\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tfont-size: 15px;\r\n\tmargin: 0;\r\n\toutline: 0;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box; \r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box; \r\n\tbackground-color: #e8eeef;\r\n\tcolor:#8a97a0;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n\tmargin-bottom: 30px;\r\n}\r\n.form-style-5 input[type=\"text\"]:focus,\r\n\r\n.form-style-5 input[type=\"email\"]:focus,\r\n\r\n.form-style-5 select:focus{\r\n\tbackground: #d2d9dd;\r\n}\r\n.form-style-5 select{\r\n\t-webkit-appearance: menulist-button;\r\n\theight:35px;\r\n}\r\n.form-style-5 .number {\r\n\tbackground: #3c40c6;\r\n\tcolor: #fff;\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tdisplay: inline-block;\r\n\tfont-size: 0.8em;\r\n\tmargin-right: 4px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.2);\r\n\tborder-radius: 15px 15px 15px 0px;\r\n}\r\n.form-style-5 input[type=\"submit\"],\r\n.form-style-5 input[type=\"button\"]\r\n{\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 19px 39px 18px 39px;\r\n\tcolor: #FFF;\r\n\tmargin: 0 auto;\r\n\tbackground: #3c40c6;\r\n\tfont-size: 18px;\r\n\ttext-align: center;\r\n\tfont-style: normal;\r\n\twidth: 100%;\r\n\tborder: 1px solid #3c40c6;\r\n\tborder-width: 1px 1px 3px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-5 input[type=\"submit\"]:hover,\r\n.form-style-5 input[type=\"button\"]:hover\r\n{\r\n\tbackground: #3c40c6\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixzREFBc0Q7Q0FDdEQ7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQjtBQUNEOzs7Q0FHQyxzREFBc0Q7Q0FDdEQsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsK0JBQStCO0NBQy9CLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsY0FBYztDQUVkLDJDQUEyQztDQUMzQyxvQkFBb0I7Q0FDcEI7QUFDRDs7Ozs7Q0FLQyxvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1o7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osYUFBYTtDQUNiLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDJDQUEyQztDQUMzQyxrQ0FBa0M7Q0FDbEM7QUFFRDs7O0NBR0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0IsWUFBWTtDQUNaLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCO0FBQ0Q7OztDQUdDLG1CQUFtQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXRhc2svY3JlYXRlLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1zdHlsZS01e1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmNGY3Zjg7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjRmN2Y4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgZmllbGRzZXR7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgbGVnZW5kIHtcclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc3R5bGUtNSBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uZm9ybS1zdHlsZS01IHNlbGVjdCB7XHJcblx0Zm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW46IDA7XHJcblx0b3V0bGluZTogMDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcblx0Y29sb3I6IzhhOTdhMDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuXHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZm9ybS1zdHlsZS01IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5cclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcblxyXG4uZm9ybS1zdHlsZS01IHNlbGVjdDpmb2N1c3tcclxuXHRiYWNrZ3JvdW5kOiAjZDJkOWRkO1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgc2VsZWN0e1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbWVudWxpc3QtYnV0dG9uO1xyXG5cdGhlaWdodDozNXB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgLm51bWJlciB7XHJcblx0YmFja2dyb3VuZDogIzNjNDBjNjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMTlweCAzOXB4IDE4cHggMzlweDtcclxuXHRjb2xvcjogI0ZGRjtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAjM2M0MGM2O1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMzYzQwYzY7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHggMXB4IDNweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlLTUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuLmZvcm0tc3R5bGUtNSBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjM2M0MGM2XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-task/create-task.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  \n  <div class=\"col-md-6  offset-md-3\">\n      <div class=\"form-style-5\">\n    <form  [formGroup]=\"taskForm\"  >\n        <fieldset>\n            <legend><span class=\"number\"></span> Create Task</legend>\n        <div  class=\"form-group\">\n            <label for=\"title\">Title:</label>\n            <input [class.is-invalid]=\"!taskForm.controls['Title'].valid && taskForm.controls['Title'].touched\"  formControlName=\"Title\"  type=\"text\" class=\"form-control\" id=\"email\"> \n         \n                    \n            <div  class=\"invalid-feedback\" *ngIf=\"!taskForm.controls['Title'].valid && taskForm.controls['Title'].dirty\">\n              <div *ngIf=\"taskForm.controls['Title'].hasError('required')\">\n                * required filed\n              </div>\n              <div *ngIf=\"taskForm.controls['Title'].hasError('minlength')\">\n                  * min Length is 5\n                </div>\n                <div *ngIf=\"taskForm.controls['Title'].hasError('maxlength')\">\n                    * min Length is 10\n                  </div>\n          </div>\n          </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input  [class.is-invalid]=\"!taskForm.controls['Email'].valid && taskForm.controls['Email'].touched\"   formControlName=\"Email\" type=\"email\" class=\"form-control\" id=\"email\">\n        <div  class=\"invalid-feedback\" *ngIf=\"!taskForm.controls['Email'].valid && taskForm.controls['Email'].dirty\">\n            <div *ngIf=\"taskForm.controls['Email'].hasError('required')\">\n              * required filed\n            </div>\n            <div *ngIf=\"taskForm.controls['Email'].hasError('pattern')\">\n                * Email not valid\n              </div>\n        </div>\n      </div>\n     \n      <button type=\"submit\" (click)=\"save()\" [disabled]=\"taskForm.valid==false\" class=\"btn btn-primary\">Save</button>\n    </fieldset>\n    </form>\n  </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/create-task/create-task.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-task/create-task.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/task */ "./src/app/models/task.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(taskService, fromBuilder, route) {
        this.taskService = taskService;
        this.fromBuilder = fromBuilder;
        this.route = route;
        this.task = new _models_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
        this.taskForm = this.fromBuilder.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$")]]
        });
    };
    CreateTaskComponent.prototype.save = function () {
        var _this = this;
        Object.assign(this.task, this.taskForm.value);
        this.taskService.create(this.task).subscribe(function (response) {
            alert("Done ,your task ID is : " + response);
            _this.route.navigate(['/todo']);
        });
    };
    CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task',
            template: __webpack_require__(/*! ./create-task.component.html */ "./src/app/components/create-task/create-task.component.html"),
            styles: [__webpack_require__(/*! ./create-task.component.css */ "./src/app/components/create-task/create-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sorry page not found, 404 Error</h1>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-details/todo-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/todo-details/todo-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1kZXRhaWxzL3RvZG8tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/todo-details/todo-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/todo-details/todo-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"details \">\n        <div class=\"col-md-6 offset-md-3 \">\n                <h3>ID : {{task.ID}}</h3>\n                <h3>Title :  {{task.Title}}</h3>\n                <h3>Status :  {{task.Done}}</h3>\n                <app-rating [StarsCount]=\"0\"></app-rating>\n        </div>\n            \n    </div>\n\n</div>\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                    <div class=\"details \">\n                            <h3>ID : {{task.ID}}</h3>\n                            <h3>Title :  {{task.Title}}</h3>\n                            <h3>Status :  {{task.Done}}</h3>\n                            <app-rating [StarsCount]=\"0\"></app-rating>\n                    </div>\n            </div>\n        </div>\n       \n    \n    </div> -->"

/***/ }),

/***/ "./src/app/components/todo-details/todo-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/todo-details/todo-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsComponent", function() { return TodoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/task */ "./src/app/models/task.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TodoDetailsComponent = /** @class */ (function () {
    function TodoDetailsComponent(activatedRoute, http, taskService) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.taskService = taskService;
        this.task = new _models_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
    }
    TodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            if (id == 0) {
            }
            else {
                _this.taskService.getById(id).subscribe(function (response) {
                    if (response == null) {
                    }
                    _this.task = response;
                });
            }
        });
    };
    TodoDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-todo-details',
            template: __webpack_require__(/*! ./todo-details.component.html */ "./src/app/components/todo-details/todo-details.component.html"),
            styles: [__webpack_require__(/*! ./todo-details.component.css */ "./src/app/components/todo-details/todo-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".done-task\r\n{\r\n    -webkit-text-decoration-line: line-through;\r\n            text-decoration-line: line-through;color:#c0392b;\r\n}\r\n.pendingTasks{\r\n    background-color: #c0392b; padding: 1px 5px;border-radius: 50%; color:#fff;\r\n}\r\n.green{\r\n   background-color: #56a7fd;  padding: 1px 5px;border-radius: 50%; color:#fff;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkNBQW1DO1lBQW5DLG1DQUFtQyxjQUFjO0NBQ3BEO0FBQ0Q7SUFDSSwwQkFBMEIsQ0FBQyxpQkFBaUIsbUJBQW1CLENBQUMsV0FBVztDQUM5RTtBQUNEO0dBQ0csMEJBQTBCLEVBQUUsaUJBQWlCLG1CQUFtQixDQUFDLFdBQVc7O0NBRTlFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uZS10YXNrXHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7Y29sb3I6I2MwMzkyYjtcclxufVxyXG4ucGVuZGluZ1Rhc2tze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjsgcGFkZGluZzogMXB4IDVweDtib3JkZXItcmFkaXVzOiA1MCU7IGNvbG9yOiNmZmY7XHJcbn1cclxuLmdyZWVue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZhN2ZkOyAgcGFkZGluZzogMXB4IDVweDtib3JkZXItcmFkaXVzOiA1MCU7IGNvbG9yOiNmZmY7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isPageLoaded==false\"  class=\"spinner-border text-primary\" role=\"status\">\n  \n    <span class=\"sr-only\">Loading...</span>\n  \n</div>\n\n<div *ngIf=\"isPageLoaded==true\" class=\"card\">\n  <div class=\"card-header\"> {{name}}`s Tasks  <span *ngIf=\"getPendingTasks()>0\" [class.green]=\"getPendingTasks()<=3\" [class.pendingTasks]=\"getPendingTasks()>3\"  >{{getPendingTasks()}}</span></div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-8\"><input #title (keyup.enter)=\"addTask(title.value);title.value='';\"\n         type=\"text\" placeholder=\"new task\" class=\"form-control\"></div>\n      <div class=\"col-md-4\">\n        <button  (click)=\"addTask(title.value);title.value=''\" class=\"btn btn-primary\">Add\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> \n        </button>\n      </div>\n\n    </div>\n    \n    <div class=\"row\"><br/></div>\n    <div class=\"row\" *ngIf=\"tasksList.length==0\">\n      <h1>No Tasks Found</h1>\n    </div>\n    <div class=\"row\"  *ngIf=\"tasksList.length>0\">\n      <table class=\"table table-bordered \">\n        <thead>\n          <tr>\n            <th></th>\n            <th> Task</th>\n            <th>Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let task of tasksList;let i=index\">\n            <td>{{i+1}}</td>\n            <td>\n              <!-- <input type=\"text\" [(ngModel)]=\"task.title\"> -->\n              <a [routerLink]=\"['/todo/details',task.ID]\"><span [class.done-task]=\"task.Done\">{{task.Title | uppercase}}</span></a>   </td>\n            <td><input type=\"checkbox\" [(ngModel)]=\"task.Done\" (ngModelChange)=\"changeStatus(task)\" > </td>\n            <!-- <td><input type=\"checkbox\" [checked]=\"task.Done\" (change)=\"changeStatus(task)\" > </td> -->\n\n            <td><button class=\"btn btn-primary\" (click)=\"removeTask(i)\">Delete\n\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>         </button></td>\n          </tr>\n         \n        </tbody>\n      </table>\n    </div>\n  </div> \n \n</div>"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/task */ "./src/app/models/task.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");





var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(http, taskService) {
        this.http = http;
        this.taskService = taskService;
        this.isPageLoaded = false;
        this.name = "Esraa";
        this.tasksList = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getAll().subscribe(function (response) {
            _this.tasksList = response;
            _this.isPageLoaded = true;
            //alert("from server");
        }, function (error) {
            alert("sorry ,error occured");
        });
        //alert("finished");
    };
    TodoListComponent.prototype.changeStatus = function (task) {
        this.taskService.put(task).subscribe();
        //alert(task.Done);
        //task.Done=!task.Done;
        // if(task.Done==true)
        // {
        //   task.Done=false;
        // }
        // else{
        //   task.Done=true;
        // }
    };
    TodoListComponent.prototype.removeTask = function (index) {
        var deletedTask = this.tasksList[index];
        this.taskService.delete(deletedTask.ID).subscribe();
        this.tasksList.splice(index, 1);
    };
    TodoListComponent.prototype.getPendingTasks = function () {
        // let pendingTasks:Task[]=[];
        // pendingTasks=this.tasksList.filter(x=>x.Done==false);
        // return pendingTasks.length;
        return this.tasksList.filter(function (task) { return task.Done == false; }).length;
        return this.tasksList.length;
    };
    TodoListComponent.prototype.addTask = function (title) {
        if (title == "" || title == undefined)
            return;
        if (this.tasksList.filter(function (x) { return x.Title == title; }).length == 0) {
            var newTask_1 = new _models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
            newTask_1.Title = title;
            this.tasksList.unshift(newTask_1);
            this.taskService.create(newTask_1).subscribe(function (response) {
                newTask_1.ID = response;
            });
        }
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/components/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
        this.ID = 0;
        this.UserID = 0;
        this.Title = "";
        this.Done = false;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.create = function (task) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/Task/Post", task);
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/Task/get");
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/Task/get/" + id);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/Task/get/" + id);
    };
    TaskService.prototype.put = function (task) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/Task/put", task);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg  \" >\n  <div class=\"container\">\n    <!-- <a class=\"navbar-brand\" [routerLink]=\"['/home']\"> -->\n    <img class=\"logo\" src=\"assets/logo3.png\" alt=\"\"width='50px' height=\"50px\"><span class='title'> TodoList</span>\n    <!-- </a> -->\n    <button class=\"navbar-toggler\" type=\"button\"\n     data-toggle=\"collapse\" data-target=\"#navbarNav\"\n     aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\"   >\n      <ul class=\"navbar-nav ml-auto\"  style=\"display:flex ;\"  >\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li> -->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\"  [routerLink]=\"['/todo']\" routerLinkActive=\"active\" >To Do List</a>\n          </li>\n          \n          <li class=\"nav-item\">\n              <a class=\"nav-link\"  [routerLink]=\"['/create-task']\" routerLinkActive=\"active\" >Create Task</a>\n            </li>\n        <!-- <li class=\"nav-item\" >\n          <a class=\"nav-link\" [routerLink]=\"['/about']\" routerLinkActive=\"active\"  >About us</a>\n        </li> -->\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact Us</a>\n        </li> -->\n  \n      </ul>\n    </div>\n  </div>\n  </nav>\n\n\n"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/shared/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/rating/rating.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"StarsCount==0\">\n  Sorry not rated before\n</div>\n<div *ngIf=\"StarsCount>0\">\n    your rating is: {{StarsCount}}\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.StarsCount = 0;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingComponent.prototype, "StarsCount", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/shared/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/shared/rating/rating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
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
    production: false,
    baseURL: "http://api.mohamed-sadek.com"
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

module.exports = __webpack_require__(/*! E:\iti\angular\todo-demo-final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map