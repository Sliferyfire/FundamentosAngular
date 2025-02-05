import { Routes} from "@angular/router";
import {Ejemplo1Component} from "./ejemplo1/ejemplo1.component";
import {Ejemplo2Component} from "./ejemplo2/ejemplo2.component";
import {Ejemplo3Component} from "./ejemplo3/ejemplo3.component";
import {Ejemplo4Component} from "./ejemplo4/ejemplo4.component";
import {Ejemplo5Component} from "./ejemplo5/ejemplo5.component";
import {InicioComponent} from "./inicio/inicio.component";


export const routes = [
  //{ path: "ejemplo1", loadComponent: () => import("./ejemplo1/ejemplo1.component").then(m => m.Ejemplo1Component), component: Ejemplo1Component },
  { path: "inicio", component: InicioComponent },
  { path: 'ejemplo1', component: Ejemplo1Component },
  { path: "ejemplo2", component: Ejemplo2Component },
  { path: "ejemplo3", component: Ejemplo3Component },
  { path: "ejemplo4", component: Ejemplo4Component },
  { path: "ejemplo5", component: Ejemplo5Component },
  { path: '**', redirectTo: '/inicio' },
];


