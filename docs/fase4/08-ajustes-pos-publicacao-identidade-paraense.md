# Ajustes pós-publicação: identidade paraense e separação visual das seções

## 1. Contexto

Após a publicação inicial do site `elieth-braga` em produção, foram realizados ajustes incrementais de acabamento visual e conteúdo:

- animações sutis mobile-first;
- refinamento da seção **Redes oficiais**;
- publicação content-only no subdomínio `elieth.7psdigital.com.br`;
- validação de build, HTTPS e isolamento no ambiente Docker + Traefik.

Esses ajustes foram executados corretamente, mas nem todos foram documentados antes da implementação. A partir desta etapa, todo ajuste visual ou estrutural relevante deve ser documentado antes da execução.

Este documento registra a próxima etapa planejada: melhorar a separação visual entre as seções iniciais do site e reforçar a identidade paraense de Elieth Braga de forma institucional, elegante e não eleitoral.

## 2. Problema identificado

Na revisão visual pós-publicação, foi observado que a transição entre algumas seções iniciais está pouco marcada visualmente, especialmente:

- Hero → Sobre Elieth;
- Sobre Elieth → Trajetória;
- Trajetória → Pilares.

A divisão atual depende principalmente de espaçamento e linhas horizontais sutis. Em alguns trechos, isso deixa a página com aparência de blocos apenas empilhados, sem ritmo editorial suficiente.

Além disso, o site já comunica a trajetória pública de Elieth Braga no Pará, mas ainda pode expressar melhor sua relação afetiva, cultural e institucional com o Estado do Pará, suas cores, sua gente, sua história e sua cultura.

## 3. Objetivo da etapa

A etapa deve resolver dois pontos conectados:

1. Criar separações visuais mais claras entre as seções iniciais, sem deixar o layout pesado.
2. Adicionar uma camada de identidade paraense ao site, respeitando o tom institucional e evitando qualquer linguagem eleitoral.

O resultado esperado é um site com mais acabamento, mais ritmo visual e mais conexão simbólica com o Pará.

## 4. Direção estratégica

A identidade paraense deve aparecer como assinatura editorial, não como decoração excessiva.

A direção recomendada é usar elementos sutis inspirados em:

- cores do Pará;
- diagonal vermelha inspirada na bandeira do Pará;
- azul institucional;
- linhas, diagonais e formas abstratas;
- sensação de território, cultura, pertencimento e serviço público.

A abordagem deve ser contemporânea, leve e respeitosa.

## 5. Decisão visual

### 5.1. Alternância de fundos

A página deve ganhar mais ritmo por alternância de fundos:

| Seção | Fundo recomendado | Objetivo |
|---|---|---|
| Hero | branco | manter abertura limpa e institucional |
| Sobre Elieth | azul/cinza muito claro | diferenciar a biografia da abertura |
| Identidade paraense | faixa editorial clara com detalhe vermelho sutil | reforçar vínculo com o Pará |
| Trajetória | branco ou muito claro | dar respiro antes da timeline |
| Pilares | manter fundo azul/cinza claro já existente | preservar destaque atual |
| Município/Estado | branco | manter leitura institucional |
| Redes oficiais | azul/cinza claro | já funciona bem como bloco de apoio |
| Galeria | branco | valorizar imagens |

### 5.2. Divisores

Evitar divisores baseados apenas em linhas horizontais simples.

Preferir:

- faixas de fundo em largura total;
- diagonais suaves;
- pequenos marcadores vermelhos;
- pseudo-elementos discretos;
- respiro vertical mais intencional.

### 5.3. Vermelho Pará

O vermelho deve atuar como assinatura visual, não como cor dominante.

Usos recomendados:

- pequenas linhas;
- detalhe inferior de cards;
- diagonal suave de fundo;
- pontos de marcação;
- hover ou microinteração.

Evitar grandes blocos vermelhos, pois podem deixar o site agressivo ou com aparência de campanha.

## 6. Nova seção proposta: “Pará como identidade”

Criar uma seção curta entre **Sobre Elieth** e **Trajetória**.

### 6.1. Nome interno sugerido

