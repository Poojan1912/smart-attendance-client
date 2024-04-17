import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import {
  NgxScannerQrcodeModule,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  standalone: true,
  imports: [NgxScannerQrcodeModule, JsonPipe, AsyncPipe, NgIf],
})
export class ScannerComponent implements OnInit {
  currentUser: any;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  eventCaptured(event: ScannerQRCodeResult[]) {
    if (event.length > 0) {
      const value = event[0].value;

      this.userService.attendLecture(value).subscribe((data) => {
        if (data?.ok) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
