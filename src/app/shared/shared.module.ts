import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThemeModule } from '../theme/theme.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
