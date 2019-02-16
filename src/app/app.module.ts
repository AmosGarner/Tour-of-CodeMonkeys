import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MonkeysComponent } from "./monkeys/monkeys.component";
import { MonkeyDetailComponent } from "./monkey-detail/monkey-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessagesComponent } from "./messages/messages.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    MonkeysComponent,
    MonkeyDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
