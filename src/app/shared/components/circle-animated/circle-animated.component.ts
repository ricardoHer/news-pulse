import { Component, Input, OnInit } from '@angular/core';
import { ConfigAnimatedClass } from '../circle-animated.clss';

@Component({
  selector: 'app-circle-animated',
  templateUrl: './circle-animated.component.html',
  styleUrls: ['./circle-animated.component.scss']
})
export class CircleAnimatedComponent implements  OnInit {

  @Input()
  configuration!: ConfigAnimatedClass;
  
  ngOnInit(): void {

  }

}
