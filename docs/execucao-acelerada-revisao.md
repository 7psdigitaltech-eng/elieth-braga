# Revisão obrigatória após execução acelerada

A execução acelerada deve terminar sem commit automático. A revisão deve acontecer antes de qualquer commit local ou PR.

## Revisão técnica

- conferir `git status --short`;
- conferir `git diff --name-only`;
- conferir se nenhum arquivo proibido foi alterado;
- confirmar ausência de dependências novas;
- rodar `npm.cmd run check`;
- rodar `npm.cmd run build`.

## Revisão visual

- screenshot desktop;
- screenshot mobile;
- verificar header, hero, seções, footer e espaçamentos;
- verificar aparência institucional, humana e não eleitoral;
- conferir se o vermelho está contido.

## Revisão editorial

- comparar textos com a matriz publicável;
- remover fatos pendentes;
- remover dados pessoais desnecessários;
- evitar atribuição individual de resultados coletivos;
- confirmar ausência de linguagem de campanha.

## Revisão de risco

- sem partido;
- sem número;
- sem pedido de voto;
- sem slogan político;
- sem promessa;
- sem imagem real sem direito confirmado;
- sem scripts externos.

Se qualquer item falhar, corrigir antes do commit ou dividir a entrega em PR menor.
