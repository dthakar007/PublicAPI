import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlockedPageComponent } from './blockedpage/blockedpage.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'HomePage', pathMatch: 'full' },
    { path: 'HomePage', component: HomePageComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'blocked', component: BlockedPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}