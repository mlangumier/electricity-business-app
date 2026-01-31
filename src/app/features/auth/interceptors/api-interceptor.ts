import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../../../environments/environment";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  const apiReq = req.clone({
    url: req.url.startsWith("http") ? req.url : environment.apiUrl + req.url,
    setHeaders: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  if (token) {
    apiReq.headers.append("Authorization", `Bearer ${ token }`);
  }

  return next(apiReq);
};
