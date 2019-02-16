import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MonkeysComponent } from './monkeys/monkeys.component';
import { MonkeyDetailComponent } from './monkey-detail/monkey-detail.component';

const routes: Routes = [
  { path: "monkeys", component: MonkeysComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: MonkeyDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
