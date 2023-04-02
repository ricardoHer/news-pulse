import { NgModule } from '@angular/core';
import { CircleAnimatedComponent } from './components/circle-animated/circle-animated.component';
import { SquareAnimatedComponent } from './components/square-animated/square-animated.component'

@NgModule({
  exports: [
   CircleAnimatedComponent,
   SquareAnimatedComponent
  ],
  declarations: [
    CircleAnimatedComponent,
    SquareAnimatedComponent
  ]
})
export class SharedModule { }
