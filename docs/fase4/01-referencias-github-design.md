# Referências GitHub para design e estrutura de página

- **Data da avaliação:** 2026-07-12
- **Objetivo:** selecionar referências capazes de orientar design, componentes, acessibilidade e revisão por agentes de código.

## 1. Critérios utilizados

Os repositórios foram avaliados por:

- reconhecimento e adoção pública;
- atualização recente;
- qualidade das instruções;
- utilidade para agentes de IA;
- aplicação em landing pages e sites institucionais;
- acessibilidade, desempenho e responsividade;
- capacidade de evitar visual genérico;
- compatibilidade conceitual com Cursor e Codex.

A quantidade de estrelas é apenas um sinal de adoção, não uma garantia isolada de adequação.

## 2. Cinco referências selecionadas

| Repositório | Adoção observada | Melhor uso no projeto | Pontos fortes | Limitação |
|---|---:|---|---|---|
| `anthropics/skills` | cerca de 161 mil estrelas | direção visual e processo criativo | skill `frontend-design`; design baseado no sujeito; hero como tese; tipografia deliberada; assinatura visual; autocrítica antes de codificar | não é um sistema completo de componentes nem um checklist técnico exaustivo |
| `shadcn-ui/ui` | cerca de 119 mil estrelas | referência para componentes acessíveis e customizáveis | código aberto, componentes adaptáveis, boa estrutura e integração com ecossistemas modernos | usar sem personalização pode produzir aparência repetitiva; não deve definir a identidade da página |
| `thedaviddias/Front-End-Checklist` | cerca de 73 mil estrelas | auditoria antes de aprovação e lançamento | centenas de regras para HTML, CSS, acessibilidade, SEO, desempenho, segurança, imagens e privacidade; preparado para agentes e MCP | é sistema de verificação, não direção estética |
| `vercel-labs/agent-skills` | cerca de 29 mil estrelas | revisão de UI e desempenho durante implementação | skills de boas práticas React, composição e auditoria de design; regras priorizadas por impacto | parte do conteúdo é mais útil quando React/Next.js estiverem na stack |
| `alexpate/awesome-design-systems` | cerca de 25 mil estrelas | repertório e comparação de design systems | reúne sistemas com componentes, voz, tom, kits e código; amplia referências sem copiar um único produto | coleção curada; exige seleção e interpretação, não oferece processo de execução único |

## 3. Referência principal escolhida

### `anthropics/skills` — `skills/frontend-design/SKILL.md`

Será a referência principal para a **direção visual e o processo de design**.

### Motivos

1. começa pelo sujeito, público e função da página;
2. exige que o hero funcione como tese, e não como cabeçalho genérico;
3. trata tipografia como parte da identidade;
4. usa estrutura para comunicar informação real;
5. recomenda uma assinatura visual única e contida;
6. combate padrões repetitivos de interfaces geradas por IA;
7. separa planejamento, crítica, implementação e nova crítica;
8. exige responsividade, foco visível e respeito à redução de movimento.

### Aplicação no projeto

O Cursor/Codex deverá produzir, antes do código:

- um plano de cores com tokens;
- papéis tipográficos;
- conceito de layout;
- wireframe em texto ou imagem;
- uma assinatura visual justificável;
- uma autocrítica indicando o que foi alterado para evitar resultado genérico.

Somente depois dessa validação deverá iniciar a implementação.

## 4. Referências complementares obrigatórias

A escolha de uma referência principal não exclui verificações especializadas.

### Durante a implementação

Usar os princípios de:

- `vercel-labs/agent-skills`, especialmente auditoria de interface, acessibilidade, desempenho e composição;
- `shadcn-ui/ui`, somente para padrões de componentes necessários e profundamente personalizados.

### Antes de aprovar o pull request

Executar uma revisão baseada no:

- `thedaviddias/Front-End-Checklist`.

Prioridades mínimas:

- HTML semântico;
- acessibilidade;
- SEO;
- desempenho;
- imagens;
- segurança;
- privacidade;
- responsividade.

### Para repertório

Consultar `alexpate/awesome-design-systems` apenas para ampliar referências e comparar decisões, sem copiar uma identidade pronta.

## 5. O que não deve acontecer

- copiar código, imagem ou identidade sem verificar licença;
- instalar componentes apenas porque estão disponíveis;
- usar shadcn/ui como estética padrão;
- produzir dashboard, cards e gradientes sem relação com a narrativa;
- transformar número de estrelas em critério único;
- misturar regras de vários repositórios sem hierarquia;
- deixar o agente escolher estética sem consultar o briefing do projeto.

## 6. Hierarquia adotada

1. briefing, conteúdo e decisões do próprio projeto;
2. `anthropics/skills/frontend-design` para processo visual;
3. direção visual registrada em `docs/fase4/00-direcao-visual.md`;
4. Vercel e shadcn/ui para implementação e componentes;
5. Front-End Checklist para auditoria;
6. awesome-design-systems para repertório.

O projeto nunca deverá ser moldado para se adequar a uma referência externa. As referências existem para elevar a execução do briefing de Elieth Braga.
