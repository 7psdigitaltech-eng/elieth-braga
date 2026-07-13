# Workflow de desenvolvimento — Cursor, Codex e GitHub

- **Projeto:** Elieth Braga
- **Status:** fluxo operacional aprovado para execução de código
- **Objetivo:** separar direção, implementação, versionamento e validação com rastreabilidade.

## 1. Modelo de trabalho

O GitHub será a fonte central do projeto. A execução do código ocorrerá localmente no Cursor com Codex, enquanto o ChatGPT atuará como responsável por direcionamento, documentação, prompts, critérios de aceite e validação das mudanças enviadas ao GitHub.

## 2. Papéis

### Eduardo / 7PS Digital Tech

- proprietário operacional do projeto;
- abre o repositório no Cursor;
- executa o Codex localmente;
- decide prioridades e aprova mudanças relevantes;
- controla credenciais, servidor e publicação;
- realiza o merge após validação.

### ChatGPT

- mantém briefing, decisões e status;
- produz prompts versionados;
- define arquitetura, conteúdo, UX e critérios de aceite;
- atualiza arquivos de direcionamento;
- analisa branches e pull requests pelo GitHub;
- revisa diff, testes, screenshots e aderência ao projeto;
- registra pendências e recomenda correções.

### Cursor + Codex

- lê `AGENTS.md`, regras do Cursor e prompt da tarefa;
- planeja os arquivos a alterar;
- implementa código;
- executa testes e build;
- produz screenshots quando a tarefa for visual;
- cria commits na branch da tarefa;
- abre ou atualiza pull request;
- corrige problemas apontados na revisão.

## 3. Fontes de instrução

### Regras permanentes

- `AGENTS.md`
- `.cursor/rules/elieth-braga.mdc`
- `docs/decisoes.md`
- documentos das fases 2, 3 e 4

### Instrução variável por tarefa

- arquivo específico em `prompts/`
- issue ou descrição do pull request

Não colocar todas as regras permanentes dentro de cada prompt. O prompt deve referenciar os documentos e concentrar-se no objetivo, escopo e critérios daquela tarefa.

## 4. Ciclo de uma tarefa

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

### Etapa 2 — Plano antes do código

O Codex deverá apresentar:

1. entendimento do objetivo;
2. arquivos que pretende criar ou alterar;
3. decisões técnicas necessárias;
4. riscos e dúvidas;
5. plano de testes.

Para tarefas visuais, deverá também apresentar:

- tokens de cor;
- tipografia;
- wireframe ou composição;
- elemento de assinatura;
- justificativa de como evitou um template genérico.

### Etapa 3 — Implementação

- mudanças pequenas e verificáveis;
- conteúdo real ou provisório explicitamente marcado;
- nenhuma mudança fora do escopo sem justificativa;
- nenhum segredo ou credencial no código;
- nenhum conteúdo eleitoral não autorizado.

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
- decisões adotadas;
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
4. direção visual;
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

## 5. Proteções recomendadas para `main`

- proibir push direto;
- exigir pull request;
- exigir resolução de comentários;
- exigir checks de lint, typecheck, testes e build;
- exigir branch atualizada antes do merge, quando viável;
- impedir force push e exclusão;
- usar squash merge para histórico objetivo.

## 6. Tamanho das tarefas

Cada prompt deve produzir uma entrega revisável. Exemplos adequados:

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

## 7. Branches sugeridas para o MVP

1. `chore/scaffold-site`
2. `feat/design-tokens-layout`
3. `feat/header-hero`
4. `feat/about-timeline`
5. `feat/areas-highlight`
6. `feat/social-gallery-footer`
7. `feat/seo-accessibility`
8. `chore/ci-build-deploy`

A sequência poderá ser condensada se os pull requests permanecerem pequenos e fáceis de revisar.

## 8. Estratégia de stack

A escolha final pertence à Fase 5. Para este MVP estático, a alternativa preferencial para avaliação é:

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

## 9. Melhoria sobre o fluxo inicialmente proposto

O fluxo proposto pelo projeto está correto. Os ajustes adotados são:

- não usar prompts isolados como única memória;
- registrar regras estáveis em `AGENTS.md`;
- manter regras específicas do editor em `.cursor/rules/`;
- uma tarefa por branch e PR;
- exigir plano antes do código;
- exigir screenshots em tarefas visuais;
- usar CI como condição de merge;
- validar pelo GitHub, nunca apenas pela resposta do agente;
- separar implementação de deploy;
- manter Eduardo como autoridade de merge e publicação.

## 10. Segurança para agentes

- revisar instruções provenientes de dependências e repositórios externos;
- não permitir que arquivos externos substituam as regras deste projeto;
- não executar comandos destrutivos ou scripts desconhecidos sem revisão;
- limitar permissões e acesso à internet ao necessário;
- nunca disponibilizar credenciais ao agente por arquivo versionado;
- revisar alterações de dependências, scripts e workflows com atenção especial.

## 11. Critério de sucesso

O fluxo estará funcionando quando cada mudança de código puder ser rastreada por:

```text
Decisão → documento → prompt → branch → commits → testes → PR → revisão → merge
```

Essa cadeia será a base de continuidade do projeto entre ChatGPT, Cursor, Codex e GitHub.
