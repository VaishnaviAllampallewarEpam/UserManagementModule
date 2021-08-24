import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  constructor(private httpClient: HttpClient) { }

  getUsersData(url: string) {
    return this.httpClient.get(url);
  }
}
