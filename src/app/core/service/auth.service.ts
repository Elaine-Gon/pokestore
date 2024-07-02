import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';

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
      this.router.navigate(['/home']);
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
  registerUser(user: User | null | undefined): boolean {
    try {
      localStorage.setItem('newUser', JSON.stringify(user));
      console.log("Usuário registrado:", user);
      return true; // Retorna true se o registro foi bem-sucedido
    } catch (error) {
      console.error("Falha ao registrar usuário:", error);
      return false; // Retorna false se houve falha no registro
    }
  }
}
