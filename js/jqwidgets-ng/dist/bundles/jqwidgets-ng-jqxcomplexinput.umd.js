require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxcomplexinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcomplexinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcomplexinput = {}), global.ng.core, global.ng.forms));
}(this, function (exports, core, forms) { 'use strict';

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
    var noop = function () { };
    var ɵ0 = noop;
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxComplexInputComponent; }),
        multi: true
    };
    var jqxComplexInputComponent = /** @class */ (function () {
        function jqxComplexInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxComplexInputComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxComplexInputComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxComplexInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxComplexInput(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                            this.host.jqxComplexInput(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxComplexInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxComplexInputComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxComplexInputComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxComplexInputComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxComplexInputComponent.prototype.createComponent = function (options) {
            var _this = this;
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
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
            setTimeout(function (_) {
                var valueWithWS = 'JQXLite{options.value}';
                _this.host.jqxComplexInput({ value: valueWithWS });
            });
        };
        jqxComplexInputComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxComplexInputComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        Object.defineProperty(jqxComplexInputComponent.prototype, "ngValue", {
            get: function () {
                if (this.widgetObject) {
                    var value = this.host.val();
                    return value;
                }
                return '';
            },
            set: function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        jqxComplexInputComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
                this.host.jqxComplexInput('val', value);
            }
        };
        jqxComplexInputComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxComplexInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxComplexInputComponent.prototype.setOptions = function (options) {
            this.host.jqxComplexInput('setOptions', options);
        };
        // jqxComplexInputComponent properties
        jqxComplexInputComponent.prototype.decimalNotation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('decimalNotation', arg);
            }
            else {
                return this.host.jqxComplexInput('decimalNotation');
            }
        };
        jqxComplexInputComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('disabled', arg);
            }
            else {
                return this.host.jqxComplexInput('disabled');
            }
        };
        jqxComplexInputComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('height', arg);
            }
            else {
                return this.host.jqxComplexInput('height');
            }
        };
        jqxComplexInputComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('placeHolder', arg);
            }
            else {
                return this.host.jqxComplexInput('placeHolder');
            }
        };
        jqxComplexInputComponent.prototype.roundedCorners = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('roundedCorners', arg);
            }
            else {
                return this.host.jqxComplexInput('roundedCorners');
            }
        };
        jqxComplexInputComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('rtl', arg);
            }
            else {
                return this.host.jqxComplexInput('rtl');
            }
        };
        jqxComplexInputComponent.prototype.spinButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('spinButtons', arg);
            }
            else {
                return this.host.jqxComplexInput('spinButtons');
            }
        };
        jqxComplexInputComponent.prototype.spinButtonsStep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('spinButtonsStep', arg);
            }
            else {
                return this.host.jqxComplexInput('spinButtonsStep');
            }
        };
        jqxComplexInputComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('template', arg);
            }
            else {
                return this.host.jqxComplexInput('template');
            }
        };
        jqxComplexInputComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('theme', arg);
            }
            else {
                return this.host.jqxComplexInput('theme');
            }
        };
        jqxComplexInputComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('value', arg);
            }
            else {
                return this.host.jqxComplexInput('value');
            }
        };
        jqxComplexInputComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxComplexInput('width', arg);
            }
            else {
                return this.host.jqxComplexInput('width');
            }
        };
        // jqxComplexInputComponent functions
        jqxComplexInputComponent.prototype.destroy = function () {
            this.host.jqxComplexInput('destroy');
        };
        jqxComplexInputComponent.prototype.getDecimalNotation = function (part, decimalNotation) {
            return this.host.jqxComplexInput('getDecimalNotation', part, decimalNotation);
        };
        jqxComplexInputComponent.prototype.getReal = function (complexnumber) {
            return this.host.jqxComplexInput('getReal', complexnumber);
        };
        jqxComplexInputComponent.prototype.getImaginary = function (complexnumber) {
            return this.host.jqxComplexInput('getImaginary', complexnumber);
        };
        jqxComplexInputComponent.prototype.render = function () {
            this.host.jqxComplexInput('render');
        };
        jqxComplexInputComponent.prototype.refresh = function () {
            this.host.jqxComplexInput('refresh');
        };
        jqxComplexInputComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxComplexInput('val', value);
            }
            else {
                return this.host.jqxComplexInput('val');
            }
        };
        jqxComplexInputComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
        };
        __decorate([
            core.Input('decimalNotation'),
            __metadata("design:type", String)
        ], jqxComplexInputComponent.prototype, "attrDecimalNotation", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxComplexInputComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", String)
        ], jqxComplexInputComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('roundedCorners'),
            __metadata("design:type", Boolean)
        ], jqxComplexInputComponent.prototype, "attrRoundedCorners", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxComplexInputComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('spinButtons'),
            __metadata("design:type", Boolean)
        ], jqxComplexInputComponent.prototype, "attrSpinButtons", void 0);
        __decorate([
            core.Input('spinButtonsStep'),
            __metadata("design:type", Number)
        ], jqxComplexInputComponent.prototype, "attrSpinButtonsStep", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxComplexInputComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxComplexInputComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", String)
        ], jqxComplexInputComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxComplexInputComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxComplexInputComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxComplexInputComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComplexInputComponent.prototype, "onChange", void 0);
        jqxComplexInputComponent = __decorate([
            core.Component({
                selector: 'jqxComplexInput',
                template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxComplexInputComponent);
        return jqxComplexInputComponent;
    }()); //jqxComplexInputComponent

    var jqxComplexInputModule = /** @class */ (function () {
        function jqxComplexInputModule() {
        }
        jqxComplexInputModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxComplexInputComponent],
                exports: [jqxComplexInputComponent]
            })
        ], jqxComplexInputModule);
        return jqxComplexInputModule;
    }());

    exports.jqxComplexInputComponent = jqxComplexInputComponent;
    exports.jqxComplexInputModule = jqxComplexInputModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxcomplexinput.umd.js.map
