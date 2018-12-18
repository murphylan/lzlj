import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule,ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
