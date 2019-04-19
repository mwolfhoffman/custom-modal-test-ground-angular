import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, TemplateRef, Renderer2, ElementRef, ComponentRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

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
  @ViewChild('DisplayStringForModalContentRef') stringContentRef: TemplateRef<HTMLElement>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef //  used for showing component for modalService.showAdvancedModal();
  public componentToBeDisplayed: any;
  public componentRef: ComponentRef<{}>;

  public contentString: string = '';

  constructor(
    private resolver: ComponentFactoryResolver,
    private el: ElementRef,
    private renderer: Renderer2,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    window.onclick = function (event) {
      let modal = document.getElementById('modalContainer');
      if (modal) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }


    this.modalService.modalTitle.subscribe((title: string) => {
      this.title = title
    });

    this.modalService.modalContent.subscribe((content) => {
      if (content && typeof content === 'string') {
        this.contentString = content;
        this.modalContent = this.stringContentRef;
      } else if (content && typeof content !== 'string' && typeof content != 'function') {
        this.modalContent = content;
      }
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

    this.modalService.modalComponent.subscribe((componentToBeDisplayed) => {
      if (componentToBeDisplayed) {
        debugger
        this.componentToBeDisplayed = componentToBeDisplayed;
        let componentFactory = this.resolver.resolveComponentFactory(this.componentToBeDisplayed);
        this.componentRef = this.entry.createComponent(componentFactory);

      }
    });

    this.modalService.destroyModal.subscribe((shouldDestroy) => {
      if (this.componentRef && shouldDestroy) {
        this.componentRef.destroy();
      }
    });

    this.modalService.topLevelClasses.subscribe((topLevelClasses: string[]) => {
      if (topLevelClasses && topLevelClasses.length) {
        topLevelClasses.forEach((className: string) => {
          const modal = document.getElementById('modalContainer');
          this.renderer.addClass(modal, className);
        });
      }
    });

  }
  public closeModal(): void {
    this.modalService.closeModal();
  }



}
