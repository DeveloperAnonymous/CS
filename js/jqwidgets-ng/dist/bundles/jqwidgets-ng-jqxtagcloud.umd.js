require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxtagcloud');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtagcloud', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtagcloud = {}), global.ng.core));
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
    var jqxTagCloudComponent = /** @class */ (function () {
        function jqxTagCloudComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
            // jqxTagCloudComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onItemClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTagCloudComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTagCloudComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTagCloud(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                            this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTagCloudComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTagCloudComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTagCloudComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTagCloudComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTagCloudComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
        };
        jqxTagCloudComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTagCloudComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTagCloudComponent.prototype.setOptions = function (options) {
            this.host.jqxTagCloud('setOptions', options);
        };
        // jqxTagCloudComponent properties
        jqxTagCloudComponent.prototype.alterTextCase = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('alterTextCase', arg);
            }
            else {
                return this.host.jqxTagCloud('alterTextCase');
            }
        };
        jqxTagCloudComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('disabled', arg);
            }
            else {
                return this.host.jqxTagCloud('disabled');
            }
        };
        jqxTagCloudComponent.prototype.displayLimit = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('displayLimit', arg);
            }
            else {
                return this.host.jqxTagCloud('displayLimit');
            }
        };
        jqxTagCloudComponent.prototype.displayMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('displayMember', arg);
            }
            else {
                return this.host.jqxTagCloud('displayMember');
            }
        };
        jqxTagCloudComponent.prototype.displayValue = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('displayValue', arg);
            }
            else {
                return this.host.jqxTagCloud('displayValue');
            }
        };
        jqxTagCloudComponent.prototype.fontSizeUnit = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('fontSizeUnit', arg);
            }
            else {
                return this.host.jqxTagCloud('fontSizeUnit');
            }
        };
        jqxTagCloudComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('height', arg);
            }
            else {
                return this.host.jqxTagCloud('height');
            }
        };
        jqxTagCloudComponent.prototype.maxColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('maxColor', arg);
            }
            else {
                return this.host.jqxTagCloud('maxColor');
            }
        };
        jqxTagCloudComponent.prototype.maxFontSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('maxFontSize', arg);
            }
            else {
                return this.host.jqxTagCloud('maxFontSize');
            }
        };
        jqxTagCloudComponent.prototype.maxValueToDisplay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('maxValueToDisplay', arg);
            }
            else {
                return this.host.jqxTagCloud('maxValueToDisplay');
            }
        };
        jqxTagCloudComponent.prototype.minColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('minColor', arg);
            }
            else {
                return this.host.jqxTagCloud('minColor');
            }
        };
        jqxTagCloudComponent.prototype.minFontSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('minFontSize', arg);
            }
            else {
                return this.host.jqxTagCloud('minFontSize');
            }
        };
        jqxTagCloudComponent.prototype.minValueToDisplay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('minValueToDisplay', arg);
            }
            else {
                return this.host.jqxTagCloud('minValueToDisplay');
            }
        };
        jqxTagCloudComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('rtl', arg);
            }
            else {
                return this.host.jqxTagCloud('rtl');
            }
        };
        jqxTagCloudComponent.prototype.sortBy = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('sortBy', arg);
            }
            else {
                return this.host.jqxTagCloud('sortBy');
            }
        };
        jqxTagCloudComponent.prototype.sortOrder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('sortOrder', arg);
            }
            else {
                return this.host.jqxTagCloud('sortOrder');
            }
        };
        jqxTagCloudComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('source', arg);
            }
            else {
                return this.host.jqxTagCloud('source');
            }
        };
        jqxTagCloudComponent.prototype.tagRenderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('tagRenderer', arg);
            }
            else {
                return this.host.jqxTagCloud('tagRenderer');
            }
        };
        jqxTagCloudComponent.prototype.takeTopWeightedItems = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('takeTopWeightedItems', arg);
            }
            else {
                return this.host.jqxTagCloud('takeTopWeightedItems');
            }
        };
        jqxTagCloudComponent.prototype.textColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('textColor', arg);
            }
            else {
                return this.host.jqxTagCloud('textColor');
            }
        };
        jqxTagCloudComponent.prototype.urlBase = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('urlBase', arg);
            }
            else {
                return this.host.jqxTagCloud('urlBase');
            }
        };
        jqxTagCloudComponent.prototype.urlMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('urlMember', arg);
            }
            else {
                return this.host.jqxTagCloud('urlMember');
            }
        };
        jqxTagCloudComponent.prototype.valueMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('valueMember', arg);
            }
            else {
                return this.host.jqxTagCloud('valueMember');
            }
        };
        jqxTagCloudComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTagCloud('width', arg);
            }
            else {
                return this.host.jqxTagCloud('width');
            }
        };
        // jqxTagCloudComponent functions
        jqxTagCloudComponent.prototype.destroy = function () {
            this.host.jqxTagCloud('destroy');
        };
        jqxTagCloudComponent.prototype.findTagIndex = function (tag) {
            return this.host.jqxTagCloud('findTagIndex', tag);
        };
        jqxTagCloudComponent.prototype.getHiddenTagsList = function () {
            return this.host.jqxTagCloud('getHiddenTagsList');
        };
        jqxTagCloudComponent.prototype.getRenderedTags = function () {
            return this.host.jqxTagCloud('getRenderedTags');
        };
        jqxTagCloudComponent.prototype.getTagsList = function () {
            return this.host.jqxTagCloud('getTagsList');
        };
        jqxTagCloudComponent.prototype.hideItem = function (index) {
            this.host.jqxTagCloud('hideItem', index);
        };
        jqxTagCloudComponent.prototype.insertAt = function (index, item) {
            this.host.jqxTagCloud('insertAt', index, item);
        };
        jqxTagCloudComponent.prototype.removeAt = function (index) {
            this.host.jqxTagCloud('removeAt', index);
        };
        jqxTagCloudComponent.prototype.updateAt = function (index, item) {
            this.host.jqxTagCloud('updateAt', index, item);
        };
        jqxTagCloudComponent.prototype.showItem = function (index) {
            this.host.jqxTagCloud('showItem', index);
        };
        jqxTagCloudComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
        };
        __decorate([
            core.Input('alterTextCase'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrAlterTextCase", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTagCloudComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('displayLimit'),
            __metadata("design:type", Number)
        ], jqxTagCloudComponent.prototype, "attrDisplayLimit", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('displayValue'),
            __metadata("design:type", Boolean)
        ], jqxTagCloudComponent.prototype, "attrDisplayValue", void 0);
        __decorate([
            core.Input('fontSizeUnit'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrFontSizeUnit", void 0);
        __decorate([
            core.Input('maxColor'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrMaxColor", void 0);
        __decorate([
            core.Input('maxFontSize'),
            __metadata("design:type", Number)
        ], jqxTagCloudComponent.prototype, "attrMaxFontSize", void 0);
        __decorate([
            core.Input('maxValueToDisplay'),
            __metadata("design:type", Number)
        ], jqxTagCloudComponent.prototype, "attrMaxValueToDisplay", void 0);
        __decorate([
            core.Input('minColor'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrMinColor", void 0);
        __decorate([
            core.Input('minFontSize'),
            __metadata("design:type", Number)
        ], jqxTagCloudComponent.prototype, "attrMinFontSize", void 0);
        __decorate([
            core.Input('minValueToDisplay'),
            __metadata("design:type", Number)
        ], jqxTagCloudComponent.prototype, "attrMinValueToDisplay", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTagCloudComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('sortBy'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrSortBy", void 0);
        __decorate([
            core.Input('sortOrder'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrSortOrder", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxTagCloudComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('tagRenderer'),
            __metadata("design:type", Function)
        ], jqxTagCloudComponent.prototype, "attrTagRenderer", void 0);
        __decorate([
            core.Input('takeTopWeightedItems'),
            __metadata("design:type", Boolean)
        ], jqxTagCloudComponent.prototype, "attrTakeTopWeightedItems", void 0);
        __decorate([
            core.Input('textColor'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrTextColor", void 0);
        __decorate([
            core.Input('urlBase'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrUrlBase", void 0);
        __decorate([
            core.Input('urlMember'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrUrlMember", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", String)
        ], jqxTagCloudComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTagCloudComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTagCloudComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTagCloudComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTagCloudComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTagCloudComponent.prototype, "onItemClick", void 0);
        jqxTagCloudComponent = __decorate([
            core.Component({
                selector: 'jqxTagCloud',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTagCloudComponent);
        return jqxTagCloudComponent;
    }()); //jqxTagCloudComponent

    var jqxTagCloudModule = /** @class */ (function () {
        function jqxTagCloudModule() {
        }
        jqxTagCloudModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTagCloudComponent],
                exports: [jqxTagCloudComponent]
            })
        ], jqxTagCloudModule);
        return jqxTagCloudModule;
    }());

    exports.jqxTagCloudComponent = jqxTagCloudComponent;
    exports.jqxTagCloudModule = jqxTagCloudModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtagcloud.umd.js.map
