import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-picture',
  templateUrl: './create-picture.component.html',
  styleUrls: ['./create-picture.component.css']
})
export class CreatePictureComponent {

  constructor(private authService: AuthService, private router: Router) {}

  createPictureHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { picName, pickMaterials, picCategory, picImage, picPrice, picDescription  } = form.value;
    this.authService.createPictureAbstract(picName, pickMaterials, picCategory, picImage, picPrice, picDescription).subscribe(
      (response) => console.log(response),
      (err) => console.log(err) 
    )
  }

  closeCreateForm(): void {
    this.router.navigate(["/auth/profile"]);
  }

}
