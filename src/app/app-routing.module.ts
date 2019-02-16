import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MonkeyDetailComponent } from "./monkey-detail/monkey-detail.component";
import { MonkeysComponent } from "./monkeys/monkeys.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: MonkeyDetailComponent },
  { path: "monkeys", component: MonkeysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
