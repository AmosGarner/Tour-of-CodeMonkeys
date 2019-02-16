import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CodemonkeysComponent } from "./codemonkeys/codemonkeys.component";
import { MonkeyDetailComponent } from './monkey-detail/monkey-detail.component';

@NgModule({
  declarations: [AppComponent, CodemonkeysComponent, MonkeyDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
