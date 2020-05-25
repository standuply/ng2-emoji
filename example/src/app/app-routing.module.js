import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
const appRoutes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'examples', component: ExamplesComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
