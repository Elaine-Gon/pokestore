import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiURL = 'http://localhost:3000/products'

  constructor(private httpClient: HttpClient) { }

  getData(page: number = 1, limit: number = 30): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.apiURL}?page=${page}&limit=${limit}`);
  }
}
