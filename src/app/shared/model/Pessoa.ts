import { Pais } from "./Pais";


export interface Pessoa{
  id: number ;
	nome: String ;
	cpf: String ;
	sexo: String ;
	dataNascimento: Date ;
	tipo: number ;
	paisOrigem: Pais ;
}