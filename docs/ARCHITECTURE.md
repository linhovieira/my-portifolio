# ARCHITECTURE.md

> Documento responsável por definir a arquitetura técnica do projeto.
>
> Este documento descreve como a aplicação está organizada, quais padrões arquiteturais foram adotados e quais princípios devem ser respeitados durante sua evolução.

---

# Visão Geral

O objetivo desta arquitetura é construir uma aplicação que seja:

* Simples de entender;
* Fácil de evoluir;
* Altamente reutilizável;
* Escalável;
* Performática;
* Consistente.

A arquitetura deve priorizar clareza em vez de complexidade.

Sempre que houver duas soluções possíveis, escolher a mais simples.

---

# Arquitetura Geral

A aplicação utiliza uma arquitetura baseada em componentes.

Cada camada possui uma responsabilidade específica.

```text
                    Browser
                        │
                        ▼
                Next.js App Router
                        │
                        ▼
                   Layouts
                        │
                        ▼
                   Sections
                        │
                        ▼
                 Components
                        │
                        ▼
                 Design System
                        │
                        ▼
                 Shared Utilities
```

Nenhuma camada deve conhecer detalhes internos de outra quando isso puder ser evitado.

---

# Estrutura de Diretórios

```text
app/
│
├── layout.tsx
├── page.tsx
│
├── sections/
│
├── components/
│
├── hooks/
│
├── providers/
│
├── contexts/
│
├── lib/
│
├── types/
│
├── styles/
│
└── public/
```

Cada diretório possui uma única responsabilidade.

---

# App Router

O projeto utiliza exclusivamente o App Router do Next.js.

Sempre utilizar:

* Layouts compartilhados;
* Metadata API;
* Server Components por padrão;
* Streaming quando fizer sentido.

Evitar Pages Router.

---

# Filosofia dos Componentes

Todo componente deve ser pequeno.

Todo componente deve possuir responsabilidade única.

Nunca criar componentes que:

* buscam dados;
* renderizam múltiplas seções;
* conhecem regras de negócio;
* controlam navegação inteira.

Componentes devem apenas renderizar interface.

---

# Camadas

## Layout

Responsável pela estrutura global.

Exemplos:

* Header
* Sidebar
* Footer
* Navigation

---

## Sections

Representam áreas completas da página.

Exemplo:

```text
HeroSection

AboutSection

ExperienceSection

ProjectsSection
```

Sections organizam componentes.

Nunca implementam lógica complexa.

---

## Components

São elementos reutilizáveis.

Exemplo:

```text
ProjectCard

StatCard

SkillChip

TimelineItem

Button

Badge
```

Devem ser independentes.

---

## Hooks

Responsáveis apenas por comportamento.

Nunca renderizam interface.

Exemplo:

```text
useScrollSpy()

useTheme()

useActiveSection()

useWindowSize()
```

---

## Lib

Contém:

* constantes;
* utilitários;
* helpers;
* dados estáticos;
* funções puras.

Nunca colocar JSX.

---

## Types

Todas as interfaces devem permanecer centralizadas.

Exemplo:

```text
Project

Experience

Technology

Education

Language
```

---

# Fluxo de Dados

Sempre preferir fluxo unidirecional.

```text
Data
    │
    ▼
Section
    │
    ▼
Component
    │
    ▼
UI
```

Evitar estados compartilhados desnecessários.

---

# Fonte Única da Verdade

Todo conteúdo profissional deve estar centralizado.

Exemplo:

```text
lib/

data.ts
```

A interface nunca deve duplicar informações.

Toda alteração de conteúdo deve acontecer em apenas um lugar.

---

# Gerenciamento de Estado

Prioridade:

1. Server Components
2. Props
3. React State
4. Context API

Evitar bibliotecas globais de estado sem necessidade.

---

# Renderização

Por padrão:

Server Components.

Utilizar Client Components apenas quando houver:

* eventos;
* animações;
* hooks do navegador;
* estado local.

Nunca adicionar `"use client"` por conveniência.

---

# Design System

Toda interface deve ser construída utilizando componentes reutilizáveis.

Nunca repetir estilos.

Preferir:

```text
<Button />

<Card />

<Badge />

<Section />

<ProjectCard />
```

Evitar JSX repetido.

---

# Responsividade

Desktop é apenas o ponto de partida.

Toda funcionalidade deve funcionar em:

* Desktop
* Tablet
* Mobile

A adaptação deve acontecer naturalmente através do Design System.

---

# Performance

Toda decisão arquitetural deve considerar:

* quantidade de JavaScript;
* renderizações;
* hidratação;
* imagens;
* lazy loading;
* bundle final.

O objetivo é manter a aplicação leve.

---

# SEO

Toda página deve utilizar:

* Metadata API;
* Open Graph;
* Twitter Cards;
* canonical URL;
* robots;
* sitemap.

SEO faz parte da arquitetura.

---

# Acessibilidade

A arquitetura deve facilitar:

* HTML semântico;
* foco por teclado;
* leitores de tela;
* contraste adequado.

Nenhum componente deve comprometer acessibilidade.

---

# Convenções

## Componentes

```text
PascalCase
```

## Hooks

```text
camelCase
```

## Pastas

```text
kebab-case
```

## Tipos

```text
PascalCase
```

## Constantes

```text
UPPER_SNAKE_CASE
```

---

# Escalabilidade

Novas funcionalidades devem ser adicionadas sem alterar a estrutura existente.

A arquitetura deve crescer por composição.

Nunca por duplicação.

---

# Princípios Arquiteturais

Este projeto adota os seguintes princípios:

* Single Responsibility Principle;
* Composition over Inheritance;
* DRY;
* KISS;
* Separation of Concerns;
* Progressive Enhancement.

Sempre privilegiando simplicidade.

---

# Fluxo de Desenvolvimento

Toda nova funcionalidade deve seguir a seguinte ordem:

1. Atualizar `PROJECT.md` (caso necessário).
2. Verificar impacto no `DESIGN.md`.
3. Implementar seguindo `AGENTS.md`.
4. Validar conforme `CLAUDE.md`.
5. Executar lint e build.

---

# Evolução da Arquitetura

A arquitetura deve permanecer pequena.

Novas abstrações somente devem ser criadas quando houver ganho real.

Evite criar estruturas pensando em problemas que ainda não existem.

---

# Definição de Boa Arquitetura

Uma boa arquitetura é aquela em que:

* novos componentes podem ser adicionados facilmente;
* alterações possuem baixo impacto;
* o código permanece previsível;
* a organização é intuitiva;
* qualquer desenvolvedor consegue localizar rapidamente onde implementar uma nova funcionalidade.

---

# Filosofia Final

A arquitetura deste projeto deve transmitir a mesma mensagem que o próprio portfólio:

**Soluções simples, elegantes, bem organizadas e preparadas para evoluir.**

A melhor arquitetura não é a mais complexa.

É aquela que quase passa despercebida, porque tudo está exatamente onde se espera encontrar.
