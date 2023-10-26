import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enterprise',
    pathMatch: 'full'
  },
  // {
  //   path: '**', redirectTo: ''
  // },
  {
  
    path: 'jude',
    loadChildren: () => import('./jude/jude.module').then( m => m.JudePageModule)
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./enterprise/enterprise.module').then( m => m.EnterprisePageModule)
  },  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
