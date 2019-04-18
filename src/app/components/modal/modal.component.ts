import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Inject, TemplateRef, Renderer2, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalType, ModalContent } from 'src/app/classes/modal.classes';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ModalService } from 'src/app/services/modal.service';
import { HtmlAstPath } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public title: string = '';
  public content: TemplateRef<HTMLElement>;
  @ViewChild('modalActions') modalActions: TemplateRef<HTMLElement>;
  @ViewChild('modalContent') modalContent: TemplateRef<HTMLElement>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.modalTitle.subscribe((title: string) => {
      this.title = title
    });

    this.modalService.modalContent.subscribe((content) => {
      this.modalContent = content;
    });

    this.modalService.modalActions.subscribe((actions) => {
      this.modalActions = actions;
    });

    this.modalService.modalVisible.subscribe((isVisible: boolean) => {
      const modal = document.getElementById('modalContainer');
      if (isVisible) {
        this.renderer.setStyle(modal, 'display', 'block');
      } else {
        this.renderer.setStyle(modal, 'display', 'none');
      }
    });

  }


}
