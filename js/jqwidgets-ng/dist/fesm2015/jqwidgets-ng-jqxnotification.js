import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxnotification from '../../jqwidgets-scripts/jqwidgets/jqxnotification';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxNotificationComponent = class jqxNotificationComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
        // jqxNotificationComponent events
        this.onClose = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                        this.host.jqxNotification(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNotification('setOptions', options);
    }
    // jqxNotificationComponent properties
    appendContainer(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('appendContainer', arg);
        }
        else {
            return this.host.jqxNotification('appendContainer');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoOpen', arg);
        }
        else {
            return this.host.jqxNotification('autoOpen');
        }
    }
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationOpenDelay');
        }
    }
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationCloseDelay');
        }
    }
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoClose', arg);
        }
        else {
            return this.host.jqxNotification('autoClose');
        }
    }
    autoCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('autoCloseDelay');
        }
    }
    blink(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('blink', arg);
        }
        else {
            return this.host.jqxNotification('blink');
        }
    }
    browserBoundsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('browserBoundsOffset', arg);
        }
        else {
            return this.host.jqxNotification('browserBoundsOffset');
        }
    }
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('closeOnClick', arg);
        }
        else {
            return this.host.jqxNotification('closeOnClick');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('disabled', arg);
        }
        else {
            return this.host.jqxNotification('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('height', arg);
        }
        else {
            return this.host.jqxNotification('height');
        }
    }
    hoverOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('hoverOpacity', arg);
        }
        else {
            return this.host.jqxNotification('hoverOpacity');
        }
    }
    icon(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('icon', arg);
        }
        else {
            return this.host.jqxNotification('icon');
        }
    }
    notificationOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('notificationOffset', arg);
        }
        else {
            return this.host.jqxNotification('notificationOffset');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('opacity', arg);
        }
        else {
            return this.host.jqxNotification('opacity');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('position', arg);
        }
        else {
            return this.host.jqxNotification('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('rtl', arg);
        }
        else {
            return this.host.jqxNotification('rtl');
        }
    }
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('showCloseButton', arg);
        }
        else {
            return this.host.jqxNotification('showCloseButton');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('template', arg);
        }
        else {
            return this.host.jqxNotification('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('theme', arg);
        }
        else {
            return this.host.jqxNotification('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('width', arg);
        }
        else {
            return this.host.jqxNotification('width');
        }
    }
    // jqxNotificationComponent functions
    closeAll() {
        this.host.jqxNotification('closeAll');
    }
    closeLast() {
        this.host.jqxNotification('closeLast');
    }
    destroy() {
        this.host.jqxNotification('destroy');
    }
    open() {
        this.host.jqxNotification('open');
    }
    refresh() {
        this.host.jqxNotification('refresh');
    }
    render() {
        this.host.jqxNotification('render');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
}; //jqxNotificationComponent
__decorate([
    Input('appendContainer'),
    __metadata("design:type", String)
], jqxNotificationComponent.prototype, "attrAppendContainer", void 0);
__decorate([
    Input('autoOpen'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    Input('animationOpenDelay'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrAnimationOpenDelay", void 0);
__decorate([
    Input('animationCloseDelay'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrAnimationCloseDelay", void 0);
__decorate([
    Input('autoClose'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrAutoClose", void 0);
__decorate([
    Input('autoCloseDelay'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAutoCloseDelay", void 0);
__decorate([
    Input('blink'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrBlink", void 0);
__decorate([
    Input('browserBoundsOffset'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrBrowserBoundsOffset", void 0);
__decorate([
    Input('closeOnClick'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrCloseOnClick", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('hoverOpacity'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrHoverOpacity", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrIcon", void 0);
__decorate([
    Input('notificationOffset'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrNotificationOffset", void 0);
__decorate([
    Input('opacity'),
    __metadata("design:type", Number)
], jqxNotificationComponent.prototype, "attrOpacity", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], jqxNotificationComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('showCloseButton'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxNotificationComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxNotificationComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onOpen", void 0);
jqxNotificationComponent = __decorate([
    Component({
        selector: 'jqxNotification',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxNotificationComponent);

let jqxNotificationModule = class jqxNotificationModule {
};
jqxNotificationModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxNotificationComponent],
        exports: [jqxNotificationComponent]
    })
], jqxNotificationModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNotificationComponent, jqxNotificationModule };
//# sourceMappingURL=jqwidgets-ng-jqxnotification.js.map
