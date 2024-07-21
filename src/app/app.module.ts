import { NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPartComponent } from './left-part/left-part.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
@NgModule({
  declarations: [
    AppComponent,
    LeftPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    NgxDocViewerModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
