import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscripcion: Subscription = new Subscription();

  constructor(public authService: AuthService,
              public ingresoEgresoService: IngresoEgresoService,
              private store: Store<AppState> ) { }

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

  logout() {
    this.authService.logout();
    this.ingresoEgresoService.cancelarSubscripciones();
  }


}
