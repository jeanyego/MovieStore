import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'MovieStore', component: StoreListComponent },
  { path: 'UploadMovie', component: UploadComponent },
  { path: '', redirectTo: 'MovieStore', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
