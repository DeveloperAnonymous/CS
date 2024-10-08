import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';
import { __decorate, __metadata } from 'tslib';
import { Input, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxPanelComponent = class jqxPanelComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                        this.host.jqxPanel(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxPanel('setOptions', options);
    }
    // jqxPanelComponent properties
    autoUpdate(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('autoUpdate', arg);
        }
        else {
            return this.host.jqxPanel('autoUpdate');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('disabled', arg);
        }
        else {
            return this.host.jqxPanel('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('height', arg);
        }
        else {
            return this.host.jqxPanel('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('rtl', arg);
        }
        else {
            return this.host.jqxPanel('rtl');
        }
    }
    sizeMode(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('sizeMode', arg);
        }
        else {
            return this.host.jqxPanel('sizeMode');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('scrollBarSize', arg);
        }
        else {
            return this.host.jqxPanel('scrollBarSize');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('theme', arg);
        }
        else {
            return this.host.jqxPanel('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('width', arg);
        }
        else {
            return this.host.jqxPanel('width');
        }
    }
    // jqxPanelComponent functions
    append(HTMLElement) {
        this.host.jqxPanel('append', HTMLElement);
    }
    clearcontent() {
        this.host.jqxPanel('clearcontent');
    }
    destroy() {
        this.host.jqxPanel('destroy');
    }
    focus() {
        this.host.jqxPanel('focus');
    }
    getScrollHeight() {
        return this.host.jqxPanel('getScrollHeight');
    }
    getVScrollPosition() {
        return this.host.jqxPanel('getVScrollPosition');
    }
    getScrollWidth() {
        return this.host.jqxPanel('getScrollWidth');
    }
    getHScrollPosition() {
        return this.host.jqxPanel('getHScrollPosition');
    }
    prepend(HTMLElement) {
        this.host.jqxPanel('prepend', HTMLElement);
    }
    remove(HTMLElement) {
        this.host.jqxPanel('remove', HTMLElement);
    }
    scrollTo(left, top) {
        this.host.jqxPanel('scrollTo', left, top);
    }
    // jqxPanelComponent events
    __wireEvents__() {
    }
}; //jqxPanelComponent
__decorate([
    Input('autoUpdate'),
    __metadata("design:type", Boolean)
], jqxPanelComponent.prototype, "attrAutoUpdate", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxPanelComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxPanelComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('sizeMode'),
    __metadata("design:type", String)
], jqxPanelComponent.prototype, "attrSizeMode", void 0);
__decorate([
    Input('scrollBarSize'),
    __metadata("design:type", Object)
], jqxPanelComponent.prototype, "attrScrollBarSize", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxPanelComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxPanelComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxPanelComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxPanelComponent.prototype, "autoCreate", void 0);
jqxPanelComponent = __decorate([
    Component({
        selector: 'jqxPanel',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxPanelComponent);

let jqxPanelModule = class jqxPanelModule {
};
jqxPanelModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxPanelComponent],
        exports: [jqxPanelComponent]
    })
], jqxPanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPanelComponent, jqxPanelModule };
//# sourceMappingURL=jqwidgets-ng-jqxpanel.js.map
