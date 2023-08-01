import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-picture',
  templateUrl: './create-picture.component.html',
  styleUrls: ['./create-picture.component.css']
})
export class CreatePictureComponent {

  constructor(private authService: AuthService) {}

  createPictureHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { picName, picImage } = form.value;
    this.authService.createPictureAbstract(picName, picImage).subscribe(
      (response) => console.log(response),
      (err) => console.log(err) 
    )
  }

}
