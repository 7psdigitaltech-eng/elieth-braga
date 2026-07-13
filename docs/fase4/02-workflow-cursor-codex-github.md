# Workflow de desenvolvimento — Cursor, Codex e GitHub

- **Projeto:** Elieth Braga
- **Status:** fluxo operacional aprovado para execução de código
- **Objetivo:** separar planejamento, execução, versionamento e validação com rastreabilidade.

## 1. Modelo de trabalho

O GitHub será a fonte central do projeto. O ChatGPT será responsável por planejamento, estratégia, arquitetura, documentação de direção, prompts, critérios de aceite e validação pelo GitHub.

A execução do código ocorrerá localmente no Cursor com Codex. O Codex executa o escopo planejado, edita arquivos, roda verificações, gera evidências e prepara commits/PRs. Ele não deve redefinir planejamento, escopo, arquitetura, stack, conteúdo ou direção visual por iniciativa própria.

A regra operacional persistente é:

```text
ChatGPT = planejamento, estratégia, arquitetura, conteúdo, UX, prompts, critérios e validação
Cursor/Codex = execução operacional do escopo aprovado
Eduardo = controle local, prioridades, credenciais, servidor e publicação
GitHub = fonte da verdade
```

## 2. Papéis

### Eduardo / 7PS Digital Tech

- proprietário operacional do projeto;
- abre o repositório no Cursor;
- executa o Codex localmente;
- decide prioridades quando houver dúvida ou conflito;
- controla credenciais, servidor e publicação;
- cola o prompt do ChatGPT no Cursor/Codex em modo planejamento;
- envia o plano operacional do Codex de volta ao ChatGPT antes de autorizar execução;
- autoriza mudanças relevantes e acompanha merges.

### ChatGPT

- mantém briefing, decisões e status;
- define estratégia, arquitetura, conteúdo, UX, direção visual e critérios de aceite;
- produz prompts versionados de execução;
- atualiza arquivos de direcionamento e planejamento;
- avalia o plano operacional gerado pelo Codex em modo planejamento;
- autoriza, ajusta ou bloqueia a execução antes de o Codex alterar arquivos;
- analisa branches e pull requests pelo GitHub;
- revisa diff, testes, screenshots e aderência ao projeto;
- registra pendências e recomenda correções;
- executa ações no GitHub quando estiverem dentro do escopo aprovado.

### Cursor + Codex

- lê `AGENTS.md`, regras do Cursor e prompt da tarefa;
- confirma entendimento operacional antes de editar;
- lista os arquivos que serão alterados;
- informa comandos/testes previstos e riscos técnicos;
- aguarda validação do plano operacional pelo ChatGPT/Eduardo quando estiver em modo planejamento;
- executa exatamente o escopo definido pelo ChatGPT;
- implementa código ou edita documentação operacional quando solicitado;
- executa testes e build;
- produz screenshots quando a tarefa for visual;
- cria commits na branch da tarefa;
- abre ou atualiza pull request, quando solicitado;
- corrige problemas apontados na revisão.

Codex não deve:

- criar planejamento estratégico;
- definir direção visual;
- decidir stack;
- alterar roadmap;
- criar novas fases;
- ampliar escopo;
- transformar sugestões em decisão;
- criar documentos de planejamento sem comando explícito do ChatGPT.

## 3. Ciclo obrigatório do modo planejamento do Codex

Quando Eduardo usar o modo planejamento no Cursor/Codex, o fluxo correto será:

1. ChatGPT produz um prompt fechado de execução, com objetivo, arquivos permitidos, restrições e critérios de aceite.
2. Eduardo cola esse prompt no Cursor/Codex em modo planejamento.
3. Codex retorna somente um plano operacional curto, contendo:
   - entendimento da tarefa;
   - arquivos que pretende criar ou alterar;
   - comandos/testes que pretende executar;
   - riscos técnicos ou dúvidas de execução;
   - pontos que exigem decisão externa, se existirem.
