import { DOCUMENT } from "@angular/common";
import { Injectable, RendererFactory2, Inject, Renderer2 } from "@angular/core";
import { Observable } from "rxjs";

/** @dynamic */
@Injectable()
export class MatXtndCssInjectorService {

  readonly renderer2: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) { }

  fromSource(key: string, src: string): Observable<void> {

    return new Observable((sub) => {
      const link = this.document.createElement("link");
      link.href = src;
      link.id = key;
      link.rel = "stylesheet";
      link.onload = () => {
        sub.next();
        sub.complete();
      }
      this.renderer2.appendChild(this.document.body, link);
    });
  }


}
