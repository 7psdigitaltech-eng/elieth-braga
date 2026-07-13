# Status — Projeto Elieth Braga

## Status atual

- **Fases concluídas:**
  - Fase 0 — Governança e planejamento
  - Fase 1 — Varredura pública e inventário de fontes, encerrada pelo critério 80/20
  - Fase 2 — Verificação e consolidação em formato MVP
  - Fase 3 — Estratégia da presença digital
- **Fase atual:** Fase 4 — Conteúdo, identidade e experiência visual
- **Situação:** trajetória de Mocajuba corrigida; direção visual, referências GitHub e workflow Cursor/Codex/GitHub definidos
- **Última atualização:** 2026-07-12

## Entregas concluídas

### Pesquisa e consolidação

- inventário de fontes e linha do tempo factual;
- três relatórios de varredura;
- perfil factual consolidado;
- registro de divergências;
- índice inicial de canais e mídias;
- estratégia 80/20 e checklist de validação direta;
- dossiê factual mínimo do MVP;
- biografia-base em versões curta, intermediária e expandida;
- matriz de conteúdo publicável;
- matriz inicial de realizações e evidências.

### Estratégia da página

- posicionamento central definido;
- proposta de valor da página definida;
- públicos prioritários organizados;
- tom de voz e limites editoriais definidos;
- pilares de mensagem definidos;
- chamadas para ação do MVP definidas;
- arquitetura de informação de página única definida;
- escopo funcional do MVP definido;
- critérios de aceite e dependências registrados.

### Fase 4

- direção visual inicial registrada;
- paleta digital provisória inspirada na identidade pública do Pará;
- conceito da diagonal paraense definido como assinatura visual;
- cinco repositórios GitHub avaliados;
- `anthropics/skills` escolhido como referência principal de processo visual;
- Vercel e Front-End Checklist definidos como camadas de auditoria;
- `AGENTS.md` criado para instruções permanentes do Codex;
- regra permanente do Cursor criada em `.cursor/rules/`;
- workflow de branches, pull requests, testes e revisão documentado;
- primeiro prompt versionado da Fase 4 criado.

## Correção factual — Prefeitura de Mocajuba

A equipe validou diretamente que:

- Elieth Braga foi eleita prefeita de Mocajuba em 2016;
- assumiu o cargo em 2017;
- Cosme Macedo foi o vice-prefeito.

O marco poderá entrar no MVP. Permanecem pendentes apenas os detalhes oficiais da ficha eleitoral: partido, coligação, votação, percentual e datas completas do mandato.

## Posicionamento atual

> **Uma trajetória de serviço público ligada à educação, à gestão e à cidadania no Pará.**

A página será o ativo digital próprio de Elieth Braga: uma referência central para apresentar história, trajetória, áreas de atuação, conteúdos e canais oficiais.

## Formato recomendado para o MVP

- landing page institucional de página única;
- conteúdo predominantemente estático;
- responsiva e leve;
- navegação por âncoras;
- publicação inicial futura em subdomínio na VPS Linux;
- estrutura preparada para expansão.

## Estrutura do MVP

1. cabeçalho e navegação;
2. hero com nome, posicionamento e fotografia;
3. seção “Sobre Elieth”;
4. trajetória resumida, incluindo Mocajuba;
5. áreas de atuação;
6. destaques municipal e estadual;
7. conteúdos e redes oficiais;
8. galeria opcional com imagens autorizadas;
9. rodapé e identificação editorial.

## Direção visual

- referência institucional paraense, humana e contemporânea;
- cores predominantes: branco, grafite e azul;
- vermelho usado como assinatura e chamada para ação;
- diagonal inspirada na bandeira do Pará como elemento visual único;
- não copiar logotipo, brasão ou assinatura do Governo do Pará;
- não simular portal governamental;
- não adotar aparência partidária ou eleitoral;
- valores hexadecimais permanecem provisórios até obtenção de manual oficial atualizado.

## Referência GitHub principal

**`anthropics/skills` — `frontend-design`**

Aplicação:

- design baseado no sujeito e no conteúdo real;
- hero como tese;
- tipografia deliberada;
- estrutura como informação;
- uma assinatura visual própria;
- planejamento e autocrítica antes do código.

Referências complementares:

- `vercel-labs/agent-skills` para acessibilidade, interface e desempenho;
- `thedaviddias/Front-End-Checklist` para auditoria final;
- `shadcn-ui/ui` para componentes, somente quando necessário e customizado;
- `alexpate/awesome-design-systems` para repertório.

## Workflow de código

```text
ChatGPT define e documenta
→ prompt versionado
→ Cursor/Codex implementa em branch
→ testes e screenshots
→ pull request draft
→ ChatGPT valida pelo GitHub
→ Eduardo aprova e realiza o merge
```

Regras centrais:

- nenhum código direto na `main`;
- uma tarefa por branch e PR;
- `AGENTS.md` como instrução permanente;
- prompts específicos em `prompts/`;
- CI obrigatória quando o scaffold existir;
- screenshots em mudanças visuais;
- merge somente após revisão.

## Stack em avaliação para a Fase 5

Para o MVP estático, a preferência técnica inicial é:

- Astro;
- TypeScript;
- CSS com tokens ou Tailwind;
- conteúdo desacoplado;
- build estático servido por Nginx na VPS.

A escolha final será registrada na Fase 5 antes do scaffold.

## Base factual publicável

- nome civil: **Elieth de Fátima da Silva Braga**;
- nome público: **Elieth Braga**;
- eleita prefeita de Mocajuba em 2016;
- posse municipal em 2017;
- vice-prefeito Cosme Macedo;
- trajetória no serviço público paraense;
- exercício da titularidade da SEDUC em marcos confirmados de 2021 e 2023;
- passagem pela SEPLAD, confirmada com ressalva;
- exercício da titularidade da SEAC em setembro de 2025;
- links oficiais do Instagram e Facebook;
- participação na entrega da sede ampliada e modernizada da SEDUC no encerramento de seu ciclo na pasta.

## Diretrizes editoriais

- a primeira versão será pessoal, biográfica e institucional;
- não será apresentada como site de campanha;
- a pretensão de disputar vaga de deputada federal permanece fora do conteúdo público inicial;
- resultados institucionais não serão atribuídos exclusivamente a Elieth sem evidência;
- nenhuma imagem será reutilizada sem confirmação de origem e direito de uso;
- o vínculo visual com a administração estadual não poderá sugerir propriedade ou chancela oficial do Governo do Pará.

## Próxima execução

Usar `prompts/01-direcao-visual-e-wireframe.md` no Cursor/Codex para criar:

1. plano visual detalhado;
2. wireframe desktop;
3. wireframe mobile;
4. critérios de aceite visual;
5. autocrítica contra aparência genérica.

Depois da revisão desses documentos, a Fase 5 definirá a arquitetura técnica e autorizará o scaffold do código.

## Dependências que não bloqueiam o wireframe

- fotografia principal autorizada;
- confirmação de formação e carreira;
- seleção de realizações da gestão de Mocajuba;
- decisão sobre contato institucional;
- seleção final de mídias e respectivos direitos.
