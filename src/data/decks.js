const decks = [
  {
    nome: "React",
    perguntas: [
      {
        index: 0,
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
      },
      {
        index: 1,
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces",
      },
      {
        index: 2,
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula",
      },
      {
        index: 3,
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões",
      },
      {
        index: 4,
        pergunta: "O ReactDOM nos ajuda __",
        resposta:
          "interagindo com a DOM para colocar componentes React na mesma",
      },
      {
        index: 5,
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências",
      },
      {
        index: 6,
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes",
      },
      {
        index: 7,
        pergunta: "Usamos estado (state) para __",
        resposta:
          "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      },
    ],
  },
  {
    nome: "Data Analysis",
    perguntas: [
      {
        index: 0,
        pergunta: "Distribuição de frequência por intervalos",
        resposta: "Histograma",
      },
      {
        index: 1,
        pergunta:
          "Gráfico de pontos que mostram a relação entre duas variáveis a um determinado nível de detalhe",
        resposta: "Gráfico de dispersão",
      },
      {
        index: 2,
        pergunta:
          "Dado que se diferencia drasticamente de todos os outros, que foge da normalidade e que pode (e provavelmente irá) causar anomalias nos resultados",
        resposta: "Outlier",
      },
      {
        index: 3,
        pergunta:
          "Gráfico circular separado nas partes (geralmente cada parte de uma cor) do todo",
        resposta: "Gráfico de pizza",
      },
      {
        index: 4,
        pergunta:
          "Representação da distribuição dos dados por: centro dos dados (a média ou mediana), a amplitude dos dados (máximo – mínimo), a simetria ou assimetria do conjunto de dados e a presença de outliers",
        resposta: "Box plot",
      },
      {
        index: 5,
        pergunta: "Valor mais frequente de um conjunto de dados",
        resposta: "Moda",
      },
      {
        index: 6,
        pergunta:
          "Somando-se todos os valores de um conjunto de dados e dividindo-se pelo número de elementos deste conjunto tem-se a:",
        resposta: "Média",
      },
      {
        index: 7,
        pergunta:
          "Valor central de um conjunto de dados e, para encontrá-lo, é necessário colocar os valores em ordem crescente ou decrescente",
        resposta: "Mediana",
      },
    ],
  },
];

export default decks;
