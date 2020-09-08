import { Component } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  books: any[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe(data => this.books=data["bookList"]);
    }

}
