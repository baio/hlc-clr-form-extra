import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HlcClrFormModule } from '@ng-holistic/clr-forms'

import {
  HlcClrDocumentUploadComponent,
  HlcClrDocumentUploadModule,
  HlcClrFileUploadComponent,
  HlcClrFileUploadModule,
  HlcClrImageUploadComponent,
  HlcClrImageUploadModule
} from '@ng-holistic/clr-file-upload';
import { HlcClrRichTextComponent, HlcClrRichTextModule } from '../rich-text';
import { HlcNgSelectComponent, HlcNgSelectModule } from '@ng-holistic/ng-select';

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//


@NgModule({
  imports: [BrowserModule, HttpClientModule, HlcClrFormModule.forRoot({
    RichTextField: HlcClrRichTextComponent,
    ImageUploadField: HlcClrImageUploadComponent,
    FileUploadField: HlcClrFileUploadComponent,
    DocumentUploadField: HlcClrDocumentUploadComponent,
    NgSelectField: HlcNgSelectComponent
  }),
    HlcClrRichTextModule,
    HlcClrImageUploadModule,
    HlcClrFileUploadModule,
    HlcClrDocumentUploadModule,
    HlcNgSelectModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  entryComponents: [
    HlcClrRichTextComponent,
    HlcClrImageUploadComponent,
    HlcClrDocumentUploadComponent,
    HlcNgSelectComponent
  ],

})
export class AppModule { }
