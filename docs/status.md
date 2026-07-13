# Status — Projeto Elieth Braga

## Status atual

- **Fases concluídas:**
  - Fase 0 — Governança e planejamento
  - Fase 1 — Varredura pública e inventário de fontes, encerrada pelo critério 80/20
  - Fase 2 — Verificação e consolidação em formato MVP
  - Fase 3 — Estratégia da presença digital
  - Fase 4 — Conteúdo, identidade e experiência visual
- **Fase atual:** Fase 5 — Arquitetura técnica e infraestrutura
- **Situação:** direção visual e wireframes mergeados; governança ChatGPT/Codex corrigida; arquitetura técnica do scaffold definida
- **Última atualização:** 2026-07-13

## Governança operacional persistente

```text
ChatGPT = planejamento, estratégia, arquitetura, conteúdo, UX, prompts, critérios e validação
Cursor/Codex = execução operacional do escopo aprovado
Eduardo = controle local, prioridades, credenciais, servidor e publicação
GitHub = fonte da verdade
```

### Ciclo obrigatório do modo planejamento do Codex

1. ChatGPT entrega prompt fechado de execução.
2. Eduardo cola o prompt no Cursor/Codex em modo planejamento.
3. Codex retorna plano operacional curto.
4. Eduardo cola esse plano de volta no ChatGPT.
5. ChatGPT autoriza, ajusta ou bloqueia.
6. Codex executa somente após autorização.

O plano do Codex não é planejamento estratégico; é apenas confirmação operacional de entendimento, arquivos, comandos/testes e riscos técnicos.

## Entregas concluídas

### Pesquisa e consolidação

- inventário de fontes e linha do tempo factual;
- três relatórios de varredura;
- perfil factual consolidado;
- registro de divergências;
- índice inicial de canais e mídias;
- estratégia 80/20 e checklist de validação direta;
- dossiê factual mínimo do MVP;
- biografia-base em versões curta, intermediária e expandida;
- matriz de conteúdo publicável;
- matriz inicial de realizações e evidências.

### Estratégia da página

- posicionamento central definido;
- proposta de valor da página definida;
- públicos prioritários organizados;
- tom de voz e limites editoriais definidos;
- pilares de mensagem definidos;
- chamadas para ação do MVP definidas;
- arquitetura de informação de página única definida;
- escopo funcional do MVP definido.

### Fase 4

- direção visual inicial registrada;
- paleta digital provisória inspirada na identidade pública do Pará;
- conceito da diagonal paraense definido como assinatura visual;
- cinco repositórios GitHub avaliados;
- `anthropics/skills` escolhido como referência principal de processo visual;
- workflow Cursor/Codex/GitHub documentado;
- plano visual detalhado criado;
- wireframes desktop e mobile criados;
- critérios de aceite visual criados;
- PR #1 mergeado com os documentos de Fase 4;
- PR #2 mergeado com a correção de governança: ChatGPT planeja, Codex executa.

### Fase 5

- stack técnica definida para o scaffold: Astro + TypeScript + CSS próprio com tokens + build estático;
- Next.js, Tailwind, React/Vue/Svelte, CMS, banco de dados e analytics ficam fora do scaffold inicial;
- arquitetura técnica registrada em `docs/fase5/00-arquitetura-tecnica-mvp.md`;
- plano do scaffold registrado em `docs/fase5/01-plano-scaffold-site.md`;
- prompt de execução registrado em `prompts/02-scaffold-astro-mvp.md`.

## Correção factual — Prefeitura de Mocajuba

A equipe validou diretamente que:

- Elieth Braga foi eleita prefeita de Mocajuba em 2016;
- assumiu o cargo em 2017;
- Cosme Macedo foi o vice-prefeito.

O marco poderá entrar no MVP. Permanecem pendentes apenas os detalhes oficiais da ficha eleitoral: partido, coligação, votação, percentual e datas completas do mandato.

## Posicionamento atual

> **Uma trajetória de serviço público ligada à educação, à gestão e à cidadania no Pará.**

A página será o ativo digital próprio de Elieth Braga: uma referência central para apresentar história, trajetória, áreas de atuação, conteúdos e canais oficiais.

## Formato recomendado para o MVP

- landing page institucional de página única;
- conteúdo predominantemente estático;
- responsiva e leve;
- navegação por âncoras;
- publicação inicial futura em subdomínio na VPS Linux;
- estrutura preparada para expansão.

## Estrutura do MVP

1. cabeçalho e navegação;
2. hero com nome, posicionamento e fotografia;
3. seção “Sobre Elieth”;
4. trajetória resumida, incluindo Mocajuba;
5. áreas de atuação;
6. destaques municipal e estadual;
7. conteúdos e redes oficiais;
8. galeria opcional com imagens autorizadas;
9. rodapé e identificação editorial.

## Stack definida para o scaffold

- Astro;
- TypeScript;
- CSS próprio com tokens;
- conteúdo desacoplado em `src/content/site.ts`;
- componentes Astro;
- build estático servido futuramente por Nginx na VPS.

## Base factual publicável

- nome civil: **Elieth de Fátima da Silva Braga**;
- nome público: **Elieth Braga**;
- eleita prefeita de Mocajuba em 2016;
- posse municipal em 2017;
- vice-prefeito Cosme Macedo;
- trajetória no serviço público paraense;
- exercício da titularidade da SEDUC em marcos confirmados de 2021 e 2023;
- passagem pela SEPLAD, confirmada com ressalva;
- exercício da titularidade da SEAC em setembro de 2025;
- links oficiais do Instagram e Facebook;
- participação na entrega da sede ampliada e modernizada da SEDUC no encerramento de seu ciclo na pasta.

## Diretrizes editoriais

- a primeira versão será pessoal, biográfica e institucional;
- não será apresentada como site de campanha;
- a pretensão de disputar vaga de deputada federal permanece fora do conteúdo público inicial;
- resultados institucionais não serão atribuídos exclusivamente a Elieth sem evidência;
- nenhuma imagem será reutilizada sem confirmação de origem e direito de uso;
- o vínculo visual com a administração estadual não poderá sugerir propriedade ou chancela oficial do Governo do Pará.

## Próxima execução

Usar `prompts/02-scaffold-astro-mvp.md` no Cursor/Codex em modo planejamento para gerar apenas o plano operacional do scaffold.

Depois, Eduardo deve colar o plano operacional aqui no ChatGPT para validação antes de autorizar a execução.

## Dependências que não bloqueiam o scaffold

- fotografia principal autorizada;
- confirmação de formação e carreira;
- seleção de realizações da gestão de Mocajuba;
- decisão sobre contato institucional;
- seleção final de mídias e respectivos direitos.
