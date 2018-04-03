interface Pesquisa {
  nome: string;
  sobrenome: string;
  profissao: string;
  escolaridade: string;
  formacao: string;
  estadoCivil: string;
  sexo: string;
  idade: number;
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
