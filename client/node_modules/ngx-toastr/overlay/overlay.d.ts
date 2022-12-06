import { ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { OverlayRef } from './overlay-ref';
import { ToastContainerDirective } from '../toastr/toast.directive';
import { OverlayContainer } from './overlay-container';
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
export declare class Overlay {
    private _overlayContainer;
    private _componentFactoryResolver;
    private _appRef;
    private _paneElements;
    constructor(_overlayContainer: OverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef);
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    create(positionClass?: string, overlayContainer?: ToastContainerDirective): OverlayRef;
    getPaneElement(positionClass?: string, overlayContainer?: ToastContainerDirective): HTMLElement;
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    private _createPaneElement;
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    private _createPortalHost;
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    private _createOverlayRef;
}
/** Providers for Overlay and its related injectables. */
export declare const OVERLAY_PROVIDERS: (typeof OverlayContainer | typeof Overlay)[];
