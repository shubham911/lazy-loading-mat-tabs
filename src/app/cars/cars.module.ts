import { NgModule } from '@angular/core';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars.routing'

@NgModule({
  imports: [CarsRoutingModule],
  providers:  [],
  declarations: [CarsComponent]
})

export class CarsModule {
 
}
