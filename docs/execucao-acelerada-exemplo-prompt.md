# Exemplo de prompt — Execução acelerada

Este modelo serve como referência para tarefas de implementação já suficientemente delimitadas.

```text
Leia integralmente antes de executar:

- AGENTS.md
- docs/execucao-acelerada.md
- docs/status.md
- docs/decisoes.md
- documentos da fase relacionada

Branch atual esperada:

feat/nome-da-tarefa

Objetivo:
Executar [descrever objetivo fechado] dentro do escopo já aprovado.

Escopo permitido:
- [item 1]
- [item 2]
- [item 3]

Arquivos que pode alterar:
- [arquivo 1]
- [arquivo 2]

Arquivos que não pode alterar:
- package.json
- package-lock.json
- docs/
- prompts/
- arquivos de configuração protegidos

Pode criar novos arquivos somente em:
- [pasta permitida]

Restrições obrigatórias:
- Não instalar dependências.
- Não alterar stack.
- Não alterar arquitetura fora do escopo.
- Não adicionar conteúdo não aprovado.
- Não adicionar imagens reais sem direito confirmado.
- Não adicionar conteúdo eleitoral.
- Não criar arquivos fora do escopo.
- Se surgir decisão não prevista, pare e reporte.

Comandos obrigatórios ao final:
- npm.cmd run check
- npm.cmd run build
- git status --short

Ao final, entregue:
1. resumo do que foi implementado;
2. arquivos criados/alterados;
3. comandos executados e resultados;
4. confirmação de restrições respeitadas;
5. pendências;
6. saída de git status --short.

Não faça commit.
```
