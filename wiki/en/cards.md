[EN](../en/cards.md) | [JA](../ja/cards.md) | [PT-BR](../pt-br/cards.md)

# Cards

Quest of D uses **three card layers**: the physical **IC save card**, the dispensed **deck card** (physical), and **in-game card items** (every dungeon pickup is a card that goes into the deck).

### Reader hardware

| string/symbol | role |
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

### IC card lifecycle

| raw jp string | meaning |
|---|---|
| `・新規カード` | new card |
| `・更新済みのカード` | renewed card |
| `・使用回数限度のカード` | card at its usage-count limit |
| `・データが壊れているカード` | card with corrupted data |
| `フォーマットバージョン違いのカード` | card with a different format version |
| `リリースバージョン違いのカード` | card from a different release version |
| `ＱＵＥＳＴ＿ＯＦ＿Ｄ以外のカード` | a non-QUEST_OF_D card |
| `このカードでの再発行はあと一回までです` | this card can be reissued only once more |
| `このカードは前回正常終了していません` | this card did not shut down cleanly last time |
| `再発行専用カードではありません` | not a reissue-only card |
| `カードが２枚挿入されています` | two cards are inserted |
| `ＩＣカードに書き込み中です` | writing to the IC card |
| `デッキカードを排出しました` | a deck card was dispensed |
| `ＩＣカード，デッキカードの取り忘れにご注意ください` | please do not forget your IC card and deck card |

Modes shown by the service menus: `＜ＩＣカード挿入モード＞` (insert), `＜カード更新モード＞` (renewal), `ＩＣカード復旧モード` / `＜カード復旧モード＞` (recovery). Cards are protected by a PIN (暗証番号); three consecutive failures lock the card until the next day. One string bans `Ver.2.0` loctest cards from play.

### Save record (per card)

The save/party loader (`FUN_000de7c0`) reads up to **12 player slots** per card:

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

### Card protocol keys

Key-value fields used by the KK "Kage" protocol and the card-trade flow:

`card_id` · `card_id%d` · `card_trade` · `card_trade%d` · `old_card_id` · `multi_history_card_id` · `card_ban_flag` · `card_reissue_status` · `card_send_item_main` · `card_send_item_sub` · `card_send_item_sub2` · `card_send_gold_amount` · `card_receive_item_main` · `card_receive_item_sub` · `card_receive_item_sub2` · `card_gold_send_counter` · `card_gold_receive_counter` · `card_item_send_counter` · `card_item_receive_counter` · `d_force_card_item_id` · `d_force_card_item_nm` · `CARDRENEW` · `CARDPLAY` · `CARD RETURN` · `NU_CARD_AUTH` · `CLEAR_WITHOUT_CARDITEM`

Trading: `card_item_send/receive_counter` + `card_gold_send/receive_counter` sequence the main/sub/sub2 item-and-gold exchange. `old_card_id`/`multi_history_card_id` track card renewals (data migrates card→card). `d_force_card_item_*` are debug injection fields.

### In-game card items

Evidence in text.bin: `カードウィンドウ` (card window), `カードをデッキに入れたため` (because the card was put in the deck), `デッキカードを排出しました` (a deck card was dispensed). Many item descriptions resolve to `〜を召喚するためのカード` — *card used to summon X*. Summon monsters are distributed as physical deck cards and played from the deck window.
