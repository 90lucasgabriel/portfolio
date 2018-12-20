import { HttpClient }               from '@angular/common/http';
import { Injectable, Inject }       from '@angular/core';

import { Observable }               from 'rxjs';

@Injectable()
export class RecaptchaService {
// DECLARATIONS -----------------------------  
  private path: string;




// METHODS ----------------------------------
  public verify(response: string): Observable<any> {
    return this.http.post(this.path, {
        secret: '6LfCaXkUAAAAAOAG4tpQfd44Jf293tVhCjCMwWXF', 
        response: response
      });
  }




// OTHERS ------------------------------------
  constructor(private http: HttpClient) { 
    this.path = `https://www.google.com/recaptcha/api/siteverify`;
  }
}