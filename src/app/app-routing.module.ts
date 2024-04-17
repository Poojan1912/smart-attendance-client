import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ScannerComponent } from './scanner/scanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { LectureComponent } from './lecture-details/lecture.component';
import { LecturesComponent } from './my-lectures/lectures.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'lectures/:lectureId', component: LectureComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxScannerQrcodeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
