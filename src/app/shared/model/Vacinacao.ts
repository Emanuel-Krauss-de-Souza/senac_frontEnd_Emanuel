import { Vacina } from "./Vacina";


export interface Vacinacao{
  id: number ;
	idPessoa: number ;
	vacina: Vacina ;
	dataAplicacao: Date ;
	avaliacao: number ;
};