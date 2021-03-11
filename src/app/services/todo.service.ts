import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoResponseModel } from '../models/TodosResponseModel';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todos[]> {
    return this.httpClient.get<Todos[]>(this.apiUrl);
  }
}
