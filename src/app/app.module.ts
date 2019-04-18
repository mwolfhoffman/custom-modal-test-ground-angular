import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalService } from './services/modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContent } from './classes/modal.classes';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ModalContent,
    ModalService
  ],
  entryComponents:[
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
