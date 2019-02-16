import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MonkeyDetailComponent } from "./monkey-detail/monkey-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { MonkeysComponent } from './monkeys/monkeys';

@NgModule({
  declarations: [
    AppComponent,
    MonkeysComponent,
    MonkeyDetailComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
