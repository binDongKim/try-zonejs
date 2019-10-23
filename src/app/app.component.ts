import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isChecked(): void {
    console.log(`I'm being checked!`);
  }

  onMousemove(): void {
    // do nothing
  }
}
