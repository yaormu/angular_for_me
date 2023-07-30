import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PublicComponent],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