`paraIdentity`

### 6.2. Eyebrow

```text
Identidade paraense
```

### 6.3. Título

```text
Pará como identidade
```

### 6.4. Texto principal

```text
Amante da cultura paraense, Elieth Braga carrega em sua trajetória uma ligação profunda com o Estado, suas cores, sua história e sua gente.
```

### 6.5. Texto complementar

```text
Da experiência municipal à atuação estadual, sua caminhada se conecta à educação, à cidadania, ao território e ao desenvolvimento do Pará.
```

### 6.6. Frase de destaque opcional

```text
Uma trajetória paraense, construída com presença pública, compromisso e respeito pela população.
```

## 7. Regras editoriais

A seção deve comunicar pertencimento, cultura e compromisso com o Pará sem transformar o site em peça publicitária, eleitoral ou governamental.

Pode usar linguagem como:

- trajetória paraense;
- cultura paraense;
- cores do Pará;
- história e gente do Pará;
- território;
- cidadania;
- educação;
- desenvolvimento do Estado.

Evitar:

- pedido de voto;
- número;
- partido;
- candidatura;
- slogan eleitoral;
- promessa de campanha;
- comparação com adversários;
- linguagem de governo oficial;
- apropriação de marca pública.

## 8. Regras visuais e de compliance

Não usar:

- brasão oficial;
- logotipo do Governo do Pará;
- marca de secretaria;
- assinatura visual oficial de governo;
- símbolos oficiais de forma que pareça chancela institucional;
- grafismos culturais específicos copiados literalmente.

Se houver referência visual à cultura ou ao território, ela deve ser abstrata, original e discreta.

## 9. Escopo técnico previsto

Arquivos que poderão ser alterados na implementação:

- `src/content/site.ts`;
- `src/pages/index.astro`;
- `src/components/AboutSection.astro`;
- `src/components/TimelineSection.astro`;
- `src/styles/global.css`;
- novo componente, se necessário: `src/components/ParaIdentitySection.astro`.

Arquivos que não devem ser alterados nesta etapa:

- imagens existentes;
- `public/images/`;
- URLs oficiais;
- redes sociais;
- galeria;
- header;
- footer;
- scripts;
- dependências;
- `package.json`;
- `package-lock.json`.

## 10. Critérios de aceite

A implementação futura só deve ser considerada pronta se atender aos critérios abaixo:

1. A divisão Hero → Sobre deve ficar visualmente mais clara.
2. A seção Sobre deve ter fundo diferente do Hero.
3. Deve existir uma seção ou bloco visual sobre identidade paraense.
4. A divisão Sobre → Identidade paraense → Trajetória deve parecer intencional.
5. O site deve comunicar melhor a ligação de Elieth Braga com o Pará.
6. O visual deve continuar institucional, limpo e leve.
7. O vermelho deve aparecer como assinatura visual, sem excesso.
8. Não deve haver conteúdo eleitoral.
9. Não deve haver brasões, marcas oficiais de governo ou símbolos que indiquem chancela institucional.
10. Não deve haver novas dependências.
11. Não deve haver scripts externos.
12. Não deve haver alteração de imagens.
13. Não deve haver overflow horizontal em mobile.
14. `npm.cmd run check` deve passar.
15. `npm.cmd run build` deve passar.

## 11. Validações obrigatórias antes de commit

Durante a execução futura, o executor deve rodar:

```powershell
npm.cmd run check
npm.cmd run build
git status --short
```

Também deve testar visualmente:

- desktop;
- mobile em aproximadamente 390px;
- mobile em aproximadamente 430px;
- ausência de overflow horizontal;
- leitura da nova seção;
- transição entre Hero, Sobre, Identidade paraense e Trajetória.

## 12. Prompt base para execução futura

