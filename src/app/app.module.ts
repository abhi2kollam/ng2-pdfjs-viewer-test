import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PdfJsViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
