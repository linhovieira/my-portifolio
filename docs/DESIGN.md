# DESIGN.md

> Documento responsável por definir a identidade visual, experiência do usuário e linguagem de design deste projeto.
>
> Nenhuma interface deve ser criada sem respeitar as regras aqui descritas.

---

# Visão

Este projeto representa a identidade profissional de Paulo Vieira.

Ele deve transmitir imediatamente:

* maturidade técnica;
* excelência em engenharia;
* organização;
* atenção aos detalhes;
* experiência em software corporativo.

A interface deve parecer um produto SaaS premium.

Nunca um currículo.

Nunca uma landing page genérica.

---

# Referência Principal

A pasta

```
references/
```

Contém os arquivos de referência visual.

Principalmente:

```
resume-reference.png
```

Essa imagem representa a direção artística do projeto.

Ela deve ser utilizada apenas como inspiração.

Nunca copiar pixel por pixel.

Nunca utilizar a imagem como fundo.

Nunca reproduzir erros da IA.

Objetivo:

Criar uma versão melhor.

---

# Filosofia Visual

Este projeto deve comunicar:

✔ Elegância

✔ Clareza

✔ Engenharia

✔ Minimalismo

✔ Confiança

✔ Organização

Nunca comunicar:

✘ Excesso

✘ Poluição visual

✘ Efeitos exagerados

✘ Cores fortes

✘ Interface infantil

---

# Inspirações

O design deve buscar referências em:

* Linear
* Vercel
* GitHub
* Stripe
* Raycast
* Microsoft
* Notion

O objetivo é entender a qualidade dessas interfaces.

Nunca copiá-las.

---

# Princípios

## Hierarquia

O visitante deve saber exatamente para onde olhar.

A ordem de leitura deve ser:

Nome

↓

Cargo

↓

Resumo

↓

Projetos

↓

Experiência

↓

Tecnologias

↓

Contato

---

## Espaço em branco

Whitespace faz parte do design.

Nunca preencher espaços apenas porque estão vazios.

Respiração visual comunica sofisticação.

---

## Simplicidade

Cada seção deve resolver apenas um problema.

Evite excesso de informações.

---

# Paleta

Cor principal

```
#0F172A
```

Cor de ação

```
#2563EB
```

Accent

```
#38BDF8
```

Background

```
#F8FAFC
```

Surface

```
#FFFFFF
```

Border

```
#E2E8F0
```

Texto

```
#0F172A
```

Texto secundário

```
#475569
```

Nunca utilizar outras cores sem justificativa.

---

# Tipografia

Título

Montserrat

Bold

Corpo

Inter

Regular

Jamais utilizar mais de duas famílias tipográficas.

---

# Grid

Desktop

12 colunas

Container máximo

1280px

Padding horizontal

32px

Gap

32px

---

# Bordas

Cards

```
rounded-2xl
```

Botões

```
rounded-xl
```

Badges

```
rounded-full
```

---

# Sombras

Somente sombras suaves.

Nunca utilizar sombras pesadas.

A interface deve parecer leve.

---

# Sidebar

A sidebar representa a identidade do projeto.

Ela deve conter:

* foto;
* nome;
* cargo;
* contatos;
* tecnologias;
* idiomas;
* formação.

Background:

Gradiente escuro.

---

# Hero

O Hero é a área mais importante da aplicação.

Elementos:

Nome

Cargo

Resumo

Botões

Estatísticas

Tudo deve estar acima da dobra.

---

# Cards

Todos os cards devem seguir o mesmo padrão.

Padding generoso.

Espaçamento consistente.

Mesmo radius.

Mesma sombra.

---

# Timeline

Utilizar linha vertical.

Cada experiência deve possuir:

* período;
* cargo;
* empresa;
* descrição;
* tecnologias.

Jamais utilizar tabelas.

---

# Projetos

Cada projeto deve possuir:

* título;
* descrição;
* tecnologias;
* links;
* ícone.

Não criar cards gigantes.

---

# Tecnologias

Utilizar chips.

Todos iguais.

Mesmo padding.

Mesmo radius.

Mesmo comportamento.

---

# Botões

Existem apenas três estilos.

Primary

Secondary

Ghost

Nunca inventar novos estilos.

---

# Ícones

Sempre utilizar Lucide.

Nunca misturar bibliotecas.

---

# Imagens

Sempre utilizar:

next/image

Todas devem possuir:

alt

Loading adequado

responsividade

---

# Foto

A foto principal deve utilizar:

```
references/profile.png
```

Características:

* fundo branco;
* camisa social azul clara;
* iluminação uniforme;
* enquadramento 3x4;
* aparência profissional;
* expressão natural.

Jamais utilizar filtros exagerados.

---

# Animações

As animações devem existir apenas para melhorar a experiência.

Utilizar:

* fade;
* slide curto;
* opacity;
* hover discreto.

Nunca utilizar:

* bounce;
* zoom exagerado;
* rotações;
* efeitos chamativos.

---

# Micro interações

Botões

↓

leve alteração de cor

Cards

↓

Leve elevação

Links

↓

Underline discreto

Nada, além disso.

---

# Responsividade

Desktop

Sidebar fixa.

Conteúdo ao lado.

Tablet

Sidebar superior.

Grid em duas colunas.

Mobile

Tudo em coluna.

Leitura natural.

---

# PDF

O layout deve permitir futura geração de currículo PDF.

Evite componentes impossíveis de imprimir.

---

# QR Code

O QR code nunca deve apontar para LinkedIn.

Sempre apontar para o próprio portfólio.

---

# Conteúdo

O visitante é brasileiro.

Todo conteúdo textual deve permanecer em português.

O código permanece em inglês.

---

# Sensação Esperada

Quando alguém abrir o projeto deve pensar:

"Esse profissional projeta software de alta qualidade."

Não deve pensar:

"Que site bonito."

A beleza é consequência da qualidade.

Nunca o objetivo principal.

---

# Regra Final

Se existir qualquer dúvida de design durante o desenvolvimento, faça a seguinte pergunta:

> Esta decisão aumenta ou diminui a percepção de maturidade técnica?

Se aumentar...

Implemente.

Se diminuir...

Procure uma solução melhor.

Toda interface deste projeto deve reforçar a mesma mensagem:

**Paulo Vieira é um Engenheiro de Software especializado em construir sistemas modernos, escaláveis e bem projetados.**
