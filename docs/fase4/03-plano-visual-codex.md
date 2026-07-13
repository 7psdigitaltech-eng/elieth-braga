# Plano visual Codex — MVP Elieth Braga

- **Fase:** 4 — Conteúdo, identidade e experiência visual
- **Status:** proposta para revisão
- **Base:** direção visual aprovada, arquitetura do MVP e matriz de conteúdo publicável
- **Referência de processo:** `anthropics/skills/frontend-design`, conforme registrado em `docs/fase4/01-referencias-github-design.md`

## 1. Sujeito, público e trabalho principal

Elieth Braga deve ser apresentada como uma figura pública paraense com trajetória no serviço público, na educação, na gestão e na cidadania. A página precisa organizar essa trajetória em um espaço próprio, confiável e acessível, sem depender das redes sociais para explicar quem ela é.

O público principal é formado por pessoas do Pará, seguidores vindos das redes, cidadãos que pesquisam seu nome, imprensa, lideranças e públicos institucionais. A experiência deve responder rapidamente:

- quem é Elieth Braga;
- qual é a natureza da sua trajetória pública;
- quais áreas estruturam sua atuação;
- onde acompanhar seus canais oficiais.

A página é pessoal, biográfica e institucional. Não é portal governamental, página partidária, pré-campanha ou material eleitoral.

O processo visual segue a referência principal registrada para o projeto: começar pelo sujeito, público e função da página; tratar o hero como tese; usar tipografia deliberada; definir uma assinatura visual única; e registrar autocrítica antes da implementação.

## 2. Conceito visual

Uma presença paraense serena, com a diagonal como fio visual entre memória, serviço público e proximidade humana.

## 3. Paleta

Os tokens abaixo seguem a direção visual provisória já registrada no projeto. Não devem ser tratados como especificação oficial de marca governamental.

| Token | Hex | Uso principal |
|---|---:|---|
| Branco | `#FFFFFF` | Fundo principal, áreas de respiro e leitura longa |
| Névoa | `#F3F7F9` | Fundos alternados, blocos de apoio e áreas de transição |
| Grafite | `#25282B` | Texto principal, navegação e títulos escuros |
| Cinza médio | `#66727A` | Legendas, textos auxiliares e metadados |
| Azul profundo | `#14527A` | Títulos institucionais, rodapé e blocos de autoridade |
| Azul estrela | `#1674B8` | Links, detalhes informativos e estados de interação |
| Vermelho Pará | `#E72D3D` | CTA principal, foco de assinatura e pequenos marcadores |

Distribuição visual recomendada:

- 65% branco e névoa;
- 20% grafite e azul profundo;
- 10% azul estrela;
- até 5% vermelho.

O vermelho deve aparecer como assinatura e decisão, não como massa dominante. Essa contenção evita leitura de campanha e preserva o tom institucional.

## 4. Papéis tipográficos

### Títulos editoriais

Usar `Source Serif 4` ou serifada equivalente para títulos principais e momentos de maior carga biográfica. A serifada deve comunicar trajetória, memória e presença humana, sem transformar a página em peça cerimonial.

### Corpo e interface

Usar `Inter` ou `Public Sans` para texto corrido, navegação, botões, legendas, cards e rodapé. A escolha final deve priorizar legibilidade em telas pequenas e boa renderização em pesos intermediários.

### Regra

Usar no máximo duas famílias tipográficas. A personalidade deve vir da composição, do espaçamento, da hierarquia e da assinatura diagonal, não da multiplicação de fontes.

## 5. Escala tipográfica

Escala sugerida para implementação futura:

| Papel | Desktop | Mobile | Uso |
|---|---:|---:|---|
| H1 | 56-64 px | 40-44 px | Nome no hero |
| Frase central | 26-32 px | 22-26 px | Posicionamento principal |
| H2 | 36-44 px | 30-34 px | Títulos de seção |
| H3 | 22-26 px | 20-22 px | Marcos, eixos e destaques |
| Corpo | 18 px | 17 px | Biografia e textos principais |
| Apoio | 15-16 px | 15-16 px | Legendas, metadados e notas |
| Botões | 16 px | 16 px | CTAs e links de ação |

Largura de linha recomendada: 60 a 72 caracteres para texto corrido.

## 6. Grid, largura e espaçamento

- Layout desktop com conteúdo máximo entre `1120px` e `1200px`.
- Grid principal de 12 colunas em desktop.
- Em tablet, usar grid de 6 a 8 colunas.
- Em mobile, usar coluna única com margens de 20px a 24px.
- Espaçamento vertical generoso entre seções, sem criar blocos excessivamente vazios.
- Hero desktop deve ocupar a primeira dobra sem esconder o início da próxima seção.
- Elementos de navegação por âncora devem manter área de toque confortável.

## 7. Comportamento das seções

### Cabeçalho

Cabeçalho leve, com nome público, navegação por âncoras e acesso a redes oficiais. Não deve parecer barra de portal oficial. Em mobile, usar menu compacto.

### Hero

O hero deve funcionar como tese visual da página: nome, posicionamento, breve apoio, CTAs e fotografia autorizada. O recorte diagonal deve conectar a área textual à fotografia.

