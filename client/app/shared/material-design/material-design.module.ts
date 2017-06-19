import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MdCardModule
  , MdTabsModule
  , MdRadioModule
  , MdInputModule
  , MdSelectModule
  , MdButtonModule
  , MdCheckboxModule
  , MdDatepickerModule

} from '@angular/material';

const MODULES: any[] = [
    MdCardModule,
    MdTabsModule,
    MdRadioModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    BrowserAnimationsModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialDesigModule { }
