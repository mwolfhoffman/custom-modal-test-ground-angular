import { ComponentRef, TemplateRef, ViewContainerRef, AfterContentInit, AfterViewInit, OnInit, OnDestroy, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * The settings for the Dialog actions when the Dialog is opened through `DialogService`
 * ([see example]({% slug api_dialog_dialogservice %}#toc-open)).
 */
export declare class DialogAction {
    /**
     * The text of the action button.
     */
    text: string;
    /**
     * Determines if the action button is styled as a primary button.
     */
    primary?: boolean;
}
/**
 * Indicates that the **Close** button is clicked. Used when the results from
 * the Dialogs that are opened through `DialogService` are filtered
 * ([see example]({% slug api_dialog_dialogservice %}#toc-open)).
 */
export declare class DialogCloseResult {
}
/**
 * Specifies the possible result types of the Dialog. Instances of
 * [`DialogCloseResult`]({% slug api_dialog_dialogcloseresult %})
 * indicate that the **Close** button of the Dialog was clicked
 * ([see example]({% slug api_dialog_dialogservice %}#toc-open).
 * Otherwise, the value is the configuration of the action button that was clicked.
 */
export declare type DialogResult = DialogCloseResult | DialogAction;
/**
 * The settings that can be used when the Dialog is opened through `DialogService`.
 * ([see example]({% slug api_dialog_dialogservice %}#toc-open)).
 */
export declare class DialogSettings {
    /**
     * Sets the title of the Dialog. If `title` is omitted,
     * the Dialog will not render a **Close** button.
     */
    title?: string;
    /**
     * Defines the content of the Dialog.
     */
    content?: string | TemplateRef<any> | Function;
    /**
     * Specifies the width of the Dialog.
     */
    width?: number;
    /**
     * Specifies the minimum width of the Dialog.
     */
    minWidth?: number;
    /**
     * Specifies the height of the Dialog.
     */
    height?: number;
    /**
     * Defines the container in which the Dialog will be inserted.
     * Specifying this option changes the place in the page hierarchy where the Dialog will be inserted.
     * The styling of the component will remain the same.
     */
    appendTo?: ViewContainerRef;
    /**
     * Sets the action buttons of the Dialog.
     */
    actions?: TemplateRef<any>;
}
/**
 * Holds references to the object instance and published events of the Dialog.
 * Controls the Dialogs that were opened through the `DialogService`
 * ([see example]({% slug api_dialog_dialogservice %}#toc-open)).
 */
export declare class DialogRef {
    /**
     * Emits events when the Dialog is closed either through the **Close** button of the title bar or through the action buttons.
     * If the **Close** button of the title bar is clicked, `DialogResult` is a `DialogCloseResult` instance.
     * If the Dialog is closed through the action buttons, `DialogResult` contains the object that was passed when the Dialog was opened.
     */
    result: Observable<DialogResult>;
    /**
     * A reference to the Dialog instance.
     */
    dialog: ComponentRef<DialogComponent>;
    /**
     * A reference to the child component of the Dialog.
     * Available when the Dialog is opened with [component content]({% slug service_dialog %}#toc-using-components).
     */
    content: ComponentRef<any>;
    /**
     * Allows you to close the Dialog through code.
     */
    close: Function;
}


export declare class DialogComponent implements AfterContentInit, AfterViewInit, OnInit, OnDestroy {
    private _elRef;
    private _renderer;
    /**
     * Specifies the text rendered in the title bar.
     */
    title: string;
    /**
     * Specifies the action buttons that will be rendered.
     */
    actions: string;
    /**
     * Specifies the width of the Dialog.
     * The `width` property has to be set in pixels.
     */
    width: number;
    /**
     * Specifies the minimum width of the Dialog.
     * The `minWidth` property has to be set in pixels.
     */
    minWidth: number;
    /**
     * Specifies the height of the Dialog.
     * The `height` property has to be set in pixels.
     */
    height: number;
    /**
     * @hidden
     */
    contentTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    titleId: string;
    /**
     * Fires when the user clicks on the **Close** button of the Dialog.
     */
    action: EventEmitter<any>;
    /**
     * Fires when the user clicks on the **Close** button of the Dialog.
     */
    close: EventEmitter<any>;
    readonly dir: string;
    tabIndex: number;
    titlebarContent: any //DialogTitleBarComponent;
    titlebarView: any //DialogTitleBarComponent;
    actionsView: any //DialogActionsComponent;
    private direction;
    private subscriptions;
    constructor(_elRef: ElementRef, _renderer: Renderer2);
    /**
     * @hidden
     */
    onComponentKeydown(event: KeyboardEvent): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Focuses the wrapper of the Dialog component.
     */
    focus(): void;
    /**
     * @hidden
     */
    private handleInitialFocus();
    /**
     * @hidden
     */
    private handleActionButtonFocus(parent, key);
    /**
     * @hidden
     */
    private keepFocusWithinComponent(target, event);
    /**
     * @hidden
     */
    private shouldFocusPrimary(el);
    /**
     * @hidden
     */
    private getAllFocusableChildren(parent);
    /**
     * @hidden
     */
    private getLastFocusableElement(parent);
    /**
     * @hidden
     */
    private generateTitleId();
    readonly wrapperClass: boolean;
    readonly styles: any;
    private bubble(eventName, component);
}
