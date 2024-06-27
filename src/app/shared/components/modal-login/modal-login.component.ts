import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from '../../../core/model/user';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],

})
export class ModalLoginComponent{

  public profileForm: FormGroup;
  public user: User;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
   ) {
    this.profileForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
   }

  closeModal(): void {
    this.dialogRef.close();
  }

   public submit() {
    const user: User = {
      email: this.profileForm.value.email,
      password: this.profileForm.value.password
    };

    const loginSuccessful = this.authService.onLogin(user);
    if (loginSuccessful) {
      console.log('Login successful');
      this.closeModal();
    } else {
      console.log('Login failed');
    }
  }

}
