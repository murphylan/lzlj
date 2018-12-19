import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CarouselComponent } from './carousel/carousel.component';
import { RedwineComponent } from './redwine/redwine.component';
import { WineComponent } from './wine/wine.component';
import { CustomizationComponent } from './customization/customization.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RedwineComponent,
    WineComponent,
    CustomizationComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
