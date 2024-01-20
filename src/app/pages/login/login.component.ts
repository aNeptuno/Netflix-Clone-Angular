declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '507324384055-hvkmtod9iik78h8itus62d4kh85vo9a2.apps.googleusercontent.com',
      callback: (response: any)=> this.handleLogin(response)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250,
      margin: 'auto'
    })
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(response: any){
    if(response) {
      /* Decode the token */
      const payLoad = this.decodeToken(response.credential);
      /* Store it in session */
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      /* Navigate to home */
      this.router.navigate(['browse']);
    }
  }
}
