# Fase 5 — Arquitetura técnica do MVP Elieth Braga

- **Fase:** 5 — Arquitetura técnica e infraestrutura
- **Status:** decisão técnica inicial para scaffold
- **Responsável por planejamento:** ChatGPT
- **Executor previsto:** Cursor/Codex, somente após validação do plano operacional

## 1. Objetivo da Fase 5

Definir a arquitetura técnica mínima para transformar os documentos de estratégia, conteúdo e direção visual em uma landing page estática, leve, acessível e versionada.

A Fase 5 não deve expandir o produto para CMS, banco de dados, área administrativa, blog dinâmico ou funcionalidades eleitorais. O objetivo é preparar a base técnica para implementar o MVP com segurança.

## 2. Decisão de stack para o MVP

A stack definida para o scaffold inicial é:

```text
Astro + TypeScript + CSS com tokens próprios + build estático
```

### Componentes da stack

- **Astro:** framework principal para site estático.
- **TypeScript:** tipagem e organização do conteúdo/configurações.
- **CSS próprio com tokens:** estilos globais, variáveis, responsividade e componentes sem dependência visual pesada.
- **Sem Tailwind no scaffold inicial:** manter a base mais simples e reduzir dependências.
- **Sem React/Vue/Svelte no scaffold inicial:** usar componentes `.astro` enquanto não houver necessidade real de interatividade complexa.
- **Saída estática:** gerar HTML/CSS/JS estático para publicação futura em Nginx na VPS.

## 3. Motivos da decisão

Astro foi escolhido porque o MVP é uma página predominantemente estática, com foco em desempenho, SEO, acessibilidade e publicação simples.

A decisão por CSS próprio com tokens, em vez de Tailwind no scaffold inicial, reduz ruído, dependências e risco de aparência genérica. A direção visual já está documentada e pode ser traduzida diretamente em variáveis CSS.

Next.js não será usado no MVP inicial porque não há necessidade atual de renderização dinâmica, rotas de servidor, autenticação, painel administrativo ou APIs.

## 4. Princípios técnicos

- Página estática e rápida.
- Baixo JavaScript no navegador.
- Conteúdo e componentes desacoplados.
- Estrutura preparada para evolução, sem overengineering.
- Componentes pequenos e sem responsabilidade excessiva.
- Tokens visuais centralizados.
- HTML semântico.
- Acessibilidade desde o scaffold.
- SEO básico desde a primeira página.
- Sem imagens reais sem direito de uso confirmado.
- Sem conteúdo eleitoral não autorizado.

## 5. Estrutura técnica esperada

Estrutura inicial recomendada:

```text
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── public/
│   └── robots.txt
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── PlaceholderImage.astro
    │   └── Footer.astro
    ├── content/
    │   └── site.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

Essa primeira estrutura deve validar a stack, build, organização e fluxo de trabalho. As seções completas serão implementadas em PRs posteriores.

## 6. Organização de conteúdo

O conteúdo base deve ficar em `src/content/site.ts`, com dados mínimos e seguros:

- nome público;
- nome completo;
- posicionamento central;
- links oficiais do Instagram e Facebook;
- CTAs permitidos;
- placeholders de imagem;
- nota editorial de que imagens reais dependem de autorização.

Não inserir formação, realizações específicas, dados pessoais sensíveis, partido, número, candidatura, pedido de apoio, slogan ou informações ainda pendentes.

## 7. Tokens visuais iniciais

Os tokens devem ser definidos em `src/styles/global.css` com base em `docs/fase4/00-direcao-visual.md` e `docs/fase4/03-plano-visual-codex.md`.

Tokens mínimos:

```css
--color-white: #ffffff;
--color-mist: #f3f7f9;
--color-graphite: #25282b;
--color-gray: #66727a;
--color-blue-deep: #14527a;
--color-blue-star: #1674b8;
--color-red-para: #e72d3d;
```

O vermelho deve ser limitado a CTA ou assinatura visual. A interface deve permanecer predominantemente clara.

## 8. SEO e metadados iniciais

O `BaseLayout.astro` deve prever:

- `title`;
- `description`;
- `canonical`, quando a URL final existir;
- Open Graph básico;
- viewport;
- idioma `pt-BR`;
- estrutura semântica.

Enquanto não houver imagem autorizada, não usar imagem social real. Usar metadados textuais básicos.

## 9. Acessibilidade mínima

O scaffold deve garantir:

- `html lang="pt-BR"`;
- skip link para conteúdo principal;
- foco visível;
- hierarquia de títulos correta;
- botões e links com nomes acessíveis;
- contraste viável com os tokens;
- respeito a `prefers-reduced-motion`;
- placeholders com função clara e textos alternativos provisórios.

## 10. Escopo da primeira execução de código

A primeira execução do Codex deve criar somente o scaffold técnico e uma homepage mínima de validação.

Incluído:

- dependências mínimas do Astro;
- scripts de desenvolvimento, build, preview e check;
- layout base;
- estilos globais com tokens;
- componentes mínimos `Header`, `Hero`, `PlaceholderImage` e `Footer`;
- página `index.astro` simples;
- conteúdo seguro em `src/content/site.ts`;
- `robots.txt` inicial;
- build funcionando.

Excluído nesta primeira execução:

- implementação completa de todas as seções;
- galeria real;
- imagens reais;
- animações complexas;
- CMS;
- deploy;
- CI/CD;
- formulário;
- analytics;
- qualquer conteúdo eleitoral.

## 11. Sequência de PRs após o scaffold

Ordem recomendada:

1. `chore/scaffold-site` — criar base Astro e validar build.
2. `feat/design-tokens-layout` — consolidar tokens, grid, espaçamentos e base responsiva.
3. `feat/header-hero` — implementar cabeçalho e hero conforme wireframe.
4. `feat/about-timeline` — implementar sobre e trajetória.
5. `feat/areas-highlight` — implementar áreas de atuação e destaque institucional.
6. `feat/social-gallery-footer` — implementar redes, galeria opcional e rodapé.
7. `feat/seo-accessibility` — revisar SEO, acessibilidade, performance e metadados.
8. `chore/ci-build-deploy` — configurar CI e preparar deploy.

## 12. Critérios de aceite da Fase 5

A Fase 5 estará pronta para avançar quando:

- a stack estiver documentada;
- o scaffold tiver prompt operacional fechado;
- o Codex apresentar plano operacional e ele for validado pelo ChatGPT;
- o PR de scaffold alterar somente arquivos técnicos esperados;
- `npm run build` funcionar;
- `npm run check` funcionar ou a limitação estiver registrada;
- a homepage mínima abrir sem erros;
- não houver conteúdo eleitoral, imagens sem direito ou fatos pendentes transformados em conteúdo final.
