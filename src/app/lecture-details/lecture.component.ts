import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Observable, map, switchMap } from 'rxjs';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css'],
  standalone: true,
  imports: [QRCodeModule, NgIf, AsyncPipe],
})
export class LectureComponent implements OnInit {
  lectureDetails$!: Observable<any>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lectureDetails$ = this.route.paramMap.pipe(
      map((params) => params.get('lectureId') ?? ''),
      switchMap((lectureId) => this.userService.getLectureDetails(lectureId))
    );
  }
}
