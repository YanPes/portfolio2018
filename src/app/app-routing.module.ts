import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeepSpaceImagesComponent } from './deep-space-images/deep-space-images.component';
import { WorkComponent } from './work/work.component';
import { ElectrifyAestheticsComponent } from './electrify-aesthetics/electrify-aesthetics.component';


const routes: Routes = [
  { path: '', component: WorkComponent },
  { path: 'deep-space-images', component: DeepSpaceImagesComponent },
  { path: 'electrify-aesthetics', component: ElectrifyAestheticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
