import { Pais } from "./Pais";
import { Pessoa } from "./Pessoa";


export interface Vacina{
  id: number;
	nome: String ;
	paisOrigem: Pais;
  pesquisadorResponsavel: Pessoa;
	dataInicioPesquisa: Date ;
	estagio: number ;
  media: number ;
}