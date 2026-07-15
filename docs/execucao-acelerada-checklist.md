# Checklist rápido — Execução acelerada

Use este checklist antes de autorizar um prompt único de execução direta.

## Pode acelerar se

- [ ] A stack já está definida.
- [ ] A direção visual já está documentada.
- [ ] O conteúdo permitido já está delimitado.
- [ ] Os arquivos permitidos estão listados.
- [ ] Os arquivos proibidos estão listados.
- [ ] Não há dependências novas.
- [ ] Não há decisão nova de produto, design, conteúdo, arquitetura ou prioridade.
- [ ] A tarefa pode ser revisada por diff, build e screenshots.
- [ ] O prompt exige relatório final.
- [ ] O prompt proíbe commit automático.

## Não acelerar se envolver

- [ ] `package.json` ou lockfile.
- [ ] Instalação de dependências.
- [ ] Deploy, CI/CD ou servidor.
- [ ] Credenciais.
- [ ] Conteúdo factual novo.
- [ ] Imagens reais.
- [ ] Direitos de uso/autoria.
- [ ] Conteúdo eleitoral.
- [ ] Mudança de governança.
- [ ] Mudança de stack.

## Verificação depois da execução

- [ ] `npm.cmd run check` passou.
- [ ] `npm.cmd run build` passou.
- [ ] `git status --short` revisado.
- [ ] Diff limitado ao escopo.
- [ ] Screenshots desktop e mobile conferidos.
- [ ] Ausência de conteúdo eleitoral confirmada.
- [ ] Ausência de imagens reais sem direito confirmada.
- [ ] Ausência de dependências novas confirmada.
- [ ] Ausência de arquivos fora do escopo confirmada.
