import { ComponentType } from '@angular/cdk/portal';
import { Component, TemplateRef } from '@angular/core';
import { MsgComponent } from './components/msg/msg.component';
import { OverlayService } from './modal-overlay/moday-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'modal-overlay-app';
  msg: string;
  msgComponent = MsgComponent;
  constructor(public overlayService: OverlayService) {}
  openModalOverlay(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.overlayService.open(content, {
      msg: this.msg,
    });

    ref.afterClosed$.subscribe((res) => {
      if (typeof content === 'string') {
      } else if (content === this.msgComponent) {
        console.log(res);
      }
    });
  }
}
