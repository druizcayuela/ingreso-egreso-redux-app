import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgresoModel } from './ingreso-egreso.model';

@Pipe({
  name: 'ordeIngresoEgreso'
})
export class OrdeIngresoEgresoPipe implements PipeTransform {

  transform(items: IngresoEgresoModel[]): IngresoEgresoModel[] {
    return items.sort( (a, b) => {
       if (a.tipo === 'ingreso') {
         return -1;
       } else {
         return 1;
       }
    });
  }

}
