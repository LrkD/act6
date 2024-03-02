import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component'; // Import GameControlComponent here

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent // Add GameControlComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
