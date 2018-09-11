import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { auth } from 'firebase';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscripcion: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscripcion = this.store.select('auth')
              .pipe(
                filter( authFilter => authFilter.user != null)
              )
              .subscribe( authData => this.nombre = authData.user.nombre);
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
