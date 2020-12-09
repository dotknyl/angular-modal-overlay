import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalOverlayComponent } from './modal-overlay/modal-overlay.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './modal-overlay/moday-overlay.service';
import { MsgComponent } from './components/msg/msg.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [AppComponent, ModalOverlayComponent, MsgComponent],
  imports: [BrowserModule, FormsModule, OverlayModule, DragDropModule],
  providers: [OverlayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