Texto central obrigatório:

> Uma trajetória de serviço público ligada à educação, à gestão e à cidadania no Pará.

CTAs permitidos:

- Conheça a trajetória
- Acompanhe no Instagram
- Acompanhe no Facebook

### Sobre Elieth

Texto humano e direto, baseado na biografia-base validável. Evitar dados pessoais ainda pendentes, formação não confirmada e qualquer informação de campanha.

### Trajetória

Linha do tempo com poucos marcos, priorizando clareza. Para Mocajuba, usar exatamente a redação segura:

> Eleita prefeita de Mocajuba em 2016, assumiu o cargo em 2017, tendo Cosme Macedo como vice-prefeito.

Não incluir partido, coligação, votação ou percentual por enquanto.

### Áreas de atuação

Organizar experiência por temas: educação pública, gestão municipal, gestão e planejamento estadual, cidadania e articulação. A seção pode usar blocos editoriais, mas deve evitar repetição de cards genéricos.

### Destaque institucional

Apresentar o marco da sede ampliada e modernizada da SEDUC com formulação proporcional:

> No encerramento de seu ciclo à frente da Secretaria de Estado de Educação, Elieth participou da entrega da sede ampliada e modernizada da SEDUC, estrutura destinada a melhorar as condições de trabalho e atendimento da administração educacional do Pará.

Não atribuir autoria exclusiva de resultados institucionais.

### Redes oficiais

Bloco objetivo com Instagram e Facebook. Evitar linguagem de mobilização política. A ação é acompanhar conteúdos e canais oficiais.

### Galeria opcional

Somente indicar a seção como opcional e condicionada a imagens autorizadas. Sem acervo validado, a implementação futura deve omitir a seção.

## 8. Assinatura visual única

A assinatura escolhida é a diagonal paraense reinterpretada como recorte entre fotografia e trajetória.

Aplicação principal:

- recorte diagonal no hero, relacionando a fotografia principal ao campo institucional;
- pequeno eco possível na linha do tempo, como inclinação discreta do traço ou marcador;
- ausência de repetição decorativa em outras seções.

Não usar brasão, logotipo oficial, bandeira literal, estrelas repetidas, mapa decorativo ou elementos que simulem identidade oficial do Governo do Pará.

## 9. Tratamento das fotografias

Usar apenas marcadores até que os arquivos e direitos sejam confirmados:

- `[FOTO PRINCIPAL AUTORIZADA]`
- `[FOTO HISTÓRICA AUTORIZADA]`
- `[IMAGEM INSTITUCIONAL COM DIREITO DE USO A CONFIRMAR]`

Direção fotográfica:

- imagens humanas, com contexto real e boa luz;
- presença pública sem estética de palanque;
- diversidade territorial e humana do Pará;
- créditos e textos alternativos previstos desde o wireframe.

Evitar:

- fotos de campanha;
- multidões usadas como fundo genérico;
- logotipos de terceiros sem autorização;
- capturas comprimidas de redes sociais;
- imagens que sugiram endosso governamental oficial.

## 10. Movimento

Movimento deve ser discreto e opcional:

- transições curtas de opacidade ou deslocamento leve;
- foco em orientação, não espetáculo;
- nenhuma animação contínua;
- nenhum conteúdo essencial escondido atrás de animação;
- respeito obrigatório a `prefers-reduced-motion`.

## 11. Acessibilidade

Critérios visuais a preservar:

- contraste WCAG AA;
- foco visível em links, botões e menu;
- navegação por teclado;
- links distinguíveis sem depender somente da cor;
- hierarquia semântica clara;
- texto com tamanho confortável em mobile;
- largura de linha controlada;
- placeholders de imagem com função e texto alternativo previstos;
- zoom sem sobreposição de conteúdo.

## 12. Autocrítica contra aparência genérica

Riscos identificados e correções de direção:

- **Hero genérico de política:** substituído por composição editorial com tese, fotografia autorizada e diagonal contida.
- **Grade repetitiva de cards:** áreas de atuação serão blocos de leitura com hierarquia, não uma sequência indiferenciada de ícones.
- **Paleta de campanha:** vermelho limitado a CTA e assinatura; predominância de branco, névoa, grafite e azul institucional.
- **Portal governamental simulado:** sem brasão, assinatura oficial, cabeçalho de portal, linguagem burocrática ou identidade copiada.
- **Biografia inflada:** textos condicionados à matriz publicável, sem números, datas ou resultados não confirmados.

## 13. Riscos visuais e prevenção

1. **Parecer campanha eleitoral.**
   Prevenção: não usar slogan, número, partido, pedido de apoio, linguagem de mobilização ou vermelho dominante.

2. **Parecer portal oficial do Governo do Pará.**
   Prevenção: usar referência cromática e cultural de forma própria, sem brasão, logotipo, assinatura oficial ou arquitetura visual de portal.

3. **Parecer template institucional genérico.**
   Prevenção: usar a diagonal como assinatura única, hero como tese e estrutura narrativa baseada na trajetória real de Elieth.
