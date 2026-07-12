# Protocolo de pesquisa e verificação — Elieth Braga

## 1. Finalidade

Este protocolo orienta a coleta, validação, classificação e armazenamento de informações públicas sobre Elieth Braga para uso interno no projeto e, posteriormente, na página web.

A pesquisa deve ser ampla, mas a publicação será seletiva. Encontrar uma informação não significa que ela deva ser publicada.

## 2. Regra central

Toda afirmação relevante deverá manter uma trilha de evidência contendo, sempre que possível:

- afirmação ou fato;
- nome da fonte;
- URL;
- órgão, veículo ou autor;
- data de publicação ou emissão;
- data de acesso;
- trecho ou referência que sustenta a afirmação;
- tipo de fonte;
- nível de confiança;
- existência de segunda fonte;
- observações e divergências;
- situação de validação.

## 3. Hierarquia de fontes

### Nível A — Fonte primária oficial

Exemplos:

- Diários Oficiais;
- TSE e TRE;
- portais governamentais;
- Câmara, Senado, Assembleia Legislativa e Câmaras Municipais;
- tribunais e conselhos de contas;
- decisões judiciais e documentos processuais públicos;
- portais de transparência;
- universidades e instituições certificadoras;
- legislação, decretos, portarias, nomeações e contratos oficiais.

Uso: fonte preferencial para cargos, datas, atos, eleições, contratos, decisões e números.

### Nível B — Fonte jornalística reconhecida

Exemplos:

- veículos locais, regionais e nacionais com autoria, data e política editorial identificáveis;
- entrevistas e reportagens com documentação ou declarações diretas.

Uso: contexto, repercussão, entrevistas, eventos e fatos não detalhados em portais oficiais.

### Nível C — Fonte oficial da própria pessoa ou instituição

Exemplos:

- perfis verificados ou reconhecidos;
- site pessoal ou institucional;
- releases;
- vídeos e discursos publicados em canais oficiais.

Uso: posicionamentos, agenda, declarações, identidade pública e materiais autorizados. Não substitui comprovação independente de resultados ou números.

### Nível D — Fonte secundária ou comunitária

Exemplos:

- blogs;
- agregadores;
- páginas locais;
- repostagens;
- enciclopédias colaborativas;
- publicações de terceiros em redes sociais.

Uso: descoberta de pistas. Informações deste nível não devem ser tratadas como confirmadas sem validação adicional.

### Nível E — Fonte frágil ou anônima

Exemplos:

- postagens sem autoria;
- capturas de tela sem origem;
- mensagens encaminhadas;
- páginas sem data ou identificação;
- alegações sem documentação.

Uso: não utilizar como evidência. Pode gerar apenas uma tarefa de investigação.

## 4. Status de uma informação

Cada item deverá receber um status:

- **Confirmado:** sustentado por fonte primária ou por múltiplas fontes confiáveis compatíveis.
- **Confirmado com ressalva:** fato principal confirmado, mas há detalhe, data ou interpretação pendente.
- **Provável:** há boa evidência, porém falta fonte primária ou confirmação direta.
- **Divergente:** fontes confiáveis apresentam versões incompatíveis.
- **Não confirmado:** encontrado somente em fonte insuficiente.
- **Descartado:** atribuição falsa, homônimo, erro ou informação incompatível com evidências melhores.
- **Sensível — revisão necessária:** informação exige avaliação jurídica, editorial ou autorização antes de qualquer uso.

## 5. Separação obrigatória de conteúdo

O repositório deverá distinguir:

1. **Evidências brutas:** links, referências, documentos e registros de descoberta.
2. **Fatos verificados:** informações consolidadas com status e fontes.
3. **Análise interna:** lacunas, riscos, divergências e hipóteses.
4. **Conteúdo editorial:** textos preparados para eventual publicação.
5. **Conteúdo aprovado:** versão autorizada para uso público.

Nunca misturar alegações ainda não verificadas com biografia aprovada.

## 6. Campos recomendados para o inventário

