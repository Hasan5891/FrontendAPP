import { Component,ViewEncapsulation , Input, Output} from '@angular/core';
import { HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  regions: string[] = [];
  countries: any[] = [
    { name: 'Afghanistan',regions:["Kabul","dsfsd"] },
    { name: 'Belarus' ,regions:["Minsk","dsfsd"]},
    { name: 'Japan' ,regions:["Tokio","dsfsd"]},
    { name: 'Uzbekistan',regions:["Tashkent","Samarkand","Bukhara"] },
    { name: 'Russia' ,regions:["Moskow","Sank-Peterburg"]},
    { name: 'Kazakhstan' ,regions:["Nursultan","Almaota"]},
    { name: 'Kyrgyzstan' },
];


  fileName = '';
  selectedItem='';
  message = 'Hello, World!';
  title = 'AngularApp';
  constructor(private http: HttpClient) {}

  onOptionsSelected(){
    console.log("onOptionsSelected");
    this.regions=this.countries.find(item  => item.name === this.selectedItem).regions;
   
}


}
