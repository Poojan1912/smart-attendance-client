import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, RouterLink],
})
export class LecturesComponent implements OnInit {
  lectures$!: Observable<any[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.lectures$ = this.userService.getLectures();
  }
}
