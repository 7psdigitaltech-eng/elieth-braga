# Modo de uso — Execução acelerada

## Passo 1 — Atualizar main local

```powershell
git checkout main
git pull origin main
```

## Passo 2 — Criar branch da tarefa

```powershell
git checkout -b feat/homepage-mvp
```

## Passo 3 — Rodar prompt único no Cursor/Codex

Usar prompt fechado pelo ChatGPT. O prompt deve mandar executar diretamente, mas com limites claros.

## Passo 4 — Revisar antes do commit

```powershell
npm.cmd run check
npm.cmd run build
git status --short
git diff --name-only
```

Enviar relatório e screenshots para o ChatGPT.

## Passo 5 — Commit somente após validação

```powershell
git add <arquivos-aprovados>
git commit -m "feat: implement homepage mvp"
git push -u origin feat/homepage-mvp
```

## Passo 6 — GitHub

ChatGPT cria/revisa o PR, valida o diff e faz merge quando aprovado.
