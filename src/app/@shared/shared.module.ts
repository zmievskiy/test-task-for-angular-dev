import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { AddUsernamePipe } from './pipes/add-username.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, AddUsernamePipe],
  exports: [LoaderComponent, AddUsernamePipe],
})
export class SharedModule {}
