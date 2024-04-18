import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { AppComponent } from '../app.component';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getLectureDetails(lectureId: string): Observable<any> {
    return this.http.get(API_URL + 'lectures/' + lectureId, {
      headers: {
        token: this.storageService.getUser().token,
      },
      responseType: 'json',
    });
  }

  attendLecture(lectureId: string): Observable<any> {
    return this.http.post(API_URL + 'students/' + lectureId, null, {
      headers: {
        token: this.storageService.getUser().token,
      },
      responseType: 'json',
    });
  }

  getLectures(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + 'lectures/mine', {
      headers: {
        token: this.storageService.getUser().token,
      },
      responseType: 'json',
    });
  }

  generateQR(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'teachers/generate-qr', data, {
      headers: {
        token: this.storageService.getUser().token
      },
      responseType: 'json'
    })
  }
}
