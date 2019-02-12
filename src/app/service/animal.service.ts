import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { Animals } from '../animals';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
config = environment.config;
  constructor(private http: HttpClient) { }

getAll (): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.config.apiUrl+'/api/animals')
      .pipe(
        tap(animals => console.log('Fetch Animals')),
        catchError(this.handleError('getProducts', []))
      );
  }

 getById(id: number) {
        return this.http.get(this.config.apiUrl+'/api/getbyId/' + id);
    }


 register (animal): Observable<Animals> {
    return this.http.post<Animals>(this.config.apiUrl+'/api/SaveAnimals', animal, httpOptions).pipe(
      tap((animal: Animals) => console.log(`added Animals w/ id=${animal._id}`)),
      catchError(this.handleError<Animals>('register'))
    );
  }

  registerNew (animal): Observable<Animals> {
      animal.status = 1;
    return this.http.post<Animals>(this.config.apiUrl+'/api/SavenewAnimals', animal, httpOptions).pipe(
      tap((animal: Animals) => console.log(`added Animals w/ id=${animal._id}`)),
      catchError(this.handleError<Animals>('registerNew'))
    );
  }

   deleteRecord (animal): Observable<Product> {

      return this.http.post<Animals>(this.config.apiUrl+'/api/deleteByid', animal, httpOptions).pipe(
      tap((animal: Animals) => console.log(`Deleted Animals w/ id=${animal._id}`)),
      catchError(this.handleError<Animals>('deleteRecord'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

