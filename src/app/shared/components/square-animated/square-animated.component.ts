import { Component, Input } from '@angular/core';
import { ConfigAnimatedClass } from '../circle-animated.clss';

@Component({
  selector: 'app-square-animated',
  templateUrl: './square-animated.component.html',
  styleUrls: ['./square-animated.component.scss']
})
export class SquareAnimatedComponent {
  @Input()
  configuration!: ConfigAnimatedClass;
}
