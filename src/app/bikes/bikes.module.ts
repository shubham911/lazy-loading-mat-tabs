import { NgModule } from '@angular/core';
import { BikesComponent } from './bikes.component';
import { BikesRoutingModule } from './bikes.routing'

@NgModule({
  imports: [BikesRoutingModule],
  providers:  [],
  declarations: [BikesComponent]
})

export class BikesModule {
 
}
