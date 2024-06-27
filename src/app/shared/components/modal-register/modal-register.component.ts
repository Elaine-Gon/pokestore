import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent {

  constructor( public dialogRef: MatDialogRef<ModalRegisterComponent> ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

}