| Campo | Descrição |
|---|---|
| ID | Identificador único |
| Tema | Biografia, cargo, eleição, projeto, mídia etc. |
| Afirmação | Fato ou alegação em linguagem objetiva |
| Pessoa/órgão relacionado | Entidade vinculada ao registro |
| Data do fato | Quando ocorreu |
| Fonte | Título ou identificação |
| URL | Endereço original |
| Publicador | Órgão, veículo, autor ou perfil |
| Data da fonte | Data de publicação ou emissão |
| Data de acesso | Data da coleta |
| Tipo de fonte | Oficial, jornalística, própria, secundária etc. |
| Nível | A, B, C, D ou E |
| Trecho-evidência | Síntese ou passagem relevante |
| Segunda fonte | Corroboração independente |
| Status | Confirmado, provável, divergente etc. |
| Direitos de uso | Aplicável a imagem, vídeo ou documento |
| Observações | Contexto, divergência, risco ou pendência |

## 7. Tratamento de temas sensíveis

Para processos, denúncias, críticas, controvérsias ou acusações:

- localizar a origem da alegação;
- identificar o estágio do processo;
- verificar decisões posteriores, arquivamentos, absolvições, recursos ou acordos;
- registrar a data e evitar apresentar situação antiga como atual;
- procurar manifestação da pessoa ou assessoria;
- diferenciar claramente alegação, investigação, denúncia, decisão e condenação;
- submeter qualquer conteúdo público a revisão jurídica e editorial.

## 8. Privacidade e minimização de dados

Mesmo em relação a uma figura pública, não deverão ser coletados ou armazenados sem necessidade e autorização:

- CPF, RG e números documentais;
- endereço residencial;
- telefone pessoal não divulgado como canal oficial;
- dados bancários ou patrimoniais fora de contexto público legítimo;
- assinaturas reproduzíveis;
- credenciais ou informações de segurança;
- dados de saúde, biometria ou vida privada sem relevância pública e base adequada;
- dados de menores ou familiares que não sejam figuras públicas;
- rotinas e localizações que criem risco de segurança.

Documentos públicos que contenham esses dados devem ser resumidos, referenciados ou redigidos antes de serem armazenados no projeto.

## 9. Imagens, vídeos e direitos autorais

Para cada mídia, registrar:

- origem;
- autor ou órgão responsável;
- URL original;
- data;
- licença ou autorização;
- restrições de uso;
- versão e resolução;
- descrição e pessoas retratadas.

Uma imagem encontrada na internet não será automaticamente considerada liberada para uso no site.

## 10. Organização recomendada

```text
docs/pesquisa/
  00-protocolo-de-pesquisa.md
  01-inventario-de-fontes.md
  02-linha-do-tempo.md
  03-perfil-consolidado.md
  04-pendencias-e-divergencias.md
  05-matriz-de-realizacoes.md
  06-indice-de-midias.md
  07-relatorio-de-riscos.md
references/
  documentos-publicos/
  capturas-autorizadas/
  metadados/
assets/
  imagens-aprovadas/
  identidade-visual/
```

## 11. Processo de pesquisa

1. Confirmar identidade e variações do nome.
2. Criar consultas por tema e período.
3. Registrar todas as fontes úteis no inventário.
4. Extrair fatos individualmente, sem consolidar cedo demais.
5. Buscar fontes primárias para cada fato importante.
6. Procurar evidência que confirme e que contradiga.
7. Resolver homônimos, duplicidades e datas divergentes.
8. Atualizar a linha do tempo.
9. Classificar confiança e pendências.
10. Submeter o perfil consolidado à validação humana.

## 12. Critério de conclusão da Fase 1

A varredura inicial poderá ser considerada concluída quando:

- os principais grupos de fontes tiverem sido pesquisados;
- houver inventário rastreável;
- os cargos e marcos centrais estiverem mapeados;
- as lacunas estiverem explicitamente registradas;
- temas sensíveis tiverem fontes e status;
- redes e mídias oficiais estiverem identificadas;
- o material estiver pronto para verificação e síntese na Fase 2.