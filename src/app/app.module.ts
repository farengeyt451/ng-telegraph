import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { WebAudioModule } from '@ng-web-apis/audio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharComponent } from './components/char';
import { CharDirective } from './directives';

@NgModule({
  declarations: [AppComponent, CharDirective, CharComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, WebAudioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
