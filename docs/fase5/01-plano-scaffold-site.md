# Fase 5 — Plano do scaffold técnico

- **Tarefa:** scaffold técnico do MVP
- **Branch sugerida para execução local:** `chore/scaffold-site`
- **Prompt de execução:** `prompts/02-scaffold-astro-mvp.md`
- **Executor:** Cursor/Codex
- **Validação:** ChatGPT via plano operacional + GitHub PR

## 1. Objetivo

Criar a base técnica mínima do site em Astro, com TypeScript, CSS com tokens e homepage inicial suficiente para validar build, estrutura, SEO básico, acessibilidade inicial e organização de conteúdo.

Esta tarefa não implementa o site completo. Ela cria a fundação técnica para as próximas tarefas.

## 2. Stack fechada para execução

```text
Astro + TypeScript + CSS próprio com tokens + build estático
```

O Codex não deve trocar essa stack nem adicionar frameworks de UI.

## 3. Arquivos permitidos na execução

O scaffold poderá criar ou alterar somente:

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

Se o Codex entender que outro arquivo é necessário, deve parar no plano operacional e justificar para validação do ChatGPT.

## 4. Conteúdo mínimo autorizado

Pode usar:

- `Elieth Braga`;
- `Elieth de Fátima da Silva Braga`;
- `Uma trajetória de serviço público ligada à educação, à gestão e à cidadania no Pará.`;
- links oficiais:
  - `https://www.instagram.com/eliethdefatima/`;
  - `https://www.facebook.com/Eliethdefatimabraga`;
- CTAs:
  - `Conheça a trajetória`;
  - `Acompanhe no Instagram`;
  - `Acompanhe no Facebook`;
- placeholders de imagem:
  - `[FOTO PRINCIPAL AUTORIZADA]`;
  - `[FOTO HISTÓRICA AUTORIZADA]`;
  - `[IMAGEM INSTITUCIONAL COM DIREITO DE USO A CONFIRMAR]`.

Não inserir dados ainda pendentes, formação, partido, votação, candidatura, número, slogan, pedido de apoio, promessas ou fotos reais.

## 5. Comportamento esperado da primeira homepage

A homepage inicial deve ter:

- cabeçalho simples;
- hero mínimo com nome, frase central, CTA e placeholder de imagem;
- rodapé simples;
- link de pular para o conteúdo;
- idioma `pt-BR`;
- metadados básicos;
- visual limpo usando tokens iniciais.

As demais seções serão implementadas em tarefas posteriores.

## 6. Verificações esperadas

Depois da execução, o Codex deve tentar rodar:

```bash
npm install
npm run check
npm run build
```

Se algum comando falhar por ambiente, dependência ou configuração, registrar:

- comando executado;
- erro resumido;
- hipótese de causa;
- se houve impacto no build.

## 7. Evidências esperadas no PR

O PR deverá incluir:

- objetivo;
- arquivos criados/alterados;
- scripts disponíveis;
- comandos executados e resultado;
- confirmação de ausência de conteúdo eleitoral;
- confirmação de que não há imagens reais;
- screenshots desktop e mobile se o ambiente local permitir abrir a página;
- limitações e pendências.

## 8. Pendências para PRs posteriores

- grid e espaçamentos refinados;
- implementação completa do hero conforme wireframe;
- seção Sobre;
- linha do tempo;
- áreas de atuação;
- destaque institucional;
- redes e galeria opcional;
- SEO completo;
- CI e deploy.
