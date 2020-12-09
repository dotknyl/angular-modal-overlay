import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import {
  ComponentRef,
  Injectable,
  Injector,
  TemplateRef,
  Type,
} from "@angular/core";
import { ModalOverlayRef } from "./modal-overlay-ref";
import { ModalOverlayComponent } from "./modal-overlay.component";

@Injectable({
  providedIn: "root",
})
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}
  open<R = any, T = any>(
    content: string | TemplateRef<any> | Type<any>,
    data: T
  ): ModalOverlayRef<R> {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ["modal", "is-active"],
      backdropClass: "modal-background",
      positionStrategy,
    });
    const overlayRef = this.overlay.create(configs);

    const myOverlayRef = new ModalOverlayRef<R, T>(overlayRef, content, data);
    const injector = this.createInjector(myOverlayRef);

    overlayRef.attach(
      new ComponentPortal(ModalOverlayComponent, null, injector)
    );
    // const compRef: ComponentRef<ModalOverlayComponent> = overlayRef.attach(
    //   new ComponentPortal(ModalOverlayComponent, null, injector)
    // );
    return myOverlayRef;
  }
  createInjector(ref: ModalOverlayRef) {
    const injectorTokens = new WeakMap();
    injectorTokens.set(ModalOverlayRef, ref);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
