# Prompt 02 — Scaffold Astro do MVP Elieth Braga

## Contexto

Você está trabalhando no repositório `7psdigitaltech-eng/elieth-braga`.

Este projeto segue uma regra obrigatória de governança:

```text
ChatGPT = planejamento, estratégia, arquitetura, conteúdo, UX, prompts, critérios e validação
Cursor/Codex = execução operacional do escopo aprovado
Eduardo = controle local, prioridades, credenciais, servidor e publicação
GitHub = fonte da verdade
```

Você, Codex, não deve redefinir arquitetura, stack, escopo, direção visual, conteúdo ou roadmap. Sua função é executar o escopo descrito neste prompt.

## Leitura obrigatória

Antes de responder, leia:

- `AGENTS.md`
- `.cursor/rules/elieth-braga.mdc`
- `docs/status.md`
- `docs/decisoes.md`
- `docs/fase4/02-workflow-cursor-codex-github.md`
- `docs/fase5/00-arquitetura-tecnica-mvp.md`
- `docs/fase5/01-plano-scaffold-site.md`
- `docs/fase4/00-direcao-visual.md`
- `docs/fase4/03-plano-visual-codex.md`
- `docs/fase4/04-wireframe-desktop.md`
- `docs/fase4/05-wireframe-mobile.md`
- `docs/fase4/06-criterios-de-aceite-visual.md`

## Uso do modo planejamento

Neste primeiro momento, **não altere arquivos**.

Responda somente com um plano operacional curto contendo:

1. entendimento do objetivo;
2. arquivos que pretende criar ou alterar;
3. comandos que pretende executar;
4. riscos técnicos ou dúvidas de execução;
5. confirmação de que não vai tomar decisões de stack, arquitetura, conteúdo ou design fora do escopo.

Depois de apresentar esse plano, pare. Eduardo vai colar o plano no ChatGPT para validação.

Execute somente depois de autorização explícita.

## Objetivo da tarefa

Criar o scaffold técnico inicial do MVP em:

```text
Astro + TypeScript + CSS próprio com tokens + build estático
```

A primeira entrega deve validar a base técnica e criar uma homepage mínima. Não implemente ainda o site completo.

## Arquivos permitidos

Você só pode criar ou alterar os arquivos abaixo:

```text
package.json
package-lock.json
astro.config.mjs
tsconfig.json
public/robots.txt
src/components/Header.astro
src/components/Hero.astro
src/components/PlaceholderImage.astro
src/components/Footer.astro
src/content/site.ts
src/layouts/BaseLayout.astro
src/pages/index.astro
src/styles/global.css
```

Se qualquer outro arquivo parecer necessário, não altere. Registre no plano operacional e aguarde decisão.

## Stack obrigatória

Use:

- Astro;
- TypeScript;
- CSS próprio com tokens;
- build estático.

Não use:

- Next.js;
- React, Vue ou Svelte;
- Tailwind;
- shadcn/ui;
- CMS;
- banco de dados;
- analytics;
- formulário;
- bibliotecas de animação;
- imagens reais.

## Conteúdo permitido

Pode usar somente estes conteúdos:

- `Elieth Braga`;
- `Elieth de Fátima da Silva Braga`;
- `Uma trajetória de serviço público ligada à educação, à gestão e à cidadania no Pará.`;
- `Conheça a trajetória`;
- `Acompanhe no Instagram`;
- `Acompanhe no Facebook`;
- `https://www.instagram.com/eliethdefatima/`;
- `https://www.facebook.com/Eliethdefatimabraga`;
- `[FOTO PRINCIPAL AUTORIZADA]`.

Não incluir:

- candidatura;
- partido;
- número;
- slogan eleitoral;
- pedido de voto;
- pedido de apoio político;
- formação acadêmica ainda pendente;
- realizações específicas ainda não validadas;
- imagens reais;
- logotipo, brasão ou assinatura do Governo do Pará.

## Requisitos técnicos

Crie scripts em `package.json` para:

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check"
}
```

Dependências esperadas:

- `astro`;
- `typescript`;
- `@astrojs/check`.

A homepage deve ter:

- `html lang="pt-BR"`;
- `BaseLayout.astro` com metadados básicos;
- skip link para o conteúdo principal;
- cabeçalho simples;
- hero mínimo;
- placeholder de imagem;
- rodapé simples;
- CSS global com tokens da Fase 4;
- foco visível;
- respeito a `prefers-reduced-motion`;
- estrutura responsiva básica.

## Tokens visuais mínimos

Defina em `src/styles/global.css`:

```css
--color-white: #ffffff;
--color-mist: #f3f7f9;
--color-graphite: #25282b;
--color-gray: #66727a;
--color-blue-deep: #14527a;
--color-blue-star: #1674b8;
--color-red-para: #e72d3d;
```

O vermelho deve ser usado com parcimônia, preferencialmente no CTA ou assinatura visual.

## Verificações após autorização e execução

Depois de autorizado e depois de editar os arquivos, execute:

```bash
npm install
npm run check
npm run build
```

Se possível, abra a página localmente e gere/verifique screenshots desktop e mobile.

## Resultado esperado

Ao final da execução, informe:

- arquivos criados/alterados;
- comandos executados;
- resultado de cada comando;
- se houve erro ou limitação;
- confirmação de que não adicionou conteúdo eleitoral;
- confirmação de que não adicionou imagens reais;
- próximos passos recomendados.

Não faça commit automaticamente sem orientação de Eduardo.
