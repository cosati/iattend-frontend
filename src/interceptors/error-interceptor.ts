import { Injectable } from "@angular/core";
import { HttpRequest, HttpEvent, HttpHandler, HTTP_INTERCEPTORS, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs/RX";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) { 
                errorObj = JSON.parse(errorObj); 
            }

            console.log("Error: ");
            console.log(errorObj);

            return Observable.throw(errorObj);
        }) as any
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS, 
    useClass: ErrorInterceptor, 
    multi: true,
}; 