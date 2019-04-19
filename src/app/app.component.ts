import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ModalType } from './classes/modal.classes';
import { DialogSettings } from './classes/dialog.classes';
import { TestFormComponent } from './components/test-form/test-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('SampleTemplateRef') sampleTemplateRef: TemplateRef<HTMLElement>;
  @ViewChild('SampleActionsRef') sampleActionsRef: TemplateRef<HTMLElement>;
  public testFormComponent:TestFormComponent;

  constructor(
    private modalService: ModalService
  ) { }

  showModal() {
    let modal: ModalType = new ModalType();
    modal.title = 'This is a title!',
      modal.component = this.sampleTemplateRef;
    modal.actonsRef = this.sampleActionsRef;
    this.modalService.showModal(modal);
  }

  closeModal() {
    this.modalService.closeModal();
  }

  displayError() {
    let error = new Error('This modal library is just too cool.');
    this.modalService.displayError(error);
  }

  showStringModal() {
    let modal = new ModalType();
    modal.title = "Custom string title";
    modal.component = "Yup, you guessed it. Custom string content!";

    this.modalService.showModal(modal);
  }

  showAdvancedModal() {

    let dialogSettings: DialogSettings = {
      title: "Purchase a Plan",
      actions: this.sampleActionsRef,
      content: TestFormComponent
    }

    this.modalService.showModalAdvanced(dialogSettings, ['purchaseplan-modal']);
 //   this.testFormComponent = modal.content.instance;


  }

}
