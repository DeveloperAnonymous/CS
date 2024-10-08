import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtreemap from '../../jqwidgets-scripts/jqwidgets/jqxtreemap';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxTreeMapComponent = class jqxTreeMapComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
        // jqxTreeMapComponent events
        this.onBindingComplete = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeMap(this.properties[i])) {
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTreeMap('setOptions', options);
    }
    // jqxTreeMapComponent properties
    baseColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('baseColor', arg);
        }
        else {
            return this.host.jqxTreeMap('baseColor');
        }
    }
    colorRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRanges', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRanges');
        }
    }
    colorRange(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRange', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRange');
        }
    }
    colorMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorMode', arg);
        }
        else {
            return this.host.jqxTreeMap('colorMode');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('displayMember', arg);
        }
        else {
            return this.host.jqxTreeMap('displayMember');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('height', arg);
        }
        else {
            return this.host.jqxTreeMap('height');
        }
    }
    hoverEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('hoverEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('hoverEnabled');
        }
    }
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('headerHeight', arg);
        }
        else {
            return this.host.jqxTreeMap('headerHeight');
        }
    }
    legendLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendLabel', arg);
        }
        else {
            return this.host.jqxTreeMap('legendLabel');
        }
    }
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendPosition', arg);
        }
        else {
            return this.host.jqxTreeMap('legendPosition');
        }
    }
    legendScaleCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendScaleCallback', arg);
        }
        else {
            return this.host.jqxTreeMap('legendScaleCallback');
        }
    }
    renderCallbacks(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('renderCallbacks', arg);
        }
        else {
            return this.host.jqxTreeMap('renderCallbacks');
        }
    }
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('selectionEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('selectionEnabled');
        }
    }
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('showLegend', arg);
        }
        else {
            return this.host.jqxTreeMap('showLegend');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('source', arg);
        }
        else {
            return this.host.jqxTreeMap('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('theme', arg);
        }
        else {
            return this.host.jqxTreeMap('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('valueMember', arg);
        }
        else {
            return this.host.jqxTreeMap('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('width', arg);
        }
        else {
            return this.host.jqxTreeMap('width');
        }
    }
    // jqxTreeMapComponent functions
    destroy() {
        this.host.jqxTreeMap('destroy');
    }
    render() {
        this.host.jqxTreeMap('render');
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
    }
}; //jqxTreeMapComponent
__decorate([
    Input('baseColor'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrBaseColor", void 0);
__decorate([
    Input('colorRanges'),
    __metadata("design:type", Array)
], jqxTreeMapComponent.prototype, "attrColorRanges", void 0);
__decorate([
    Input('colorRange'),
    __metadata("design:type", Number)
], jqxTreeMapComponent.prototype, "attrColorRange", void 0);
__decorate([
    Input('colorMode'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrColorMode", void 0);
__decorate([
    Input('displayMember'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrDisplayMember", void 0);
__decorate([
    Input('hoverEnabled'),
    __metadata("design:type", Boolean)
], jqxTreeMapComponent.prototype, "attrHoverEnabled", void 0);
__decorate([
    Input('headerHeight'),
    __metadata("design:type", Number)
], jqxTreeMapComponent.prototype, "attrHeaderHeight", void 0);
__decorate([
    Input('legendLabel'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrLegendLabel", void 0);
__decorate([
    Input('legendPosition'),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "attrLegendPosition", void 0);
__decorate([
    Input('legendScaleCallback'),
    __metadata("design:type", Function)
], jqxTreeMapComponent.prototype, "attrLegendScaleCallback", void 0);
__decorate([
    Input('renderCallbacks'),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "attrRenderCallbacks", void 0);
__decorate([
    Input('selectionEnabled'),
    __metadata("design:type", Boolean)
], jqxTreeMapComponent.prototype, "attrSelectionEnabled", void 0);
__decorate([
    Input('showLegend'),
    __metadata("design:type", Boolean)
], jqxTreeMapComponent.prototype, "attrShowLegend", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "attrSource", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('valueMember'),
    __metadata("design:type", String)
], jqxTreeMapComponent.prototype, "attrValueMember", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTreeMapComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTreeMapComponent.prototype, "onBindingComplete", void 0);
jqxTreeMapComponent = __decorate([
    Component({
        selector: 'jqxTreeMap',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxTreeMapComponent);

let jqxTreeMapModule = class jqxTreeMapModule {
};
jqxTreeMapModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxTreeMapComponent],
        exports: [jqxTreeMapComponent]
    })
], jqxTreeMapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTreeMapComponent, jqxTreeMapModule };
//# sourceMappingURL=jqwidgets-ng-jqxtreemap.js.map
