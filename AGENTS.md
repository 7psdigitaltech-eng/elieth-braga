# AGENTS.md — Projeto Elieth Braga

## Propósito

Este repositório contém a documentação, o conteúdo e o código da presença digital de Elieth Braga. O produto inicial é uma página pessoal, biográfica e institucional, e não um site de campanha.

## Leitura obrigatória antes de executar tarefas

1. `docs/status.md`
2. `docs/decisoes.md`
3. `docs/fase2/02-matriz-conteudo-publicavel.md`
4. `docs/fase3/00-estrategia-presenca-digital.md`
5. `docs/fase3/01-arquitetura-informacao-mvp.md`
6. `docs/fase3/02-escopo-mvp.md`
7. `docs/fase4/00-direcao-visual.md`
8. o prompt específico da tarefa em `prompts/`

Em caso de conflito, as decisões mais recentes em `docs/decisoes.md` prevalecem.

## Regras editoriais obrigatórias

- Não transformar informação pendente em fato.
- Não inserir pré-candidatura, partido, número, slogan, pedido de voto, apoio político ou conteúdo eleitoral sem autorização expressa e revisão jurídica.
- Não atribuir individualmente a Elieth resultados coletivos de governos, secretarias ou equipes sem evidência.
- Não inventar datas, números, cargos, formação, projetos, depoimentos ou citações.
- Não usar lorem ipsum em componentes apresentados para revisão; usar conteúdo real aprovado ou marcadores claramente identificados como provisórios.
- Não publicar dados pessoais desnecessários.
- Não reutilizar fotografias, vídeos, marcas ou textos sem origem e direito de uso registrados.

## Direção visual obrigatória

- Aparência institucional paraense, humana, contemporânea e serena.
- Usar a paleta definida em `docs/fase4/00-direcao-visual.md` como tokens provisórios.
- A identidade pública do Governo do Pará serve como referência cromática e cultural, não como autorização para copiar logotipo, brasão, assinatura oficial ou simular um portal governamental.
- Evitar aparência partidária, eleitoral, de comitê ou de material de campanha.
- O elemento visual de assinatura deve ser único e contido; não espalhar efeitos decorativos por toda a página.

## Qualidade de interface

- HTML semântico e hierarquia correta de títulos.
- Responsividade real, começando por celular.
- Contraste mínimo WCAG AA.
- Foco de teclado visível.
- Navegação por teclado.
- Respeitar `prefers-reduced-motion`.
- Textos alternativos úteis para imagens.
- Imagens com dimensões definidas, formatos modernos e carregamento adequado.
- Evitar dependências e JavaScript desnecessários.
- Priorizar desempenho, legibilidade, SEO e acessibilidade.

## Arquitetura e código

- Não escolher ou trocar framework sem registrar a decisão.
- Manter conteúdo, componentes e tokens visuais desacoplados.
- Criar componentes pequenos e com responsabilidade clara.
- Evitar duplicação, complexidade acidental e abstrações prematuras.
- Não adicionar dependência de produção sem justificar no pull request.
- Nunca incluir segredos, tokens, credenciais ou dados privados no repositório.

## Fluxo Git obrigatório

- Nunca trabalhar diretamente na `main`.
- Atualizar a `main` local antes de criar uma branch.
- Uma tarefa por branch e por pull request.
- Prefixos preferidos: `feat/`, `fix/`, `docs/`, `refactor/`, `chore/`.
- Usar commits pequenos e descritivos.
- Abrir pull request em modo draft enquanto a implementação estiver incompleta.
- O pull request deve informar: objetivo, arquivos alterados, decisões, testes executados, screenshots e pendências.
- Não fazer merge sem revisão.

## Verificações antes do pull request

Quando os scripts existirem, executar obrigatoriamente:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Também verificar manualmente:

- celular, tablet e desktop;
- teclado e estados de foco;
- redução de movimento;
- links externos;
- metadados e compartilhamento social;
- conteúdo factual contra a matriz publicável;
- ausência de conteúdo eleitoral não autorizado.

## Saída esperada do agente

Ao concluir uma tarefa, registrar:

1. resumo objetivo do que foi feito;
2. arquivos criados ou alterados;
3. comandos e testes executados;
4. decisões ou suposições adotadas;
5. limitações e pendências;
6. URL ou número do pull request, quando disponível.
