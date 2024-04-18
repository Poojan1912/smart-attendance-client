import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, RouterLink, DatePipe],
})
export class LecturesComponent implements OnInit {
  lectures$!: Observable<any[]>;
  role = "";

  constructor(private userService: UserService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.lectures$ = this.userService.getLectures();
    this.role = this.storageService.getUser().role;
  }
}
