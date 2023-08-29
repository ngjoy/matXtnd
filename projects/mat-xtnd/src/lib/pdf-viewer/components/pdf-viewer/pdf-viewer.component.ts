import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

export type MatXtndPdfViewerParamsType = { src: string, template?: undefined | TemplateRef<any> };

@Component({
  selector: 'matxtnd-pdf-viewer',
  templateUrl: 'pdf-viewer.component.html',
  styleUrls: [`pdf-viewer.component.scss`]
})
export class MatXtndPdfViewerComponent implements AfterViewInit, OnDestroy {
  
  safeSourceUrl: any;
  loading = true;
  mobileQuery = this.media.matchMedia('(max-width: 768px)');
  @ViewChild('frame', { static: true }) iframe: ElementRef | undefined;
  subs$: Subscription[] = [];

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public readonly data: MatXtndPdfViewerParamsType,
    private readonly matDialogRef: MatDialogRef<MatXtndPdfViewerComponent>,
    private readonly media: MediaMatcher
  ) {
    this.safeSourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bse);
  }

  ngAfterViewInit() {
    if (this.iframe?.nativeElement) {
      const load$ = fromEvent(this.iframe.nativeElement, 'load').pipe(
        tap(() => { this.loading = false })
      );
      this.subs$ = [load$.subscribe()];
    }
  }

  get bse() {
    return this.mobileQuery.matches ? `https://drive.google.com/viewerng/viewer?embedded=true&url=${this.data.src}` : this.data.src;
  }

  close() {
    this.matDialogRef.close();
  }

  ngOnDestroy() {
    if (this.subs$?.length) {
      this.subs$.forEach(s => s.unsubscribe());
    }
  }

} 
