import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/model/user';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit{

  public user: User;
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalRegisterComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      confirmPassword: [null]
    })
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit(): void {
    this.onSubmit
  }
}
