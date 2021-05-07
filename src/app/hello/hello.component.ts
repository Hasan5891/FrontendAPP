import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'hello-world',
  templateUrl: './hello.component.html',
})
export class HelloWorldComponent {
    
     count = 0;
    constructor(private logger: Logger) {
       

    }
    message = 'Hello, World!';
    onLogMe() {
        this.logger.writeCount(this.count);
        this.count++;
      }
    
 
}