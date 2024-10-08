require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcheckbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcheckbox = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxCheckBoxComponent; }),
        multi: true
    };
    var jqxCheckBoxComponent = /** @class */ (function () {
        function jqxCheckBoxComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxCheckBoxComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onIndeterminate = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxCheckBoxComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxCheckBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxCheckBox(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                            this.host.jqxCheckBox(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxCheckBoxComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxCheckBoxComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxCheckBoxComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxCheckBoxComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxCheckBoxComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
            options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
        };
        jqxCheckBoxComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxCheckBoxComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxCheckBoxComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) ;
        };
        jqxCheckBoxComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxCheckBoxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxCheckBoxComponent.prototype.setOptions = function (options) {
            this.host.jqxCheckBox('setOptions', options);
        };
        // jqxCheckBoxComponent properties
        jqxCheckBoxComponent.prototype.animationShowDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('animationShowDelay', arg);
            }
            else {
                return this.host.jqxCheckBox('animationShowDelay');
            }
        };
        jqxCheckBoxComponent.prototype.animationHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('animationHideDelay', arg);
            }
            else {
                return this.host.jqxCheckBox('animationHideDelay');
            }
        };
        jqxCheckBoxComponent.prototype.boxSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('boxSize', arg);
            }
            else {
                return this.host.jqxCheckBox('boxSize');
            }
        };
        jqxCheckBoxComponent.prototype.checked = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('checked', arg);
            }
            else {
                return this.host.jqxCheckBox('checked');
            }
        };
        jqxCheckBoxComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('disabled', arg);
            }
            else {
                return this.host.jqxCheckBox('disabled');
            }
        };
        jqxCheckBoxComponent.prototype.enableContainerClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('enableContainerClick', arg);
            }
            else {
                return this.host.jqxCheckBox('enableContainerClick');
            }
        };
        jqxCheckBoxComponent.prototype.groupName = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('groupName', arg);
            }
            else {
                return this.host.jqxCheckBox('groupName');
            }
        };
        jqxCheckBoxComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('height', arg);
            }
            else {
                return this.host.jqxCheckBox('height');
            }
        };
        jqxCheckBoxComponent.prototype.hasThreeStates = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('hasThreeStates', arg);
            }
            else {
                return this.host.jqxCheckBox('hasThreeStates');
            }
        };
        jqxCheckBoxComponent.prototype.locked = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('locked', arg);
            }
            else {
                return this.host.jqxCheckBox('locked');
            }
        };
        jqxCheckBoxComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('rtl', arg);
            }
            else {
                return this.host.jqxCheckBox('rtl');
            }
        };
        jqxCheckBoxComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('theme', arg);
            }
            else {
                return this.host.jqxCheckBox('theme');
            }
        };
        jqxCheckBoxComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxCheckBox('width', arg);
            }
            else {
                return this.host.jqxCheckBox('width');
            }
        };
        // jqxCheckBoxComponent functions
        jqxCheckBoxComponent.prototype.check = function () {
            this.host.jqxCheckBox('check');
        };
        jqxCheckBoxComponent.prototype.disable = function () {
            this.host.jqxCheckBox('disable');
        };
        jqxCheckBoxComponent.prototype.destroy = function () {
            this.host.jqxCheckBox('destroy');
        };
        jqxCheckBoxComponent.prototype.enable = function () {
            this.host.jqxCheckBox('enable');
        };
        jqxCheckBoxComponent.prototype.focus = function () {
            this.host.jqxCheckBox('focus');
        };
        jqxCheckBoxComponent.prototype.indeterminate = function () {
            this.host.jqxCheckBox('indeterminate');
        };
        jqxCheckBoxComponent.prototype.render = function () {
            this.host.jqxCheckBox('render');
        };
        jqxCheckBoxComponent.prototype.toggle = function () {
            this.host.jqxCheckBox('toggle');
        };
        jqxCheckBoxComponent.prototype.uncheck = function () {
            this.host.jqxCheckBox('uncheck');
        };
        jqxCheckBoxComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxCheckBox('val', value);
            }
            else {
                return this.host.jqxCheckBox('val');
            }
        };
        jqxCheckBoxComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.checked); });
            this.host.on('indeterminate', function (eventData) { _this.onIndeterminate.emit(eventData); });
            this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
        };
        __decorate([
            core.Input('animationShowDelay'),
            __metadata("design:type", Number)
        ], jqxCheckBoxComponent.prototype, "attrAnimationShowDelay", void 0);
        __decorate([
            core.Input('animationHideDelay'),
            __metadata("design:type", Number)
        ], jqxCheckBoxComponent.prototype, "attrAnimationHideDelay", void 0);
        __decorate([
            core.Input('boxSize'),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "attrBoxSize", void 0);
        __decorate([
            core.Input('checked'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrChecked", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enableContainerClick'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrEnableContainerClick", void 0);
        __decorate([
            core.Input('groupName'),
            __metadata("design:type", String)
        ], jqxCheckBoxComponent.prototype, "attrGroupName", void 0);
        __decorate([
            core.Input('hasThreeStates'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrHasThreeStates", void 0);
        __decorate([
            core.Input('locked'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrLocked", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxCheckBoxComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxCheckBoxComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "onChecked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "onIndeterminate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxCheckBoxComponent.prototype, "onUnchecked", void 0);
        jqxCheckBoxComponent = __decorate([
            core.Component({
                selector: 'jqxCheckBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxCheckBoxComponent);
        return jqxCheckBoxComponent;
    }()); //jqxCheckBoxComponent

    var jqxCheckBoxModule = /** @class */ (function () {
        function jqxCheckBoxModule() {
        }
        jqxCheckBoxModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxCheckBoxComponent],
                exports: [jqxCheckBoxComponent]
            })
        ], jqxCheckBoxModule);
        return jqxCheckBoxModule;
    }());

    exports.jqxCheckBoxComponent = jqxCheckBoxComponent;
    exports.jqxCheckBoxModule = jqxCheckBoxModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxcheckbox.umd.js.map
