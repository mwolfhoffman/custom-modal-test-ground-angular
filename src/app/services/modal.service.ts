import { Injectable, TemplateRef } from "@angular/core";
import { ModalType, ModalContent } from "../classes/modal.classes";
import { ModalComponent } from "../components/modal/modal.component";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ModalService {

    private _modalVisible = new BehaviorSubject<boolean>(false);
    private _modalTitle = new BehaviorSubject<string>(null);
    private _modalContent = new BehaviorSubject<TemplateRef<HTMLElement>>(null);
    private _modalActions = new BehaviorSubject<TemplateRef<HTMLElement>>(null);

    public modalVisible = this._modalVisible.asObservable();
    public modalTitle = this._modalTitle.asObservable();
    public modalContent = this._modalContent.asObservable();
    public modalActions = this._modalActions.asObservable()

    public showModal(modal: ModalType): void {
        this._modalContent.next(modal.component);
        this._modalActions.next(modal.actonsRef);
        this._modalTitle.next(modal.title);
        this._modalVisible.next(true);
    }

    private _clearAllModalContent() {
        this._modalVisible.next(false);
        this._modalContent.next(null);
        this._modalActions.next(null);
        this._modalTitle.next(null);
    }

    public closeModal() {
        this._clearAllModalContent()
    }

}