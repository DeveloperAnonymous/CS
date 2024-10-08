import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxbuttongroup from '../../jqwidgets-scripts/jqwidgets/jqxbuttongroup';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxButtonGroupComponent = class jqxButtonGroupComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
        // jqxButtonGroupComponent events
        this.onButtonclick = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onUnselected = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
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
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxButtonGroup('setOptions', options);
    }
    // jqxButtonGroupComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('disabled', arg);
        }
        else {
            return this.host.jqxButtonGroup('disabled');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('enableHover', arg);
        }
        else {
            return this.host.jqxButtonGroup('enableHover');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('mode', arg);
        }
        else {
            return this.host.jqxButtonGroup('mode');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('rtl', arg);
        }
        else {
            return this.host.jqxButtonGroup('rtl');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('template', arg);
        }
        else {
            return this.host.jqxButtonGroup('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('theme', arg);
        }
        else {
            return this.host.jqxButtonGroup('theme');
        }
    }
    // jqxButtonGroupComponent functions
    disableAt(index) {
        this.host.jqxButtonGroup('disableAt', index);
    }
    disable() {
        this.host.jqxButtonGroup('disable');
    }
    destroy() {
        this.host.jqxButtonGroup('destroy');
    }
    enable() {
        this.host.jqxButtonGroup('enable');
    }
    enableAt(index) {
        this.host.jqxButtonGroup('enableAt', index);
    }
    getSelection() {
        return this.host.jqxButtonGroup('getSelection');
    }
    render() {
        this.host.jqxButtonGroup('render');
    }
    setSelection(index) {
        this.host.jqxButtonGroup('setSelection', index);
    }
    __wireEvents__() {
        this.host.on('buttonclick', (eventData) => { this.onButtonclick.emit(eventData); });
        this.host.on('selected', (eventData) => { this.onSelected.emit(eventData); });
        this.host.on('unselected', (eventData) => { this.onUnselected.emit(eventData); });
    }
}; //jqxButtonGroupComponent
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxButtonGroupComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableHover'),
    __metadata("design:type", Boolean)
], jqxButtonGroupComponent.prototype, "attrEnableHover", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", String)
], jqxButtonGroupComponent.prototype, "attrMode", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxButtonGroupComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxButtonGroupComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxButtonGroupComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxButtonGroupComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onButtonclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onUnselected", void 0);
jqxButtonGroupComponent = __decorate([
    Component({
        selector: 'jqxButtonGroup',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxButtonGroupComponent);

let jqxButtonGroupModule = class jqxButtonGroupModule {
};
jqxButtonGroupModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxButtonGroupComponent],
        exports: [jqxButtonGroupComponent]
    })
], jqxButtonGroupModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxButtonGroupComponent, jqxButtonGroupModule };
//# sourceMappingURL=jqwidgets-ng-jqxbuttongroup.js.map
