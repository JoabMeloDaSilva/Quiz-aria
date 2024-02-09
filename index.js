const perguntas = [
    {
      pergunta: "Qual minha fruta preferida?",
      respostas: [
        "Banana",
        "Morango",
        "Uva",
      ],
      correta: 0
    },
    {
      pergunta: "Em qual ano eu Nasci?",
      respostas: [
        "2017",
        "2018",
        "2019",
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi a inspiração para o meu nome?",
      respostas: [
        "Uma personagem de uma série",
        "Bíblico",
        "uma personagem de um filme",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o meu Signo?",
      respostas: [
        "Libra",
        "Escorpião",
        "Leão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a modalidade de dança que eu pratico?",
      respostas: [
        "Frevo",
        "Ballet",
        "Dança de Salão",
      ],
      correta: 1
    },
    {
      pergunta: "Meu Sinal fica em qual perna?",
      respostas: [
        "Esquerda",
        "Direita",
        "Deixa de Invenção papai, eu não tenho sinal na perna",
      ],
      correta: 0
    },
    {
      pergunta: "Qual minha Comida Preferida?",
      respostas: [
        "Cachorro quente",
        "Pizza",
        "Hamburguer",
      ],
      correta: 1
    },
    {
      pergunta: "Onde eu Nasci?",
      respostas: [
        "Moreno",
        "Recife",
        "Jaboatão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual minha Cor preferida?",
      respostas: [
        "Rosa",
        "Azul",
        "Vermelho",
      ],
      correta: 0
    },
    {
      pergunta: "Complete Meu nome: Ária ..... Freitas da Silva?",
      respostas: [
        "Pereira",
        "Sofia",
        "Melo",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + '  de ' + totalDePerguntas
  
  
  // lupi ou laço de repetição
  for(const item of perguntas) {
   const quizitem = template.content.cloneNode(true)
   quizitem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent =resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + '  de ' + totalDePerguntas
    }
  
  // querySelector é uma ferramenta pra buscar informações no html 
    quizitem.querySelector('dl').appendChild(dt)
  
  }
  
  quizitem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela 
  quiz.appendChild(quizitem)
  }