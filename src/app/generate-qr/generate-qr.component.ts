import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserService } from "../_services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-generate-qr',
    templateUrl: './generate-qr.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class GenerateQRComponent {
    generateQRForm = new FormGroup<any>({
        name: new FormControl('', {
            validators: [Validators.required]
        }),
        date: new FormControl('', {
            validators: [Validators.required]
        })
    });

    constructor(private userService: UserService, private router: Router){}

    onSubmit(){
        const data = {
            name: this.generateQRForm.controls['name'].value,
            date: this.generateQRForm.controls['date'].value
        }
        
        this.userService.generateQR(data).subscribe({
            next: (value) => this.router.navigateByUrl('lectures')
        })
    }
}