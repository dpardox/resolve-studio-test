// import { Injectable, Injector } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { SessionProvider } from '../providers/session/session';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import { ToastController } from 'ionic-angular';

// @Injectable()
// export class ResponseInterceptor implements HttpInterceptor {
//   constructor(private toastCtrl: ToastController, private session: SessionProvider) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request).do(
//       (event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           // Response manager
//           console.log('Interceptor response', event);
//         }
//       },
//       (exception: any) => {
//         if (exception instanceof HttpErrorResponse) {
//           switch (exception.status) {
//             case 401:
//               this.session.logout('No tienes una sesión activa');
//               break;
//             default:
//               this.toast(exception.status, exception.statusText);
//               console.error('Interceptor exception:', exception);
//           }
//         }
//       }
//     );
//   }

//   private toast(status: number, statusText: string) {
//     this.toastCtrl.create({ message: `${status} - ${statusText}`, duration: 3000, position: 'top' }).present();
//   }
// }
