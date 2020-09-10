import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface Todo {
    Description: string,
    Excerpt: string,
    UD: number,
    PageCount: number,
    PublishDate: Date,
    Title: string
}

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://fakerestapi.azurewebsites.net/api/Books')
  }
}
