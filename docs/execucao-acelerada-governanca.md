# Governança da execução acelerada

A execução acelerada é uma exceção controlada ao fluxo com plano operacional separado.

## Responsabilidades

### ChatGPT

- define se uma tarefa pode usar execução acelerada;
- escreve ou aprova o prompt único;
- revisa relatório, diff, screenshots e testes;
- conduz PR e merge no GitHub.

### Cursor/Codex

- executa somente o escopo do prompt;
- não decide novos caminhos;
- para se encontrar decisão não prevista;
- não commita sem validação.

### Eduardo

- executa localmente no Cursor;
- envia relatório e screenshots;
- faz commit/push apenas após validação;
- controla ambiente, credenciais e publicação.

## Critério central

Acelerar a execução não significa acelerar a decisão.

Toda decisão continua pertencendo ao ChatGPT/Eduardo e precisa estar documentada ou explicitamente autorizada no prompt.
