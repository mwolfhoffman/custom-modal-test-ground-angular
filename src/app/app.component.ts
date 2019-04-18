import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ModalType } from './classes/modal.classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('SampleTemplateRef') sampleTemplateRef:TemplateRef<HTMLElement>; 
  @ViewChild('SampleActionsRef') sampleActionsRef:TemplateRef<HTMLElement>; 

  constructor(
  private modalService:ModalService
) {}

showModal(){
  let modal:ModalType = new ModalType();
  modal.title = 'foo',
  modal.component = this.sampleTemplateRef;
  modal.actonsRef = this.sampleActionsRef;
  this.modalService.showModal(modal);
}

closeModal(){
  this.modalService.closeModal();
}
}
