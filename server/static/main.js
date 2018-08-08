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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/app.component */ "./src/app/containers/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_sketch_inference_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/sketch-inference.service */ "./src/app/services/sketch-inference.service.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _containers__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_4__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument() : [],
            ],
            providers: [
                _services_sketch_inference_service__WEBPACK_IMPORTED_MODULE_7__["SketchInferenceService"]
            ],
            bootstrap: [_containers_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/containers/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/canvas */ "./src/app/containers/components/canvas.ts");
/* harmony import */ var _services_sketch_inference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sketch-inference.service */ "./src/app/services/sketch-inference.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// <mat-grid-tile colspan="1" rowspan="1">
// <canvas id="debug-canvas"></canvas>
// </mat-grid-tile>
var AppComponent = /** @class */ (function () {
    function AppComponent(sketchInference, elementRef) {
        this.sketchInference = sketchInference;
        this.elementRef = elementRef;
        this.title = 'sketch-to-diagram';
    }
    AppComponent.prototype.ngOnChanges = function (c) {
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.debugCanvas = d3.select(this.elementRef.nativeElement).select('#debug-canvas').node();
        // this.debugContext = this.debugCanvas.getContext('2d');
        setTimeout(function () {
            _this.canvasConfig = {
                container: d3__WEBPACK_IMPORTED_MODULE_3__["select"](_this.elementRef.nativeElement).select('#sketch-diagram-canvas'),
                pathEmitter: _this.pathEmitter
            };
            _this.canvas = new _components_canvas__WEBPACK_IMPORTED_MODULE_0__["SketchCanvas"](_this.canvasConfig);
        });
    };
    AppComponent.prototype.predict = function () {
        var bbox = this.canvas.getSketchBbox();
        var imgData = this.canvas.getSketchImageData();
        this.prediction = this.sketchInference.predict(imgData);
        console.log(this.prediction);
        this.canvas.clearSketch();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'sktd-root',
            template: "\n  <mat-grid-list id=\"container\" cols=\"6\" rowHeight=\"fit\">\n    <mat-grid-tile colspan=\"5\" rowspan=\"2\">\n      <div class='sketch-diagram-container'>\n        <canvas id=\"sketch-diagram-canvas\"></canvas>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"1\" rowspan=\"2\">\n      <button mat-raised-button (click)=\"predict()\">Predict</button>\n      {{prediction | json}}\n    </mat-grid-tile>\n  </mat-grid-list>\n  ",
            styles: ["\n    #container {\n      height: 98vh;\n    }\n\n    .sketch-diagram-container {\n      width: 100%;\n      height: 100%\n    }\n\n    #sketch-diagram-canvas {\n      height: 100%;\n      width: 100%\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_services_sketch_inference_service__WEBPACK_IMPORTED_MODULE_1__["SketchInferenceService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/containers/components/canvas.ts":
/*!*************************************************!*\
  !*** ./src/app/containers/components/canvas.ts ***!
  \*************************************************/
/*! exports provided: SketchCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchCanvas", function() { return SketchCanvas; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var Fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Fabric */ "./node_modules/Fabric/dist/fabric.js");
/* harmony import */ var Fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Fabric__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;


var DiagramObject = Fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.createClass(Fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Polygon, {
    isDiagram: true,
    initialize: function (options) {
        if (options === void 0) { options = {}; }
        _this.callSuper('initialize', options);
    },
    toObject: function () {
        _this.callSuper('toObject');
    },
    _render: function (ctx) {
        _this.callSuper('_render', ctx);
    }
});
var DiagramCircle = Fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.createClass(Fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Circle, {
    isDiagram: true,
    initialize: function (options) {
        if (options === void 0) { options = {}; }
        _this.callSuper('initialize', options);
    }
});
var SketchCanvas = /** @class */ (function () {
    function SketchCanvas(canvasConfig) {
        this.configureCanvas(canvasConfig);
        var parentContainer = canvasConfig.container.node().parentNode.parentNode;
        this.sketchCanvas.setDimensions({
            width: parentContainer.offsetWidth,
            height: parentContainer.offsetHeight
        });
        this.sketchCanvas.renderAll();
    }
    SketchCanvas.prototype.configureCanvas = function (canvasConfig) {
        this.canvasConfig = canvasConfig;
        this.sketchCanvas = new Fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas(canvasConfig.container.node(), {
            backgroundColor: '#eaf0f9',
            isDrawingMode: true,
        });
        this.sketchCanvas.freeDrawingBrush.color = 'black';
        this.sketchCanvas.freeDrawingBrush.width = 4;
        this.mouseMoveSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.sketchCanvas, 'mouse:move');
        this.mouseDownSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.sketchCanvas, 'mouse:down');
        this.mouseUpSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.sketchCanvas, 'mouse:up');
    };
    SketchCanvas.prototype.getSketchObjects = function () {
        return this.sketchCanvas.getObjects('path');
    };
    SketchCanvas.prototype.getSketchBbox = function () {
        var bbox = this.getSketchObjects().reduce(function (prev, curr) {
            var coords = curr.aCoords;
            return {
                minX: Math.min(prev.minX, coords.tl.x),
                minY: Math.min(prev.minY, coords.tl.y),
                maxX: Math.max(prev.maxX, coords.br.x),
                maxY: Math.max(prev.maxY, coords.br.y)
            };
        }, {
            minX: Number.MAX_SAFE_INTEGER,
            minY: Number.MAX_SAFE_INTEGER,
            maxX: 0,
            maxY: 0
        });
        return bbox;
    };
    SketchCanvas.prototype.getSketchImageData = function () {
        var dpi = window.devicePixelRatio;
        var bbox = this.getSketchBbox();
        var context = this.sketchCanvas.getContext();
        var imgData = context.getImageData(Math.max(bbox.minX - 10, 0) * dpi, Math.max(bbox.minY - 10, 0) * dpi, (bbox.maxX - bbox.minX + 20) * dpi, (bbox.maxY - bbox.minY + 20) * dpi);
        return imgData;
    };
    SketchCanvas.prototype.clearSketch = function () {
        var _this = this;
        this.getSketchObjects().map(function (i) { return _this.sketchCanvas.fxRemove(i); });
    };
    return SketchCanvas;
}());



