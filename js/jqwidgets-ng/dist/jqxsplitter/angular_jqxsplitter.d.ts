/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxSplitterComponent implements OnChanges {
    attrDisabled: boolean;
    attrOrientation: string;
    attrPanels: Array<jqwidgets.SplitterPanel>;
    attrResizable: boolean;
    attrSplitBarSize: number;
    attrShowSplitBar: boolean;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxSplitter;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    orientation(arg?: string): string;
    panels(arg?: Array<jqwidgets.SplitterPanel>): Array<jqwidgets.SplitterPanel>;
    resizable(arg?: boolean): boolean;
    splitBarSize(arg?: number): number;
    showSplitBar(arg?: boolean): boolean;
    theme(arg?: string): string;
    width(arg?: string | number): string | number;
    collapse(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    expand(): void;
    render(): void;
    refresh(): void;
    onCollapsed: EventEmitter<{}>;
    onExpanded: EventEmitter<{}>;
    onResize: EventEmitter<{}>;
    onResizeStart: EventEmitter<{}>;
    __wireEvents__(): void;
}
