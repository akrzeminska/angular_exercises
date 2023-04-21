import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textColor = 'black';

  changeTextColor() {
    this.textColor = 'blue';
  }
  
  colors = ['blue', 'red', 'yellowgreen'];
  yellowgreenisActive = false;
  redisActive = false;
  blueisActive = false;

  changeTextColorCSS() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    if (randomColor==='blue') {
      this.blueisActive = true;
      this.yellowgreenisActive = false;
      this.redisActive = false;
    } else if (randomColor==='red') {
      this.blueisActive = false;
      this.yellowgreenisActive = false;
      this.redisActive = true;
    } else {
      this.blueisActive = false;
      this.yellowgreenisActive = true;
      this.redisActive = false;
    }
  }
}
