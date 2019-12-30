import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpRequestService {
  constructor(private http: HttpClient){

  }

  getHeaders() {
    let headers = new HttpHeaders();
    headers  = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers  = headers.set('Authorization', 'Basic jhdsj778#$*@^#&@JJbjhxjs8d77dui');
    headers  = headers.set('Token', '56789cvghbnmb3jh213j2b321b3j2b3jb2j3b21j3bj1b3j12bhj32bjh3b2jb3');
    headers  = headers.set('Sign', "ghjdbwjbdwe987eehke98eu32rn89fb==");
    headers  = headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0');
    headers  = headers.set('Expires', '120');
    return headers;
  }

  handleError(err: any): Observable<any> {
    let msg = {
      status: err.status,
      message: err.message
    }
    return of(msg);
  }

  postCall(url: string, body: Object = {}): Observable<any>{

    console.log(body);
    let base = "http://localhost:4001" + url;
    console.log(base);
    return this.http.post( base, body, {headers: this.getHeaders()}).pipe(
              retry(2),
              map((res: Response) => { return res}),
              catchError((err: Error) => this.handleError(err))
            )
  }

  getCall(url: string, params?: any): Observable<any> {
    return this.http.get(url, {params: params, headers: this.getHeaders()} ).pipe(
              retry(2),
              map((res) => res),
              catchError((err: Error) => this.handleError(err))
            )
  }

  putCall(url: string, body: Object = {}): Observable<any>{
    return this.http.put(url, body, {headers: this.getHeaders()}).pipe(
              retry(2),
              map((res: Response) => res),
              catchError((err: Error) => this.handleError(err))
            )
  }

  deleteCall() {

  }
}
