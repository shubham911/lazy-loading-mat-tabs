import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [    
  
  
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            loadChildren: () =>import('./home/home.module').then((m) => m.HomeModule)
          },
          {
            path: 'about-us', 
            loadChildren: () =>import('./about-us/about-us.module').then((m) => m.AboutUsModule)
          },
          {
            path: 'contact-us',
            loadChildren: () =>import('./contact-us/contact-us.module').then((m) => m.ContactUsModule)
          },          
          {
            path: 'cars', 
            loadChildren: () =>import('./cars/cars.module').then((m) => m.CarsModule)
          },
          {
            path: 'bikes', 
            loadChildren: () =>import('./bikes/bikes.module').then((m) => m.BikesModule)
          }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