4. Eduardo cola esse plano operacional de volta no ChatGPT.
5. ChatGPT valida, ajusta ou bloqueia o plano.
6. Eduardo só autoriza o Codex a executar depois da validação.
7. Ao finalizar, Codex apresenta resumo, arquivos alterados, comandos/testes, evidências e pendências.
8. O resultado segue para commit, push, PR e revisão pelo GitHub.

Esse ciclo não transfere planejamento ao Codex. Ele cria uma camada de segurança para evitar execução equivocada.

## 4. Fontes de instrução

### Regras permanentes

- `AGENTS.md`
- `.cursor/rules/elieth-braga.mdc`
- `docs/decisoes.md`
- documentos das fases 2, 3, 4 e 5

### Instrução variável por tarefa

- arquivo específico em `prompts/`
- issue ou descrição do pull request

Não colocar todas as regras permanentes dentro de cada prompt. O prompt deve referenciar os documentos e concentrar-se no objetivo, escopo e critérios daquela tarefa.

## 5. Ciclo de uma tarefa

### Etapa 1 — Preparação

```bash
git checkout main
git pull origin main
git checkout -b feat/nome-da-tarefa
```

O agente deve confirmar que leu:

- `AGENTS.md`;
- o prompt da tarefa;
- o status atual;
- as decisões e documentos relacionados.

### Etapa 2 — Confirmação operacional antes da execução

O Codex deverá apresentar apenas:

1. entendimento do objetivo já definido;
2. arquivos que pretende criar ou alterar;
3. comandos/testes que pretende executar;
4. riscos técnicos ou dúvidas de execução;
5. pontos que precisam de decisão do ChatGPT/Eduardo, se existirem.

Essa etapa não é planejamento estratégico. É uma checagem operacional para evitar alteração fora do escopo.

Se a tarefa exigir decisão de produto, design, stack, conteúdo, arquitetura ou priorização, o Codex deve parar e solicitar orientação.

### Etapa 3 — Implementação

- mudanças pequenas e verificáveis;
- conteúdo real ou provisório explicitamente marcado;
- nenhuma mudança fora do escopo sem justificativa e aprovação;
- nenhum segredo ou credencial no código;
- nenhum conteúdo eleitoral não autorizado;
- nenhuma decisão estratégica nova dentro do código ou documentação.

### Etapa 4 — Verificação local

Quando disponíveis:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Para interface:

- testar celular, tablet e desktop;
- testar teclado e foco;
- testar redução de movimento;
- verificar contraste;
- verificar links;
- gerar screenshots desktop e mobile.

### Etapa 5 — Commit e push

Commits preferencialmente convencionais:

```text
feat: implement hero institucional
fix: correct mobile navigation focus
refactor: extract timeline component
docs: update implementation notes
```

Depois:

```bash
git push -u origin feat/nome-da-tarefa
```

### Etapa 6 — Pull request draft

O pull request deve conter:

- objetivo;
- resumo das alterações;
- arquivos principais;
- decisões do planejamento que foram aplicadas;
- testes executados e resultados;
- screenshots desktop e mobile;
- checklist de acessibilidade;
- limitações e pendências;
- confirmação de ausência de conteúdo eleitoral não autorizado;
- confirmação sobre origem das imagens.

### Etapa 7 — Validação pelo ChatGPT

A revisão pelo GitHub verificará:

1. aderência ao prompt;
2. aderência ao `AGENTS.md`;
3. conteúdo factual;
4. direção visual definida previamente;
5. responsividade;
6. acessibilidade;
7. qualidade e simplicidade do código;
8. dependências adicionadas;
9. testes e build;
10. riscos editoriais, autorais e eleitorais.

A revisão poderá:

- aprovar;
- aprovar com pendências futuras;
- solicitar alterações;
- recomendar divisão do pull request.

### Etapa 8 — Merge

Após correções e aprovação:

