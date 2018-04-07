interface Pesquisa {
  nome: string;
  sexo: string;
  idade: number;
  estadoCivil: string;
  escolaridade: string;
  profissao: string;
  email: string;
  respostas: Array<number>;
  ajuda: string;
  tempo: string;
  domFisico: number;
  domPsico: number;
  domRelSoc: number;
  domMeioAmb: number;
  score: number;
}

export default Pesquisa;
