import { InjectionToken } from '@angular/core';
import { GlobalConfig } from './toastr-config';
export interface ToastToken {
    config: GlobalConfig;
    defaults: any;
}
export declare const TOAST_CONFIG: InjectionToken<ToastToken>;
