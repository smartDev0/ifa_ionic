import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-confirm',
  templateUrl: './forgot-confirm.page.html',
  styleUrls: ['./forgot-confirm.page.scss'],
})
export class ForgotConfirmPage implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {}

  submitForm() {
    this.route.navigate(['/home/member']);
  }
}
