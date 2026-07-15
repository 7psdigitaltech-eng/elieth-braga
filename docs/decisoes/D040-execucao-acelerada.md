# D040 — Conduta de execução acelerada

- **Data:** 2026-07-14
- **Status:** aprovada

## Decisão

Permitir execução acelerada em tarefas de implementação quando a documentação do projeto já tiver definido stack, direção visual, conteúdo publicável, arquitetura, arquivos permitidos/proibidos e guardrails editoriais/técnicos.

Nesse modo, o ChatGPT pode entregar um prompt único de execução direta para o Cursor/Codex, sem exigir uma etapa separada de plano operacional antes da edição dos arquivos.

## Motivo

Após a conclusão da governança, pesquisa, estratégia, direção visual, arquitetura técnica, scaffold e fundação visual, algumas tarefas passam a ter escopo suficientemente fechado para execução direta.

A execução acelerada reduz atrito operacional e retrabalho de comunicação quando o risco de decisão estratégica pelo Codex está controlado por documentação e prompt fechado.

## Limites

A execução acelerada não autoriza o Codex a decidir:

- stack;
- arquitetura;
- conteúdo estratégico;
- direção visual;
- escopo;
- governança;
- priorização;
- publicação;
- infraestrutura.

Se surgir decisão não prevista, o Codex deve parar e reportar.

## Quando não usar

Manter o ciclo com plano operacional separado para tarefas que envolvam:

- dependências;
- `package.json` ou lockfile;
- deploy, CI/CD, VPS, domínio ou credenciais;
- fatos novos ou sensíveis;
- imagens reais e direitos autorais;
- conteúdo político-eleitoral;
- mudanças em documentação de governança;
- qualquer mudança que exija escolha de produto, design, stack ou escopo.

## Documento de referência

As regras completas ficam em:

```text
docs/execucao-acelerada.md
```
