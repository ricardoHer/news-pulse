import { Component, OnInit } from '@angular/core';
import { ConfigAnimatedClass } from 'src/app/shared/components/circle-animated.clss';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}

  MAX_CIRCLES = 350;
  MIN_CIRCLES = 65;

  public circleConfigurations: ConfigAnimatedClass[] = []

  generateCircles(): void {
    if (this.circleConfigurations.length >= this.MAX_CIRCLES) {
      return;
    }
    const numCircle = Math.floor(Math.random() * (this.MAX_CIRCLES - this.MIN_CIRCLES + 1)) + this.MIN_CIRCLES;

    for (let index = 0; index <= numCircle; index++) {
      this.circleConfigurations.push(this.getCircle())
    }
  }

  getCircle(): ConfigAnimatedClass {
    const minWH = 20;
    const maxWH = 60;
    const widthHegth = Math.floor(Math.random() * (maxWH - minWH + 1) + minWH);

    const top = Math.floor(Math.random() * (0 - 100 + 1) + 0) * -1;
    const left = Math.floor(Math.random() * (0 - 100 + 1) + 0) * -1;

    const delay = Math.floor(Math.random() * (1 - 4 + 1) + 1) * -1000;
    const fade = Math.floor(Math.random() * (1 - 15 + 1) + 1) * -1000;
    return {
      width: `${widthHegth}px`,
      height: `${widthHegth}px`,
      left: `${left}%`,
      top: `${top}%`,
      delayTime: delay,
      timeFade: fade,
      rgba: this.getRandomRgba(),
      timeout: this.generateRandomTimeout()
    }
  }

  configureTimeOut(): void {
    this.circleConfigurations.forEach((circle: ConfigAnimatedClass) => {
      setTimeout(() => {
        this.circleConfigurations = this.circleConfigurations.filter(c => c !== circle);
      }, circle.timeout);
    })
  }

  getRandomRgba(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  generateRandomTimeout(): number {
    const min = 3000; // 30 segundos em milissegundos
    const max = 18000; // 3 minutos em milissegundos
    const randomTimeout = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomTimeout;
  }

  checkCircles(): void {
    if (this.circleConfigurations.length < 70) {
      this.generateCircles();
      this.configureTimeOut();
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.checkCircles();
    }, 100);
  }

  loginWithFacebook() { }

  loginWithTwitter() { 
    this.authService.loginWithTwitter().then(
      result => console.log(result)
    )
  }

  createAccount() { }
  
  loginWithGoogle() { 
    this.authService.googleAuth().then(
      result => console.log('Login result: ',result)
    )
  }

}
