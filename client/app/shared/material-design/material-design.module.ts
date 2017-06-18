import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MdButtonModule
  , MdCheckboxModule
  , MdCardModule
} from '@angular/material';

const modules: any[] = [
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesigModule { }
