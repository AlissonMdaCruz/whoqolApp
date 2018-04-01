import { ScoreModel } from './score.model';
interface Pesquisa {
  nome: string;
  sobrenome: string;
  profissao: string;
  sexo: string;
  idade: number;
  respostas: Array<number>;
  ajuda: string;
  tempo: string;
  score: ScoreModel;
}

export default Pesquisa;
