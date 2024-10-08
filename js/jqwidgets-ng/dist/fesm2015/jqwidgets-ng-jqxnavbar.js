import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxnavbar from '../../jqwidgets-scripts/jqwidgets/jqxnavbar';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxNavBarComponent = class jqxNavBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
        // jqxNavBarComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNavBar('setOptions', options);
    }
    // jqxNavBarComponent properties
    columns(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('columns', arg);
        }
        else {
            return this.host.jqxNavBar('columns');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('disabled', arg);
        }
        else {
            return this.host.jqxNavBar('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('height', arg);
        }
        else {
            return this.host.jqxNavBar('height');
        }
    }
    minimized(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimized', arg);
        }
        else {
            return this.host.jqxNavBar('minimized');
        }
    }
    minimizeButtonPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizeButtonPosition', arg);
        }
        else {
            return this.host.jqxNavBar('minimizeButtonPosition');
        }
    }
    minimizedHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedHeight', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedHeight');
        }
    }
    minimizedTitle(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedTitle', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedTitle');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('orientation', arg);
        }
        else {
            return this.host.jqxNavBar('orientation');
        }
    }
    popupAnimationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('popupAnimationDelay', arg);
        }
        else {
            return this.host.jqxNavBar('popupAnimationDelay');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('rtl', arg);
        }
        else {
            return this.host.jqxNavBar('rtl');
        }
    }
    selection(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selection', arg);
        }
        else {
            return this.host.jqxNavBar('selection');
        }
    }
    selectedItem(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selectedItem', arg);
        }
        else {
            return this.host.jqxNavBar('selectedItem');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('theme', arg);
        }
        else {
            return this.host.jqxNavBar('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('width', arg);
        }
        else {
            return this.host.jqxNavBar('width');
        }
    }
    // jqxNavBarComponent functions
    close() {
        this.host.jqxNavBar('close');
    }
    destroy() {
        this.host.jqxNavBar('destroy');
    }
    getSelectedIndex() {
        return this.host.jqxNavBar('getSelectedIndex');
    }
    open() {
        this.host.jqxNavBar('open');
    }
    selectAt(index) {
        this.host.jqxNavBar('selectAt', index);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxNavBarComponent
__decorate([
    Input('columns'),
    __metadata("design:type", Array)
], jqxNavBarComponent.prototype, "attrColumns", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('minimized'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "attrMinimized", void 0);
__decorate([
    Input('minimizeButtonPosition'),
    __metadata("design:type", String)
], jqxNavBarComponent.prototype, "attrMinimizeButtonPosition", void 0);
__decorate([
    Input('minimizedHeight'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimizedHeight", void 0);
__decorate([
    Input('minimizedTitle'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimizedTitle", void 0);
__decorate([
    Input('orientation'),
    __metadata("design:type", String)
], jqxNavBarComponent.prototype, "attrOrientation", void 0);
__decorate([
    Input('popupAnimationDelay'),
    __metadata("design:type", Number)
], jqxNavBarComponent.prototype, "attrPopupAnimationDelay", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('selection'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "attrSelection", void 0);
__decorate([
    Input('selectedItem'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrSelectedItem", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxNavBarComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "onChange", void 0);
jqxNavBarComponent = __decorate([
    Component({
        selector: 'jqxNavBar',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxNavBarComponent);

let jqxNavBarModule = class jqxNavBarModule {
};
jqxNavBarModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxNavBarComponent],
        exports: [jqxNavBarComponent]
    })
], jqxNavBarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNavBarComponent, jqxNavBarModule };
//# sourceMappingURL=jqwidgets-ng-jqxnavbar.js.map
