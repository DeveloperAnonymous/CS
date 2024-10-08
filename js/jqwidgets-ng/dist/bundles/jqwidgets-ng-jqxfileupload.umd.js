require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxfileupload');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxfileupload', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxfileupload = {}), global.ng.core));
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
    var jqxFileUploadComponent = /** @class */ (function () {
        function jqxFileUploadComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoUpload', 'accept', 'browseTemplate', 'cancelTemplate', 'disabled', 'fileInputName', 'height', 'localization', 'multipleFilesUpload', 'renderFiles', 'rtl', 'theme', 'uploadUrl', 'uploadTemplate', 'width'];
            // jqxFileUploadComponent events
            this.onRemove = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUploadStart = new core.EventEmitter();
            this.onUploadEnd = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxFileUploadComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxFileUploadComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxFileUpload(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxFileUpload(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxFileUpload(this.properties[i])) {
                            this.host.jqxFileUpload(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxFileUploadComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxFileUploadComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxFileUploadComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxFileUploadComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxFileUploadComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFileUpload', options);
        };
        jqxFileUploadComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxFileUploadComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxFileUploadComponent.prototype.setOptions = function (options) {
            this.host.jqxFileUpload('setOptions', options);
        };
        // jqxFileUploadComponent properties
        jqxFileUploadComponent.prototype.autoUpload = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('autoUpload', arg);
            }
            else {
                return this.host.jqxFileUpload('autoUpload');
            }
        };
        jqxFileUploadComponent.prototype.accept = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('accept', arg);
            }
            else {
                return this.host.jqxFileUpload('accept');
            }
        };
        jqxFileUploadComponent.prototype.browseTemplate = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('browseTemplate', arg);
            }
            else {
                return this.host.jqxFileUpload('browseTemplate');
            }
        };
        jqxFileUploadComponent.prototype.cancelTemplate = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('cancelTemplate', arg);
            }
            else {
                return this.host.jqxFileUpload('cancelTemplate');
            }
        };
        jqxFileUploadComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('disabled', arg);
            }
            else {
                return this.host.jqxFileUpload('disabled');
            }
        };
        jqxFileUploadComponent.prototype.fileInputName = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('fileInputName', arg);
            }
            else {
                return this.host.jqxFileUpload('fileInputName');
            }
        };
        jqxFileUploadComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('height', arg);
            }
            else {
                return this.host.jqxFileUpload('height');
            }
        };
        jqxFileUploadComponent.prototype.localization = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('localization', arg);
            }
            else {
                return this.host.jqxFileUpload('localization');
            }
        };
        jqxFileUploadComponent.prototype.multipleFilesUpload = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('multipleFilesUpload', arg);
            }
            else {
                return this.host.jqxFileUpload('multipleFilesUpload');
            }
        };
        jqxFileUploadComponent.prototype.renderFiles = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('renderFiles', arg);
            }
            else {
                return this.host.jqxFileUpload('renderFiles');
            }
        };
        jqxFileUploadComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('rtl', arg);
            }
            else {
                return this.host.jqxFileUpload('rtl');
            }
        };
        jqxFileUploadComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('theme', arg);
            }
            else {
                return this.host.jqxFileUpload('theme');
            }
        };
        jqxFileUploadComponent.prototype.uploadUrl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('uploadUrl', arg);
            }
            else {
                return this.host.jqxFileUpload('uploadUrl');
            }
        };
        jqxFileUploadComponent.prototype.uploadTemplate = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('uploadTemplate', arg);
            }
            else {
                return this.host.jqxFileUpload('uploadTemplate');
            }
        };
        jqxFileUploadComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxFileUpload('width', arg);
            }
            else {
                return this.host.jqxFileUpload('width');
            }
        };
        // jqxFileUploadComponent functions
        jqxFileUploadComponent.prototype.browse = function () {
            this.host.jqxFileUpload('browse');
        };
        jqxFileUploadComponent.prototype.cancelFile = function (fileIndex) {
            this.host.jqxFileUpload('cancelFile', fileIndex);
        };
        jqxFileUploadComponent.prototype.cancelAll = function () {
            this.host.jqxFileUpload('cancelAll');
        };
        jqxFileUploadComponent.prototype.destroy = function () {
            this.host.jqxFileUpload('destroy');
        };
        jqxFileUploadComponent.prototype.render = function () {
            this.host.jqxFileUpload('render');
        };
        jqxFileUploadComponent.prototype.refresh = function () {
            this.host.jqxFileUpload('refresh');
        };
        jqxFileUploadComponent.prototype.uploadFile = function (fileIndex) {
            this.host.jqxFileUpload('uploadFile', fileIndex);
        };
        jqxFileUploadComponent.prototype.uploadAll = function () {
            this.host.jqxFileUpload('uploadAll');
        };
        jqxFileUploadComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('remove', function (eventData) { _this.onRemove.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
            this.host.on('uploadStart', function (eventData) { _this.onUploadStart.emit(eventData); });
            this.host.on('uploadEnd', function (eventData) { _this.onUploadEnd.emit(eventData); });
        };
        __decorate([
            core.Input('autoUpload'),
            __metadata("design:type", Boolean)
        ], jqxFileUploadComponent.prototype, "attrAutoUpload", void 0);
        __decorate([
            core.Input('accept'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrAccept", void 0);
        __decorate([
            core.Input('browseTemplate'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrBrowseTemplate", void 0);
        __decorate([
            core.Input('cancelTemplate'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrCancelTemplate", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxFileUploadComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('fileInputName'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrFileInputName", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('multipleFilesUpload'),
            __metadata("design:type", Boolean)
        ], jqxFileUploadComponent.prototype, "attrMultipleFilesUpload", void 0);
        __decorate([
            core.Input('renderFiles'),
            __metadata("design:type", Function)
        ], jqxFileUploadComponent.prototype, "attrRenderFiles", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxFileUploadComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('uploadUrl'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrUploadUrl", void 0);
        __decorate([
            core.Input('uploadTemplate'),
            __metadata("design:type", String)
        ], jqxFileUploadComponent.prototype, "attrUploadTemplate", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxFileUploadComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "onRemove", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "onUploadStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFileUploadComponent.prototype, "onUploadEnd", void 0);
        jqxFileUploadComponent = __decorate([
            core.Component({
                selector: 'jqxFileUpload',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxFileUploadComponent);
        return jqxFileUploadComponent;
    }()); //jqxFileUploadComponent

    var jqxFileUploadModule = /** @class */ (function () {
        function jqxFileUploadModule() {
        }
        jqxFileUploadModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxFileUploadComponent],
                exports: [jqxFileUploadComponent]
            })
        ], jqxFileUploadModule);
        return jqxFileUploadModule;
    }());

    exports.jqxFileUploadComponent = jqxFileUploadComponent;
    exports.jqxFileUploadModule = jqxFileUploadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxfileupload.umd.js.map
