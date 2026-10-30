[EN](../en/cards.md) | [JA](../ja/cards.md) | [PT-BR](../pt-br/cards.md)

# Cartas

Quest of D usa **três camadas de cartas**: o **cartão IC de save** físico, a **carta de deck** dispensada (física) e os **itens de carta do jogo** (todo item apanhado na masmorra é uma carta que vai para o deck).

### Hardware dos leitores

| string/símbolo | função |
|---|---|
| `sens_card` | IC card-present sensor |
| `card_lock` | locks the IC card in the reader |
| `card_unlock_instant` | instant card eject/unlock |
| `DFOCECARD_RED_LEFT` | left card slot indicator (red) |
| `ICCARD_RED_RIGHT` | right card slot indicator (red) |
| `B_SYSTEM_CARD_DISPLAY` | card-reader display device |
| `B_SYSTEM_CARD_BUZZER / B_SYSTEM_CARD_BUZZER2` | card-reader buzzers |
| `DECK READER` | deck-card dispenser/reader unit (test menu) |
| `DECK READER DOOR OPEN` | deck reader door test command |
| `SEL_DM_VDECK` | virtual deck reader selector |

### Ciclo de vida do cartão IC

| string jp bruta | significado |
|---|---|
| `・新規カード` | cartão novo |
| `・更新済みのカード` | cartão renovado |
| `・使用回数限度のカード` | cartão no limite de usos |
| `・データが壊れているカード` | cartão com dados corrompidos |
| `フォーマットバージョン違いのカード` | cartão com versão de formato diferente |
| `リリースバージョン違いのカード` | cartão de versão de lançamento diferente |
| `ＱＵＥＳＴ＿ＯＦ＿Ｄ以外のカード` | cartão que não é de QUEST_OF_D |
| `このカードでの再発行はあと一回までです` | este cartão só pode ser reemitido mais uma vez |
| `このカードは前回正常終了していません` | este cartão não foi encerrado corretamente da última vez |
| `再発行専用カードではありません` | não é um cartão exclusivo de reemissão |
| `カードが２枚挿入されています` | dois cartões estão inseridos |
| `ＩＣカードに書き込み中です` | gravando no cartão IC |
| `デッキカードを排出しました` | uma carta de deck foi dispensada |
| `ＩＣカード，デッキカードの取り忘れにご注意ください` | não esqueça seu cartão IC e sua carta de deck |

Modos exibidos nos menus de serviço: `＜ＩＣカード挿入モード＞` (inserir), `＜カード更新モード＞` (renovação), `ＩＣカード復旧モード` / `＜カード復旧モード＞` (recuperação). Cartões são protegidos por PIN (暗証番号); três falhas seguidas bloqueiam o cartão até o dia seguinte. Uma string proíbe cartões de teste de local `Ver.2.0`.

### Registro de save (por cartão)

O loader de save/grupo (`FUN_000de7c0`) lê até **12 slots de jogador** por cartão:

| # | field |
|---|---|
| 1 | `player_name` |
| 2 | `job` |
| 3 | `card_id` |
| 4 | `stage_id` |
| 5 | `get_date` |
| 6 | `numof_item` |
| 7 | `item_id[]` |
| 8 | `item_nm[]` |

### Chaves de protocolo de carta

Campos chave-valor usados pelo protocolo KK "Kage" e pelo fluxo de troca de cartas:

`card_id` · `card_id%d` · `card_trade` · `card_trade%d` · `old_card_id` · `multi_history_card_id` · `card_ban_flag` · `card_reissue_status` · `card_send_item_main` · `card_send_item_sub` · `card_send_item_sub2` · `card_send_gold_amount` · `card_receive_item_main` · `card_receive_item_sub` · `card_receive_item_sub2` · `card_gold_send_counter` · `card_gold_receive_counter` · `card_item_send_counter` · `card_item_receive_counter` · `d_force_card_item_id` · `d_force_card_item_nm` · `CARDRENEW` · `CARDPLAY` · `CARD RETURN` · `NU_CARD_AUTH` · `CLEAR_WITHOUT_CARDITEM`

Troca: `card_item_send/receive_counter` e `card_gold_send/receive_counter` ordenam a troca de itens/ouro em main/sub/sub2. `old_card_id`/`multi_history_card_id` rastreiam renovações de cartão (os dados migram de cartão para cartão). `d_force_card_item_*` são campos de injeção de depuração.

### Itens de carta no jogo

Evidência no text.bin: `カードウィンドウ` (janela de cartas), `カードをデッキに入れたため` (porque a carta foi posta no deck), `デッキカードを排出しました` (uma carta de deck foi dispensada). Muitas descrições de itens resolvem para `〜を召喚するためのカード` — *carta usada para invocar X*. Monstros de invocação são distribuídos como cartas de deck físicas e jogados pela janela do deck.