/***/ }),

/***/ "./src/app/containers/components/index.ts":
/*!************************************************!*\
  !*** ./src/app/containers/components/index.ts ***!
  \************************************************/
/*! exports provided: COMPONENTS, ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/containers/components/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var COMPONENTS = [];
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["SktdMaterialModule"]
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/containers/components/material.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/components/material.module.ts ***!
  \**********************************************************/
/*! exports provided: SktdMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SktdMaterialModule", function() { return SktdMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SktdMaterialModule = /** @class */ (function () {
    function SktdMaterialModule() {
    }
    SktdMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ],
        })
    ], SktdMaterialModule);
    return SktdMaterialModule;
}());



/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: CONTAINERS, ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERS", function() { return CONTAINERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _components_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/material.module */ "./src/app/containers/components/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/containers/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sketch_diagram_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sketch-diagram.container */ "./src/app/containers/sketch-diagram.container.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/containers/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CONTAINERS = [
    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
    _sketch_diagram_container__WEBPACK_IMPORTED_MODULE_4__["SketchDiagramComponent"]
];
var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ComponentModule"],
                _components_material_module__WEBPACK_IMPORTED_MODULE_0__["SktdMaterialModule"]
            ],
            declarations: CONTAINERS,
            exports: CONTAINERS
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ }),

/***/ "./src/app/containers/sketch-diagram.container.ts":
/*!********************************************************!*\
  !*** ./src/app/containers/sketch-diagram.container.ts ***!
  \********************************************************/
/*! exports provided: SketchDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchDiagramComponent", function() { return SketchDiagramComponent; });
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/canvas */ "./src/app/containers/components/canvas.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SketchDiagramComponent = /** @class */ (function () {
    function SketchDiagramComponent(elementRef) {
        this.elementRef = elementRef;
        this.pathEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SketchDiagramComponent.prototype.render = function () {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.elementRef.nativeElement).select('#sketch-diagram-canvas').select('*').remove();
        this.canvasConfig = {
            container: d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.elementRef.nativeElement).select('#sketch-diagram-canvas'),
            pathEmitter: this.pathEmitter
        };
        this.canvas = new _components_canvas__WEBPACK_IMPORTED_MODULE_0__["SketchCanvas"](this.canvasConfig);
    };
    SketchDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.render();
        });
    };
    SketchDiagramComponent.prototype.ngOnChanges = function (c) {
        var _this = this;
        setTimeout(function () {
            _this.render();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SketchDiagramComponent.prototype, "pathEmitter", void 0);
    SketchDiagramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sktd-sketch-diagram',
            template: "\n    <div id=\"sketch-diagram-canvas\"></div>\n  ",
            styles: ["\n    #sketch-diagram-canvas {\n      height: 100%;\n      width: 100%\n    }\n  "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SketchDiagramComponent);
    return SketchDiagramComponent;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sketch_diagram_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketch-diagram.reducer */ "./src/app/reducers/sketch-diagram.reducer.ts");


var reducers = {
    sketchDiagram: _sketch_diagram_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/sketch-diagram.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/reducers/sketch-diagram.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/sketch-inference.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/sketch-inference.service.ts ***!
  \******************************************************/
/*! exports provided: SketchInferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchInferenceService", function() { return SketchInferenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SketchInferenceService = /** @class */ (function () {
    function SketchInferenceService() {
        var _this = this;
        this.IMAGE_DIMENSION = [28, 28];
        console.log('Loading Model');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(d3__WEBPACK_IMPORTED_MODULE_3__["json"]('/assets/class_names.json')).subscribe(function (d) {
            _this.classes = d;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Object(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadModel"])('/assets/model.json')).subscribe(function (m) {
            _this.model = m;
            console.log('Model Succesfully Loaded', _this.model);
        });
    }
    SketchInferenceService.prototype.preprocess = function (imgData) {
        return Object(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tidy"])(function () {
            var tensor = Object(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["fromPixels"])(imgData, 1);
            var resized = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["image"].resizeBilinear(tensor, [28, 28]).toFloat();
            var offset = Object(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["scalar"])(255.0);
            var normalized = Object(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["scalar"])(1.0).sub(resized.div(offset));
            var batched = normalized.expandDims(0);
            return batched;
        });
    };
    SketchInferenceService.prototype.predict = function (imgData) {
        var _this = this;
        var preprocessed = this.preprocess(imgData);
        var prediction = this.model.predict(preprocessed).dataSync();
        var results = [];
        prediction.forEach(function (v, i) {
            results.push([_this.classes[i], v]);
        });
        console.log(results);
        var topPrediction = results.reduce(function (prev, curr) {
            if (prev) {
                if (curr[1] > prev[1]) {
                    return curr;
                }
                else {
                    return prev;
                }
            }
            else {
                return curr;
            }
        });
        return topPrediction;
        // return results;
    };
    SketchInferenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SketchInferenceService);
    return SketchInferenceService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maxwellmurphy/Workspace/sketch-to-diagram/sketch-to-diagram-js/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map