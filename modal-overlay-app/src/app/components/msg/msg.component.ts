import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { ModalOverlayRef } from 'src/app/modal-overlay/modal-overlay-ref';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
})
export class MsgComponent implements OnInit {
  msg: string;
  arr = ['A', 'B', 'C', 'D', 'E', 'F'];
  constructor(@Inject(ModalOverlayRef) private componentData: any) {
    this.msg = componentData.data.msg;
  }

  ngOnInit(): void {}
  closeModalOverlay() {
    this.componentData.close(this.arr);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arr, event.previousIndex, event.currentIndex);
    console.log(this.arr);
  }
}
