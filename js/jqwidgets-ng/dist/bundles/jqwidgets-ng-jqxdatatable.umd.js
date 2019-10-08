require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');
require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');
require('../../jqwidgets-scripts/jqwidgets/jqxdatatable');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdatatable', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdatatable = {}), global.ng.core));
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
    var jqxDataTableComponent = /** @class */ (function () {
        function jqxDataTableComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'height', 'initRowDetails', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width'];
            // jqxDataTableComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onCellBeginEdit = new core.EventEmitter();
            this.onCellEndEdit = new core.EventEmitter();
            this.onCellValueChanged = new core.EventEmitter();
            this.onColumnResized = new core.EventEmitter();
            this.onColumnReordered = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onPageChanged = new core.EventEmitter();
            this.onPageSizeChanged = new core.EventEmitter();
            this.onRowClick = new core.EventEmitter();
            this.onRowDoubleClick = new core.EventEmitter();
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onRowBeginEdit = new core.EventEmitter();
            this.onRowEndEdit = new core.EventEmitter();
            this.onRowExpand = new core.EventEmitter();
            this.onRowCollapse = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDataTableComponent.prototype.ngOnInit = function () {
        };
        jqxDataTableComponent.prototype.ngAfterViewInit = function () {
            var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
            var html = '';
            var options = {};
            if (children.length > 0) {
                this.container = document.createElement('div');
                html = this.elementRef.nativeElement.innerHTML;
                this.container.appendChild(this.elementRef.nativeElement.firstChild);
                this.elementRef.nativeElement.innerHTML = html;
                this.content = html;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                if (this['attrColumns'] !== undefined) {
                    options['source'] = result.source;
                }
                else {
                    options['source'] = result.source;
                    options['columns'] = result.columns;
                }
            }
            if (this.autoCreate) {
                this.createComponent(options);
            }
        };
        jqxDataTableComponent.prototype.ngAfterViewChecked = function () {
            if (this.container) {
                if (this.content !== this.container.innerHTML) {
                    this.content = this.container.innerHTML;
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    var columns = this.host.jqxGrid('columns');
                    if (columns.length === 0) {
                        this.host.jqxGrid({ source: result.source, columns: result.columns });
                    }
                    else {
                        this.host.jqxGrid({ source: result.source });
                    }
                }
            }
        };
        jqxDataTableComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDataTable(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDataTable(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDataTable(this.properties[i])) {
                            this.host.jqxDataTable(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDataTableComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDataTableComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDataTableComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDataTableComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDataTableComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
        };
        jqxDataTableComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDataTableComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDataTableComponent.prototype.setOptions = function (options) {
            this.host.jqxDataTable('setOptions', options);
        };
        // jqxDataTableComponent properties
        jqxDataTableComponent.prototype.altRows = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('altRows', arg);
            }
            else {
                return this.host.jqxDataTable('altRows');
            }
        };
        jqxDataTableComponent.prototype.autoRowHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('autoRowHeight', arg);
            }
            else {
                return this.host.jqxDataTable('autoRowHeight');
            }
        };
        jqxDataTableComponent.prototype.aggregatesHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('aggregatesHeight', arg);
            }
            else {
                return this.host.jqxDataTable('aggregatesHeight');
            }
        };
        jqxDataTableComponent.prototype.autoShowLoadElement = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('autoShowLoadElement', arg);
            }
            else {
                return this.host.jqxDataTable('autoShowLoadElement');
            }
        };
        jqxDataTableComponent.prototype.columnsHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('columnsHeight', arg);
            }
            else {
                return this.host.jqxDataTable('columnsHeight');
            }
        };
        jqxDataTableComponent.prototype.columns = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('columns', arg);
            }
            else {
                return this.host.jqxDataTable('columns');
            }
        };
        jqxDataTableComponent.prototype.columnGroups = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('columnGroups', arg);
            }
            else {
                return this.host.jqxDataTable('columnGroups');
            }
        };
        jqxDataTableComponent.prototype.columnsResize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('columnsResize', arg);
            }
            else {
                return this.host.jqxDataTable('columnsResize');
            }
        };
        jqxDataTableComponent.prototype.columnsReorder = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('columnsReorder', arg);
            }
            else {
                return this.host.jqxDataTable('columnsReorder');
            }
        };
        jqxDataTableComponent.prototype.disabled = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('disabled', arg);
            }
            else {
                return this.host.jqxDataTable('disabled');
            }
        };
        jqxDataTableComponent.prototype.editable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('editable', arg);
            }
            else {
                return this.host.jqxDataTable('editable');
            }
        };
        jqxDataTableComponent.prototype.editSettings = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('editSettings', arg);
            }
            else {
                return this.host.jqxDataTable('editSettings');
            }
        };
        jqxDataTableComponent.prototype.exportSettings = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('exportSettings', arg);
            }
            else {
                return this.host.jqxDataTable('exportSettings');
            }
        };
        jqxDataTableComponent.prototype.enableHover = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('enableHover', arg);
            }
            else {
                return this.host.jqxDataTable('enableHover');
            }
        };
        jqxDataTableComponent.prototype.enableBrowserSelection = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('enableBrowserSelection', arg);
            }
            else {
                return this.host.jqxDataTable('enableBrowserSelection');
            }
        };
        jqxDataTableComponent.prototype.filterable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('filterable', arg);
            }
            else {
                return this.host.jqxDataTable('filterable');
            }
        };
        jqxDataTableComponent.prototype.filterHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('filterHeight', arg);
            }
            else {
                return this.host.jqxDataTable('filterHeight');
            }
        };
        jqxDataTableComponent.prototype.filterMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('filterMode', arg);
            }
            else {
                return this.host.jqxDataTable('filterMode');
            }
        };
        jqxDataTableComponent.prototype.groups = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('groups', arg);
            }
            else {
                return this.host.jqxDataTable('groups');
            }
        };
        jqxDataTableComponent.prototype.groupsRenderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('groupsRenderer', arg);
            }
            else {
                return this.host.jqxDataTable('groupsRenderer');
            }
        };
        jqxDataTableComponent.prototype.height = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('height', arg);
            }
            else {
                return this.host.jqxDataTable('height');
            }
        };
        jqxDataTableComponent.prototype.initRowDetails = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('initRowDetails', arg);
            }
            else {
                return this.host.jqxDataTable('initRowDetails');
            }
        };
        jqxDataTableComponent.prototype.incrementalSearch = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('incrementalSearch', arg);
            }
            else {
                return this.host.jqxDataTable('incrementalSearch');
            }
        };
        jqxDataTableComponent.prototype.localization = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('localization', arg);
            }
            else {
                return this.host.jqxDataTable('localization');
            }
        };
        jqxDataTableComponent.prototype.pagerHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pagerHeight', arg);
            }
            else {
                return this.host.jqxDataTable('pagerHeight');
            }
        };
        jqxDataTableComponent.prototype.pageSize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pageSize', arg);
            }
            else {
                return this.host.jqxDataTable('pageSize');
            }
        };
        jqxDataTableComponent.prototype.pageSizeOptions = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pageSizeOptions', arg);
            }
            else {
                return this.host.jqxDataTable('pageSizeOptions');
            }
        };
        jqxDataTableComponent.prototype.pageable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pageable', arg);
            }
            else {
                return this.host.jqxDataTable('pageable');
            }
        };
        jqxDataTableComponent.prototype.pagerPosition = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pagerPosition', arg);
            }
            else {
                return this.host.jqxDataTable('pagerPosition');
            }
        };
        jqxDataTableComponent.prototype.pagerMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pagerMode', arg);
            }
            else {
                return this.host.jqxDataTable('pagerMode');
            }
        };
        jqxDataTableComponent.prototype.pagerButtonsCount = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pagerButtonsCount', arg);
            }
            else {
                return this.host.jqxDataTable('pagerButtonsCount');
            }
        };
        jqxDataTableComponent.prototype.pagerRenderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('pagerRenderer', arg);
            }
            else {
                return this.host.jqxDataTable('pagerRenderer');
            }
        };
        jqxDataTableComponent.prototype.ready = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('ready', arg);
            }
            else {
                return this.host.jqxDataTable('ready');
            }
        };
        jqxDataTableComponent.prototype.rowDetails = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('rowDetails', arg);
            }
            else {
                return this.host.jqxDataTable('rowDetails');
            }
        };
        jqxDataTableComponent.prototype.renderToolbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('renderToolbar', arg);
            }
            else {
                return this.host.jqxDataTable('renderToolbar');
            }
        };
        jqxDataTableComponent.prototype.renderStatusBar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('renderStatusBar', arg);
            }
            else {
                return this.host.jqxDataTable('renderStatusBar');
            }
        };
        jqxDataTableComponent.prototype.rendering = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('rendering', arg);
            }
            else {
                return this.host.jqxDataTable('rendering');
            }
        };
        jqxDataTableComponent.prototype.rendered = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('rendered', arg);
            }
            else {
                return this.host.jqxDataTable('rendered');
            }
        };
        jqxDataTableComponent.prototype.rtl = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('rtl', arg);
            }
            else {
                return this.host.jqxDataTable('rtl');
            }
        };
        jqxDataTableComponent.prototype.source = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('source', arg);
            }
            else {
                return this.host.jqxDataTable('source');
            }
        };
        jqxDataTableComponent.prototype.sortable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('sortable', arg);
            }
            else {
                return this.host.jqxDataTable('sortable');
            }
        };
        jqxDataTableComponent.prototype.showAggregates = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('showAggregates', arg);
            }
            else {
                return this.host.jqxDataTable('showAggregates');
            }
        };
        jqxDataTableComponent.prototype.showToolbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('showToolbar', arg);
            }
            else {
                return this.host.jqxDataTable('showToolbar');
            }
        };
        jqxDataTableComponent.prototype.showStatusbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('showStatusbar', arg);
            }
            else {
                return this.host.jqxDataTable('showStatusbar');
            }
        };
        jqxDataTableComponent.prototype.statusBarHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('statusBarHeight', arg);
            }
            else {
                return this.host.jqxDataTable('statusBarHeight');
            }
        };
        jqxDataTableComponent.prototype.scrollBarSize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('scrollBarSize', arg);
            }
            else {
                return this.host.jqxDataTable('scrollBarSize');
            }
        };
        jqxDataTableComponent.prototype.selectionMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('selectionMode', arg);
            }
            else {
                return this.host.jqxDataTable('selectionMode');
            }
        };
        jqxDataTableComponent.prototype.serverProcessing = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('serverProcessing', arg);
            }
            else {
                return this.host.jqxDataTable('serverProcessing');
            }
        };
        jqxDataTableComponent.prototype.showHeader = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('showHeader', arg);
            }
            else {
                return this.host.jqxDataTable('showHeader');
            }
        };
        jqxDataTableComponent.prototype.theme = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('theme', arg);
            }
            else {
                return this.host.jqxDataTable('theme');
            }
        };
        jqxDataTableComponent.prototype.toolbarHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('toolbarHeight', arg);
            }
            else {
                return this.host.jqxDataTable('toolbarHeight');
            }
        };
        jqxDataTableComponent.prototype.width = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDataTable('width', arg);
            }
            else {
                return this.host.jqxDataTable('width');
            }
        };
        // jqxDataTableComponent functions
        jqxDataTableComponent.prototype.addRow = function (rowIndex, rowData, rowPosition) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);
        };
        jqxDataTableComponent.prototype.addFilter = function (dataField, filerGroup) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('addFilter', dataField, filerGroup);
        };
        jqxDataTableComponent.prototype.applyFilters = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('applyFilters');
        };
        jqxDataTableComponent.prototype.beginUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('beginUpdate');
        };
        jqxDataTableComponent.prototype.beginRowEdit = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('beginRowEdit', rowIndex);
        };
        jqxDataTableComponent.prototype.beginCellEdit = function (rowIndex, dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);
        };
        jqxDataTableComponent.prototype.clearSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('clearSelection');
        };
        jqxDataTableComponent.prototype.clearFilters = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('clearFilters');
        };
        jqxDataTableComponent.prototype.clear = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('clear');
        };
        jqxDataTableComponent.prototype.destroy = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('destroy');
        };
        jqxDataTableComponent.prototype.deleteRow = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('deleteRow', rowIndex);
        };
        jqxDataTableComponent.prototype.endUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('endUpdate');
        };
        jqxDataTableComponent.prototype.ensureRowVisible = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('ensureRowVisible', rowIndex);
        };
        jqxDataTableComponent.prototype.endRowEdit = function (rowIndex, cancelChanges) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);
        };
        jqxDataTableComponent.prototype.endCellEdit = function (rowIndex, dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('endCellEdit', rowIndex, dataField);
        };
        jqxDataTableComponent.prototype.exportData = function (exportDataType) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('exportData', exportDataType);
        };
        jqxDataTableComponent.prototype.focus = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('focus');
        };
        jqxDataTableComponent.prototype.getColumnProperty = function (dataField, propertyName) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);
        };
        jqxDataTableComponent.prototype.goToPage = function (pageIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('goToPage', pageIndex);
        };
        jqxDataTableComponent.prototype.goToPrevPage = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('goToPrevPage');
        };
        jqxDataTableComponent.prototype.goToNextPage = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('goToNextPage');
        };
        jqxDataTableComponent.prototype.getSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('getSelection');
        };
        jqxDataTableComponent.prototype.getRows = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('getRows');
        };
        jqxDataTableComponent.prototype.getView = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('getView');
        };
        jqxDataTableComponent.prototype.getCellValue = function (rowIndex, dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('getCellValue', rowIndex, dataField);
        };
        jqxDataTableComponent.prototype.hideColumn = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('hideColumn', dataField);
        };
        jqxDataTableComponent.prototype.hideDetails = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('hideDetails', rowIndex);
        };
        jqxDataTableComponent.prototype.isBindingCompleted = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('isBindingCompleted');
        };
        jqxDataTableComponent.prototype.lockRow = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('lockRow', rowIndex);
        };
        jqxDataTableComponent.prototype.refresh = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('refresh');
        };
        jqxDataTableComponent.prototype.render = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('render');
        };
        jqxDataTableComponent.prototype.removeFilter = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('removeFilter', dataField);
        };
        jqxDataTableComponent.prototype.scrollOffset = function (top, left) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('scrollOffset', top, left);
        };
        jqxDataTableComponent.prototype.setColumnProperty = function (dataField, propertyName, propertyValue) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
        };
        jqxDataTableComponent.prototype.showColumn = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('showColumn', dataField);
        };
        jqxDataTableComponent.prototype.selectRow = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('selectRow', rowIndex);
        };
        jqxDataTableComponent.prototype.showDetails = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('showDetails', rowIndex);
        };
        jqxDataTableComponent.prototype.setCellValue = function (rowIndex, dataField, value) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);
        };
        jqxDataTableComponent.prototype.sortBy = function (dataField, sortOrder) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('sortBy', dataField, sortOrder);
        };
        jqxDataTableComponent.prototype.updating = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDataTable('updating');
        };
        jqxDataTableComponent.prototype.updateBoundData = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('updateBoundData');
        };
        jqxDataTableComponent.prototype.unselectRow = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('unselectRow', rowIndex);
        };
        jqxDataTableComponent.prototype.updateRow = function (rowIndex, rowData) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('updateRow', rowIndex, rowData);
        };
        jqxDataTableComponent.prototype.unlockRow = function (rowIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDataTable('unlockRow', rowIndex);
        };
        jqxDataTableComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('cellBeginEdit', function (eventData) { _this.onCellBeginEdit.emit(eventData); });
            this.host.on('cellEndEdit', function (eventData) { _this.onCellEndEdit.emit(eventData); });
            this.host.on('cellValueChanged', function (eventData) { _this.onCellValueChanged.emit(eventData); });
            this.host.on('columnResized', function (eventData) { _this.onColumnResized.emit(eventData); });
            this.host.on('columnReordered', function (eventData) { _this.onColumnReordered.emit(eventData); });
            this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
            this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
            this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
            this.host.on('pageSizeChanged', function (eventData) { _this.onPageSizeChanged.emit(eventData); });
            this.host.on('rowClick', function (eventData) { _this.onRowClick.emit(eventData); });
            this.host.on('rowDoubleClick', function (eventData) { _this.onRowDoubleClick.emit(eventData); });
            this.host.on('rowSelect', function (eventData) { _this.onRowSelect.emit(eventData); });
            this.host.on('rowUnselect', function (eventData) { _this.onRowUnselect.emit(eventData); });
            this.host.on('rowBeginEdit', function (eventData) { _this.onRowBeginEdit.emit(eventData); });
            this.host.on('rowEndEdit', function (eventData) { _this.onRowEndEdit.emit(eventData); });
            this.host.on('rowExpand', function (eventData) { _this.onRowExpand.emit(eventData); });
            this.host.on('rowCollapse', function (eventData) { _this.onRowCollapse.emit(eventData); });
        };
        __decorate([
            core.Input('altRows'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrAltRows", void 0);
        __decorate([
            core.Input('autoRowHeight'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrAutoRowHeight", void 0);
        __decorate([
            core.Input('aggregatesHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrAggregatesHeight", void 0);
        __decorate([
            core.Input('autoShowLoadElement'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrAutoShowLoadElement", void 0);
        __decorate([
            core.Input('columnsHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrColumnsHeight", void 0);
        __decorate([
            core.Input('columns'),
            __metadata("design:type", Array)
        ], jqxDataTableComponent.prototype, "attrColumns", void 0);
        __decorate([
            core.Input('columnGroups'),
            __metadata("design:type", Array)
        ], jqxDataTableComponent.prototype, "attrColumnGroups", void 0);
        __decorate([
            core.Input('columnsResize'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrColumnsResize", void 0);
        __decorate([
            core.Input('columnsReorder'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrColumnsReorder", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('editable'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrEditable", void 0);
        __decorate([
            core.Input('editSettings'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrEditSettings", void 0);
        __decorate([
            core.Input('exportSettings'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrExportSettings", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('enableBrowserSelection'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrEnableBrowserSelection", void 0);
        __decorate([
            core.Input('filterable'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrFilterable", void 0);
        __decorate([
            core.Input('filterHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrFilterHeight", void 0);
        __decorate([
            core.Input('filterMode'),
            __metadata("design:type", String)
        ], jqxDataTableComponent.prototype, "attrFilterMode", void 0);
        __decorate([
            core.Input('groups'),
            __metadata("design:type", Array)
        ], jqxDataTableComponent.prototype, "attrGroups", void 0);
        __decorate([
            core.Input('groupsRenderer'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrGroupsRenderer", void 0);
        __decorate([
            core.Input('initRowDetails'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrInitRowDetails", void 0);
        __decorate([
            core.Input('incrementalSearch'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrIncrementalSearch", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('pagerHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrPagerHeight", void 0);
        __decorate([
            core.Input('pageSize'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrPageSize", void 0);
        __decorate([
            core.Input('pageSizeOptions'),
            __metadata("design:type", Array)
        ], jqxDataTableComponent.prototype, "attrPageSizeOptions", void 0);
        __decorate([
            core.Input('pageable'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrPageable", void 0);
        __decorate([
            core.Input('pagerPosition'),
            __metadata("design:type", String)
        ], jqxDataTableComponent.prototype, "attrPagerPosition", void 0);
        __decorate([
            core.Input('pagerMode'),
            __metadata("design:type", String)
        ], jqxDataTableComponent.prototype, "attrPagerMode", void 0);
        __decorate([
            core.Input('pagerButtonsCount'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrPagerButtonsCount", void 0);
        __decorate([
            core.Input('pagerRenderer'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrPagerRenderer", void 0);
        __decorate([
            core.Input('ready'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrReady", void 0);
        __decorate([
            core.Input('rowDetails'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrRowDetails", void 0);
        __decorate([
            core.Input('renderToolbar'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrRenderToolbar", void 0);
        __decorate([
            core.Input('renderStatusBar'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrRenderStatusBar", void 0);
        __decorate([
            core.Input('rendering'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrRendering", void 0);
        __decorate([
            core.Input('rendered'),
            __metadata("design:type", Function)
        ], jqxDataTableComponent.prototype, "attrRendered", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('sortable'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrSortable", void 0);
        __decorate([
            core.Input('showAggregates'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrShowAggregates", void 0);
        __decorate([
            core.Input('showToolbar'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrShowToolbar", void 0);
        __decorate([
            core.Input('showStatusbar'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrShowStatusbar", void 0);
        __decorate([
            core.Input('statusBarHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrStatusBarHeight", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('selectionMode'),
            __metadata("design:type", String)
        ], jqxDataTableComponent.prototype, "attrSelectionMode", void 0);
        __decorate([
            core.Input('serverProcessing'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrServerProcessing", void 0);
        __decorate([
            core.Input('showHeader'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "attrShowHeader", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxDataTableComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('toolbarHeight'),
            __metadata("design:type", Number)
        ], jqxDataTableComponent.prototype, "attrToolbarHeight", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDataTableComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onCellBeginEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onCellEndEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onCellValueChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onColumnResized", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onColumnReordered", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onSort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onPageChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onPageSizeChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowDoubleClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowUnselect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowBeginEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowEndEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowExpand", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDataTableComponent.prototype, "onRowCollapse", void 0);
        jqxDataTableComponent = __decorate([
            core.Component({
                selector: 'jqxDataTable',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDataTableComponent);
        return jqxDataTableComponent;
    }()); //jqxDataTableComponent

    var jqxDataTableModule = /** @class */ (function () {
        function jqxDataTableModule() {
        }
        jqxDataTableModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDataTableComponent],
                exports: [jqxDataTableComponent]
            })
        ], jqxDataTableModule);
        return jqxDataTableModule;
    }());

    exports.jqxDataTableComponent = jqxDataTableComponent;
    exports.jqxDataTableModule = jqxDataTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxdatatable.umd.js.map
