import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalService } from './services/modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContent } from './classes/modal.classes';
import { TestFormComponent } from './components/test-form/test-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    ModalContent,
    ModalService
  ],
  entryComponents:[
    ModalComponent,
    TestFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
