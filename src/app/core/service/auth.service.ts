import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/components/modal-login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly validUser = {
    email: 'teste@email',
    password: '0000'
  };

  constructor(private router: Router) { }

  onLogin(user: User | null | undefined): boolean {
    if (user && user.email === this.validUser.email && user.password === this.validUser.password) {
      localStorage.setItem('userAuth', 'true');
      this.router.navigate(['/home']); // ou qualquer rota que você desejar
      return true;
    } else {
      localStorage.setItem('userAuth', 'false');
      return false;
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('userAuth') === 'true';
  }

  logout(): void {
    localStorage.removeItem('userAuth');
    this.router.navigate(['/login']);
  }
}
