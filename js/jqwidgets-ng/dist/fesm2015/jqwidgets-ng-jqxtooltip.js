import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxTooltipComponent = class jqxTooltipComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
        // jqxTooltipComponent events
        this.onClose = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpening = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTooltip('setOptions', options);
    }
    // jqxTooltipComponent properties
    absolutePositionX(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionX', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionX');
        }
    }
    absolutePositionY(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionY', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionY');
        }
    }
    autoHide(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHide', arg);
        }
        else {
            return this.host.jqxTooltip('autoHide');
        }
    }
    autoHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('autoHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationShowDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationShowDelay');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationHideDelay');
        }
    }
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('content', arg);
        }
        else {
            return this.host.jqxTooltip('content');
        }
    }
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('closeOnClick', arg);
        }
        else {
            return this.host.jqxTooltip('closeOnClick');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('disabled', arg);
        }
        else {
            return this.host.jqxTooltip('disabled');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxTooltip('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('height', arg);
        }
        else {
            return this.host.jqxTooltip('height');
        }
    }
    left(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('left', arg);
        }
        else {
            return this.host.jqxTooltip('left');
        }
    }
    name(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('name', arg);
        }
        else {
            return this.host.jqxTooltip('name');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('opacity', arg);
        }
        else {
            return this.host.jqxTooltip('opacity');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('position', arg);
        }
        else {
            return this.host.jqxTooltip('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('rtl', arg);
        }
        else {
            return this.host.jqxTooltip('rtl');
        }
    }
    showDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showDelay', arg);
        }
        else {
            return this.host.jqxTooltip('showDelay');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showArrow', arg);
        }
        else {
            return this.host.jqxTooltip('showArrow');
        }
    }
    top(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('top', arg);
        }
        else {
            return this.host.jqxTooltip('top');
        }
    }
    trigger(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('trigger', arg);
        }
        else {
            return this.host.jqxTooltip('trigger');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('theme', arg);
        }
        else {
            return this.host.jqxTooltip('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('width', arg);
        }
        else {
            return this.host.jqxTooltip('width');
        }
    }
    // jqxTooltipComponent functions
    close(index) {
        this.host.jqxTooltip('close', index);
    }
    destroy() {
        this.host.jqxTooltip('destroy');
    }
    open(left, top) {
        this.host.jqxTooltip('open', left, top);
    }
    refresh() {
        this.host.jqxTooltip('refresh');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('closing', (eventData) => { this.onClosing.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('opening', (eventData) => { this.onOpening.emit(eventData); });
    }
}; //jqxTooltipComponent
__decorate([
    Input('absolutePositionX'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrAbsolutePositionX", void 0);
__decorate([
    Input('absolutePositionY'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrAbsolutePositionY", void 0);
__decorate([
    Input('autoHide'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrAutoHide", void 0);
__decorate([
    Input('autoHideDelay'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrAutoHideDelay", void 0);
__decorate([
    Input('animationShowDelay'),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    Input('animationHideDelay'),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    Input('content'),
    __metadata("design:type", String)
], jqxTooltipComponent.prototype, "attrContent", void 0);
__decorate([
    Input('closeOnClick'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrCloseOnClick", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableBrowserBoundsDetection'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
__decorate([
    Input('left'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrLeft", void 0);
__decorate([
    Input('name'),
    __metadata("design:type", String)
], jqxTooltipComponent.prototype, "attrName", void 0);
__decorate([
    Input('opacity'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrOpacity", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], jqxTooltipComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('showDelay'),
    __metadata("design:type", Number)
], jqxTooltipComponent.prototype, "attrShowDelay", void 0);
__decorate([
    Input('showArrow'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "attrShowArrow", void 0);
__decorate([
    Input('top'),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "attrTop", void 0);
__decorate([
    Input('trigger'),
    __metadata("design:type", String)
], jqxTooltipComponent.prototype, "attrTrigger", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxTooltipComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTooltipComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "onClosing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "onOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTooltipComponent.prototype, "onOpening", void 0);
jqxTooltipComponent = __decorate([
    Component({
        selector: 'jqxTooltip',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxTooltipComponent);

let jqxTooltipModule = class jqxTooltipModule {
};
jqxTooltipModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxTooltipComponent],
        exports: [jqxTooltipComponent]
    })
], jqxTooltipModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTooltipComponent, jqxTooltipModule };
//# sourceMappingURL=jqwidgets-ng-jqxtooltip.js.map
