import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { Post } from './post';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api
  private postid='https://jsonplaceholder.typicode.com/posts/';
  constructor( private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Post[]> {
    return this.http.get<Post[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Post> {
    return this.http.get<Post>(this.postid+id);
  }

}
