# Execução acelerada — Projeto Elieth Braga

## Objetivo

Este documento registra a conduta de execução acelerada para o projeto Elieth Braga.

A regra geral continua sendo: ChatGPT planeja, Cursor/Codex executa, Eduardo controla ambiente/publicação e GitHub é a fonte da verdade.

A execução acelerada não substitui a governança. Ela apenas permite condensar etapas operacionais quando a documentação, a arquitetura, o conteúdo permitido, a direção visual e os guardrails já estiverem suficientemente definidos.

## Quando usar execução acelerada

A execução acelerada pode ser usada quando todas as condições abaixo forem verdadeiras:

1. a stack já estiver definida e documentada;
2. a direção visual já estiver documentada;
3. o conteúdo publicável já estiver delimitado;
4. os arquivos permitidos estiverem explicitamente listados no prompt;
5. os arquivos proibidos também estiverem listados;
6. as restrições editoriais, eleitorais, técnicas e autorais estiverem claras;
7. a tarefa puder ser revisada por diff, build e screenshots;
8. não houver decisão nova de produto, stack, conteúdo, design, arquitetura, governança ou prioridade.

Nesse modo, o prompt pode mandar o Codex executar diretamente, sem retornar antes um plano operacional separado.

## Quando manter o fluxo com plano operacional

O fluxo tradicional continua obrigatório quando a tarefa envolver:

- criação ou troca de stack;
- instalação de dependências;
- mudanças em `package.json`, lockfile, CI/CD ou deploy;
- infraestrutura, VPS, domínio, DNS, Nginx, SSL ou credenciais;
- conteúdo factual novo ou sensível;
- imagens reais, vídeos, marcas, autoria ou direitos de uso;
- conteúdo político-eleitoral, pré-candidatura, partido, número, slogan, pedido de voto ou promessa;
- mudança de direção visual;
- nova arquitetura de informação;
- alteração em documentos de governança, decisões, prompts ou regras permanentes;
- qualquer tarefa em que o Codex precise escolher caminho, escopo ou prioridade.

Nesses casos, o ciclo permanece:

```text
ChatGPT cria prompt fechado → Eduardo cola no Codex em modo planejamento → Codex devolve plano operacional → ChatGPT valida → Codex executa
```

## Escopo adequado para prompt único

Um prompt único acelerado pode consolidar várias subetapas de implementação quando elas pertencem ao mesmo escopo revisável.

Exemplo permitido para este projeto:

```text
Implementar o MVP completo da landing page estática com header, hero, sobre, trajetória, áreas de atuação, destaques, redes, galeria placeholder, footer, SEO básico, acessibilidade e responsividade.
```

Esse tipo de execução só é aceitável se o prompt também travar:

- arquivos permitidos;
- arquivos proibidos;
- conteúdo autorizado;
- componentes que podem ser criados;
- restrições editoriais e eleitorais;
- ausência de novas dependências;
- comandos de verificação;
- exigência de relatório final e screenshots.

## O que não entra em prompt acelerado

Mesmo em modo acelerado, devem ficar fora:

- deploy;
- CI/CD;
- configuração de servidor;
- domínio;
- analytics;
- CMS;
- banco de dados;
- formulários;
- scripts externos;
- imagens reais sem direito confirmado;
- conteúdo eleitoral;
- decisões estratégicas novas.

Esses temas devem ser tratados em branches e PRs próprios.

## Guardrails mínimos do prompt acelerado

Todo prompt acelerado deve conter, no mínimo:

1. documentos obrigatórios para leitura;
2. branch atual esperada;
3. objetivo fechado;
4. escopo permitido;
5. arquivos que podem ser alterados;
6. arquivos que não podem ser alterados;
7. componentes que podem ser criados, se aplicável;
8. restrições técnicas;
9. restrições editoriais e eleitorais;
10. comandos obrigatórios de verificação;
11. instrução para não commitar;
12. relatório final exigido.

## Revisão após execução acelerada

Após uma execução acelerada, a revisão deve ser mais rigorosa do que em uma tarefa pequena.

Checklist obrigatório:

- `npm.cmd run check`;
- `npm.cmd run build`;
- `git status --short`;
- diff limitado ao escopo;
- screenshots desktop e mobile;
- revisão visual;
- revisão factual contra a matriz publicável;
- revisão de acessibilidade básica;
- ausência de Tailwind ou dependências novas, salvo autorização explícita;
- ausência de imagens reais sem direito;
- ausência de conteúdo eleitoral;
- ausência de arquivos fora do escopo.

Se a execução ficar grande demais, a revisão pode solicitar divisão antes do commit ou antes do merge.

## Regra de autoridade

A execução acelerada não autoriza o Codex a decidir. Ela apenas autoriza o Codex a executar mais passos dentro de um escopo já decidido pelo ChatGPT e por Eduardo.

Se o Codex encontrar qualquer necessidade de decisão não prevista, deve parar e reportar.
