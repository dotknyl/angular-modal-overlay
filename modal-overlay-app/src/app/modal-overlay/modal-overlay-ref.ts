import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R;
}
// R = Response Data Type, T = Data passed to Modal Type
export class ModalOverlayRef<R = any, T = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();
  constructor(
    public overlay: OverlayRef,
    public content: string | TemplateRef<any> | Type<any>,
    public data: T
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }
  private _close(type: 'backdropClick' | 'close', data: R) {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data,
    });

    this.afterClosed$.complete();
  }
  close(data?: R) {
    this._close('close', data);
  }
}
