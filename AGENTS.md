<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

> Manual de Engenharia
>
> Este documento define os padrões técnicos obrigatórios para qualquer contribuição realizada neste projeto.
>
> Todas as implementações devem seguir estas diretrizes.

---

# Missão

O objetivo deste repositório não é apenas funcionar.

O objetivo é servir como referência de qualidade técnica.

Todo código produzido deve refletir maturidade em engenharia de software.

A prioridade sempre será:

1. Clareza
2. Manutenibilidade
3. Escalabilidade
4. Performance
5. Elegância

Nunca sacrifique esses princípios por velocidade de implementação.

---

# Convenção de Idioma

Este projeto utiliza dois idiomas de forma intencional.

## Português

Utilizar português apenas para:

- documentação do projeto;
- arquivos CLAUDE.md;
- AGENTS.md;
- DESIGN.md;
- README.md;
- comentários quando estritamente necessários;
- textos apresentados ao usuário final.

Exemplos:

- "Sobre mim"
- "Projetos"
- "Experiência"
- "Contato"

---

## Inglês

Todo o código-fonte deve ser escrito exclusivamente em inglês.

Isso inclui:

- nomes de componentes;
- nomes de arquivos;
- nomes de funções;
- nomes de variáveis;
- interfaces;
- types;
- enums;
- hooks;
- constantes;
- contextos;
- providers;
- utilitários;
- serviços;
- modelos de dados;
- classes CSS semânticas.

Exemplos:

✅ Correto

```tsx
<ProjectCard />

<ExperienceTimeline />

<ContactSection />

const featuredProjects = []

function downloadResume() {}

interface ProfessionalExperience {}
```

❌ Incorreto

```tsx
<CardProjeto />

<LinhaTempo />

const projetos = []

function baixarCurriculo() {}

interface ExperienciaProfissional {}
```

---

## Estrutura de Pastas

Toda a estrutura do projeto deve permanecer em inglês.

Exemplo:

```
app/

components/

hooks/

lib/

types/

styles/

public/

assets/

sections/

providers/

contexts/
```

Nunca criar diretórios em português.

---

## Conteúdo

Todo texto exibido ao visitante deve permanecer em português.

Exemplo:

```
Sobre

Projetos

Experiência

Tecnologias

Contato

Baixar currículo
```

O visitante é brasileiro.

O código não.

---

## Internacionalização

Mesmo que inicialmente o site esteja apenas em português, toda a arquitetura deve facilitar uma futura internacionalização.

Evite hardcode quando fizer sentido.

Prefira centralizar os textos em arquivos específicos caso o projeto cresça.

---

# Stack Oficial

Toda implementação deve utilizar exclusivamente a stack definida abaixo, salvo justificativa técnica.

## Framework

* Next.js (App Router)

## Linguagem

* TypeScript

## Interface

* React

## Estilização

* Tailwind CSS

## Ícones

* Lucide React

## Imagens

* next/image

## Fontes

* next/font

## Gerenciamento de Estado

Sempre preferir:

1. Server Components
2. React State
3. Context API

Evite bibliotecas globais de estado sem necessidade.

---

# Estrutura do Projeto

A estrutura deve permanecer organizada.

```text
app/
components/
hooks/
lib/
types/
styles/
public/
```

Não criar novas pastas sem justificativa.

---

# Organização dos Componentes

Todos os componentes devem possuir responsabilidade única.

Exemplo:

```text
Hero
```

Responsável apenas pela Hero.

Nunca deve conhecer:

* Timeline
* Sidebar
* Footer

---

```text
ProjectCard
```

Responsável apenas por exibir um projeto.

Nunca deve realizar chamadas de API.

Nunca deve conter regras de negócio.

---

```text
SkillChip
```

Responsável apenas por renderizar uma tecnologia.

Nada, além disso.

---

# Componentização

Antes de criar um componente, pergunte:

Este componente será reutilizado?

Existe outro semelhante?

Vale separar?

Se a resposta for não...

Talvez ele não deva existir.

---

# Convenções

## Componentes

Sempre:

```text
PascalCase
```

Exemplo

```text
Hero.tsx

ProjectCard.tsx

Sidebar.tsx
```

