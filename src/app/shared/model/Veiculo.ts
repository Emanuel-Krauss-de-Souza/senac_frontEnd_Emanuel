import { MontadoraComponent } from "src/app/veiculos/montadora/montadora.component";
import { Montadora } from "./Montadora";

export class Veiculo{
  id: number;
	modelo: string;
  placa: string;
  montadora: Montadora;
  ano: number;
  valor: number;
}