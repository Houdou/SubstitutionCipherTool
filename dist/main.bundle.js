webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n\t\r\n\twidth: auto;\r\n\tmargin: 0px 20%;\r\n\tmax-width: 1200px;\r\n\tpadding: 16px;\r\n\tbackground-color: rgba(120, 120, 120, 0.6);\r\n}\r\n\r\n.messages {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n.cipher {\r\n\tcolor: white;\r\n}\r\n.cipher::-webkit-input-placeholder {\r\n\tcolor: #EEE;\r\n}\r\n.cipher:-ms-input-placeholder {\r\n\tcolor: #EEE;\r\n}\r\n.cipher::placeholder {\r\n\tcolor: #EEE;\r\n}\r\n.message {\r\n\tcolor: #DDD;\r\n}\r\n.texts {\r\n\tbackground-color: rgba(255, 255, 255, 0.2);\r\n\tmargin: 8px 4px;\r\n\tpadding: 8px;\r\n\r\n\twidth: 50%;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.instruction {\r\n\tmargin: 20px 8px;\r\n\tcolor: #EEE;\r\n}\r\n.mappings {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: column;\r\n\t        flex-flow: column;\r\n}\r\n.mappings-row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: row;\r\n\t        flex-flow: row;\r\n\theight: 25px;\r\n}\r\n.map {\r\n\twidth: 30px;\r\n\tmargin-left: 5px;\r\n\ttext-align: center;\r\n}\r\n.mapping-letter {\r\n\twidth: 30px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder: none;\r\n\tbackground-color: #DDD;\r\n\tborder-radius: 3px;\r\n\tmargin-left: 5px;\r\n}\r\n.hint {\r\n\tcolor: #DDD;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"messages\">\n\t\t<textarea cols=\"60\" rows=\"30\" class=\"texts cipher\" ref-cipher (input)=\"CipherInput($event)\" placeholder=\"Ciphertext here.\"></textarea>\n\t\t<div cols=\"60\" rows=\"30\" class=\"texts message\" ref-message>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"mappings\" ref-mappings>\n\t\t<div class=\"mappings-row mappings-cipher\">\n\t\t\t<div class=\"map\" *ngFor=\"let letter of alphabets.split('')\" (click)=\"MarkConfirm(letter)\">{{letter | uppercase}}</div>\n\t\t</div>\n\t\t<div class=\"mappings-row mappings-message\">\n\t\t\t<input id=\"mapping-{{letter}}\" *ngFor=\"let letter of alphabets.split('')\" name=\"{{letter}}\" class=\"mapping-letter\" value=\"{{letter}}\"\n\t\t\t(focus)=\"MappingSelect($event); $event.stopPropagation()\" (keyup)=\"MapUpdate($event)\" (blur)=\"MapUpdate($event)\" />\n\t\t</div>\n\t</div>\n\t<div class=\"instruction\">Click the UPPERCASE cipher letter to lock/unlcok its mapping.<br>Click the lowercase letter to change mapping.</div>\n\t<span style=\"color: white\">Frequency table for reference:</span>\n\t<div class=\"hint\" ref-hint></div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.alphabets = "abcdefghijklmnopqrstuvwxyz";
        this.engFreq = new Map([
            ['e', 12.7],
            ['t', 9.1],
            ['a', 8.2],
            ['o', 7.5],
            ['i', 7.0],
            ['n', 6.8],
            ['s', 6.3],
            ['h', 6.1],
            ['r', 6.0],
            ['d', 4.3],
            ['l', 4.0],
            ['u', 2.8],
            ['c', 2.8],
            ['w', 2.4],
            ['m', 2.4],
            ['f', 2.2],
            ['y', 2.0],
            ['g', 2.0],
            ['p', 1.9],
            ['b', 1.5],
            ['v', 1.0],
            ['k', 0.8],
            ['x', 0.2],
            ['j', 0.2],
            ['z', 0.1],
            ['q', 0.1],
        ]);
        this.engFreqRank = ['e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'u', 'c', 'w', 'm', 'f', 'y', 'g', 'p', 'b', 'v', 'k', 'x', 'j', 'z', 'q'];
        this.cipher = "";
        this.cipherFreq = new Map();
        this.mapping = new Map();
        this.mappingConfirmed = new Map();
        this.alphabets.split('').forEach(function (c) {
            _this.mapping.set(c, c);
            _this.mappingConfirmed.set(c, false);
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.cipher = this.cipiherTextDiv.nativeElement.value;
        this.mappingsField = this.mappingsDiv.nativeElement.querySelectorAll('input');
        this.calcfreq(this.cipher);
        this.initMap();
        this.messageTextDiv.nativeElement.innerHTML = this.build(this.map());
    };
    AppComponent.prototype.calcfreq = function (str) {
        var _this = this;
        var count = new Map();
        this.alphabets.split('').forEach(function (s) {
            count.set(s, 0);
        });
        var total = 0;
        str.toLowerCase().split('').forEach(function (s) {
            if (/[a-z]/.test(s)) {
                count.set(s, count.get(s) + 1);
                total++;
            }
        });
        this.alphabets.split('').forEach(function (s) {
            _this.cipherFreq.set(s, ~~(1000 * count.get(s) / total) / 10);
        });
    };
    AppComponent.prototype.initMap = function () {
        var _this = this;
        var cipherFreqRank = [];
        this.cipherFreq.forEach(function (freq, s) {
            var i = -1;
            if (!cipherFreqRank.some(function (c) { return i++, _this.cipherFreq.get(c) < freq; }))
                cipherFreqRank.push(s);
            else
                cipherFreqRank.splice(i, 0, s);
        });
        var mapHint = [];
        for (var i = 0; i < cipherFreqRank.length; i++) {
            this.mapping.set(cipherFreqRank[i], this.engFreqRank[i]);
            mapHint.push("<div class=\"hint-row\">" + cipherFreqRank[i] + ": " + this.cipherFreq.get(cipherFreqRank[i].toLowerCase()) + "\n\t\t\t\t\t - \t" + this.engFreqRank[i] + ": " + this.engFreq.get(this.engFreqRank[i].toLowerCase()) + "</div>");
        }
        this.hintDiv.nativeElement.innerHTML = mapHint.join('');
        for (var i = 0; i < this.alphabets.length; i++) {
            this.mappingsField[i].value = this.mapping.get(this.mappingsField[i].name);
        }
    };
    AppComponent.prototype.map = function () {
        var _this = this;
        var msg = this.cipher.split('').map(function (s) {
            s = s.toLowerCase();
            var c = _this.mapping.get(s);
            return c == undefined ? s : c;
        });
        return msg;
    };
    AppComponent.prototype.build = function (str) {
        var _this = this;
        var h = str.map(function (s) {
            if (!/[a-z]/.test(s) || !_this.mappingConfirmed.get(s)) {
                return s;
            }
            else {
                return "<span style=\"color: #FFAAAA\">" + s + "</span>";
            }
        });
        return h.join('');
    };
    AppComponent.prototype.rebuild = function () {
        this.messageTextDiv.nativeElement.innerHTML = this.build(this.map());
    };
    AppComponent.prototype.MappingSelect = function (evt) {
        evt.stopPropagation();
        evt.target.select();
    };
    AppComponent.prototype.CipherInput = function (evt) {
        this.cipher = evt.target.value;
        evt.target.value = this.cipher.split('').map(function (s) {
            if (s == '\n' || s == '\t') {
                return;
            }
            return s;
        }).join('');
        this.calcfreq(this.cipher);
        this.initMap();
        this.rebuild();
    };
    AppComponent.prototype.MapUpdate = function (evt) {
        var _this = this;
        var c = evt.target.name;
        var m = this.mapping.get(c);
        var mToSet = ("" + evt.target.value)[0];
        if (!/[a-z]/.test(mToSet)) {
            this.mappingsField[this.alphabets.indexOf(c)].value = m;
            this.mappingsField[this.alphabets.indexOf(c)].select();
        }
        if (mToSet != m) {
            var noConflict_1 = true;
            this.mapping.forEach(function (otherm, otherc) {
                if (otherc == c)
                    return;
                if (mToSet == otherm) {
                    if (_this.mappingConfirmed.get(otherm)) {
                        noConflict_1 = false;
                    }
                    else {
                        _this.mapping.set(otherc, m);
                        _this.mappingsField[_this.alphabets.indexOf(otherc)].value = m;
                    }
                }
            });
            if (noConflict_1) {
                this.mapping.set(c, mToSet);
                this.mappingsField[this.alphabets.indexOf(c)].value = mToSet;
                this.mappingsField[(this.alphabets.indexOf(c) + 1) % 26].select();
                console.log(c + " is mapped to " + mToSet);
                this.rebuild();
            }
            else {
                this.mapping.set(c, m);
                this.mappingsField[this.alphabets.indexOf(c)].value = m;
                this.mappingsField[this.alphabets.indexOf(c)].select();
            }
        }
    };
    AppComponent.prototype.MarkConfirm = function (c) {
        var m = this.mapping.get(c);
        this.mappingConfirmed.set(m, !this.mappingConfirmed.get(m));
        this.mappingsField[this.alphabets.indexOf(c)].disabled = this.mappingConfirmed.get(m);
        this.rebuild();
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('cipher'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "cipiherTextDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('message'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], AppComponent.prototype, "messageTextDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mappings'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
], AppComponent.prototype, "mappingsDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('hint'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
], AppComponent.prototype, "hintDiv", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map