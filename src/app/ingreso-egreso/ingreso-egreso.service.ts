import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction, UnsetItemsAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  ingresoEgresoListenerSubscription: Subscription = new Subscription();
  ingresoEgresoItemSubscription: Subscription = new Subscription();

  constructor(private afDB: AngularFirestore,
              public authService: AuthService,
              private store: Store<AppState>) { }

  crearIngresoEgreso(ingresoEgreso: IngresoEgresoModel) {

    const user = this.authService.getUsuario();

    return this.afDB.doc(`${user.uid}/ingresos-egresos`)
        .collection('items').add({...ingresoEgreso});
  }

  borrarIngresoEgreso(uid: string) {
    const user = this.authService.getUsuario();

    return this.afDB.doc(`${user.uid}/ingresos-egresos/items/${uid}`)
             .delete();
  }

  initIngresoEgresoListener() {
    this.ingresoEgresoListenerSubscription = this.store.select('auth')
        .pipe(
          filter( auth => auth.user != null )
        )
        .subscribe( auth => this.ingresoEgresoItems(auth.user.uid));
  }

  private ingresoEgresoItems(uid: string) {
    this. ingresoEgresoItemSubscription = this.afDB.collection(`${ uid }/ingresos-egresos/items`)
             .snapshotChanges()
             .pipe(
               map( docData => {
                  return docData.map( doc => {
                      return {
                        uid: doc.payload.doc.id,
                        ...doc.payload.doc.data()
                      };
                  });
               })
             )
             .subscribe( (coleccion: any[]) => {
                this.store.dispatch(new SetItemsAction(coleccion));
             });
  }

  cancelarSubscripciones() {
    this.ingresoEgresoListenerSubscription.unsubscribe();
    this.ingresoEgresoItemSubscription.unsubscribe();
    this.store.dispatch(new UnsetItemsAction());
  }

}
