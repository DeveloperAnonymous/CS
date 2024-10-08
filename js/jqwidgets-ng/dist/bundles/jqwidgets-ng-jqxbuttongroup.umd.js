require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttongroup');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbuttongroup', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbuttongroup = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /// <reference path="../../jqwidgets.d.ts" />
    var jqxButtonGroupComponent = /** @class */ (function () {
        function jqxButtonGroupComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
            // jqxButtonGroupComponent events
            this.onButtonclick = new core.EventEmitter();
            this.onSelected = new core.EventEmitter();
            this.onUnselected = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxButtonGroupComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxButtonGroupComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                            this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxButtonGroupComponent.prototype.arraysEqual = function (attrValue, hostValue) {
            if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
                return false;
            }
            if (attrValue.length != hostValue.length) {
                return false;
            }
            for (var i = 0; i < attrValue.length; i++) {
                if (attrValue[i] !== hostValue[i]) {
                    return false;
                }
            }
            return true;
        };
        jqxButtonGroupComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxButtonGroupComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxButtonGroupComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxButtonGroupComponent.prototype.createComponent = function (options) {
            if (this.host) {
                return;
            }
            if (options) {
                JQXLite.extend(options, this.manageAttributes());
            }
            else {
                options = this.manageAttributes();
            }
            this.host = JQXLite(this.elementRef.nativeElement.firstChild);
            this.moveClasses(this.elementRef.nativeElement, this.host[0]);
            this.moveStyles(this.elementRef.nativeElement, this.host[0]);
            this.host[0].style.marginLeft = '1px';
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
        };
        jqxButtonGroupComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxButtonGroupComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxButtonGroupComponent.prototype.setOptions = function (options) {
            this.host.jqxButtonGroup('setOptions', options);
        };
        // jqxButtonGroupComponent properties
        jqxButtonGroupComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('disabled', arg);
            }
            else {
                return this.host.jqxButtonGroup('disabled');
            }
        };
        jqxButtonGroupComponent.prototype.enableHover = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('enableHover', arg);
            }
            else {
                return this.host.jqxButtonGroup('enableHover');
            }
        };
        jqxButtonGroupComponent.prototype.mode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('mode', arg);
            }
            else {
                return this.host.jqxButtonGroup('mode');
            }
        };
        jqxButtonGroupComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('rtl', arg);
            }
            else {
                return this.host.jqxButtonGroup('rtl');
            }
        };
        jqxButtonGroupComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('template', arg);
            }
            else {
                return this.host.jqxButtonGroup('template');
            }
        };
        jqxButtonGroupComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButtonGroup('theme', arg);
            }
            else {
                return this.host.jqxButtonGroup('theme');
            }
        };
        // jqxButtonGroupComponent functions
        jqxButtonGroupComponent.prototype.disableAt = function (index) {
            this.host.jqxButtonGroup('disableAt', index);
        };
        jqxButtonGroupComponent.prototype.disable = function () {
            this.host.jqxButtonGroup('disable');
        };
        jqxButtonGroupComponent.prototype.destroy = function () {
            this.host.jqxButtonGroup('destroy');
        };
        jqxButtonGroupComponent.prototype.enable = function () {
            this.host.jqxButtonGroup('enable');
        };
        jqxButtonGroupComponent.prototype.enableAt = function (index) {
            this.host.jqxButtonGroup('enableAt', index);
        };
        jqxButtonGroupComponent.prototype.getSelection = function () {
            return this.host.jqxButtonGroup('getSelection');
        };
        jqxButtonGroupComponent.prototype.render = function () {
            this.host.jqxButtonGroup('render');
        };
        jqxButtonGroupComponent.prototype.setSelection = function (index) {
            this.host.jqxButtonGroup('setSelection', index);
        };
        jqxButtonGroupComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('buttonclick', function (eventData) { _this.onButtonclick.emit(eventData); });
            this.host.on('selected', function (eventData) { _this.onSelected.emit(eventData); });
            this.host.on('unselected', function (eventData) { _this.onUnselected.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxButtonGroupComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxButtonGroupComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('mode'),
            __metadata("design:type", String)
        ], jqxButtonGroupComponent.prototype, "attrMode", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxButtonGroupComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxButtonGroupComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxButtonGroupComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxButtonGroupComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxButtonGroupComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxButtonGroupComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxButtonGroupComponent.prototype, "onButtonclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxButtonGroupComponent.prototype, "onSelected", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxButtonGroupComponent.prototype, "onUnselected", void 0);
        jqxButtonGroupComponent = __decorate([
            core.Component({
                selector: 'jqxButtonGroup',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxButtonGroupComponent);
        return jqxButtonGroupComponent;
    }()); //jqxButtonGroupComponent

    var jqxButtonGroupModule = /** @class */ (function () {
        function jqxButtonGroupModule() {
        }
        jqxButtonGroupModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxButtonGroupComponent],
                exports: [jqxButtonGroupComponent]
            })
        ], jqxButtonGroupModule);
        return jqxButtonGroupModule;
    }());

    exports.jqxButtonGroupComponent = jqxButtonGroupComponent;
    exports.jqxButtonGroupModule = jqxButtonGroupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxbuttongroup.umd.js.map
