import { Toast } from './toast.component';
import { GlobalConfig } from './toastr-config';
export declare class DefaultGlobalConfig implements GlobalConfig {
    maxOpened: number;
    autoDismiss: boolean;
    newestOnTop: boolean;
    preventDuplicates: boolean;
    resetTimeoutOnDuplicate: boolean;
    iconClasses: {
        error: string;
        info: string;
        success: string;
        warning: string;
    };
    toastComponent: typeof Toast;
    closeButton: boolean;
    disableTimeOut: false;
    timeOut: number;
    extendedTimeOut: number;
    enableHtml: boolean;
    progressBar: boolean;
    toastClass: string;
    positionClass: string;
    titleClass: string;
    messageClass: string;
    easing: string;
    easeTime: number;
    tapToDismiss: boolean;
    onActivateTick: boolean;
    progressAnimation: 'decreasing' | 'increasing';
}
