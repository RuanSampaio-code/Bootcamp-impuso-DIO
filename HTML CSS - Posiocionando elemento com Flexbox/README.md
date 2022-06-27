# Posicionamento elementos com FlexBox

## INTRODUÇÃO AO FLEXBOX

Flexbox visas oferecer distribuição de espaço entre itens em uma ionterface e recursos de alinhamento.

ESTRUTURA BÁSICA:

flex-container: tag que envolve os itens com propridades de display flex:

 

### Flex-container

```css
.flex-container{
	display: flex;
}
```

Propriedades relacionadas:

- display
- flex-direction
- flex-wrap → se aplica para quebra de linha ou não
- flex-flow
- justify-content
- align-items → alinhar itens de acordo com eixo do container.
- align-content

### Flex-container **e flex-item**

```css
.flex-container{
	display: flex;
}

.flex-container .flex-item1{
}
```

flex-items propriedades relacionais:

- flex-grow
- flex-basis
- flex-shrink
- flex
- order
- align-self

## FLEX-DIRECTION

Estabelece o eixo principal do container:

Eixos :

- flex-direction:row; → a direção do texto, esquerda p/ direita.
- flex-direction: row-reverse → sentido oposto à direção do texto

```css
.flex-container{
	display: flex;
	flex-direction: row;
}
.flex-container{
	display: flex;
	flex-direction: row-reverse;

}
```

- flex-direction: column → ordenação de cima p/ baixo em unica coluna.
- flex-direction: column-reverse → ordenação baixo p/ cima em unica coluna.

```css
.flex-container{
	display: flex;
	flex-direction: column;
}
.flex-container{
	display: flex;
	flex-direction: column-reverse;

}
```

- flex-wrap → propriedade que define se os itens devem ou não quebrar a linha, por padrão eles não quebram linhas, isso faz com que os flex items sejam compactados alem do limite do conteúdo. ex: flex-wrap: nowrap  (padrão)
- flex-wrap: wrap: → realiza quebra de linhas se os items do container utrapassar o tamanho do container.

## FLEX-flow

Atalho paras as propriedades flex-direction e flex-wrap.

exemplo:

```css
.item{
	display: flex;
	flex-flow: row nowrap
}
```

## JUSTIFY-CONTENT

Se encarrega de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaço entre eles.

- flex-start
- flex-end
- center
- space-between
- space-around

## ALIGN ITEMS

Trata do alinnhamento dos flex items com o eixo do container.

Permite o alinhamento central no eixo vertical. 

Tipos:

- center
- stretch → stretch: padrão, e os flex itens cresçam igualmente. faz com que os intes cresçam de acordo com maior item do container
- flex-start
- flex-end
- baseline → alinhamento de acordo com a base da tipografia dos itens

## ALIGN CONTENT

é a propriedade responsável por tratar o alinhamento em relação ao eixo vertical do container.

precisamos que:

o container utilize quebra de linhas.

tipos:

- center
- stretch
- flex-start
- flex-end
- center
- space-between
- space-around

## FLEX-GROW

Define a proporcionalidade de crescimento de itens respeitando o tamanho de seus conteudos internos.

não funciona caso ter justify-contente.

so poder sé numeros seus valores: 0,1,2,3 …

## FLEX_BASIS

é a propriedade que estabelece o tamanho inicial do item antes das distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

- auto →caso o item não tenha tamanho, este será proporcional ao conteudo do item.
- px, %, em → valores exatos definidos.
- 0 → terá relação com a definição do flex-grow.

## FLEX-SHRICK

É a propriedade ques establelece a capacidade de redução ou compressão do tamanho de um item.

## Flex

Atalho paras as propriedades: grow, shrink e basis.

## Order

manipula a ordem dos posicionamentos de cada item dentro de um container.

por padrão a order:0; em todos os elementos

```css
/o item que receber esta class terá ordem 0
.order0{
	order: 0
}

.order1{
	order: 1
}
```

## Align self

é a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.

valores possiveis:

- auto: valor padrão.
- flex-start
- flex-end
- center
- stretch: ocupa todo os espaços relativos.
