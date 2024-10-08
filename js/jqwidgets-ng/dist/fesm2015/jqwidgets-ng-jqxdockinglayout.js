import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';
import * as jqxlayout from '../../jqwidgets-scripts/jqwidgets/jqxlayout';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxdockinglayout from '../../jqwidgets-scripts/jqwidgets/jqxdockinglayout';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxDockingLayoutComponent = class jqxDockingLayoutComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDockingLayout('setOptions', options);
    }
    // jqxDockingLayoutComponent properties
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    }
    minGroupHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    }
    minGroupWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    }
    // jqxDockingLayoutComponent functions
    addFloatGroup(width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    }
    destroy() {
        this.host.jqxDockingLayout('destroy');
    }
    loadLayout(layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    }
    refresh() {
        this.host.jqxDockingLayout('refresh');
    }
    render() {
        this.host.jqxDockingLayout('render');
    }
    saveLayout() {
        return this.host.jqxDockingLayout('saveLayout');
    }
    __wireEvents__() {
        this.host.on('dock', (eventData) => { this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', (eventData) => { this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', (eventData) => { this.onFloat.emit(eventData); });
        this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
    }
}; //jqxDockingLayoutComponent
__decorate([
    Input('contextMenu'),
    __metadata("design:type", Boolean)
], jqxDockingLayoutComponent.prototype, "attrContextMenu", void 0);
__decorate([
    Input('layout'),
    __metadata("design:type", Array)
], jqxDockingLayoutComponent.prototype, "attrLayout", void 0);
__decorate([
    Input('minGroupHeight'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrMinGroupHeight", void 0);
__decorate([
    Input('minGroupWidth'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrMinGroupWidth", void 0);
__decorate([
    Input('resizable'),
    __metadata("design:type", Boolean)
], jqxDockingLayoutComponent.prototype, "attrResizable", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxDockingLayoutComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxDockingLayoutComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDockingLayoutComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onDock", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onFloatGroupClosed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onFloat", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onPin", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onResize", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onUnpin", void 0);
jqxDockingLayoutComponent = __decorate([
    Component({
        selector: 'jqxDockingLayout',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxDockingLayoutComponent);

let jqxDockingLayoutModule = class jqxDockingLayoutModule {
};
jqxDockingLayoutModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxDockingLayoutComponent],
        exports: [jqxDockingLayoutComponent]
    })
], jqxDockingLayoutModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDockingLayoutComponent, jqxDockingLayoutModule };
//# sourceMappingURL=jqwidgets-ng-jqxdockinglayout.js.map