---

## Hooks

Sempre

```text
camelCase
```

Exemplo

```text
useTheme

useScrollSpy

useActiveSection
```

---

## Arquivos

Nunca:

```text
MeuComponenteNovo.tsx
```

Sempre:

```text
ProjectCard.tsx
```

---

## Constantes

Sempre:

```text
UPPER_SNAKE_CASE
```

---

## Variáveis

Sempre:

```text
camelCase
```

---

# React

Sempre utilizar:

* Functional Components
* Hooks
* Composition

Evitar:

* Classes
* HOCs
* Render Props

---

# Server Components

Por padrão, todo componente deve ser um Server Component.

Somente utilizar:

```tsx
"use client"
```

Quando realmente necessário.

Nunca adicionar "use client" por conveniência.

---

# Props

Props devem ser pequenas.

Nunca criar componentes recebendo dezenas de propriedades.

Prefira composição.

---

# TypeScript

Nunca utilizar:

```ts
any
```

Sempre preferir:

* interfaces
* types
* generics

Caso exista dúvida de tipagem, resolver corretamente.

Nunca ignorar erros.

---

# Tailwind

Utilizar exclusivamente Tailwind.

Evitar:

* CSS Modules
* Styled Components
* Inline Style

Classes devem permanecer organizadas.

Preferência:

Layout

↓

Spacing

↓

Typography

↓

Colors

↓

Effects

---

# Design System

Todo componente deve respeitar:

* DESIGN.md
* Tokens de cor
* Espaçamentos
* Radius
* Tipografia

Nunca criar estilos arbitrários.

---

# Performance

Sempre considerar:

* next/image
* lazy loading
* code splitting
* dynamic import
* memorização quando fizer sentido

Evitar renderizações desnecessárias.

---

# SEO

Toda página deve possuir:

* title
* description
* OpenGraph
* Twitter Card
* canonical

Sempre utilizar Metadata API do Next.js.

---

# Acessibilidade

Todos os componentes devem possuir:

* HTML semântico
* aria-label quando necessário
* alt em imagens
* navegação por teclado
* contraste adequado

Nunca utilizar div quando existir elemento semântico equivalente.

---

# Segurança

Nunca expor:

* chaves
* tokens
* segredos

Utilizar variáveis de ambiente.

Nunca commitar arquivos sensíveis.

---

# Código

Todo código deve parecer escrito pela mesma pessoa.

Evite estilos diferentes entre arquivos.

Consistência é prioridade.

---

# Revisão

Antes de concluir qualquer alteração, responder:

O código está limpo?

Está reutilizável?

Está consistente?

Está tipado?

Está acessível?

Está performático?

Se qualquer resposta for "não", continue refinando.

---

# Build

Nenhuma entrega será considerada concluída sem executar:

```bash
npm run lint

npm run build
```

Ambos devem finalizar sem erros.

---

# Git

Commits devem seguir Conventional Commits.

Exemplos:

```text
[FEAT] - .......

[FIX] - ......

[REFACTOR] - ......

[DOCS] - .......

[STYLE] - .......

[PERF] - .......

[TEST] - .......
```

Evitar commits genéricos.

Nunca utilizar:

```text
update

ajustes

teste
```

---

# Idioma das Commits

Mensagens de commit devem permanecer em português preservando em inglês somente o radical em colchetes.

Exemplos:

```
[FEAT] - Criação da seção Hero;

[FIX] - Correção do sidebar responsivo;

[REFACTOR] - Extração do componente CardProject;

[DOCS] - Atualizaçãodo guia de arquitetura;
```

Nunca:

```
feat: add hero section

fix: correct sidebar responsiveness

refactor: extract project card component

docs: update architecture guide
```

---

# Filosofia Final

Este projeto deve servir como referência de engenharia.

Cada componente deve poder ser utilizado como exemplo.

Cada tela deve transmitir organização.

Cada linha de código deve demonstrar maturidade técnica.

Sempre que existir dúvida entre duas soluções tecnicamente corretas, escolha aquela que seja mais simples, mais elegante e mais fácil de manter.

O objetivo deste repositório não é apenas entregar um portfólio.

É demonstrar excelência em engenharia de software.

