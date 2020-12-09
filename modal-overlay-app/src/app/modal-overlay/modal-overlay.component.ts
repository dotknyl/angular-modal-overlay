import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ModalOverlayRef } from './modal-overlay-ref';

@Component({
  selector: "app-modal-overlay",
  templateUrl: "./modal-overlay.component.html",
})
export class ModalOverlayComponent implements OnInit {
  contentType: "template" | "string" | "component" = "component";
  content: string | TemplateRef<any> | Type<any>;
  context;
  title: string;
  constructor(private ref: ModalOverlayRef) {
    this.title = ref.data.title;
  }
  ngOnInit(): void {
    this.content = this.ref.content;
    if (typeof this.content === "string") {
      this.contentType = "string";
    } else if (this.content instanceof TemplateRef) {
      this.contentType = "template";
      this.context = {
        close: this.ref.close.bind(this.ref),
      };
    } else {
      this.contentType = "component";
    }
  }
  close() {
    this.ref.close(null);
  }
}