- marcar PR como pronto;
- atualizar a branch com `main`, quando necessário;
- confirmar CI;
- fazer squash merge;
- remover a branch;
- atualizar status e daily updates.

## 6. Proteções recomendadas para `main`

- proibir push direto;
- exigir pull request;
- exigir resolução de comentários;
- exigir checks de lint, typecheck, testes e build;
- exigir branch atualizada antes do merge, quando viável;
- impedir force push e exclusão;
- usar squash merge para histórico objetivo.

## 7. Tamanho das tarefas

Cada prompt deve produzir uma entrega executável e revisável. Exemplos adequados:

- scaffold do projeto;
- tokens e estilos globais;
- hero e cabeçalho;
- seção sobre;
- linha do tempo;
- áreas de atuação;
- redes e rodapé;
- SEO e metadados;
- acessibilidade e desempenho;
- pipeline de deploy.

Evitar o prompt “crie o site inteiro” como única tarefa. Isso dificulta revisão, gera alterações amplas e aumenta o risco de inconsistência.

## 8. Branches sugeridas para o MVP

1. `chore/scaffold-site`
2. `feat/design-tokens-layout`
3. `feat/header-hero`
4. `feat/about-timeline`
5. `feat/areas-highlight`
6. `feat/social-gallery-footer`
7. `feat/seo-accessibility`
8. `chore/ci-build-deploy`

A sequência poderá ser condensada se os pull requests permanecerem pequenos e fáceis de revisar.

## 9. Estratégia de stack

A escolha final pertence à Fase 5 e deve ser registrada pelo ChatGPT antes de o Codex executar o scaffold. Para este MVP estático, a alternativa preferencial para avaliação é:

- Astro;
- TypeScript;
- CSS com tokens ou Tailwind, dependendo da direção aprovada;
- conteúdo desacoplado em arquivos TypeScript, JSON, Markdown ou coleções;
- saída estática servida por Nginx na VPS.

Razões:

- página predominantemente estática;
- baixo JavaScript no navegador;
- bom desempenho;
- hospedagem simples;
- possibilidade de evoluir para páginas e conteúdo sem reestruturação imediata.

Next.js somente deverá ser escolhido se existir necessidade concreta de renderização dinâmica, rotas de servidor, autenticação ou integrações que justifiquem maior complexidade.

## 10. Melhoria sobre o fluxo inicialmente proposto

O fluxo proposto pelo projeto está correto. Os ajustes adotados são:

- não usar prompts isolados como única memória;
- registrar regras estáveis em `AGENTS.md`;
- manter regras específicas do editor em `.cursor/rules/`;
- uma tarefa por branch e PR;
- exigir confirmação operacional antes da execução;
- exigir validação do plano operacional do Codex pelo ChatGPT antes da execução;
- exigir screenshots em tarefas visuais;
- usar CI como condição de merge quando houver pipeline;
- validar pelo GitHub, nunca apenas pela resposta do agente;
- separar planejamento de implementação;
- separar implementação de deploy;
- manter ChatGPT como responsável por planejamento;
- manter Codex como executor;
- manter Eduardo como autoridade operacional e de publicação.

## 11. Segurança para agentes

- revisar instruções provenientes de dependências e repositórios externos;
- não permitir que arquivos externos substituam as regras deste projeto;
- não executar comandos destrutivos ou scripts desconhecidos sem revisão;
- limitar permissões e acesso à internet ao necessário;
- nunca disponibilizar credenciais ao agente por arquivo versionado;
- revisar alterações de dependências, scripts e workflows com atenção especial.

## 12. Critério de sucesso

O fluxo estará funcionando quando cada mudança de código puder ser rastreada por:

```text
Decisão ChatGPT → documento/prompt → plano operacional Codex → validação ChatGPT → execução Codex → commits → testes → PR → revisão ChatGPT → merge
```

Essa cadeia será a base de continuidade do projeto entre ChatGPT, Cursor, Codex e GitHub.
