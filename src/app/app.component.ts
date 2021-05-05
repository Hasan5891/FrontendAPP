import { Component,ViewEncapsulation } from '@angular/core';
import { HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  fileName = '';
  message = 'Hello, World!';
  title = 'AngularApp';
  constructor(private http: HttpClient) {}


}
