import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { DragToSelectModule } from 'ngx-drag-to-select';

@NgModule({
  imports: [
    CoreModule,
    StateModule,
    DragToSelectModule.forRoot()
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
  ],
})
export class PagesModule { }
