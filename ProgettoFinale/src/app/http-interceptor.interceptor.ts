import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  tentantID='fe_0621';
  bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNSwiZXhwIjoxNjQzOTA1MTI1fQ.okXPBLbUly1c99vo7e6LUfDGFcD708Kx1zd-m5vuSIjvtSomHRlAsIpTPslJgTFQFVA86tHRg3HuDKDg6Pklow';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {//metodo che viene invocato in maniera automatica ogni volta che si verifica una chiamata ajax
    //richiesta che il client fa al server
    let myRequest: HttpRequest<any> = request;//assegno l oggetto request al mio oggetto locale
    myRequest = request.clone(
      {headers: request.headers.set("Authorization",this.bearerToken)
                               .set("X-TENANT-ID", this.tentantID)}
    )
    return next.handle(myRequest);
  }
}
