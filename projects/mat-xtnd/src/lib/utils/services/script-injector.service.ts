import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Observable } from "rxjs";

/** @dynamic */
@Injectable()
export class MatXtndScriptInjectorService {

  readonly renderer2: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) { }

  hasScript(key: string) {
    const script = this.document.getElementById(key);
    return !!script;
  }

  fromSource(key: string, src: string): Observable<void> {

    return new Observable((sub) => {
      const script = this.document.createElement("script");
      script.id = key;
      script.type = "text/javascript";
      script.src = src;
      script.onload = () => {
        sub.next();
        sub.complete();
      }
      this.renderer2.appendChild(this.document.body, script);
    });
  }


}
