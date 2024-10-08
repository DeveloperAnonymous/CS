require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdragdrop', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdragdrop = {}), global.ng.core));
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
    var jqxDragDropComponent = /** @class */ (function () {
        function jqxDragDropComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
            // jqxDragDropComponent functions
            // jqxDragDropComponent events
            this.ondragstart = new core.EventEmitter();
            this.ondragend = new core.EventEmitter();
            this.ondragging = new core.EventEmitter();
            this.ondroptargetenter = new core.EventEmitter();
            this.ondroptargetleave = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDragDropComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxDragDropComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDragDrop(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                            this.host.jqxDragDrop(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDragDropComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDragDropComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDragDropComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDragDropComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDragDropComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
        };
        jqxDragDropComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDragDropComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDragDropComponent.prototype.setOptions = function (options) {
            this.host.jqxDragDrop('setOptions', options);
        };
        // jqxDragDropComponent properties
        jqxDragDropComponent.prototype.appendTo = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('appendTo', arg);
            }
            else {
                return this.host.jqxDragDrop('appendTo');
            }
        };
        jqxDragDropComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('disabled', arg);
            }
            else {
                return this.host.jqxDragDrop('disabled');
            }
        };
        jqxDragDropComponent.prototype.distance = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('distance', arg);
            }
            else {
                return this.host.jqxDragDrop('distance');
            }
        };
        jqxDragDropComponent.prototype.data = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('data', arg);
            }
            else {
                return this.host.jqxDragDrop('data');
            }
        };
        jqxDragDropComponent.prototype.dropAction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('dropAction', arg);
            }
            else {
                return this.host.jqxDragDrop('dropAction');
            }
        };
        jqxDragDropComponent.prototype.dropTarget = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('dropTarget', arg);
            }
            else {
                return this.host.jqxDragDrop('dropTarget');
            }
        };
        jqxDragDropComponent.prototype.dragZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('dragZIndex', arg);
            }
            else {
                return this.host.jqxDragDrop('dragZIndex');
            }
        };
        jqxDragDropComponent.prototype.feedback = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('feedback', arg);
            }
            else {
                return this.host.jqxDragDrop('feedback');
            }
        };
        jqxDragDropComponent.prototype.initFeedback = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('initFeedback', arg);
            }
            else {
                return this.host.jqxDragDrop('initFeedback');
            }
        };
        jqxDragDropComponent.prototype.opacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('opacity', arg);
            }
            else {
                return this.host.jqxDragDrop('opacity');
            }
        };
        jqxDragDropComponent.prototype.onDragEnd = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onDragEnd', arg);
            }
            else {
                return this.host.jqxDragDrop('onDragEnd');
            }
        };
        jqxDragDropComponent.prototype.onDrag = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onDrag', arg);
            }
            else {
                return this.host.jqxDragDrop('onDrag');
            }
        };
        jqxDragDropComponent.prototype.onDragStart = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onDragStart', arg);
            }
            else {
                return this.host.jqxDragDrop('onDragStart');
            }
        };
        jqxDragDropComponent.prototype.onTargetDrop = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onTargetDrop', arg);
            }
            else {
                return this.host.jqxDragDrop('onTargetDrop');
            }
        };
        jqxDragDropComponent.prototype.onDropTargetEnter = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onDropTargetEnter', arg);
            }
            else {
                return this.host.jqxDragDrop('onDropTargetEnter');
            }
        };
        jqxDragDropComponent.prototype.onDropTargetLeave = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('onDropTargetLeave', arg);
            }
            else {
                return this.host.jqxDragDrop('onDropTargetLeave');
            }
        };
        jqxDragDropComponent.prototype.restricter = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('restricter', arg);
            }
            else {
                return this.host.jqxDragDrop('restricter');
            }
        };
        jqxDragDropComponent.prototype.revert = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('revert', arg);
            }
            else {
                return this.host.jqxDragDrop('revert');
            }
        };
        jqxDragDropComponent.prototype.revertDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('revertDuration', arg);
            }
            else {
                return this.host.jqxDragDrop('revertDuration');
            }
        };
        jqxDragDropComponent.prototype.tolerance = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDragDrop('tolerance', arg);
            }
            else {
                return this.host.jqxDragDrop('tolerance');
            }
        };
        jqxDragDropComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('dragStart', function (eventData) { _this.ondragstart.emit(eventData); });
            this.host.on('dragEnd', function (eventData) { _this.ondragend.emit(eventData); });
            this.host.on('dragging', function (eventData) { _this.ondragging.emit(eventData); });
            this.host.on('dropTargetEnter', function (eventData) { _this.ondroptargetenter.emit(eventData); });
            this.host.on('dropTargetLeave', function (eventData) { _this.ondroptargetleave.emit(eventData); });
        };
        __decorate([
            core.Input('appendTo'),
            __metadata("design:type", String)
        ], jqxDragDropComponent.prototype, "attrAppendTo", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDragDropComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('distance'),
            __metadata("design:type", Number)
        ], jqxDragDropComponent.prototype, "attrDistance", void 0);
        __decorate([
            core.Input('data'),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "attrData", void 0);
        __decorate([
            core.Input('dropAction'),
            __metadata("design:type", String)
        ], jqxDragDropComponent.prototype, "attrDropAction", void 0);
        __decorate([
            core.Input('dropTarget'),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "attrDropTarget", void 0);
        __decorate([
            core.Input('dragZIndex'),
            __metadata("design:type", Number)
        ], jqxDragDropComponent.prototype, "attrDragZIndex", void 0);
        __decorate([
            core.Input('feedback'),
            __metadata("design:type", String)
        ], jqxDragDropComponent.prototype, "attrFeedback", void 0);
        __decorate([
            core.Input('initFeedback'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrInitFeedback", void 0);
        __decorate([
            core.Input('opacity'),
            __metadata("design:type", Number)
        ], jqxDragDropComponent.prototype, "attrOpacity", void 0);
        __decorate([
            core.Input('onDragEnd'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnDragEnd", void 0);
        __decorate([
            core.Input('onDrag'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnDrag", void 0);
        __decorate([
            core.Input('onDragStart'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnDragStart", void 0);
        __decorate([
            core.Input('onTargetDrop'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnTargetDrop", void 0);
        __decorate([
            core.Input('onDropTargetEnter'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnDropTargetEnter", void 0);
        __decorate([
            core.Input('onDropTargetLeave'),
            __metadata("design:type", Function)
        ], jqxDragDropComponent.prototype, "attrOnDropTargetLeave", void 0);
        __decorate([
            core.Input('restricter'),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "attrRestricter", void 0);
        __decorate([
            core.Input('revert'),
            __metadata("design:type", Boolean)
        ], jqxDragDropComponent.prototype, "attrRevert", void 0);
        __decorate([
            core.Input('revertDuration'),
            __metadata("design:type", Number)
        ], jqxDragDropComponent.prototype, "attrRevertDuration", void 0);
        __decorate([
            core.Input('tolerance'),
            __metadata("design:type", String)
        ], jqxDragDropComponent.prototype, "attrTolerance", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDragDropComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "ondragstart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "ondragend", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "ondragging", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "ondroptargetenter", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDragDropComponent.prototype, "ondroptargetleave", void 0);
        jqxDragDropComponent = __decorate([
            core.Component({
                selector: 'jqxDragDrop',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDragDropComponent);
        return jqxDragDropComponent;
    }()); //jqxDragDropComponent

    var jqxDragDropModule = /** @class */ (function () {
        function jqxDragDropModule() {
        }
        jqxDragDropModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDragDropComponent],
                exports: [jqxDragDropComponent]
            })
        ], jqxDragDropModule);
        return jqxDragDropModule;
    }());

    exports.jqxDragDropComponent = jqxDragDropComponent;
    exports.jqxDragDropModule = jqxDragDropModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxdragdrop.umd.js.map
