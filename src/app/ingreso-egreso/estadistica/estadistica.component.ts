import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { AppState } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  ingresos: number;
  egresos: number;

  countIngresos: number;
  countEgresos: number;

  subscription: Subscription = new Subscription();

  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
                            .subscribe (ingresoEgreso => {
                              this.contarIngresoEgreso(ingresoEgreso.items);
                            });
  }

  contarIngresoEgreso(items: IngresoEgresoModel[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.countIngresos = 0;
    this.countEgresos = 0;

    items.forEach( item => {

      if (item.tipo === 'ingreso') {
        this.countIngresos++;
        this.ingresos += item.monto;
      } else {
        this.countEgresos++;
        this.egresos += item.monto;
      }

    });

    this.doughnutChartData = [this.ingresos, this.egresos];

  }

}
