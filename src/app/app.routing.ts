import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },
      {
        path: 'search',
        loadChildren: './pages/search/search.module#SearchModule'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        loadChildren: './pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user/:SearchInput',
        loadChildren: './pages/user/profile/profile.module#ProfileModule'
      },
      {
        path: 'startup/:SearchInput',
        loadChildren: './pages/startup/profile/startup-profile.module#StartupProfileModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      },
      {
        path: 'members-management',
        loadChildren: './pages/members-management/members-management.module#MembersManagementModule'
      },
      {
        path: 'requesting-members',
        loadChildren: './pages/requesting-members/requesting-members.module#RequestingMembersModule'
      }
      ,
      {
        path: 'subscribe',
        loadChildren: './pages/subscribe/subscribe.module#SubscribeModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];
