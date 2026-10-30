[EN](../en/cards.md) | [JA](../ja/cards.md) | [PT-BR](../pt-br/cards.md)

# Cartas e o sistema de cartão IC

> Source: `project_d.xbe` .data table @ `0x65d7a4`–`0x662b24` (`summon`) + client strings / save-field names — reverse engineered

> Dados extraídos de **Quest of D 4.0 — The Battle Kingdom** (Sega Chihiro, `CDV-10035B`). Esta página reúne as evidências de strings/símbolos sobre o hardware de cartas e os dados salvos no cartão. O comportamento físico do leitor é evidenciado por strings de E/S e estruturas de save; a semântica individual de gameplay está apenas parcialmente decodificada.

Quest of D usa **duas camadas de cartas**: o **cartão IC de save** do jogador (dados do personagem, como em outros jogos de cartão Sega Chihiro/ALL.Net) e as **cartas de deck dispensadas** — cartas físicas que a máquina imprime, cada uma representando um item do jogo ou um monstro invocado.

## Evidências do hardware do leitor

| string / símbolo | função |
|---|---|
| `sens_card` | sensor de presença de cartão IC |
| `card_lock` | trava o cartão IC dentro do leitor |
| `card_unlock_instant` | ejeção/destravamento instantâneo |
| `DFOCECARD_RED_LEFT` | LED indicador do slot esquerdo (vermelho) |
| `ICCARD_RED_RIGHT` | LED indicador do slot direito (vermelho) |
| `DECK READER`, `DECK READER DOOR OPEN` | unidade de cartas de deck + porta (menu de teste) |
| `SEL_DM_VDECK` | seletor de leitor de deck virtual |

## Strings do ciclo de vida do cartão IC (Shift-JIS, de text.bin)

| jp bruto | significado |
|---|---|
| `・新規カード` | cartão novo |
| `・更新済みのカード` | cartão renovado |
| `・使用回数限度のカード` | cartão no limite de usos |
| `・データが壊れているカード` | cartão corrompido |
| `フォーマットバージョン違いのカード` | versão de formato diferente |
| `リリースバージョン違いのカード` | versão de lançamento diferente |
| `ＱＵＥＳＴ＿ＯＦ＿Ｄ以外のカード` | cartão que não é de QUEST_OF_D |
| `このカードでの再発行はあと一回までです` | só pode ser reemitido mais uma vez |
| `このカードは前回正常終了していません` | sessão anterior terminou de forma anormal |
| `再発行専用カードではありません` | não é um cartão exclusivo de reemissão |
| `カードが２枚挿入されています` | dois cartões inseridos |
| `ＩＣカードに書き込み中です` | gravando no cartão IC |
| `デッキカードを排出しました` | carta de deck dispensada |
| `ＩＣカード，デッキカードの取り忘れにご注意ください` | não esqueça o cartão IC e a carta de deck |

Modos de serviço visíveis nas strings de menu: `＜ＩＣカード挿入モード＞`, `＜カード更新モード＞`, `ＩＣカード復旧モード` / `＜カード復旧モード＞`. Os cartões são protegidos por PIN (暗証番号); três falhas consecutivas bloqueiam o cartão até o dia seguinte. Uma string proíbe cartões do teste de localização Ver.2.0.

## Registro de save (por cartão)

O carregador de save/grupo (`FUN_000de7c0`) lê até **12 slots de jogadores** com estes nomes de campo:

`player_name` · `job` · `card_id` · `stage_id` · `get_date` · `numof_item` · `item_id` · `item_nm`

Outras chaves relacionadas a cartões no binário: `card_id%d`, `card_trade`, `card_trade%d`, `card_reissue_status`, `card_ban_flag`, `card_item_send`, `card_item_receive`, `card_send_gold_amount`, `multi_history_card_id`, `old_card_id`, `rr_card_id` — evidência de troca de cartas, rastreamento de reemissão, flags de banimento e transferência de itens/ouro entre cartões.

## Classes do jogador (personagens do cartão)

Quatro classes principais aparecem por todo o conjunto de dados de habilidades/missões/servidor:

| classe | função |
|---|---|
| `FIGHTER` | linha de frente corpo a corpo |
| `THIEF` | classe de velocidade/armadilhas/à distância |
| `WIZARD` | conjurador ofensivo |
| `PRIEST` | conjurador de cura/suporte |

Códigos internos de subclasse/classe de arma usados em registros de habilidades, livros e servidor (`vs_border_limit_job0-3` etc.):

`MA` (monge) · `NI` (ninja) · `KA` `KS` `MA` `NC` `NI` `RA` `RS` `SP` `ST` `YU`/`YZ` (classes de arma — ver itens) · `BARRIER` (linha de barreira) · `ALL` (grupo inteiro)

## Cartas de deck como itens do jogo

Todo item coletado na masmorra é uma carta. A evidência mais forte é o bloco de cartas de invocação do `text.bin` (~entradas 3036–3352): cada monstro invocável possui uma string `〈name〉を召喚するためのカード` ("carta para invocar 〈name〉") — ou seja, as cartas físicas do deck literalmente carregam a magia de invocação. Os registros de equipamento `MONST_SUMMON_ARMOR_*` / `MONST_SUMMON_ACCESS_*` mostram que monstros invocados também podem equipar itens.

`auth2d/card.bin` (também `media/auth2d/card.bin`) é a definição de sprite/atlas das faces das cartas usada pela UI — binário, ainda não decodificado além do seu papel como tabela de imagens de cartas.

## Não resolvido

- Layout exato do registro no cartão (os campos acima são apenas nomes)
- Detalhes do protocolo de impressão/dispensação das cartas de deck
- Como `card_trade` / `card_send_gold_amount` eram expostos no jogo
