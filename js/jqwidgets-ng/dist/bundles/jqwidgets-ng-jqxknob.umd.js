require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdraw');
require('../../jqwidgets-scripts/jqwidgets/jqxknob');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxknob', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxknob = {}), global.ng.core));
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
    var jqxKnobComponent = /** @class */ (function () {
        function jqxKnobComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
            // jqxKnobComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        jqxKnobComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxKnobComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxKnob(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                            this.host.jqxKnob(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxKnobComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxKnobComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxKnobComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxKnobComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxKnobComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
            this.__updateRect__();
        };
        jqxKnobComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxKnobComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxKnobComponent.prototype.setOptions = function (options) {
            this.host.jqxKnob('setOptions', options);
        };
        // jqxKnobComponent properties
        jqxKnobComponent.prototype.allowValueChangeOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('allowValueChangeOnClick', arg);
            }
            else {
                return this.host.jqxKnob('allowValueChangeOnClick');
            }
        };
        jqxKnobComponent.prototype.allowValueChangeOnDrag = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('allowValueChangeOnDrag', arg);
            }
            else {
                return this.host.jqxKnob('allowValueChangeOnDrag');
            }
        };
        jqxKnobComponent.prototype.allowValueChangeOnMouseWheel = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
            }
            else {
                return this.host.jqxKnob('allowValueChangeOnMouseWheel');
            }
        };
        jqxKnobComponent.prototype.changing = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('changing', arg);
            }
            else {
                return this.host.jqxKnob('changing');
            }
        };
        jqxKnobComponent.prototype.dragEndAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('dragEndAngle', arg);
            }
            else {
                return this.host.jqxKnob('dragEndAngle');
            }
        };
        jqxKnobComponent.prototype.dragStartAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('dragStartAngle', arg);
            }
            else {
                return this.host.jqxKnob('dragStartAngle');
            }
        };
        jqxKnobComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('disabled', arg);
            }
            else {
                return this.host.jqxKnob('disabled');
            }
        };
        jqxKnobComponent.prototype.dial = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('dial', arg);
            }
            else {
                return this.host.jqxKnob('dial');
            }
        };
        jqxKnobComponent.prototype.endAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('endAngle', arg);
            }
            else {
                return this.host.jqxKnob('endAngle');
            }
        };
        jqxKnobComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('height', arg);
            }
            else {
                return this.host.jqxKnob('height');
            }
        };
        jqxKnobComponent.prototype.labels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('labels', arg);
            }
            else {
                return this.host.jqxKnob('labels');
            }
        };
        jqxKnobComponent.prototype.marks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('marks', arg);
            }
            else {
                return this.host.jqxKnob('marks');
            }
        };
        jqxKnobComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('min', arg);
            }
            else {
                return this.host.jqxKnob('min');
            }
        };
        jqxKnobComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('max', arg);
            }
            else {
                return this.host.jqxKnob('max');
            }
        };
        jqxKnobComponent.prototype.progressBar = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('progressBar', arg);
            }
            else {
                return this.host.jqxKnob('progressBar');
            }
        };
        jqxKnobComponent.prototype.pointer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('pointer', arg);
            }
            else {
                return this.host.jqxKnob('pointer');
            }
        };
        jqxKnobComponent.prototype.pointerGrabAction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('pointerGrabAction', arg);
            }
            else {
                return this.host.jqxKnob('pointerGrabAction');
            }
        };
        jqxKnobComponent.prototype.rotation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('rotation', arg);
            }
            else {
                return this.host.jqxKnob('rotation');
            }
        };
        jqxKnobComponent.prototype.startAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('startAngle', arg);
            }
            else {
                return this.host.jqxKnob('startAngle');
            }
        };
        jqxKnobComponent.prototype.spinner = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('spinner', arg);
            }
            else {
                return this.host.jqxKnob('spinner');
            }
        };
        jqxKnobComponent.prototype.styles = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('styles', arg);
            }
            else {
                return this.host.jqxKnob('styles');
            }
        };
        jqxKnobComponent.prototype.step = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('step', arg);
            }
            else {
                return this.host.jqxKnob('step');
            }
        };
        jqxKnobComponent.prototype.snapToStep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('snapToStep', arg);
            }
            else {
                return this.host.jqxKnob('snapToStep');
            }
        };
        jqxKnobComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('value', arg);
            }
            else {
                return this.host.jqxKnob('value');
            }
        };
        jqxKnobComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxKnob('width', arg);
            }
            else {
                return this.host.jqxKnob('width');
            }
        };
        // jqxKnobComponent functions
        jqxKnobComponent.prototype.destroy = function () {
            this.host.jqxKnob('destroy');
        };
        jqxKnobComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxKnob('val', value);
            }
            else {
                return this.host.jqxKnob('val');
            }
        };
        jqxKnobComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        __decorate([
            core.Input('allowValueChangeOnClick'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "attrAllowValueChangeOnClick", void 0);
        __decorate([
            core.Input('allowValueChangeOnDrag'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "attrAllowValueChangeOnDrag", void 0);
        __decorate([
            core.Input('allowValueChangeOnMouseWheel'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "attrAllowValueChangeOnMouseWheel", void 0);
        __decorate([
            core.Input('changing'),
            __metadata("design:type", Function)
        ], jqxKnobComponent.prototype, "attrChanging", void 0);
        __decorate([
            core.Input('dragEndAngle'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrDragEndAngle", void 0);
        __decorate([
            core.Input('dragStartAngle'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrDragStartAngle", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('dial'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrDial", void 0);
        __decorate([
            core.Input('endAngle'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrEndAngle", void 0);
        __decorate([
            core.Input('labels'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrLabels", void 0);
        __decorate([
            core.Input('marks'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrMarks", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('progressBar'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrProgressBar", void 0);
        __decorate([
            core.Input('pointer'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrPointer", void 0);
        __decorate([
            core.Input('pointerGrabAction'),
            __metadata("design:type", String)
        ], jqxKnobComponent.prototype, "attrPointerGrabAction", void 0);
        __decorate([
            core.Input('rotation'),
            __metadata("design:type", String)
        ], jqxKnobComponent.prototype, "attrRotation", void 0);
        __decorate([
            core.Input('startAngle'),
            __metadata("design:type", Number)
        ], jqxKnobComponent.prototype, "attrStartAngle", void 0);
        __decorate([
            core.Input('spinner'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrSpinner", void 0);
        __decorate([
            core.Input('styles'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrStyles", void 0);
        __decorate([
            core.Input('step'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrStep", void 0);
        __decorate([
            core.Input('snapToStep'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "attrSnapToStep", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxKnobComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxKnobComponent.prototype, "onChange", void 0);
        jqxKnobComponent = __decorate([
            core.Component({
                selector: 'jqxKnob',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxKnobComponent);
        return jqxKnobComponent;
    }()); //jqxKnobComponent

    var jqxKnobModule = /** @class */ (function () {
        function jqxKnobModule() {
        }
        jqxKnobModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxKnobComponent],
                exports: [jqxKnobComponent]
            })
        ], jqxKnobModule);
        return jqxKnobModule;
    }());

    exports.jqxKnobComponent = jqxKnobComponent;
    exports.jqxKnobModule = jqxKnobModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxknob.umd.js.map
