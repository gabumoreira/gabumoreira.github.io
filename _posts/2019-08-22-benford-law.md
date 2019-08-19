---
layout: post

title:  "Lei de Benford - O detector de fumaça da matemática"
date:   2019-08-22 14:00:00 -0300
author: João Gabriel

categories: [Matemática, Estatística]
tags: 		[Matemática, Estatística, Python]
permalink: 	/blog/:title
keywords: 	[Matemática, Estatística, Benford, Lei de Benford, Benford Law, Data, Análise de Dados, Python]

description: A Lei de Benford é a responsavel por reger a vida, o universo e tudo mais (igual o número 42).

comments: true

image: /assets/img/data_better_idea.jpg
---

!["Data has a better idea" escrito em neon embaixo de uma janela com predios ao fundo.]({{page.image}}){: .figure-center}
*<small>Os dados também sabem falar pelas entrelinhas.</small>*{: .caption-center}

A Lei de Benford é a responsavel por reger a vida, o universo e tudo mais (igual o número 42). Desde a sua descoberta em 1881 por Newcomb e sua redescoberta em 1938 por Benford, ela sempre causou estranheza para todos que tiveram contato, afinal ela mostra que existe uma ordem natural nas coisas (especialmente nas mais alatórias).

Também conhecida como a lei do primeiro digito, a lei de Benford diz que cada digito tem uma determinada chance de aparecer primeiro em um número. Até ai, nada demais afinal temos 9 algarismos e cada um tem a mesma chance de ser o primeiro digito, correto? Na verdade não.

~surprise gif

## A descoberta da Lei de Benford

Intuitivamente se temos 9 algarismos para serem o primeiro digito de um número (o zero não faz diferença a esquerda), as chances deveriam ser de 11,1% para cada. Mas graças as observações de Simon Newcomb descobrimos que não é bem assim, ele percebeu um certo desgaste maior nas primeiras paginas dos livros de logaritmo doque nas ultimas.

Eu chutaria que as pessoas achavam o livro de logaritmos pouco interessante e costumavam perder o desejo de saber o final e assim trocavam ele por alguma leitura mais agradavel como *Orgulho e Preconceito* de Jane Austen (1813), mas Newcomb discordaria da minha teoria. Com base nisso ele acabou chegando a conclusão que dada uma lista de números retirados de um conjunto aleatório a probabilidade de um número começar com '1' era bem maior. Isso deu origem a seguinte fórmula:

$$P (d) = \log_{10} \left(1 + \frac{1}{d} \right)$$

[![GIF de um cara pensando com varias contas matematicas voando, cena do filme se beber não case](https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif)](https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif){: .figure-center}
*<small>Ok, estou acompanhando...</small>*{: .caption-center}

Com isso ele produziu o a seguinte tabela com a propabilidade de cada digito ser o primeiro de um número:

| Digito | Proporção |
|--------|-----------|
| **1**  | 30.1%     |
| **2**  | 17.6%     |
| **3**  | 12.5%     |
| **4**  | 9.7%      |
| **5**  | 7.9%      |
| **6**  | 6.7%      |
| **7**  | 5.8%      |
| **8**  | 5.1%      |
| **9**  | 4.6%      |

Ok, temos uma equação sobre o desgate de livro e uma tabela. Qual a importancia disso no meu dia-a-dia?

## Newcomb, Benford & Hill

Se foi Newcomb que descobriu a lei, porque ela se chama lei de Benford?

Na verdade, algumas pessoas até chamam ela de Lei de Newcomb-Benford mas o nome que pegou mesmo foi Lei de Benford por que foi Frank Benford que comprovou a aplicação dessa lei em varias areas. Ele coletou dados de diversas areas...

## A vida, o universo e tudo mais

## Onde há fumaça, há fogo

## Fraudes economicas, contabeis e eleitorais