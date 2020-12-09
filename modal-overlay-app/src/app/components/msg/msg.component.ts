import { Component, Inject, OnInit } from '@angular/core';
import { ModalOverlayRef } from 'src/app/modal-overlay/modal-overlay-ref';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
})
export class MsgComponent implements OnInit {
  msg: string;
<<<<<<< HEAD
  constructor(@Inject(ModalOverlayRef) private componentData: any) {
=======
  constructor(@Inject(ModalOverlayRef) public componentData: any) {
>>>>>>> 65adc6e977f46a4cc9e877e7bc81f5e083b1cd8f
    this.msg = componentData.data.msg;
  }

  ngOnInit(): void {}
<<<<<<< HEAD
  closeModalOverlay() {
    this.componentData.close();
  }
=======
>>>>>>> 65adc6e977f46a4cc9e877e7bc81f5e083b1cd8f
}
