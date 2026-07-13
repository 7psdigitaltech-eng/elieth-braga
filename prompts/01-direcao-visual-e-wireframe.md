# Prompt 01 — Direção visual e wireframe do MVP

## Contexto

Você está trabalhando no repositório `7psdigitaltech-eng/elieth-braga`.

Antes de começar, leia obrigatoriamente:

- `AGENTS.md`
- `.cursor/rules/elieth-braga.mdc`
- `docs/status.md`
- `docs/decisoes.md`
- `docs/fase2/01-biografia-base-mvp.md`
- `docs/fase2/02-matriz-conteudo-publicavel.md`
- `docs/fase3/00-estrategia-presenca-digital.md`
- `docs/fase3/01-arquitetura-informacao-mvp.md`
- `docs/fase3/02-escopo-mvp.md`
- `docs/fase4/00-direcao-visual.md`
- `docs/fase4/01-referencias-github-design.md`

Use como referência principal de processo a skill `frontend-design` do repositório `anthropics/skills`, sem copiar código ou identidade visual.

## Objetivo

Produzir a proposta visual e os wireframes de alta fidelidade conceitual para a landing page institucional de Elieth Braga, antes de escrever o código definitivo.

A página deve ser pessoal, biográfica e institucional. Não deve parecer portal governamental, site partidário ou material de campanha.

## Entregas obrigatórias

Crie os seguintes arquivos:

```text
docs/fase4/03-plano-visual-codex.md
docs/fase4/04-wireframe-desktop.md
docs/fase4/05-wireframe-mobile.md
docs/fase4/06-criterios-de-aceite-visual.md
```

### `03-plano-visual-codex.md`

Incluir:

1. resumo do sujeito, público e trabalho principal da página;
2. conceito visual em uma frase;
3. paleta com 4 a 7 tokens e justificativa;
4. papéis tipográficos;
5. escala de títulos e corpo;
6. grid, largura de conteúdo e espaçamento;
7. comportamento das seções;
8. assinatura visual única;
9. tratamento das fotografias;
10. proposta de movimento;
11. acessibilidade;
12. autocrítica: o que parecia genérico e foi alterado;
13. três riscos visuais e como evitá-los.

### Wireframes

Representar desktop e mobile em Markdown com diagramas ASCII claros.

Cada wireframe deve mostrar:

- cabeçalho;
- hero;
- sobre;
- trajetória, incluindo eleição para a Prefeitura de Mocajuba em 2016 e posse em 2017;
- áreas de atuação;
- destaque institucional;
- redes oficiais;
- galeria opcional;
- rodapé.

Indicar:

- hierarquia;
- ordem de leitura;
- CTAs;
- posição de imagens;
- comportamento responsivo;
- pontos de navegação por âncora.

### Critérios de aceite

Criar checklist objetivo para validar:

- aderência ao posicionamento;
- distinção entre página pessoal e portal oficial;
- ausência de estética eleitoral;
- uso correto da paleta;
- legibilidade;
- responsividade;
- acessibilidade;
- coerência do conteúdo;
- presença de uma assinatura visual própria;
- viabilidade de implementação.

## Regras visuais

- Usar os tokens provisórios definidos em `docs/fase4/00-direcao-visual.md`.
- O vermelho deve ser assinatura e CTA, não fundo dominante em todas as seções.
- A diagonal inspirada no Pará pode aparecer como elemento principal único.
- Não usar brasão, logotipo ou assinatura oficial do Governo do Pará.
- Não usar número eleitoral, partido, slogan, pedido de apoio ou imagem de campanha.
- Não criar layout genérico de cards repetitivos.
- Não usar gradientes, estrelas ou mapas sem função narrativa.
- Não inventar imagens: indicar apenas `FOTO PRINCIPAL AUTORIZADA`, `FOTO HISTÓRICA AUTORIZADA` ou equivalente.

## Processo

1. Apresente primeiro um plano resumido.
2. Não altere código de aplicação nesta tarefa.
3. Produza os quatro documentos.
4. Faça uma revisão interna contra o briefing.
5. Informe arquivos alterados, decisões, limitações e pontos que exigem validação humana.

## Branch sugerida

```text
docs/fase4-wireframes
```

## Critério de conclusão

A tarefa termina quando os documentos permitirem que outra pessoa ou agente implemente a interface sem precisar inventar estrutura, identidade, hierarquia ou comportamento responsivo.
