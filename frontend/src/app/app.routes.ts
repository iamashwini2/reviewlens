import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Analyze } from './pages/analyze/analyze';
import { Reviews } from './pages/reviews/reviews';
import { Upload } from './pages/upload/upload';
import { Insights } from './pages/insights/insights';
import { ModelPerformance } from './pages/model-performance/model-performance';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'analyze',
    component: Analyze
  },
  {
    path: 'reviews',
    component: Reviews
  },
  {
    path: 'upload',
    component: Upload
  },
  {
    path: 'insights',
    component: Insights
  },
  {
    path: 'model-performance',
    component: ModelPerformance
  },
  {
    path: 'settings',
    component: Settings
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];