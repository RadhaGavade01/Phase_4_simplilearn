import { Component } from '@angular/core';
import { CakeService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:CakeService){
    
  }
}