```text
Objetivo:
Adicionar elementos visuais e narrativos ligados ao Pará no site de Elieth Braga, aproveitando também para melhorar a separação visual entre Hero, Sobre e Trajetória.

Contexto:
Elieth Braga é amante e defensora do Estado do Pará, de suas cores, cultura, história e identidade. O site deve refletir isso de forma elegante, institucional e sutil, sem virar peça eleitoral, turística ou visualmente carregada.

Escopo autorizado:
- src/content/site.ts
- src/pages/index.astro
- src/components/AboutSection.astro
- src/components/TimelineSection.astro
- criar novo componente se necessário, por exemplo src/components/ParaIdentitySection.astro
- src/styles/global.css

Não alterar:
- imagens existentes
- URLs
- redes sociais
- galeria
- header
- footer
- scripts
- package.json
- package-lock.json
- dependências
- conteúdo eleitoral

Direção visual:
1. Reforçar a identidade paraense usando elementos sutis:
   - diagonal vermelha inspirada na bandeira do Pará;
   - azul institucional;
   - branco e fundos claros;
   - pequenos marcadores vermelhos;
   - possível estrela azul discreta como elemento gráfico abstrato;
   - linhas orgânicas ou diagonais suaves no fundo.
2. Não usar brasão, logomarca oficial de governo, marca institucional do Estado ou símbolos oficiais protegidos.
3. Não exagerar no vermelho.
4. Não criar aparência de campanha política.
5. Não usar número, partido, candidatura, pedido de voto, promessa ou slogan eleitoral.
6. Não usar grafismos culturais específicos de forma literal ou apropriativa. Se houver referência regional, deve ser abstrata, respeitosa e discreta.
7. Manter estética institucional, elegante, leve e paraense.

Novo conteúdo sugerido:
Criar uma seção curta entre “Sobre Elieth” e “Trajetória”.

Nome sugerido do bloco no conteúdo:
paraIdentity

Eyebrow:
Identidade paraense

Título:
Pará como identidade

Texto principal:
Amante da cultura paraense, Elieth Braga carrega em sua trajetória uma ligação profunda com o Estado, suas cores, sua história e sua gente.

Texto complementar:
Da experiência municipal à atuação estadual, sua caminhada se conecta à educação, à cidadania, ao território e ao desenvolvimento do Pará.

Possível frase de destaque:
Uma trajetória paraense, construída com presença pública, compromisso e respeito pela população.

Implementação sugerida:
1. Criar ParaIdentitySection.astro, se fizer sentido.
2. Inserir o componente entre AboutSection e TimelineSection.
3. Criar visual de faixa editorial:
   - fundo var(--color-mist) ou var(--color-mist-soft);
   - detalhe diagonal vermelho muito suave;
   - card ou bloco textual branco;
   - pequeno elemento gráfico circular/estrela/linha em azul e vermelho.
4. Melhorar também a separação visual da seção Sobre:
   - a seção Sobre pode ganhar fundo claro em largura total;
   - a Timeline deve voltar para fundo branco com respiro superior.
5. Evitar linhas horizontais simples como único divisor.
6. Garantir que o conteúdo interno continue alinhado ao container atual.
7. Garantir responsividade em mobile sem overflow horizontal.
8. Preservar animações/reveal existentes.

Critérios de aceite:
1. O site deve comunicar melhor a ligação de Elieth Braga com o Pará.
2. Deve existir uma seção ou bloco visual “Pará como identidade”.
3. A divisão Hero → Sobre → Identidade Paraense → Trajetória deve ficar mais clara e elegante.
4. O vermelho deve aparecer como assinatura visual, não como excesso.
5. Não usar brasão, logotipo oficial ou marca governamental.
6. Não adicionar conteúdo eleitoral.
7. Não alterar imagens.
8. Não adicionar dependências.
9. Não adicionar scripts externos.
10. Não criar overflow horizontal no mobile.
11. Rodar:
    npm.cmd run check
    npm.cmd run build
    git status --short

Não fazer commit.
```

## 13. Decisão operacional

Esta etapa deve seguir o fluxo:

1. Documentação no GitHub.
2. PR de documentação.
3. Merge da documentação.
4. Execução local com Cursor/Codex.
5. Revisão visual.
6. PR de implementação.
7. Merge.
8. Deploy content-only na VPS.

Nenhuma implementação visual deve ser executada antes desta documentação estar salva na `main`.
