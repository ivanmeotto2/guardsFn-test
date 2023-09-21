import { Component } from '@angular/core';
import { LOGGED_IN } from 'src/app/misc/consts';
import { LocalStorageService } from 'src/app/services/local-storage.service';

/**
 * First route of the app
 */
@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss'],
})
export class Route1Component {
  /** Value that checks if the user is logged in or not */
  logIn: boolean = false;

  /**
   * @ignore
   */
  constructor(private readonly localStorageService: LocalStorageService) {
    this.logIn = !!this.localStorageService.get(LOGGED_IN);
  }

  /**
   * Set the value of the log in status in local storage
   */
  setLogged() {
    this.logIn = !this.logIn;
    this.logIn ? this.localStorageService.set(LOGGED_IN, String(this.logIn)) : this.localStorageService.remove(LOGGED_IN);
  }
}
