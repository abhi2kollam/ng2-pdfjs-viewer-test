import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ng2-pdfjs-viewer-test';
    activeItemIndex = 0;
    public bookmarks = [];
    @ViewChild('pdfViewer') pdfViewer: PdfJsViewerComponent;
    constructor(private cdr: ChangeDetectorRef) {

    }
    public documentLoad(event: Event): void {
        this.pdfViewer.PDFViewerApplication.pdfDocument
            .getOutline()
            .then((bookmarks) => {
                this.bookmarks = bookmarks;
                this.cdr.detectChanges();
            });
    }
    /**
     * goToSomePage
     */
    public goToSomePage(target: any, i): void {
        this.activeItemIndex = i;
        this.pdfViewer.PDFViewerApplication.pdfLinkService.navigateTo(target);
    }
    public onPageChange(event: any): void {
        this.activeItemIndex = event - 1;
    }
}
