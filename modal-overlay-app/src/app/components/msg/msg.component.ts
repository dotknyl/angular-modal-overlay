import { Component, Inject, OnInit } from '@angular/core';
import { ModalOverlayRef } from 'src/app/modal-overlay/modal-overlay-ref';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
})
export class MsgComponent implements OnInit {
  msg: string;
  constructor(@Inject(ModalOverlayRef) public componentData: any) {
    this.msg = componentData.data.msg;
  }

  ngOnInit(): void {}
}
