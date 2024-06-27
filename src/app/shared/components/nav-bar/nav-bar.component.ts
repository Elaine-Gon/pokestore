import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(
    public dialog: MatDialog
  ) {}

  // como alterar o estilo global do angular material é necessário alterar a classe "panelClass: 'custom-container'"
  openDialogLogin() {
    this.dialog.open(ModalLoginComponent, {
      panelClass: 'custom-container'
    });
  }

  openDialogRegister() {
    this.dialog.open(ModalRegisterComponent, {
      panelClass: 'custom-container'
    });
  }
}
