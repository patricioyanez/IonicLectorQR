import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    
    
  },
  {
    
    path: 'home',
loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'einicios',
    loadChildren: () => import('./einicios/einicios.module').then( m => m.EiniciosPageModule)
  },
  {
    path: 'eregistro',
    loadChildren: () => import('./eregistro/eregistro.module').then( m => m.EregistroPageModule)
  },
  {
    path: 'ainico',
    loadChildren: () => import('./ainico/ainico.module').then( m => m.AinicoPageModule)
  },
  {
    path: 'pinicio',
    loadChildren: () => import('./pinicio/pinicio.module').then( m => m.PinicioPageModule)
  },
  {
    path: 'aregistro',
    loadChildren: () => import('./aregistro/aregistro.module').then( m => m.AregistroPageModule)
  },
  {
    path: 'pregistro',
    loadChildren: () => import('./pregistro/pregistro.module').then( m => m.PregistroPageModule)
  },
  {
    path: 'olvidar',
    loadChildren: () => import('./olvidar/olvidar.module').then( m => m.OlvidarPageModule)
  },
  {
    path: 'aingreso',
    loadChildren: () => import('./aingreso/aingreso.module').then( m => m.AingresoPageModule)
  },
  {
    path: 'pingreso',
    loadChildren: () => import('./pingreso/pingreso.module').then( m => m.PingresoPageModule)
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
