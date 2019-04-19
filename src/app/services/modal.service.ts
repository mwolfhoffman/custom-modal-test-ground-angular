import { Injectable, TemplateRef } from "@angular/core";
import { ModalType } from "../classes/modal.classes";
import { ModalComponent } from "../components/modal/modal.component";
import { BehaviorSubject } from "rxjs";
import { DialogRef, DialogSettings } from "../classes/dialog.classes";


@Injectable()
export class ModalService {



    private _modalVisible = new BehaviorSubject<boolean>(false);
    private _modalTitle = new BehaviorSubject<string>(null);
    private _modalContent = new BehaviorSubject<TemplateRef<HTMLElement> | string | Function>(null);
    private _modalActions = new BehaviorSubject<TemplateRef<HTMLElement>>(null);
    private _modalComponent = new BehaviorSubject<any>(null); // TODO: type this? 

    public modalVisible = this._modalVisible.asObservable();
    public modalTitle = this._modalTitle.asObservable();
    public modalContent = this._modalContent.asObservable();
    public modalActions = this._modalActions.asObservable()
    public modalComponent = this._modalComponent.asObservable();

    public showModal(modal: ModalType): void {
        this._clearAllModalContent();
        this._modalContent.next(modal.component);
        this._modalActions.next(modal.actonsRef);
        this._modalTitle.next(modal.title);
        this._modalVisible.next(true);
    };

    showModalAdvanced(dialogSettings: DialogSettings, topLevelClasses?: string[]): void {
        this._clearAllModalContent();
        if(typeof dialogSettings.content=='function'){
            this._modalComponent.next(dialogSettings.content);
        }
        this._modalVisible.next(true);
        this._modalContent.next(dialogSettings.content);
        this._modalActions.next(dialogSettings.actions);
        this._modalTitle.next(dialogSettings.title);
        this._modalVisible.next(true);

        //  let componentDialog = new DialogRef();

        // if (topLevelClasses) {
        //   topLevelClasses.forEach(topLevelClass => {
        //     componentDialog.dialog.location.nativeElement.classList.add(topLevelClass);
        //   });
        // }

        //  this.listenForDialogEvents();
        //  return componentDialog;
    }

    private _clearAllModalContent() {
        this._modalVisible.next(false);
        this._modalContent.next(null);
        this._modalActions.next(null);
        this._modalTitle.next(null);
    };

    public closeModal() {
        this._clearAllModalContent()
    };

    displayError(error) {
        this._modalVisible.next(true);
        this._modalTitle.next('Oh no! There was an error');
        this._modalContent.next('errrrrrrrrrrrrrr')
    };

}