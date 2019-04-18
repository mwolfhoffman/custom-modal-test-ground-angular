import { TemplateRef, Injectable } from '@angular/core';

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