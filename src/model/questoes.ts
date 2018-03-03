const questions: any = [{
  "info": "Por favor, leia cada questão, veja o que você acha e circule no número e lhe parece a melhor resposta.",
  "questao": "1.Como você avaliaria sua qualidade de vida?",
  "respostas": ["Muito Ruim", "Ruim", "Nem Ruim Nem Boa", "Boa", "Muito Boa"]
},
{
  "info": "",
  "questao": "2.Quão satisfeito(a) você está com a sua saúde?",
  "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
},
{
  "info": "As questões seguintes são sobre o quanto você tem sentido algumas coisas nas últimas duas semanas.",
  "questao": "3.Em que medida você acha que sua dor(física) impede você de fazer o que você precisa?",
  "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
},
// {
//   "info": "",
//   "questao": "4.O quanto você precisa de algum tratamento médico para levar sua vida diária?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "",
//   "questao": "5.O quanto você aproveita a vida?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "",
//   "questao": "6.Em que medida você acha que a sua vida tem sentido?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "",
//   "questao": "7.O quanto você consegue se concentrar?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "",
//   "questao": "8.Quão seguro(a) você se sente em sua vida diária?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "",
//   "questao": "9.Quão saudável é o seu ambiente físico (clima, barulho, poluição, atrativos)?",
//   "respostas": ["Nada", "Muito Pouco", "Mais ou Menos", "Bastante", "Extremamente"]
// },
// {
//   "info": "As questões seguintes perguntam sobre quão completamente você tem sentido ou é capaz de fazer certas coisas nestas últimas duas semanas.",
//   "questao": "10.Você tem energia suficiente para seu dia-a-dia?",
//   "respostas": ["Nada", "Muito Pouco", "Médio", "Muito", "Completamente"]
// },
// {
//   "info": "",
//   "questao": "11.Você é capaz de aceitar sua aparência física?",
//   "respostas": ["Nada", "Muito Pouco", "Médio", "Muito", "Completamente"]
// },
// {
//   "info": "",
//   "questao": "12.Você tem dinheiro suficiente para satisfazer suas necessidades?",
//   "respostas": ["Nada", "Muito Pouco", "Médio", "Muito", "Completamente"]
// },
// {
//   "info": "",
//   "questao": "13.Quão disponíveis para você estão as informações que precisa no seu dia-a-dia?",
//   "respostas": ["Nada", "Muito Pouco", "Médio", "Muito", "Completamente"]
// },
// {
//   "info": "",
//   "questao": "14.Em que medida você tem oportunidades de atividade de lazer?",
//   "respostas": ["Nada", "Muito Pouco", "Médio", "Muito", "Completamente"]
// },
// {
//   "info": "As questões seguintes perguntam sobre quão bem ou satisfeito você se sentiu a respeito de vários aspectos de sua vida nas últimas duas semanas.",
//   "questao": "15.Quão bem você é capaz de se locomover?",
//   "respostas": ["Muito Ruim", "Ruim", "Nem Ruim Nem Bom", "Bom", "Muito Bom"]
// },
// {
//   "info": "",
//   "questao": "16.Quão satisfeito(a) você está com o seu sono?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "17.Quão satisfeito(a) você está com sua capacidade de desempenhar as atividades do seu dia-a-dia?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "18.Quão satisfeito(a) você está com sua capacidade para o trabalho?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "19.Quão satisfeito(a) você está consigo mesmo?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "20.Quão satisfeito(a) você está com suas relações pessoais (amigos, parentes, conhecidos, colegas)?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "21.Quão satisfeito(a) você está com sua vida sexual?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "22.Quão satisfeito(a) você está com o apoio que você recebe de seus amigos?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "23.Quão satisfeito(a) você está com as condições do local onde mora?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "24.Quão satisfeito(a) você está com o seu acesso aos serviços de saúde?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "",
//   "questao": "25.Quão satisfeito(a) você está com o seu meio de transporte?",
//   "respostas": ["Muito Insatisfeito", "Insatisfeito", "Nem Satisfeito Nem Insatisfeito", "Satisfeito", "Muito Satisfeito"]
// },
// {
//   "info": "As questões seguintes referem-se a com que freqüência você sentiu ou experimentou certas coisas nas últimas duas semanas.",
//   "questao": "26.Com que freqüência você tem sentimentos negativos tais como mau humor, desespero, ansiedade, depressão?",
//   "respostas": ["Nunca", "Algumas Vezes", "Freqüentemente", "Muito Freqüentemente", "Sempre"]
// }
];

export default questions;
