import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';

  users: {email: string, subscription: string, password: string}[] = [];

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.users.push({
        email: f.form.value.email,
        subscription: f.form.value.subscription,
        password: f.form.value.password
      });
    }

    f.resetForm({subscription: this.defaultSubscription});
  }
}
