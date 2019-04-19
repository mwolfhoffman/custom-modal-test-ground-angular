import { TemplateRef, Injectable, ViewContainerRef, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';

abstract class Modal{
    message?: string;
    template?: TemplateRef<HTMLElement>;
    component?: any;
    width?: number;
    height?: number;
    minWidth?: number;
    actonsRef?: TemplateRef<HTMLElement>;
    title?: string;
    customClass?: string;
}

export class ModalType extends Modal {
}

@Injectable()
export class ModalContent extends Modal{}

