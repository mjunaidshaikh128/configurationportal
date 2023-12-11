import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and other form-related modules
import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  isAuthenticated = false
  loginForm: FormGroup; // Declare a FormGroup variable to hold the form

  constructor(private formBuilder: FormBuilder, private userAuthService: UserAuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      // name: ['', Validators.required], // Add form controls with initial values and validators
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const jsonData = JSON.stringify(this.loginForm.value);
      this.userAuthService
        .Login(jsonData)
        .subscribe((res) => {
          if (res.access_token) {
            this.isAuthenticated = true
            this.userAuthService.getProfile(res.access_token).subscribe((data) => {
              localStorage.setItem('userId', JSON.stringify(data.userId));
            })
          }
        });
        
        if(this.isAuthenticated) {
          this.router.navigate(['/pages/dashboard'])
        }

    }

  }

}
