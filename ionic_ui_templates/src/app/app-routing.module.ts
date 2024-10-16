import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'drawer',
    loadChildren: () =>
      import('./drawer/drawer.module').then((m) => m.DrawerPageModule),
  },
  {
    path: 'hotel-booking',
    loadChildren: () =>
      import('./templates/hotel-booking/hotel-booking.module').then(
        (m) => m.HotelBookingPageModule
      ),
  },
  {
    path: 'course-rive',
    loadChildren: () =>
      import('./templates/course-rive/course-rive.module').then(
        (m) => m.CourseRivePageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./templates/contact/contact.module').then(
        (m) => m.ContactComponentModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
