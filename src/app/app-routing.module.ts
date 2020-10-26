import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'day1',
    loadChildren: () => import('./day1/day1.module').then( m => m.Day1PageModule)
  },
  {
    path: 'day2',
    loadChildren: () => import('./day2/day2.module').then( m => m.Day2PageModule)
  },
  {
    path: 'day3',
    loadChildren: () => import('./day3/day3.module').then( m => m.Day3PageModule)
  },
  {
    path: 'bench',
    loadChildren: () => import('./exercices/bench/bench.module').then( m => m.BenchPageModule)
  },
  {
    path: 'seatedlift',
    loadChildren: () => import('./exercices/seatedlift/seatedlift.module').then( m => m.SeatedliftPageModule)
  },
  {
    path: 'deadlift',
    loadChildren: () => import('./exercices/deadlift/deadlift.module').then( m => m.DeadliftPageModule)
  },
  {
    path: 'latpulldown',
    loadChildren: () => import('./exercices/latpulldown/latpulldown.module').then( m => m.LatpulldownPageModule)
  },
  {
    path: 'alternativcurl',
    loadChildren: () => import('./exercices/alternativcurl/alternativcurl.module').then( m => m.AlternativcurlPageModule)
  },
  {
    path: 'tricepspushdown',
    loadChildren: () => import('./exercices/tricepspushdown/tricepspushdown.module').then( m => m.TricepspushdownPageModule)
  },
  {
    path: 'trapez',
    loadChildren: () => import('./exercices/trapez/trapez.module').then( m => m.TrapezPageModule)
  },
  {
    path: 'benchincline',
    loadChildren: () => import('./exercices/benchincline/benchincline.module').then( m => m.BenchinclinePageModule)
  },
  {
    path: 'shoulderslift',
    loadChildren: () => import('./exercices/shoulderslift/shoulderslift.module').then( m => m.ShouldersliftPageModule)
  },
  {
    path: 'squad',
    loadChildren: () => import('./exercices/squad/squad.module').then( m => m.SquadPageModule)
  },
  {
    path: 'backlowrow',
    loadChildren: () => import('./exercices/backlowrow/backlowrow.module').then( m => m.BacklowrowPageModule)
  },
  {
    path: 'bicepswiderange',
    loadChildren: () => import('./exercices/bicepswiderange/bicepswiderange.module').then( m => m.BicepswiderangePageModule)
  },
  {
    path: 'tricepsextension',
    loadChildren: () => import('./exercices/tricepsextension/tricepsextension.module').then( m => m.TricepsextensionPageModule)
  },
  {
    path: 'benchdecline',
    loadChildren: () => import('./exercices/benchdecline/benchdecline.module').then( m => m.BenchdeclinePageModule)
  },
  {
    path: 'shouldersbarlift',
    loadChildren: () => import('./exercices/shouldersbarlift/shouldersbarlift.module').then( m => m.ShouldersbarliftPageModule)
  },
  {
    path: 'pullups',
    loadChildren: () => import('./exercices/pullups/pullups.module').then( m => m.PullupsPageModule)
  },
  {
    path: 'bicepssmallrang',
    loadChildren: () => import('./exercices/bicepssmallrang/bicepssmallrang.module').then( m => m.BicepssmallrangPageModule)
  },
  {
    path: 'tricepsbar',
    loadChildren: () => import('./exercices/tricepsbar/tricepsbar.module').then( m => m.TricepsbarPageModule)
  },
  {
    path: 'calves',
    loadChildren: () => import('./exercices/calves/calves.module').then( m => m.CalvesPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'developer',
    loadChildren: () => import('./pages/developer/developer.module').then( m => m.DeveloperPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
